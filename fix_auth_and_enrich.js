const fs = require('fs');

// 1. Remove background images from login and register
['login.html', 'register.html'].forEach(page => {
    if (fs.existsSync(page)) {
        let content = fs.readFileSync(page, 'utf8');
        // The background image block looks like:
        // <!-- BACKGROUND IMAGE -->
        // <div class="fixed inset-0 z-[-1] pointer-events-none">
        //   <img src="assets/images/hero-...jpg" class="w-full h-full object-cover opacity-60 dark:opacity-70" alt="...">
        // </div>
        content = content.replace(/<!-- BACKGROUND IMAGE -->\s*<div class="fixed inset-0 z-\[-1\] pointer-events-none">\s*<img[^>]+>\s*<\/div>/g, '');
        
        fs.writeFileSync(page, content, 'utf8');
    }
});

// 2. Add rich sections to blog, home2, and about (just to make it even richer)
const richData = {
    'blog.html': `
<!-- 2️⃣ ARTICLES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 text-center uppercase">Latest Insights</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-2">
        <img src="assets/images/tech.jpg" class="w-full h-48 object-cover">
        <div class="p-6">
            <span class="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Technology</span>
            <h3 class="font-bold text-xl mb-3">Top Tech Gifts for 2026</h3>
            <p class="text-gray-500 mb-4">Discover the most requested corporate tech gadgets for remote employees this year.</p>
            <a href="#" class="font-bold text-secondary hover:text-primary">Read More &rarr;</a>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-2">
        <img src="assets/images/book.jpg" class="w-full h-48 object-cover">
        <div class="p-6">
            <span class="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Sustainability</span>
            <h3 class="font-bold text-xl mb-3">Eco-Friendly Merch</h3>
            <p class="text-gray-500 mb-4">How switching to sustainable materials can boost your brand's reputation.</p>
            <a href="#" class="font-bold text-secondary hover:text-primary">Read More &rarr;</a>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-2">
        <img src="assets/images/coffee.jpg" class="w-full h-48 object-cover">
        <div class="p-6">
            <span class="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Culture</span>
            <h3 class="font-bold text-xl mb-3">Retention via Gifting</h3>
            <p class="text-gray-500 mb-4">Case studies showing how curated onboarding kits lower early turnover rates.</p>
            <a href="#" class="font-bold text-secondary hover:text-primary">Read More &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- 3️⃣ TRENDS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-3xl border-l-8 border-secondary shadow-lg">
        <h2 class="text-3xl font-bold mb-6 uppercase">Industry Trends</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">Discover how Fortune 500 companies are utilizing experiential gifts and multi-tiered choice portals to give employees exactly what they want.</p>
        <ul class="space-y-4 font-medium">
            <li><i class="fas fa-check text-primary mr-2"></i> Rise of Custom Sneaker Gifting</li>
            <li><i class="fas fa-check text-primary mr-2"></i> Work-From-Anywhere Survival Kits</li>
            <li><i class="fas fa-check text-primary mr-2"></i> Carbon-Neutral Delivery Options</li>
        </ul>
    </div>
  </div>
</section>
<!-- 4️⃣ SPOTLIGHT -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1">
        <h2 class="text-3xl font-bold mb-6 uppercase">Product Spotlight</h2>
        <h3 class="text-2xl text-primary font-bold mb-4">The Bamboo Charger Hub</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">A deep dive into our best-selling sustainable desk accessory. Crafted from 100% natural bamboo, this 15W wireless charger doubles as a sleek pen holder.</p>
        <button class="bg-dark-bg dark:bg-white text-white dark:text-dark-bg px-6 py-2 rounded-full font-bold">View Product</button>
    </div>
    <div class="flex-1">
        <img src="assets/images/camera.jpg" class="rounded-2xl shadow-xl w-full h-64 object-cover">
    </div>
  </div>
</section>
<!-- 5️⃣ NEWSLETTER -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-primary/10 p-10 rounded-3xl border border-primary/20">
        <i class="fas fa-paper-plane text-4xl text-primary mb-4"></i>
        <h2 class="text-3xl font-bold mb-6 uppercase">Subscribe to The Nest</h2>
        <p class="text-gray-600 mb-8">Get weekly insights, gifting ideas, and exclusive bulk discounts delivered directly to your inbox.</p>
        <div class="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input type="email" placeholder="Email Address" class="flex-1 p-4 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary">
            <button class="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary transition-colors">Join Now</button>
        </div>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Read Our Full Archive</h2>
  <button class="bg-secondary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-primary transition-colors">Load More Articles</button>
</section>`,

    'home2.html': `
<!-- 2️⃣ ENTERPRISE -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Enterprise Portals</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <h3 class="text-2xl font-bold mb-4">White-Labeled Company Stores</h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">We build dedicated, fully branded portals for your organization. Allocate budgets, track inventory, and let your employees select their own gifts securely.</p>
            <ul class="space-y-3 font-medium">
                <li><i class="fas fa-check-circle text-primary mr-2"></i> SSO Integration (Okta, Azure)</li>
                <li><i class="fas fa-check-circle text-primary mr-2"></i> Department-Level Budgets</li>
                <li><i class="fas fa-check-circle text-primary mr-2"></i> Real-time Global Inventory</li>
            </ul>
        </div>
        <div>
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-8 border-primary">
                <i class="fas fa-store-alt text-6xl text-primary mb-6"></i>
                <h4 class="text-xl font-bold mb-2">Portal Setup</h4>
                <p class="text-gray-500">Deployed within 14 days, completely customized to your brand guidelines.</p>
            </div>
        </div>
    </div>
  </div>
</section>
<!-- 3️⃣ INTEGRATIONS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase">API Integrations</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl shadow flex items-center justify-center flex-col gap-2 hover:shadow-lg transition-shadow">
            <i class="fas fa-users text-4xl text-secondary"></i><span class="font-bold">Workday</span>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl shadow flex items-center justify-center flex-col gap-2 hover:shadow-lg transition-shadow">
            <i class="fas fa-leaf text-4xl text-secondary"></i><span class="font-bold">BambooHR</span>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl shadow flex items-center justify-center flex-col gap-2 hover:shadow-lg transition-shadow">
            <i class="fas fa-cloud text-4xl text-secondary"></i><span class="font-bold">Salesforce</span>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl shadow flex items-center justify-center flex-col gap-2 hover:shadow-lg transition-shadow">
            <i class="fas fa-plug text-4xl text-secondary"></i><span class="font-bold">Custom REST API</span>
        </div>
    </div>
  </div>
</section>
<!-- 4️⃣ CASE STUDIES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Success Stories</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-8 bg-white dark:bg-gray-800 shadow-xl rounded-3xl border-l-4 border-primary">
        <h3 class="font-bold text-2xl text-primary mb-2">TechCorp Global</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Automated anniversary gifts for 10,000+ employees across 20 countries using our HRIS integration.</p>
        <span class="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Reduced Admin Time by 80%</span>
      </div>
      <div class="p-8 bg-white dark:bg-gray-800 shadow-xl rounded-3xl border-l-4 border-secondary">
        <h3 class="font-bold text-2xl text-secondary mb-2">FinBank Inc.</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Streamlined client holiday hampers globally, ensuring compliance and uniform quality.</p>
        <span class="text-sm font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full">Shipped to 45 Countries</span>
      </div>
    </div>
  </div>
</section>
<!-- 5️⃣ KITS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 shadow-md">
        <div class="flex-1">
            <h2 class="text-3xl font-bold mb-4 uppercase">Automated Onboarding Kits</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">Welcome new hires with curated tech and apparel boxes delivered directly to their homes the day they start. Triggered automatically by your HR system.</p>
            <a href="contact.html" class="text-primary font-bold hover:underline">Learn more about Kits &rarr;</a>
        </div>
        <div class="flex-1">
            <img src="assets/images/tech.jpg" class="rounded-xl shadow-lg w-full">
        </div>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Transform Your Gifting</h2>
  <a href="contact.html" class="bg-secondary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-primary transition-colors">Request Enterprise Demo</a>
</section>`
};

Object.keys(richData).forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    const startStringRegex = /<!-- 2️⃣ .*? -->/i;
    const matchStart = content.match(startStringRegex);
    
    if (matchStart) {
        const indexStart = matchStart.index;
        const indexEnd = content.indexOf('<!-- FOOTER -->');
        
        if (indexEnd !== -1 && indexEnd > indexStart) {
            const before = content.substring(0, indexStart);
            const after = content.substring(indexEnd); 
            content = before + richData[page] + '\n' + after;
        } 
    }
    
    fs.writeFileSync(page, content, 'utf8');
});

console.log('Fixed auth pages and enriched blog/home2.');
