const fs = require('fs');

const pages = [
    'index', 'products', 'customization', 
    'lead-times', 'catalog', 'about', 'contact',
    'home2', 'blog', 'faq', 'login', 'register',
    'dashboard-user', 'dashboard-admin'
];

pages.forEach(page => {
    const fileName = page + '.html';
    if (!fs.existsSync(fileName)) return;
    
    let content = fs.readFileSync(fileName, 'utf8');

    // Currently, they all use assets/images/hero-bg.jpg
    const newImage = 'assets/images/hero-' + page + '.jpg';
    
    content = content.replace(/assets\/images\/hero-bg\.jpg/g, newImage);

    fs.writeFileSync(fileName, content, 'utf8');
});

console.log('Unique hero images linked.');
