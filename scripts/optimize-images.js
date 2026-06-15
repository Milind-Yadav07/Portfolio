import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const achievementsDir = './public/Achievements';

if (!fs.existsSync(achievementsDir)) {
  console.error(`Directory not found: ${achievementsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(achievementsDir);
console.log(`Found files: ${files.join(', ')}`);

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(achievementsDir, file);
    const outputName = path.basename(file, ext) + '.webp';
    const outputPath = path.join(achievementsDir, outputName);
    
    console.log(`Processing: ${file} -> ${outputName}`);
    
    sharp(inputPath)
      .resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(info => {
        const origSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(2);
        const newSizeKB = (info.size / 1024).toFixed(2);
        const savingsPercent = ((1 - info.size / fs.statSync(inputPath).size) * 100).toFixed(1);
        console.log(`✓ Optimized ${file} (${origSizeKB} KB) -> ${outputName} (${newSizeKB} KB) [Saved ${savingsPercent}%]`);
      })
      .catch(err => {
        console.error(`✗ Error processing ${file}:`, err);
      });
  }
});
