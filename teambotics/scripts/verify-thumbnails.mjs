// Verifies every on-site post resolves to a custom 640x360 thumbnail that
// follows the landing-page standard — no procedural fallbacks, no off-format
// SVGs, and no thumbnail shared by two posts.
// Run: node scripts/verify-thumbnails.mjs
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");

const failures = [];

// 1. Collect slug -> cover from every data file.
const dataFiles = [
  "src/data/static-posts.ts",
  "src/data/executive-overrides.ts",
  "src/data/kind-ones.ts",
];
const posts = [];
for (const rel of dataFiles) {
  const text = await readFile(path.join(root, rel), "utf8");
  for (const chunk of text.split(/\{\s*id:/)) {
    const slug = chunk.match(/slug:\s*'([^']+)'/)?.[1];
    if (!slug) continue;
    const cover = chunk.match(/cover_image_url:\s*(null|'[^']+')/)?.[1] ?? "null";
    posts.push({ slug, cover: cover === "null" ? null : cover.slice(1, -1) });
  }
}

// 2. Collect the custom-thumbnail lookup that covers API-backed posts.
const thumbLib = await readFile(path.join(root, "src/lib/thumbnail.ts"), "utf8");
const lookup = new Map(
  [...thumbLib.matchAll(/'([a-z0-9-]+)'\s*:\s*'(\/thumbnails\/[^']+)'/g)].map((m) => [m[1], m[2]]),
);

// 3. Every post must resolve to a custom file, unique per post.
const seen = new Map();
for (const { slug, cover } of posts) {
  const resolved = cover ?? lookup.get(slug) ?? null;
  if (!resolved) {
    failures.push(`${slug}: no custom thumbnail (cover_image_url is null and slug missing from thumbnail.ts)`);
    continue;
  }
  if (seen.has(resolved)) {
    failures.push(`${slug}: shares thumbnail ${resolved} with ${seen.get(resolved)}`);
  } else {
    seen.set(resolved, slug);
  }
  const file = path.join(root, "public", resolved);
  if (!existsSync(file)) {
    failures.push(`${slug}: missing file ${resolved}`);
    continue;
  }
  const svg = await readFile(file, "utf8");
  if (!svg.includes('viewBox="0 0 640 360"')) failures.push(`${slug}: ${resolved} is not 640x360`);
  if (!svg.includes("titleGrad")) failures.push(`${slug}: ${resolved} missing titleGrad`);
  if (!svg.includes('id="glow')) failures.push(`${slug}: ${resolved} missing glow gradient`);
  if (!svg.includes(">TEAMBOTICS<")) failures.push(`${slug}: ${resolved} missing TEAMBOTICS branding`);
}

// 4. Every lookup entry must point at an existing, on-format file.
for (const [slug, thumb] of lookup) {
  const file = path.join(root, "public", thumb);
  if (!existsSync(file)) {
    failures.push(`thumbnail.ts: ${slug} -> ${thumb} does not exist`);
    continue;
  }
  const svg = await readFile(file, "utf8");
  if (!svg.includes('viewBox="0 0 640 360"')) failures.push(`thumbnail.ts: ${thumb} is not 640x360`);
}

if (failures.length) {
  console.error(`Thumbnail verification failed (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`OK: ${posts.length} posts + ${lookup.size} lookup entries all resolve to unique 640x360 standard thumbnails.`);
