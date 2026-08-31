const fs = require('fs');

const pages = [
    'index.html', 'products.html', 'customization.html', 
    'lead-times.html', 'catalog.html', 'about.html', 'contact.html'
];

function getSections(pageName) {
    let title1 = "Premium Corporate Gifting";
    let desc1 = "Custom merchandise, bulk orders, and corporate branding.";
    
    if(pageName === 'products.html') { title1 = "Our Products"; desc1 = "Stationery, Tech, Hampers, Apparel, Trophies."; }
    if(pageName === 'customization.html') { title1 = "Customization"; desc1 = "Your brand, your way. Upload your files."; }
    if(pageName === 'lead-times.html') { title1 = "Lead Times"; desc1 = "Fast, reliable, and transparent production timelines."; }
    if(pageName === 'catalog.html') { title1 = "Catalog"; desc1 = "Download our complete B2B gifting collection."; }
    if(pageName === 'about.html') { title1 = "About Us"; desc1 = "The premier corporate gifting partner."; }
    if(pageName === 'contact.html') { title1 = "Contact Us"; desc1 = "Get in touch with our gifting specialists."; }

    return `
<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 md:pt-[150px] md:pb-24 overflow-hidden bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">${title1}</h1>
    <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">${desc1}</p>
    <a href="#section2" class="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-secondary transition-colors">Discover More</a>
  </div>
</section>

<!-- 2️⃣ FEATURES / HIGHLIGHTS -->
<section id="section2" class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12 uppercase">Why Choose Us</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-secondary">
        <i class="fas fa-gem text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Premium Quality</h3>
        <p class="text-gray-600 dark:text-gray-400">Only the highest quality materials for your corporate needs.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-secondary">
        <i class="fas fa-paint-brush text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Full Customization</h3>
        <p class="text-gray-600 dark:text-gray-400">We make your brand stand out with bespoke designs.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-secondary">
        <i class="fas fa-shipping-fast text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Global Shipping</h3>
        <p class="text-gray-600 dark:text-gray-400">Reliable delivery to all your office locations worldwide.</p>
      </div>
    </div>
  </div>
</section>

<!-- 3️⃣ PROCESS / HOW IT WORKS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Our Process</h2>
    <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
      <div class="flex-1">
        <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
        <h3 class="font-bold mb-2">Select Items</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Choose from our wide catalog.</p>
      </div>
      <div class="flex-1">
        <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
        <h3 class="font-bold mb-2">Upload Branding</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Provide your logo and artwork.</p>
      </div>
      <div class="flex-1">
        <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
        <h3 class="font-bold mb-2">Approve Proof</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Review our digital mockups.</p>
      </div>
      <div class="flex-1">
        <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
        <h3 class="font-bold mb-2">Delivery</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Receive your custom products.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4️⃣ CLIENTS / TESTIMONIALS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Trusted By Industry Leaders</h2>
    <div class="flex flex-wrap justify-center gap-12 items-center opacity-80 mb-12">
      <div class="text-2xl font-bold text-gray-500"><i class="fab fa-microsoft"></i> Microsoft</div>
      <div class="text-2xl font-bold text-gray-500"><i class="fab fa-google"></i> Google</div>
      <div class="text-2xl font-bold text-gray-500"><i class="fab fa-amazon"></i> Amazon</div>
      <div class="text-2xl font-bold text-gray-500">Infosys</div>
    </div>
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border-l-4 border-primary italic">
      "BrandNest has revolutionized our corporate gifting. The quality and attention to detail are unmatched. Our employees loved the personalized tech hampers."
      <div class="mt-4 font-bold text-primary">- Rajesh K., Infosys</div>
    </div>
  </div>
</section>

<!-- 5️⃣ GALLERY / SHOWCASE -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Gifting Showcase</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-box-open text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-laptop text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-pen-nib text-4xl text-gray-400"></i></div>
      <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"><i class="fas fa-tshirt text-4xl text-gray-400"></i></div>
    </div>
  </div>
</section>

<!-- 6️⃣ CALL TO ACTION -->
<section class="py-16 bg-primary text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl font-bold mb-6 uppercase tracking-tight">Ready to Elevate Your Brand?</h2>
    <p class="text-xl mb-10 text-white/80">Get started today with our comprehensive B2B gifting solutions.</p>
    <div class="flex justify-center gap-4">
      <a href="dashboard-user.html" class="bg-secondary text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors">Start Bulk Order</a>
      <a href="contact.html" class="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors">Contact Sales</a>
    </div>
  </div>
</section>
<!-- FOOTER -->`;
}

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    const replacement = getSections(page);
    content = content.replace(/<!-- 1.*? HERO SECTION -->[\s\S]*?<!-- FOOTER -->/, replacement);
    
    // Fallback if not found
    if (!content.includes('6️⃣ CALL TO ACTION')) {
        // Try to replace main if it has a different format
        content = content.replace(/<main[\s\S]*?<\/main>/, '<main>' + replacement + '</main>');
    }

    fs.writeFileSync(page, content, 'utf8');
});

console.log('Sections update complete.');
