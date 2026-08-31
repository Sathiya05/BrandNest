const fs = require('fs');

['login.html', 'register.html'].forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    // 1. Text Replacements
    content = content.replace(/IronPulse/gi, 'BrandNest');
    content = content.replace(/Iron<span class="text-primary">Pulse<\/span>/g, 'Brand<span class="text-primary">Nest</span>');
    content = content.replace(/fa-dumbbell/g, 'fa-gift');
    
    // 2. Headings
    content = content.replace(/START YOUR TRANSFORMATION/gi, 'PREMIUM CORPORATE GIFTING');

    // 3. Color Replacements (Red -> Deep Teal Blue, Orange -> Elegant Gold)
    content = content.replace(/#EF4444/gi, '#1F4E5F');
    content = content.replace(/#F97316/gi, '#D4A373');

    // Also update any RGB values in drop-shadows if they exist
    // Currently it has drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)] (239,68,68 is #EF4444)
    // #1F4E5F is rgb(31, 78, 95)
    content = content.replace(/rgba\(239,\s*68,\s*68/g, 'rgba(31, 78, 95');
    
    // Also update shadow-primary/30 if it exists
    
    // Any remaining instances of "IronPulse" with different case?
    content = content.replace(/IRONPULSE/g, 'BRANDNEST');

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Auth branding fixed.');
