#!/usr/bin/env node
/**
 * Pulls Barber Stucco's photography off the legacy Homestead site into
 * /public so nothing is hotlinked in production.
 *
 *   npm run assets
 *
 * Safe to re-run: existing files are skipped unless you pass --force.
 * URLs that 404 are reported and skipped. If `sharp` happens to be installed
 * the images are re-encoded to progressive JPEG (max 1600px wide), which is
 * worth doing once before you deploy.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE,
  OWNER,
  PRODUCTS,
  GALLERY,
  slugFor,
} from "../src/data/sources.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");
const FORCE = process.argv.includes("--force");
const CONCURRENCY = 6;

let sharp = null;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  /* optional */
}

const jobs = [
  { url: OWNER.url, out: OWNER.out, max: 1000 },
  ...PRODUCTS.map((p) => ({ ...p, max: 600, keep: true })),
  ...Object.values(GALLERY)
    .flat()
    .map((name) => ({ url: name, out: slugFor(name), max: 1600 })),
];

const stats = { saved: 0, skipped: 0, missing: [], failed: [] };

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function run(job) {
  const dest = path.join(PUBLIC, job.out);
  if (!FORCE && (await exists(dest))) {
    stats.skipped += 1;
    return;
  }
  const url = new URL(job.url, BASE).href;
  let res;
  try {
    res = await fetch(url, { redirect: "follow" });
  } catch (err) {
    stats.failed.push(`${job.url} — ${err.message}`);
    return;
  }
  if (!res.ok) {
    stats.missing.push(`${job.url} — HTTP ${res.status}`);
    return;
  }
  let buf = Buffer.from(await res.arrayBuffer());
  if (sharp && !job.keep) {
    try {
      buf = await sharp(buf)
        .resize({ width: job.max, withoutEnlargement: true })
        .jpeg({ quality: 78, progressive: true, mozjpeg: true })
        .toBuffer();
    } catch {
      /* keep the original bytes */
    }
  }
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, buf);
  stats.saved += 1;
  process.stdout.write(`  ✓ ${job.out}\n`);
}

console.log(
  `Fetching ${jobs.length} assets from ${BASE}${sharp ? " (re-encoding with sharp)" : ""}\n`,
);

const queue = [...jobs];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await run(queue.shift());
  }),
);

console.log(
  `\nSaved ${stats.saved} · skipped ${stats.skipped} (already present)`,
);
if (stats.missing.length) {
  console.log(`\nNot on the old site any more (${stats.missing.length}):`);
  stats.missing.forEach((m) => console.log("  · " + m));
}
if (stats.failed.length) {
  console.log(`\nNetwork errors (${stats.failed.length}):`);
  stats.failed.forEach((m) => console.log("  · " + m));
  console.log(
    "\nIf everything failed, you are probably behind a proxy that blocks\n" +
      "barberstucco.com. Run this from a normal connection.",
  );
}
