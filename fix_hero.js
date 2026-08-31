const fs = require('fs');

const pages = [
    'index.html', 'products.html', 'customization.html', 
    'lead-times.html', 'catalog.html', 'about.html', 'contact.html',
    'home2.html', 'blog.html', 'faq.html'
];

const newHeroBg = `https://images.unsplash.com/photo-1512758117929-1669466c1b3a?auto=format&fit=crop&w=2000&q=80`;

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    // Fix the broken image URL
    content = content.replace(/https:\/\/images.unsplash.com\/photo-1556761175-5973dc0f32b7[^\"]*/g, newHeroBg);

    // Make the hero section fit to viewport
    // Find: <section class="relative pt-[120px] pb-16 md:pt-[150px] md:pb-24 overflow-hidden bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
    // Add: min-h-screen flex items-center justify-center
    content = content.replace(
        /class="relative pt-\[120px\] pb-16 md:pt-\[150px\] md:pb-24 overflow-hidden/g,
        'class="relative min-h-screen flex items-center justify-center pt-[120px] pb-16 overflow-hidden'
    );
    
    // Also some pages might have it slightly different
    content = content.replace(
        /class="relative pt-\[120px\] pb-16 overflow-hidden"/g,
        'class="relative min-h-screen flex items-center justify-center pt-[120px] pb-16 overflow-hidden"'
    );
    
    // Also fix the layout inside the hero to ensure it centers correctly within flex
    // We can just add w-full to the inner container
    content = content.replace(
        /class="relative z-10 max-w-7xl mx-auto/g,
        'class="relative z-10 w-full max-w-7xl mx-auto'
    );
    
    // For index.html, home2.html, etc., the inner div is:
    // <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    content = content.replace(
        /class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center/g,
        'class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
    );

    fs.writeFileSync(page, content, 'utf8');
});

// Also fix the background image in dash/auth pages if they were broken
const extraPages = ['login.html', 'register.html', 'dashboard-user.html', 'dashboard-admin.html'];
extraPages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    content = content.replace(/https:\/\/images.unsplash.com\/photo-1556761175-5973dc0f32b7[^\"]*/g, newHeroBg);
    fs.writeFileSync(page, content, 'utf8');
});

console.log('Hero sections updated to fit viewport and image URL fixed.');
