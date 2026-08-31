const fs = require('fs');

const pages = [
    'index.html', 'products.html', 'customization.html', 
    'lead-times.html', 'catalog.html', 'about.html', 'contact.html',
    'home2.html', 'blog.html', 'faq.html', 'login.html', 'register.html'
];

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    // 1. Make the Hero Background Image more visible
    // Change opacity-20 to opacity-60 and dark:opacity-40 to dark:opacity-50
    content = content.replace(/opacity-20 dark:opacity-40/g, 'opacity-60 dark:opacity-70');
    content = content.replace(/opacity-10 dark:opacity-20/g, 'opacity-60 dark:opacity-70');

    // 2. Replace the Gallery placeholders with REAL images!
    const img1 = '<img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover rounded-lg shadow-md" alt="Gift Hamper">';
    const img2 = '<img src="https://images.unsplash.com/photo-1512758117929-1669466c1b3a?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover rounded-lg shadow-md" alt="Tech Accessories">';
    const img3 = '<img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover rounded-lg shadow-md" alt="Stationery">';
    const img4 = '<img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover rounded-lg shadow-md" alt="Branded Apparel">';

    // The current placeholders are:
    // <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-box-open text-4xl text-gray-400"></i></div>
    // Let's replace them specifically.
    
    // We can do a string replace for the whole grid
    const oldGrid = `<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-box-open text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-laptop text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-pen-nib text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-tshirt text-4xl text-gray-400"></i></div>
    </div>`;

    const newGrid = `<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="h-48 rounded-lg flex items-center justify-center transition-transform hover:scale-105">${img1}</div>
      <div class="h-48 rounded-lg flex items-center justify-center transition-transform hover:scale-105">${img2}</div>
      <div class="h-48 rounded-lg flex items-center justify-center transition-transform hover:scale-105">${img3}</div>
      <div class="h-48 rounded-lg flex items-center justify-center transition-transform hover:scale-105">${img4}</div>
    </div>`;

    if(content.includes('fa-box-open text-4xl text-gray-400')) {
        // use regex to replace the old grid, since spacing might be slightly off
        const regex = /<div class="grid grid-cols-2 md:grid-cols-4 gap-4">[\s\S]*?fa-tshirt text-4xl text-gray-400"><\/i><\/div>\s*<\/div>/;
        content = content.replace(regex, newGrid);
    }
    
    // Add images to the "Popular Categories" as well! (which are on index.html)
    if(page === 'index.html' || page === 'home2.html' || page === 'blog.html' || page === 'faq.html') {
        const catOld = `<div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <i class="fas fa-pen-nib text-4xl text-primary mb-4"></i>`;
        
        const catNew = `<div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center overflow-hidden relative group">
        <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity">
        <div class="relative z-10"><i class="fas fa-pen-nib text-4xl text-primary mb-4"></i>`;
        
        content = content.replace(catOld, catNew);
    }

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Images and opacity fixed.');
