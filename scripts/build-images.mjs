/**
 * One-off / CI helper: generate WebP variants from PNGs in images/.
 * Run: node scripts/build-images.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'images');

const jobs = [
  { src: 'bar1.png', out: 'bar1.webp', maxW: 1200 },
  { src: 'bar2.png', out: 'bar2.webp', maxW: 1200 },
  { src: 'karaoke.png', out: 'karaoke.webp', maxW: 1200 },
  { src: 'nightclub.png', out: 'nightclub.webp', maxW: 1200 },
  { src: 'nightclub1.png', out: 'nightclub1.webp', maxW: 1200 },
  { src: 'nightclub2.png', out: 'nightclub2.webp', maxW: 1200 },
  { src: 'nightclub3.png', out: 'nightclub3.webp', maxW: 1200 },
  { src: 'hero-bg 2.png', out: 'hero-bg.webp', maxW: 1920 },
  { src: 'logo.png', out: 'logo.webp', maxW: 128 },
];

async function main() {
  for (const { src, out, maxW } of jobs) {
    const inputPath = path.join(imagesDir, src);
    const outputPath = path.join(imagesDir, out);
    await sharp(inputPath)
      .resize(maxW, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);
    const [inStat, outStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath),
    ]);
    console.log(`${out}: ${(inStat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB`);
  }

  const logoPath = path.join(imagesDir, 'logo.png');
  await sharp(logoPath)
    .resize(48, 48, { fit: 'cover' })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(imagesDir, 'favicon.png'));
  await sharp(logoPath)
    .resize(180, 180, { fit: 'cover' })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(imagesDir, 'apple-touch-icon.png'));
  console.log('favicon.png + apple-touch-icon.png from logo.png');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
