const fs = require('fs');

const pages = ['home2.html', 'blog.html', 'faq.html'];
const navContent = fs.readFileSync('nav.txt', 'utf8');

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    // Find where the nav starts and ends. It starts at <div class="fixed top-2 md:top-4...
    // and ends before <!-- 1️⃣ HERO SECTION -->
    
    // We already added <!-- 1️⃣ HERO SECTION --> in these pages
    if (content.includes('<!-- 1️⃣ HERO SECTION -->')) {
        const regex = /<div class="fixed top-2[\s\S]*?(?=<!-- 1️⃣ HERO SECTION -->)/;
        content = content.replace(regex, navContent + '\n');
    }

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Nav fixed in home2, blog, faq.');
