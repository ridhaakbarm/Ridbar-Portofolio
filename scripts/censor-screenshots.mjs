/**
 * censor-screenshots.mjs
 *
 * Reads original screenshots from public/screenshots/ (or Screenshoot/),
 * applies Gaussian blur on the regions defined in censor-config.mjs,
 * and writes the censored versions back to public/screenshots/.
 *
 * Usage:  node scripts/censor-screenshots.mjs [--dry-run]
 */

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { censorConfig } from "./censor-config.mjs";

const ROOT = process.cwd();
const SCREENSHOTS_DIR = path.join(ROOT, "public", "screenshots");
const ORIGINALS_DIR = path.join(ROOT, "Screenshoot");
const BACKUP_DIR = path.join(ROOT, "public", "screenshots", ".originals");
const BLUR_SIGMA = 30; // Gaussian blur strength – higher = more opaque
const DRY_RUN = process.argv.includes("--dry-run");

/**
 * Convert proportional region (0-1) to pixel coordinates and clamp to image bounds.
 */
function resolveRegion(region, imgWidth, imgHeight) {
  let x = Math.round(region.x * imgWidth);
  let y = Math.round(region.y * imgHeight);
  let width = Math.round(region.w * imgWidth);
  let height = Math.round(region.h * imgHeight);
  x = Math.max(0, Math.min(x, imgWidth - 1));
  y = Math.max(0, Math.min(y, imgHeight - 1));
  width = Math.min(width, imgWidth - x);
  height = Math.min(height, imgHeight - y);
  if (width <= 0 || height <= 0) return null;
  return { x, y, width, height };
}

async function censorImage(config) {
  const { filename, regions } = config;

  if (!regions || regions.length === 0) {
    return { filename, status: "skipped", reason: "no regions defined" };
  }

  // Try to find the source image – prefer Screenshoot/ originals first
  const origFromScreenshoot = path.join(ORIGINALS_DIR, filename);
  const origFromPublic = path.join(SCREENSHOTS_DIR, filename);
  let sourcePath;

  try {
    await fs.access(origFromPublic);
    sourcePath = origFromPublic;
  } catch {
    try {
      await fs.access(origFromScreenshoot);
      sourcePath = origFromScreenshoot;
    } catch {
      return { filename, status: "error", reason: "source file not found" };
    }
  }

  if (DRY_RUN) {
    return { filename, status: "dry-run", regions: regions.length, source: sourcePath };
  }

  try {
    // Read the source image into a buffer for region extraction
    const sourceBuffer = await fs.readFile(sourcePath);
    const metadata = await sharp(sourceBuffer).metadata();
    const { width: imgWidth, height: imgHeight } = metadata;

    // Back up the original if not already backed up
    const backupPath = path.join(BACKUP_DIR, filename);
    try {
      await fs.access(backupPath);
    } catch {
      await fs.mkdir(BACKUP_DIR, { recursive: true });
      await fs.copyFile(sourcePath, backupPath);
    }

    // Build composite overlays – each is a blurred crop of the region
    const composites = [];

    for (const region of regions) {
      const clamped = resolveRegion(region, imgWidth, imgHeight);
      if (!clamped) continue;

      let overlay;
      if (region.type === "redact") {
        // Solid gray rectangle
        overlay = await sharp({
          create: {
            width: clamped.width,
            height: clamped.height,
            channels: 4,
            background: { r: 180, g: 180, b: 180, alpha: 255 }
          }
        }).png().toBuffer();
      } else {
        // Gaussian blur of the region
        overlay = await sharp(sourceBuffer)
          .extract({ left: clamped.x, top: clamped.y, width: clamped.width, height: clamped.height })
          .blur(BLUR_SIGMA)
          .toBuffer();
      }

      composites.push({
        input: overlay,
        left: clamped.x,
        top: clamped.y,
      });
    }

    if (composites.length === 0) {
      return { filename, status: "skipped", reason: "all regions out of bounds" };
    }

    // Apply all blurred regions as composites
    const outputPath = path.join(SCREENSHOTS_DIR, filename);
    await sharp(sourceBuffer)
      .composite(composites)
      .toFile(outputPath + ".tmp");

    // Atomic replace
    await fs.rename(outputPath + ".tmp", outputPath);

    return {
      filename,
      status: "censored",
      regions: composites.length,
      dimensions: `${imgWidth}x${imgHeight}`,
    };
  } catch (error) {
    return { filename, status: "error", reason: error.message };
  }
}

// ── Main ──────────────────────────────────────
console.log("🔒 Screenshot Censor Tool");
console.log(`   Source: ${SCREENSHOTS_DIR}`);
console.log(`   Config: ${censorConfig.length} files configured`);
console.log(`   Mode:   ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
console.log("");

const results = [];
for (const config of censorConfig) {
  const result = await censorImage(config);
  results.push(result);

  const icon = result.status === "censored" ? "✅"
    : result.status === "skipped" ? "⏭️"
    : result.status === "dry-run" ? "🔍"
    : "❌";
  console.log(`${icon}  ${result.filename} → ${result.status}${result.regions ? ` (${result.regions} regions)` : ""}${result.reason ? ` – ${result.reason}` : ""}`);
}

const censored = results.filter(r => r.status === "censored").length;
const skipped = results.filter(r => r.status === "skipped").length;
const errors = results.filter(r => r.status === "error").length;

console.log("");
console.log(`📊 Summary: ${censored} censored, ${skipped} skipped, ${errors} errors`);
if (errors > 0) {
  console.log("⚠️  Check errors above and fix file paths or region coordinates.");
}
