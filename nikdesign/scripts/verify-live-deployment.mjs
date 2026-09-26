import { appendFile, readFile, readdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, "../dist");
const postsDir = path.join(distDir, "posts");
const args = process.argv.slice(2);
const deploymentFlagIndex = args.indexOf("--vercel-deployment");
const deploymentUrl =
  deploymentFlagIndex >= 0 ? args[deploymentFlagIndex + 1]?.replace(/\/$/, "") : null;

if (deploymentFlagIndex >= 0) args.splice(deploymentFlagIndex, 2);

const bases = args.map((value) => value.replace(/\/$/, ""));
const maxAttempts = Number(process.env.LIVE_VERIFY_ATTEMPTS ?? 12);
const retryDelayMs = Number(process.env.LIVE_VERIFY_DELAY_MS ?? 5000);
const execFileAsync = promisify(execFile);

if (bases.length === 0 && !deploymentUrl) {
  console.error(
    "Usage: node scripts/verify-live-deployment.mjs [--vercel-deployment <url>] <public-url> [additional-public-url]",
  );
  process.exit(1);
}

const postSlugs = (await readdir(postsDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const routes = ["/", ...postSlugs.map((slug) => `/posts/${slug}/`)];
const localHomepage = await readFile(path.join(distDir, "index.html"), "utf8");
const homepagePostRoutes = routes.filter(
  (route) => route !== "/" && localHomepage.includes(route),
);

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const expectedTitleTags = new Map();

for (const route of routes) {
  const builtPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route, "index.html");
  const html = await readFile(builtPath, "utf8");
  const titleTag = html.match(/<title[^>]*>[\s\S]*?<\/title>/i)?.[0];

  if (!titleTag) {
    console.error(`Generated route is missing a title tag: ${builtPath}`);
    process.exit(1);
  }

  expectedTitleTags.set(route, titleTag);
}

function checkHtml(route, html, failures) {
  const expectedTitleTag = expectedTitleTags.get(route);

  if (!html.includes(expectedTitleTag)) {
    failures.push(`${route} did not return the generated page title`);
  }
}

async function checkBase(base) {
  const failures = [];
  let homepageHtml = "";

  for (const route of routes) {
    const response = await fetch(`${base}${route}`, { redirect: "follow" });

    if (!response.ok) {
      failures.push(`${route} returned HTTP ${response.status}`);
      continue;
    }

    const html = await response.text();
    checkHtml(route, html, failures);

    if (route === "/") homepageHtml = html;
  }

  for (const route of homepagePostRoutes) {
    if (!homepageHtml.includes(route)) {
      failures.push(`homepage is missing its generated link to ${route}`);
    }
  }

  return failures;
}

async function checkProtectedDeployment() {
  const failures = [];
  let homepageHtml = "";
  const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";
  const vercelPackage = `vercel@${process.env.VERCEL_CLI_VERSION ?? "58.4.4"}`;

  for (const route of routes) {
    const commandArgs = ["--yes", vercelPackage];

    commandArgs.push("curl", route, "--deployment", deploymentUrl);
    commandArgs.push("--", "--silent", "--fail");

    try {
      const { stdout } = await execFileAsync(npxCommand, commandArgs, {
        env: process.env,
        maxBuffer: 20 * 1024 * 1024,
        shell: process.platform === "win32",
      });
      checkHtml(route, stdout, failures);

      if (route === "/") homepageHtml = stdout;
    } catch (error) {
      failures.push(`${route} failed through authenticated Vercel curl: ${error.message}`);
    }
  }

  for (const route of homepagePostRoutes) {
    if (!homepageHtml.includes(route)) {
      failures.push(`homepage is missing its generated link to ${route}`);
    }
  }

  return failures;
}

async function verifyTarget(label, check, attempts = maxAttempts) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const failures = await check();

      if (failures.length === 0) {
        console.log(`✓ Verified ${routes.length} generated routes at ${label}`);
        return true;
      }

      console.error(
        `Attempt ${attempt}/${attempts} failed for ${label}: ${failures.join("; ")}`,
      );
    } catch (error) {
      console.error(
        `Attempt ${attempt}/${attempts} failed for ${label}: ${error.message}`,
      );
    }

    if (attempt < attempts) await sleep(retryDelayMs);
  }

  return false;
}

for (const base of bases) {
  if (!(await verifyTarget(base, () => checkBase(base)))) process.exitCode = 1;
}

if (deploymentUrl) {
  const attempts = Number(process.env.VERCEL_VERIFY_ATTEMPTS ?? 2);
  const label = `${deploymentUrl} (authenticated)`;

  if (!(await verifyTarget(label, checkProtectedDeployment, attempts))) {
    process.exitCode = 1;
  }
}

if (process.env.GITHUB_OUTPUT) {
  await appendFile(
    process.env.GITHUB_OUTPUT,
    `route_count=${routes.length}\npost_count=${postSlugs.length}\n`,
  );
}
