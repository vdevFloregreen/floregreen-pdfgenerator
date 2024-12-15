const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  let gitTag = '5.2.0'; // Default version

  try {
    // Try to get the short commit hash as a fallback
    const commitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    
    if (commitHash) {
      gitTag = `5.2.0-${commitHash}`;
    }
  } catch (gitError) {
    console.warn('Could not retrieve Git commit hash, using default version', gitError);
  }

  const filePath = path.join(__dirname, 'src/constants.ts');

  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/export const PDFME_VERSION = '.*';/, `export const PDFME_VERSION = '${gitTag}';`);

  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`Replaced PDFME_VERSION with '${gitTag}' in ${filePath}`);
} catch (error) {
  console.error('Error replacing PDFME_VERSION:', error);
  process.exit(1);
}