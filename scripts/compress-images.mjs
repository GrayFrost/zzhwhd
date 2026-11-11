import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const preview = args.has('--preview');
const root = path.resolve('public');
const previewRoot = path.resolve('.image-preview');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const minimumSaving = 1024;
const concurrency = Math.max(1, Math.min(4, Number(process.env.IMAGE_CONCURRENCY) || 4));

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function compressImage(file) {
  const extension = path.extname(file).toLowerCase();
  const input = await readFile(file);
  const image = sharp(input, { animated: true });
  const metadata = await image.metadata();

  if ((metadata.pages ?? 1) > 1) {
    return { file, originalSize: input.length, skipped: 'animated image' };
  }

  let pipeline = image.rotate();
  switch (extension) {
    case '.jpg':
    case '.jpeg':
      pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
      break;
    case '.png':
      // Keep PNG lossless. Photographic PNGs generally get a much larger saving
      // when converted to WebP/AVIF, but that would require updating references.
      pipeline = pipeline.png({ compressionLevel: 9, effort: 10 });
      break;
    case '.webp':
      pipeline = pipeline.webp({ quality: 82, effort: 6 });
      break;
    case '.avif':
      pipeline = pipeline.avif({ quality: 55, effort: 6 });
      break;
  }

  const output = await pipeline.toBuffer();
  const saved = input.length - output.length;
  if (saved < minimumSaving) {
    return { file, originalSize: input.length, skipped: 'no meaningful saving' };
  }

  if (preview) {
    const previewFile = path.join(previewRoot, path.relative(root, file));
    await mkdir(path.dirname(previewFile), { recursive: true });
    await writeFile(previewFile, output);
  } else if (!dryRun) {
    await writeFile(file, output);
  }

  return { file, originalSize: input.length, outputSize: output.length, saved };
}

async function main() {
  await stat(root);
  const files = await findImages(root);
  let nextIndex = 0;
  let completed = 0;
  const results = [];

  const mode = dryRun ? 'dry-run' : preview ? `preview -> ${previewRoot}` : 'in-place compression';
  console.log(`Found ${files.length} images. Starting ${mode} with ${concurrency} workers...`);
  console.log('PNG lossless compression is CPU-intensive; progress will update every 10 images.\n');

  async function worker() {
    while (nextIndex < files.length) {
      const file = files[nextIndex++];
      try {
        results.push(await compressImage(file));
      } catch (error) {
        results.push({ file, error: error instanceof Error ? error.message : String(error) });
      }
      completed += 1;
      if (completed % 10 === 0 || completed === files.length) {
        console.log(`[${completed}/${files.length}] processed`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  const changed = results.filter((result) => result.saved);
  const failed = results.filter((result) => result.error);
  const originalBytes = changed.reduce((sum, result) => sum + result.originalSize, 0);
  const savedBytes = changed.reduce((sum, result) => sum + result.saved, 0);

  for (const result of changed.sort((a, b) => b.saved - a.saved).slice(0, 20)) {
    const verb = dryRun ? 'Would compress' : preview ? 'Previewed' : 'Compressed';
    console.log(`${verb} ${path.relative(root, result.file)}: ${formatBytes(result.originalSize)} -> ${formatBytes(result.outputSize)} (-${formatBytes(result.saved)})`);
  }

  for (const result of failed) {
    console.error(`Failed ${path.relative(root, result.file)}: ${result.error}`);
  }

  console.log(`\nScanned ${files.length} images; ${dryRun ? 'would optimize' : preview ? 'previewed' : 'optimized'} ${changed.length}.`);
  console.log(`Affected size: ${formatBytes(originalBytes)} -> ${formatBytes(originalBytes - savedBytes)}; saved ${formatBytes(savedBytes)}.`);
  if (preview) console.log(`Open ${previewRoot} and compare it with ${root}. Original images were not changed.`);

  if (failed.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
