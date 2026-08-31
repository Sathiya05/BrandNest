const fs = require('fs');
const path = require('path');

const pages = ['index.html', 'products.html', 'customization.html', 'lead-times.html', 'catalog.html'];
const dashboardPages = ['dashboard-user.html'];

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    // Fix BrandNest logo
    content = content.replace(/Iron<span class="text-primary">Pulse<\/span>/g, 'Brand<span class="text-primary">Nest</span>');
    content = content.replace(/IronPulse/gi, 'BrandNest');

    // Replace the main body between 1️⃣ HERO SECTION and FOOTER
    const replacement = getReplacementContent(page);
    content = content.replace(/<!-- 1.*? HERO SECTION -->[\s\S]*?<!-- FOOTER -->/, replacement);

    fs.writeFileSync(page, content, 'utf8');
});

dashboardPages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    // Fix BrandNest logo
    content = content.replace(/Iron<span class="text-primary">Pulse<\/span>/g, 'Brand<span class="text-primary">Nest</span>');
    content = content.replace(/IronPulse/gi, 'BrandNest');

    const replacement = `
        <!-- ============= SECTION: BULK ORDER FORM ============= -->
        <section id="section-bulk-order" class="animate-fade-in pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Bulk Order Dashboard</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">Submit a bulk corporate gift order</p>
          </div>
          
          <div class="bg-card border border-theme rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="text-lg font-bold mb-4">Submit Bulk Order</h2>
            <form>
                <label class="block text-sm font-medium mb-2">Product Category</label>
                <select class="w-full p-2 mb-4 rounded border border-theme bg-[var(--bg-color)]">
                    <option>Stationery</option>
                    <option>Tech Accessories</option>
                    <option>Hampers</option>
                    <option>Branded Apparel</option>
                    <option>Trophies</option>
                </select>
                
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">Quantity</label>
                        <input type="number" class="w-full p-2 rounded border border-theme bg-[var(--bg-color)]" placeholder="Min 50">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Per-Unit Budget ($)</label>
                        <input type="number" class="w-full p-2 rounded border border-theme bg-[var(--bg-color)]" placeholder="e.g. 20">
                    </div>
                </div>
                
                <label class="block text-sm font-medium mb-2">Upload Company Logo and Artwork Files</label>
                <input type="file" class="w-full p-2 mb-4 rounded border border-theme bg-[var(--bg-color)]">
                
                <button type="button" class="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary">Submit Order</button>
            </form>
          </div>

          <div class="bg-card border border-theme rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="text-lg font-bold mb-4">Track Production Status</h2>
            <div class="flex flex-wrap justify-between items-center text-sm gap-2">
                <div class="text-primary font-bold"><i class="fas fa-check-circle"></i> Order Received</div>
                <div class="text-primary font-bold"><i class="fas fa-arrow-right"></i> Design Proof Sent</div>
                <div class="text-secondary font-bold"><i class="fas fa-spinner fa-spin"></i> Production In Progress</div>
                <div class="text-gray-400"><i class="fas fa-arrow-right"></i> Quality Checked</div>
                <div class="text-gray-400"><i class="fas fa-circle"></i> Dispatched</div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
                <h2 class="text-lg font-bold mb-4">Delivery Schedules</h2>
                <ul class="text-sm space-y-2">
                    <li><strong>New York HQ:</strong> Dispatched (Expected Oct 12)</li>
                    <li><strong>London Branch:</strong> Production in Progress (Expected Oct 15)</li>
                    <li><strong>Sydney Office:</strong> Quality Checked (Expected Oct 18)</li>
                </ul>
              </div>
              
              <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
                <h2 class="text-lg font-bold mb-4">Invoices & Confirmations</h2>
                <button class="bg-secondary/10 text-secondary px-4 py-2 rounded font-bold text-sm mr-2 mb-2"><i class="fas fa-download"></i> Order Confirmation</button>
                <button class="bg-secondary/10 text-secondary px-4 py-2 rounded font-bold text-sm"><i class="fas fa-download"></i> Itemized Invoice</button>
              </div>
          </div>
        </section>
      </main>
<!-- FOOTER -->`;

    content = content.replace(/<!-- ============= SECTION: BULK ORDER FORM ============= -->[\s\S]*?<\/main>/, replacement.replace('<!-- FOOTER -->', ''));
    fs.writeFileSync(page, content, 'utf8');
});

