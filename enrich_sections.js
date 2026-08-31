const fs = require('fs');

const pageData = {
    'products.html': `
<!-- 2️⃣ CATEGORIES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12 uppercase">Explore Our Range</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-secondary transition-transform hover:-translate-y-2">
        <i class="fas fa-pen-nib text-5xl text-primary mb-6"></i>
        <h3 class="text-xl font-bold mb-3">Stationery</h3>
        <p class="text-gray-600 dark:text-gray-400">Premium notebooks, executive pens, and desk organizers tailored for professionals.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-secondary transition-transform hover:-translate-y-2">
        <i class="fas fa-laptop text-5xl text-primary mb-6"></i>
        <h3 class="text-xl font-bold mb-3">Tech Gear</h3>
        <p class="text-gray-600 dark:text-gray-400">High-capacity power banks, wireless chargers, and smart office accessories.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-secondary transition-transform hover:-translate-y-2">
        <i class="fas fa-box-open text-5xl text-primary mb-6"></i>
        <h3 class="text-xl font-bold mb-3">Gift Hampers</h3>
        <p class="text-gray-600 dark:text-gray-400">Curated assortments for holidays, onboarding, and client appreciation.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-secondary transition-transform hover:-translate-y-2">
        <i class="fas fa-tshirt text-5xl text-primary mb-6"></i>
        <h3 class="text-xl font-bold mb-3">Apparel</h3>
        <p class="text-gray-600 dark:text-gray-400">High-quality branded hoodies, polos, and activewear for your team.</p>
      </div>
    </div>
  </div>
</section>
<!-- 3️⃣ BEST SELLERS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Best Sellers</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <img src="assets/images/tech.jpg" class="w-full h-48 object-cover transition-transform hover:scale-105">
        <div class="p-6">
            <h4 class="text-lg font-bold mb-2">Executive Tech Bundle</h4>
            <p class="text-sm text-gray-500 mb-4">Includes wireless charger, earbuds, and tracking tag.</p>
            <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Top Rated</span>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <img src="assets/images/book.jpg" class="w-full h-48 object-cover transition-transform hover:scale-105">
        <div class="p-6">
            <h4 class="text-lg font-bold mb-2">Leather Bound Journal</h4>
            <p class="text-sm text-gray-500 mb-4">Embossed genuine leather with refillable pages.</p>
            <span class="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold">Classic</span>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <img src="assets/images/coffee.jpg" class="w-full h-48 object-cover transition-transform hover:scale-105">
        <div class="p-6">
            <h4 class="text-lg font-bold mb-2">Insulated Travel Mug</h4>
            <p class="text-sm text-gray-500 mb-4">Keeps drinks hot for 12 hours. Laser engraved logo.</p>
            <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Trending</span>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- 4️⃣ SOURCING -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border-l-8 border-primary flex flex-col md:flex-row items-center gap-8">
        <div class="text-6xl text-primary"><i class="fas fa-leaf"></i></div>
        <div>
            <h2 class="text-3xl font-bold mb-4 uppercase">Sustainable Sourcing</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">We partner with eco-friendly suppliers globally to ensure your corporate gifts leave a positive impact on the planet. From recycled packaging to carbon-neutral shipping.</p>
        </div>
    </div>
  </div>
</section>
<!-- 5️⃣ BULK DEALS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Tiered Bulk Pricing</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
            <h3 class="text-xl font-bold text-gray-500 mb-2">Standard</h3>
            <p class="text-4xl font-black mb-4">50 - 499<span class="text-lg font-normal"> units</span></p>
            <p class="text-gray-500">Base catalog pricing with complimentary standard shipping.</p>
        </div>
        <div class="p-8 border-2 border-primary rounded-2xl shadow-2xl transform md:-translate-y-4 bg-white dark:bg-gray-800 relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
            <h3 class="text-xl font-bold text-primary mb-2">Corporate</h3>
            <p class="text-4xl font-black mb-4">500 - 4,999<span class="text-lg font-normal"> units</span></p>
            <p class="text-gray-500">Up to 20% discount, free digital mockups, and priority production.</p>
        </div>
        <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
            <h3 class="text-xl font-bold text-gray-500 mb-2">Enterprise</h3>
            <p class="text-4xl font-black mb-4">5,000+<span class="text-lg font-normal"> units</span></p>
            <p class="text-gray-500">Up to 40% discount, dedicated account manager, and API access.</p>
        </div>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Ready to order?</h2>
  <a href="dashboard-user.html" class="bg-secondary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-primary transition-colors">Start Bulk Order</a>
</section>`,

    'customization.html': `
<!-- 2️⃣ BRANDING OPTIONS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Branding Techniques</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-primary hover:-translate-y-2 transition-transform">
        <i class="fas fa-bolt text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-xl mb-3">Laser Engraving</h3>
        <p class="text-gray-600 dark:text-gray-400">A permanent, premium finish perfect for metal pens, drinkware, and tech accessories. Highly precise.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-primary hover:-translate-y-2 transition-transform">
        <i class="fas fa-ring text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-xl mb-3">Embroidery</h3>
        <p class="text-gray-600 dark:text-gray-400">Offers a high-end, textured finish for apparel, bags, and caps. Extremely durable and professional.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border-t-4 border-primary hover:-translate-y-2 transition-transform">
        <i class="fas fa-fill-drip text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-xl mb-3">Screen Printing</h3>
        <p class="text-gray-600 dark:text-gray-400">Vibrant, Pantone-matched colors ideal for notebooks, boxes, and flat surfaces.</p>
      </div>
    </div>
  </div>
</section>
<!-- 3️⃣ PROCESS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">The Customization Workflow</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
        <h3 class="font-bold mb-2">Upload Files</h3>
        <p class="text-sm text-gray-500">Provide your vector logo directly in the dashboard.</p>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
        <h3 class="font-bold mb-2">Digital Mockup</h3>
        <p class="text-sm text-gray-500">Our design team creates a 3D digital proof within 24h.</p>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
        <h3 class="font-bold mb-2">Approval</h3>
        <p class="text-sm text-gray-500">You review and approve the proof via your client portal.</p>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
        <h3 class="font-bold mb-2">Production</h3>
        <p class="text-sm text-gray-500">We move straight to production and dispatch.</p>
      </div>
    </div>
  </div>
</section>
<!-- 4️⃣ MATERIAL GUIDELINES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 border-l-4 border-secondary">
        <i class="fas fa-file-image text-6xl text-secondary"></i>
        <div>
            <h2 class="text-2xl font-bold mb-2 uppercase">File Requirements</h2>
            <p class="text-gray-600 dark:text-gray-400">To ensure crisp, high-resolution printing, please provide CMYK color codes and convert all text to outlines before uploading. Accepted formats: <strong>.ai, .eps, .svg, .pdf</strong> (Vector only).</p>
        </div>
    </div>
  </div>
</section>
<!-- 5️⃣ GALLERY -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Branding Showcase</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="assets/images/camera.jpg" class="w-full h-48 object-cover rounded-xl shadow-lg hover:opacity-80 transition-opacity cursor-pointer">
        <img src="assets/images/coffee.jpg" class="w-full h-48 object-cover rounded-xl shadow-lg hover:opacity-80 transition-opacity cursor-pointer">
        <img src="assets/images/tech.jpg" class="w-full h-48 object-cover rounded-xl shadow-lg hover:opacity-80 transition-opacity cursor-pointer">
        <img src="assets/images/book.jpg" class="w-full h-48 object-cover rounded-xl shadow-lg hover:opacity-80 transition-opacity cursor-pointer">
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Ready to brand?</h2>
  <a href="dashboard-user.html" class="bg-secondary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-primary transition-colors">Start Upload</a>
</section>`,

    'lead-times.html': `
<!-- 2️⃣ TIMELINES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Standard Production Times</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-l-8 border-primary flex items-center gap-6">
        <i class="fas fa-laptop-code text-5xl text-primary"></i>
        <div><h3 class="font-bold text-2xl mb-1">Tech Accessories</h3><p class="text-gray-500">10 - 15 Business Days</p></div>
      </div>
      <div class="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-l-8 border-secondary flex items-center gap-6">
        <i class="fas fa-tshirt text-5xl text-secondary"></i>
        <div><h3 class="font-bold text-2xl mb-1">Apparel & Bags</h3><p class="text-gray-500">15 - 20 Business Days</p></div>
      </div>
      <div class="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-l-8 border-primary flex items-center gap-6">
        <i class="fas fa-pen text-5xl text-primary"></i>
        <div><h3 class="font-bold text-2xl mb-1">Stationery & Print</h3><p class="text-gray-500">7 - 10 Business Days</p></div>
      </div>
      <div class="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-l-8 border-secondary flex items-center gap-6">
        <i class="fas fa-box-heart text-5xl text-secondary"></i>
        <div><h3 class="font-bold text-2xl mb-1">Custom Hampers</h3><p class="text-gray-500">20 - 25 Business Days</p></div>
      </div>
    </div>
  </div>
</section>
<!-- 3️⃣ MOQS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-primary/10 p-10 rounded-3xl border border-primary/20">
        <i class="fas fa-boxes text-4xl text-primary mb-4"></i>
        <h2 class="text-3xl font-bold mb-4 uppercase text-primary">Minimum Order Quantities (MOQ)</h2>
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Our standard MOQ across all categories is <strong>50 units per design</strong> to ensure optimal production efficiency and the best pricing tier for your enterprise.</p>
    </div>
  </div>
</section>
<!-- 4️⃣ EXPRESS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 border-l-4 border-red-500">
        <i class="fas fa-stopwatch text-6xl text-red-500"></i>
        <div>
            <h2 class="text-2xl font-bold mb-2 uppercase text-red-500">Rush Orders</h2>
            <p class="text-gray-600 dark:text-gray-400">In a hurry? We offer a <strong>5-day express turnaround</strong> on select stocked items. Rush surcharges of 25% apply. Subject to availability and production capacity.</p>
        </div>
    </div>
  </div>
</section>
<!-- 5️⃣ SHIPPING -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase">Global Logistics</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"><i class="fas fa-globe-americas text-4xl text-secondary mb-4"></i><h3 class="font-bold text-xl mb-2">Worldwide Reach</h3><p class="text-sm text-gray-500">We ship to over 150 countries via DHL and FedEx.</p></div>
        <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"><i class="fas fa-map-marked-alt text-4xl text-secondary mb-4"></i><h3 class="font-bold text-xl mb-2">Multi-Location Drop</h3><p class="text-sm text-gray-500">Ship portions of your bulk order to different regional offices directly.</p></div>
        <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"><i class="fas fa-dolly text-4xl text-secondary mb-4"></i><h3 class="font-bold text-xl mb-2">Customs Handled</h3><p class="text-sm text-gray-500">We manage DDP (Delivered Duty Paid) to streamline international customs.</p></div>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Plan Your Order</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-primary transition-colors">Contact Logistics</a>
</section>`,

    'catalog.html': `
<!-- 2️⃣ WHAT'S INSIDE -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase text-center">Inside the 2026 Catalog</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-primary">
        <h3 class="text-xl font-bold mb-4"><i class="fas fa-leaf text-primary mr-2"></i> Sustainable Line</h3>
        <p class="text-gray-600 dark:text-gray-400">Over 500 new eco-friendly products made from recycled RPET, bamboo, and wheat straw.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-primary">
        <h3 class="text-xl font-bold mb-4"><i class="fas fa-microchip text-primary mr-2"></i> Smart Office</h3>
        <p class="text-gray-600 dark:text-gray-400">Next-gen wireless charging hubs, ergonomic accessories, and productivity-boosting tech gear.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-primary">
        <h3 class="text-xl font-bold mb-4"><i class="fas fa-gifts text-primary mr-2"></i> Holiday Bundles</h3>
        <p class="text-gray-600 dark:text-gray-400">Curated multi-tier holiday boxes designed specifically for VIP clients and remote employees.</p>
      </div>
    </div>
  </div>
</section>
<!-- 3️⃣ FORMATS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 text-center shadow-md">
            <i class="fas fa-file-pdf text-6xl text-secondary mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Digital PDF</h3>
            <p class="text-gray-500 mb-6">Interactive, searchable, and instantly available for download.</p>
            <button class="bg-secondary text-white px-6 py-2 rounded-full font-bold">Download (24MB)</button>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 text-center shadow-md">
            <i class="fas fa-book-open text-6xl text-primary mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Physical Copy</h3>
            <p class="text-gray-500 mb-6">Premium glossy 200-page book mailed directly to your HQ.</p>
            <a href="contact.html" class="border-2 border-primary text-primary px-6 py-2 rounded-full font-bold inline-block hover:bg-primary hover:text-white transition-colors">Request Mailer</a>
        </div>
    </div>
  </div>
</section>
<!-- 4️⃣ SUBSCRIPTION -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl">
        <i class="fas fa-envelope-open-text text-4xl text-primary mb-4"></i>
        <h2 class="text-3xl font-bold mb-4 uppercase">Quarterly Updates</h2>
        <p class="text-gray-600 mb-6">Subscribe to our catalog mailing list to receive quarterly PDF updates featuring seasonal merchandise.</p>
        <div class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Corporate Email" class="flex-1 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
            <button class="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary transition-colors">Subscribe</button>
        </div>
    </div>
  </div>
</section>
<!-- 5️⃣ FEATURED -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase">Catalog Sneak Peek</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="assets/images/book.jpg" class="w-full h-48 object-cover rounded-xl shadow">
        <img src="assets/images/tech.jpg" class="w-full h-48 object-cover rounded-xl shadow">
        <img src="assets/images/coffee.jpg" class="w-full h-48 object-cover rounded-xl shadow">
        <img src="assets/images/camera.jpg" class="w-full h-48 object-cover rounded-xl shadow">
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Get It Now</h2>
  <button class="bg-secondary px-10 py-4 text-lg rounded-full font-bold shadow-xl hover:bg-white hover:text-primary transition-colors"><i class="fas fa-download mr-2"></i> Download Full PDF Catalog</button>
</section>`,

    'about.html': `
<!-- 2️⃣ OUR STORY -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1">
      <h2 class="text-4xl font-bold mb-6 uppercase">Our Story</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">Founded in 2018, BrandNest started with a simple mission: revolutionize the corporate gifting industry through premium quality and seamless technology.</p>
      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">Today, we are the trusted gifting partner for over 500 enterprise clients globally, combining world-class logistics with bespoke curation.</p>
    </div>
    <div class="flex-1 relative">
      <img src="assets/images/tech.jpg" class="rounded-2xl shadow-2xl">
      <div class="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-xl font-bold text-2xl">8+ Years<br><span class="text-sm font-normal">of Excellence</span></div>
    </div>
  </div>
</section>
<!-- 3️⃣ MISSION -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase">Mission & Values</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <i class="fas fa-gem text-5xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Integrity</h3>
            <p class="text-gray-500">Transparent pricing, honest lead times, and ethical sourcing in every single order.</p>
        </div>
        <div class="p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <i class="fas fa-leaf text-5xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Sustainability</h3>
            <p class="text-gray-500">Committed to reducing waste through high-quality, long-lasting products, not cheap throwaways.</p>
        </div>
        <div class="p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <i class="fas fa-paint-roller text-5xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Design Excellence</h3>
            <p class="text-gray-500">We believe every corporate gift should reflect the highest standards of your brand's identity.</p>
        </div>
    </div>
  </div>
</section>
<!-- 4️⃣ TEAM -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase">Meet the Leadership</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden pb-4">
        <div class="h-48 bg-gray-300 dark:bg-gray-700 w-full mb-4 flex items-center justify-center"><i class="fas fa-user-tie text-6xl text-gray-400"></i></div>
        <h3 class="font-bold text-lg">Jane Doe</h3><p class="text-sm text-primary font-bold">CEO & Founder</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden pb-4">
        <div class="h-48 bg-gray-300 dark:bg-gray-700 w-full mb-4 flex items-center justify-center"><i class="fas fa-user-tie text-6xl text-gray-400"></i></div>
        <h3 class="font-bold text-lg">John Smith</h3><p class="text-sm text-primary font-bold">CTO</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden pb-4">
        <div class="h-48 bg-gray-300 dark:bg-gray-700 w-full mb-4 flex items-center justify-center"><i class="fas fa-user-tie text-6xl text-gray-400"></i></div>
        <h3 class="font-bold text-lg">Emily R.</h3><p class="text-sm text-primary font-bold">Head of Design</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden pb-4">
        <div class="h-48 bg-gray-300 dark:bg-gray-700 w-full mb-4 flex items-center justify-center"><i class="fas fa-user-tie text-6xl text-gray-400"></i></div>
        <h3 class="font-bold text-lg">Marcus T.</h3><p class="text-sm text-primary font-bold">VP Logistics</p>
      </div>
    </div>
  </div>
</section>
<!-- 5️⃣ SOCIAL RESP -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-green-50 dark:bg-green-900/20 p-10 rounded-3xl border border-green-200 dark:border-green-800">
        <i class="fas fa-tree text-6xl text-green-600 mb-6"></i>
        <h2 class="text-3xl font-bold mb-4 uppercase text-green-700 dark:text-green-400">Social Responsibility</h2>
        <p class="text-lg text-green-800 dark:text-green-200">1% of all our profits are directly donated to reforestation projects and fair-trade initiatives worldwide. Gifting with BrandNest means giving back.</p>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Join Our Journey</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold shadow hover:bg-white hover:text-primary transition-colors">Partner With Us</a>
</section>`
};

// ... Apply to other pages using generic rich logic for Contact, Blog, Home2, FAQ ...
const commonScript = `
<script>
  document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
      let href = link.getAttribute('href');
      if (href && href.includes(currentPath) && currentPath !== '') {
        link.classList.add('text-primary', 'dark:text-primary', 'bg-gray-100', 'dark:bg-primary/10', 'font-bold');
        link.classList.remove('text-dark-bg', 'text-gray-600', 'dark:text-white', 'dark:text-white/70');
      }
    });
  });
</script>
`;

Object.keys(pageData).forEach(page => {
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
            content = before + pageData[page] + '\n' + after;
        } 
    }
    
    fs.writeFileSync(page, content, 'utf8');
});

// Inject active detection script to ALL HTML files
const allFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('currentPath = window.location.pathname')) {
        content = content.replace('</body>', commonScript + '\n</body>');
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log('Rich sections and active detection applied.');
