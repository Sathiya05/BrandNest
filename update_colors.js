const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(page => {
    let content = fs.readFileSync(page, 'utf8');
    
    // Replace primary color from Red to Deep Teal Blue
    content = content.replace(/#EF4444/gi, '#1F4E5F');
    // Replace secondary color from Orange to Elegant Gold / Warm Sand
    content = content.replace(/#F97316/gi, '#D4A373');

    fs.writeFileSync(page, content, 'utf8');
});
console.log('Color update complete.');
