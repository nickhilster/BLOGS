import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, "../dist/posts");
const postsContentDir = path.resolve(scriptDir, "../src/content/posts");

const diagramMarkerClasses = [
  "flow-diagram",
  "tree-diagram",
  "gauge-diagram",
  "concentric-diagram",
  "lineage-row",
  "comparison-diagram",
];

const diagramOptionalPosts = new Set([
  "care-enough-to-relinquish-control",
  "from-memento-to-the-odyssey",
  "mr-anderson",
  "software-is-a-building",
  "sweden-taught-music-like-a-language",
  "the-dance-floor-is-a-sacred-place",
  "the-doorway-and-the-destination",
  "what-our-ancestors-leave-in-art",
]);

const expectedPosts = [
  {
    slug: "frontier-models-need-drivers",
    title: "Frontier Models Need Drivers",
  },
  {
    slug: "what-makes-an-ai-product-a-secret-sauce",
    title: "What Makes an AI Product a Secret Sauce?",
  },
];

let failed = false;

for (const { slug, title } of expectedPosts) {
  const builtPath = path.join(distDir, slug, "index.html");

  if (!existsSync(builtPath)) {
    console.error(`Missing built post output: ${builtPath}`);
    failed = true;
    continue;
  }

  const html = await readFile(builtPath, "utf8");

  if (!html.includes(title)) {
    console.error(
      `Built post exists but is missing expected title "${title}": ${builtPath}`,
    );
    failed = true;
    continue;
  }

  console.log(`✓ Verified: ${slug}`);
}

const postSlugs = (await readdir(postsContentDir))
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.replace(/\.mdx$/, ""));

for (const slug of postSlugs) {
  const builtPath = path.join(distDir, slug, "index.html");

  if (!existsSync(builtPath)) {
    console.error(`Missing built post output: ${builtPath}`);
    failed = true;
    continue;
  }

  const html = await readFile(builtPath, "utf8");
  let postFailed = false;

  if (!html.includes("--font-display")) {
    console.error(`Post is missing a per-post identity style block: ${builtPath}`);
    failed = true;
    postFailed = true;
  }

  const hasDiagram = diagramMarkerClasses.some((className) => html.includes(`class="${className}`));
  if (!hasDiagram && !diagramOptionalPosts.has(slug)) {
    console.error(`Post is missing a diagram (expected one of: ${diagramMarkerClasses.join(", ")}): ${builtPath}`);
    failed = true;
    postFailed = true;
  }

  if (!postFailed) {
    const visualStatus = hasDiagram ? "identity + diagram" : "identity (diagram optional)";
    console.log(`✓ Verified ${visualStatus}: ${slug}`);
  }
}

if (failed) process.exit(1);
