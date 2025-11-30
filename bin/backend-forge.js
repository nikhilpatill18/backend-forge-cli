#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const args = process.argv.slice(2);
const targetName = args[0] || 'my-backend';
const targetDir = path.join(process.cwd(), targetName);
const templateDir = path.join(__dirname, '..', 'template');

(async () => {
  try {
    if (fs.existsSync(targetDir)) {
      console.error('❌ Target folder already exists:', targetDir);
      process.exit(1);
    }
    await fs.copy(templateDir, targetDir);
    console.log('📦 Template copied to', targetDir);
    console.log('👉 Run: cd', targetName, '&& npm install');
    console.log('🎉 Done!');
  } catch (err) {
    console.error('❌ Error creating project:', err);
    process.exit(1);
  }
})();