function getReplacementContent(page) {
    if (page === 'index.html') {
        return `<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 md:pt-[150px] md:pb-24 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-dark-bg dark:text-white">Premium <span class="text-primary">Corporate Gifting</span></h1>
    <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">Custom merchandise, bulk orders, and corporate branding.</p>
    <a href="products.html" class="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-secondary transition-colors">Explore Catalog</a>
  </div>
</section>

<!-- POPULAR CATEGORIES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-dark-bg dark:text-white">
    <h2 class="text-3xl font-bold text-center mb-12 uppercase">Popular Categories</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <i class="fas fa-pen-nib text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Stationery</h3>
        <p class="text-gray-600 dark:text-gray-400">Notebooks, pens, and desk organizers.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <i class="fas fa-laptop text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Tech Accessories</h3>
        <p class="text-gray-600 dark:text-gray-400">Power banks, drives, and chargers.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <i class="fas fa-box-open text-4xl text-primary mb-4"></i>
        <h3 class="text-xl font-bold mb-2">Hampers</h3>
        <p class="text-gray-600 dark:text-gray-400">Curated gift baskets for employees.</p>
      </div>
    </div>
  </div>
</section>

<!-- KEY BRAND CLIENTS -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-bg dark:text-white">
    <h2 class="text-3xl font-bold mb-12 uppercase">Key Brand Clients</h2>
    <div class="flex flex-wrap justify-center gap-12 items-center opacity-70">
      <div class="text-2xl font-bold">Infosys</div>
      <div class="text-2xl font-bold">Google</div>
      <div class="text-2xl font-bold">Microsoft</div>
      <div class="text-2xl font-bold">Amazon</div>
      <div class="text-2xl font-bold">Tesla</div>
    </div>
  </div>
</section>
<!-- FOOTER -->`;
    } else if (page === 'products.html') {
        return `<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-black uppercase tracking-tight mb-4 text-dark-bg dark:text-white">Our <span class="text-primary">Products</span></h1>
    <p class="text-xl text-gray-600 dark:text-gray-300">Stationery, Tech Accessories, Hampers, Branded Apparel, Trophies.</p>
  </div>
</section>
<!-- FOOTER -->`;
    } else if (page === 'customization.html') {
        return `<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-black uppercase tracking-tight mb-4 text-dark-bg dark:text-white"><span class="text-primary">Customization</span></h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">Upload company logo and artwork files for branding customization.</p>
    <div class="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-dashed border-gray-300 dark:border-gray-600 text-dark-bg dark:text-white">
      <i class="fas fa-cloud-upload-alt text-5xl text-primary mb-4"></i>
      <h3 class="text-lg font-bold mb-2">Upload Branding Files</h3>
      <p class="text-sm text-gray-500 mb-4">SVG, PNG, AI up to 10MB</p>
      <button class="bg-primary text-white px-6 py-2 rounded-full w-full font-bold">Select Files</button>
    </div>
  </div>
</section>
<!-- FOOTER -->`;
    } else if (page === 'lead-times.html') {
        return `<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-black uppercase tracking-tight mb-4 text-dark-bg dark:text-white">Minimum Order & <span class="text-primary">Lead Time</span></h1>
    <p class="text-xl text-gray-600 dark:text-gray-300">Information regarding order sizes and production schedules.</p>
  </div>
</section>
<!-- FOOTER -->`;
    } else if (page === 'catalog.html') {
        return `<!-- 1️⃣ HERO SECTION -->
<section class="relative pt-[120px] pb-16 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-black uppercase tracking-tight mb-4 text-dark-bg dark:text-white">Catalog <span class="text-primary">Download</span></h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">Download our complete B2B corporate gifting catalog.</p>
    <a href="#" class="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full"><i class="fas fa-download mr-2"></i> Download PDF Catalog</a>
  </div>
</section>
<!-- FOOTER -->`;
    }
}
console.log('Update complete.');
