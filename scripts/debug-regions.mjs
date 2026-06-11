/**
 * Debug tool – draws red outlines on regions to verify positioning.
 * Usage: node scripts/debug-regions.mjs <filename>
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { censorConfig } from "./censor-config.mjs";

const ROOT = process.cwd();
const filename = process.argv[2];
if (!filename) { console.log("Usage: node scripts/debug-regions.mjs <filename>"); process.exit(1); }

const config = censorConfig.find(c => c.filename === filename);
if (!config) { console.log(`No config for ${filename}`); process.exit(1); }

const srcPath = path.join(ROOT, "public", "screenshots", filename);
const buf = await fs.readFile(srcPath);
const meta = await sharp(buf).metadata();
console.log(`Image: ${meta.width}x${meta.height}`);

const composites = [];
for (const r of config.regions) {
  const x = Math.round(r.x * meta.width);
  const y = Math.round(r.y * meta.height);
  const w = Math.round(r.w * meta.width);
  const h = Math.round(r.h * meta.height);
  console.log(`Region: x=${x} y=${y} w=${w} h=${h}`);
  
  // Create a semi-transparent red overlay
  const overlay = await sharp({
    create: {
      width: w, height: h, channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 80 }
    }
  }).png().toBuffer();
  
  composites.push({ input: overlay, left: x, top: y });
}

const outPath = path.join(ROOT, "public", "screenshots", `debug-${filename}`);
await sharp(buf).composite(composites).toFile(outPath);
console.log(`Saved: ${outPath}`);
