// scripts/fix-svgs.js
import fs from 'fs';
import path from 'path';

// folder containing your SVGs
const svgFolder = path.resolve('./src/assets/svg');

function fixSvgs() {
  const files = fs.readdirSync(svgFolder).filter(f => f.endsWith('.svg'));
  if (files.length === 0) {
    console.log('No SVG files found.');
    return;
  }

  files.forEach(file => {
    const filePath = path.join(svgFolder, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Remove all width and height attributes
    content = content.replace(/\swidth="[^"]*"/g, '');
    content = content.replace(/\sheight="[^"]*"/g, '');

    // Add viewBox if missing
    const viewBoxMatch = content.match(/viewBox="[^"]*"/);
    if (!viewBoxMatch) {
      // Try to infer from previous width/height (fallback to 32)
      const widthMatch = content.match(/<svg[^>]*width="([\d.]+)"/);
      const heightMatch = content.match(/<svg[^>]*height="([\d.]+)"/);
      const width = widthMatch ? widthMatch[1] : '32';
      const height = heightMatch ? heightMatch[1] : '32';
      content = content.replace(
        /<svg/,
        `<svg viewBox="0 0 ${width} ${height}"`
      );
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${file}`);
  });
}

fixSvgs();