const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetDirs = [
  'src/assets/project',
  'src/assets/certificate',
  'src/assets/hackathon',
  'src/assets/profile'
];

const targetWidths = [300, 600, 1000];

async function optimizeImages() {
  for (const dir of assetDirs) {
    const fullPath = path.resolve(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      console.log(`Directory not found: ${fullPath}`);
      continue;
    }

    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (!/\.(png|jpe?g)$/i.test(file)) continue;
      // Skip already optimized small versions
      if (/-[0-9]+w\.webp$/i.test(file)) continue;

      const filePath = path.join(fullPath, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);

      console.log(`Optimizing ${file}...`);

      for (const width of targetWidths) {
        const outputFileName = `${baseName}-${width}w.webp`;
        const outputPath = path.join(fullPath, outputFileName);

        try {
          await sharp(filePath)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          console.log(`  Generated ${outputFileName}`);
        } catch (err) {
          console.error(`  Error generating ${outputFileName}: ${err.message}`);
        }
      }
      
      // Also generate a high-quality main webp version if it doesn't exist
      const mainWebp = `${baseName}.webp`;
      const mainWebpPath = path.join(fullPath, mainWebp);
      if (!fs.existsSync(mainWebpPath)) {
        try {
          await sharp(filePath)
            .webp({ quality: 85 })
            .toFile(mainWebpPath);
          console.log(`  Generated ${mainWebp}`);
        } catch (err) {
          console.error(`  Error generating ${mainWebp}: ${err.message}`);
        }
      }
    }
  }
}

optimizeImages().catch(err => console.error(err));
