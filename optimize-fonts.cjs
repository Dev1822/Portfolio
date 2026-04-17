const ttf2woff2 = require('ttf2woff2').default;
const fs = require('fs');
const path = require('path');

const fontsDir = 'public/fonts';

async function optimizeFonts() {
  const fullPath = path.resolve(process.cwd(), fontsDir);
  if (!fs.existsSync(fullPath)) {
    console.log(`Directory not found: ${fullPath}`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    if (!/\.ttf$/i.test(file)) continue;

    const filePath = path.join(fullPath, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(fullPath, `${baseName}.woff2`);

    console.log(`Converting ${file} to woff2...`);

    try {
      const input = fs.readFileSync(filePath);
      const output = ttf2woff2(input);
      fs.writeFileSync(outputPath, output);
      console.log(`  Generated ${baseName}.woff2`);
    } catch (err) {
      console.error(`  Error converting ${file}: ${err.message}`);
    }
  }
}

optimizeFonts().catch(err => console.error(err));
