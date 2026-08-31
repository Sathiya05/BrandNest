const fs = require('fs');

const pages = [
    'index.html', 'products.html', 'customization.html', 
    'lead-times.html', 'catalog.html', 'about.html', 'contact.html',
    'home2.html', 'blog.html', 'faq.html', 'login.html', 'register.html',
    'dashboard-user.html', 'dashboard-admin.html'
];

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    // Hero background
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1512758117929-1669466c1b3a\?auto=format&fit=crop&w=2000&q=80/g, 'assets/images/hero-bg.jpg');
    
    // Sometimes URLs might have been slightly different or left over
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1556761175-5973dc0f32b7[^\"]*/g, 'assets/images/hero-bg.jpg');
    
    // Gallery images
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1549465220-1a8b9238cd48[^\"]*/g, 'assets/images/tech.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1512758117929-1669466c1b3a[^\"]*/g, 'assets/images/book.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1586075010923-2dd4570fb338[^\"]*/g, 'assets/images/camera.jpg');
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1521572163474-6864f9cf17ab[^\"]*/g, 'assets/images/coffee.jpg');

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Local images linked.');
