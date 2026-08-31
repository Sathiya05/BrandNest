const fs = require('fs');

const pages = [
    'index.html', 'products.html', 'customization.html', 
    'lead-times.html', 'catalog.html', 'about.html', 'contact.html',
    'home2.html', 'blog.html', 'faq.html'
];

if (!fs.existsSync('nav.txt')) {
    console.error('nav.txt not found');
    process.exit(1);
}
const navContent = fs.readFileSync('nav.txt', 'utf8');

const heroBg = `
  <!-- BACKGROUND IMAGE -->
  <div class="absolute inset-0 z-0">
    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-20 dark:opacity-40" alt="Corporate Gifting Background">
  </div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
`;

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    // 1. Replace Navigation
    // We need to replace from <!-- NAVIGATION --> up to the next section (like <!-- 1️⃣ HERO SECTION -->)
    // Some pages might not have <!-- 1️⃣ HERO SECTION --> exactly, they might have <!-- HERO SECTION --> or just a <section>
    
    // Since we know all these pages now have <!-- 1️⃣ HERO SECTION --> (because of our previous scripts), we can do:
    if (content.includes('<!-- NAVIGATION -->') && content.includes('<!-- 1️⃣ HERO SECTION -->')) {
        const regex = /<!-- NAVIGATION -->[\s\S]*?(?=<!-- 1️⃣ HERO SECTION -->)/;
        content = content.replace(regex, navContent + '\n');
    }

    // 2. Add Hero Section Image
    // We look for the hero section wrapper.
    // In our scripts we set it to:
    // <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    // We can replace that specific div with our heroBg which includes the background image.
    
    if (content.includes('class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in"')) {
        // To avoid replacing all such divs (if there are multiple), we just replace the first occurrence after HERO SECTION
        let parts = content.split('<!-- 1️⃣ HERO SECTION -->');
        if (parts.length > 1) {
            parts[1] = parts[1].replace(
                '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">',
                heroBg
            );
            content = parts.join('<!-- 1️⃣ HERO SECTION -->');
        }
    } else if (content.includes('<div class="max-w-7xl mx-auto px-4 text-center">')) {
        // some pages had a slightly different div
        let parts = content.split('<!-- 1️⃣ HERO SECTION -->');
        if (parts.length > 1) {
            parts[1] = parts[1].replace(
                '<div class="max-w-7xl mx-auto px-4 text-center">',
                heroBg
            );
            content = parts.join('<!-- 1️⃣ HERO SECTION -->');
        }
    }

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Nav and hero updated.');
