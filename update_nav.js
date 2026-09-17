const fs = require('fs');
const indexStr = fs.readFileSync('index.html', 'utf8');
const navRegex = /<!-- NAVIGATION -->[\s\S]*?<\/nav>\r?\n  <\/div>/;
const match = indexStr.match(navRegex);
if (!match) {
  console.log('Nav block not found in index.html');
  process.exit(1);
}
const navBlock = match[0];
const files = ['blog.html', 'catalog.html', 'contact.html', 'customization.html', 'faq.html'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<!-- NAVIGATION -->[\s\S]*?<\/nav>\r?\n  <\/div>/, navBlock);
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
}
