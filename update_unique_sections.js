const fs = require('fs');

const pageData = {
    'products.html': `
<!-- 2️⃣ CATEGORIES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Explore Our Range</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"><i class="fas fa-pen-nib text-3xl text-primary mb-4"></i><h3 class="font-bold">Stationery</h3></div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"><i class="fas fa-laptop text-3xl text-primary mb-4"></i><h3 class="font-bold">Tech Gear</h3></div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"><i class="fas fa-box text-3xl text-primary mb-4"></i><h3 class="font-bold">Gift Hampers</h3></div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"><i class="fas fa-tshirt text-3xl text-primary mb-4"></i><h3 class="font-bold">Apparel</h3></div>
    </div>
  </div>
</section>
<!-- 3️⃣ BEST SELLERS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Best Sellers</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"><img src="assets/images/tech.jpg" class="w-full h-40 object-cover mb-4 rounded"><h4 class="font-bold">Premium Powerbank</h4></div>
      <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"><img src="assets/images/book.jpg" class="w-full h-40 object-cover mb-4 rounded"><h4 class="font-bold">Leather Notebook</h4></div>
      <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"><img src="assets/images/coffee.jpg" class="w-full h-40 object-cover mb-4 rounded"><h4 class="font-bold">Insulated Mug</h4></div>
    </div>
  </div>
</section>
<!-- 4️⃣ SOURCING -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Sustainable Sourcing</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">We partner with eco-friendly suppliers to ensure your corporate gifts leave a positive impact on the planet.</p>
  </div>
</section>
<!-- 5️⃣ BULK DEALS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Tiered Bulk Pricing</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">Order more, save more. Unlock up to 40% discount on orders exceeding 5,000 units.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Download Full Catalog</h2>
  <a href="catalog.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Get the PDF</a>
</section>`,

    'customization.html': `
<!-- 2️⃣ BRANDING OPTIONS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 uppercase">Branding Techniques</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 shadow rounded-lg"><h3 class="font-bold text-primary mb-2">Laser Engraving</h3><p>Perfect for metal pens and tech.</p></div>
      <div class="bg-white dark:bg-gray-800 p-6 shadow rounded-lg"><h3 class="font-bold text-primary mb-2">Embroidery</h3><p>High-end finish for apparel and bags.</p></div>
      <div class="bg-white dark:bg-gray-800 p-6 shadow rounded-lg"><h3 class="font-bold text-primary mb-2">Screen Printing</h3><p>Vibrant colors for notebooks and boxes.</p></div>
    </div>
  </div>
</section>
<!-- 3️⃣ PROCESS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">The Customization Workflow</h2>
    <p class="mb-4">1. Upload your vector logo (.ai, .eps, .svg)</p>
    <p class="mb-4">2. Our design team creates a 3D digital mockup.</p>
    <p class="mb-4">3. You approve the proof via your client dashboard.</p>
    <p>4. We move straight to production!</p>
  </div>
</section>
<!-- 4️⃣ MATERIAL GUIDELINES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">File Requirements</h2>
    <p class="text-gray-600 dark:text-gray-400">To ensure crisp printing, please provide CMYK color codes and convert all text to outlines before uploading.</p>
  </div>
</section>
<!-- 5️⃣ GALLERY -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Past Projects</h2>
    <div class="grid grid-cols-2 gap-4">
        <img src="assets/images/camera.jpg" class="w-full h-48 object-cover rounded shadow">
        <img src="assets/images/coffee.jpg" class="w-full h-48 object-cover rounded shadow">
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Ready to brand?</h2>
  <a href="dashboard-user.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Start Upload</a>
</section>`,

    'lead-times.html': `
<!-- 2️⃣ TIMELINES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 uppercase">Standard Production Times</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 bg-white dark:bg-gray-800 rounded shadow border-l-4 border-primary"><h3 class="font-bold">Tech Accessories</h3><p>10 - 15 Business Days</p></div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded shadow border-l-4 border-primary"><h3 class="font-bold">Apparel & Bags</h3><p>15 - 20 Business Days</p></div>
    </div>
  </div>
</section>
<!-- 3️⃣ MOQS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Minimum Order Quantities (MOQ)</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Our standard MOQ across all categories is 50 units per design to ensure optimal production efficiency.</p>
  </div>
</section>
<!-- 4️⃣ EXPRESS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Rush Orders</h2>
    <p class="text-gray-600 dark:text-gray-400">In a hurry? We offer a 5-day express turnaround on select items. Surcharges apply.</p>
  </div>
</section>
<!-- 5️⃣ SHIPPING -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Global Logistics</h2>
    <p class="text-gray-600 dark:text-gray-400">We ship worldwide via DHL and FedEx. Multi-location drop-shipping is available via your dashboard.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Plan Your Order</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Contact Logistics</a>
</section>`,

    'catalog.html': `
<!-- 2️⃣ WHAT'S INSIDE -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Inside the 2026 Catalog</h2>
    <p class="text-lg mb-4">Over 5,000 premium products across 12 distinct categories.</p>
    <ul class="text-gray-600 dark:text-gray-400"><li>New sustainable apparel line</li><li>Smart office tech integration</li><li>Holiday gift bundles</li></ul>
  </div>
</section>
<!-- 3️⃣ FORMATS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Digital & Print</h2>
    <p>Download our interactive PDF instantly, or request a physical hardcopy to be mailed to your office.</p>
  </div>
</section>
<!-- 4️⃣ SUBSCRIPTION -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Quarterly Updates</h2>
    <p>Subscribe to our catalog mailing list to receive quarterly updates on seasonal merch.</p>
  </div>
</section>
<!-- 5️⃣ FEATURED -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Sneak Peek</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="assets/images/book.jpg" class="w-full h-48 object-cover rounded shadow">
        <img src="assets/images/tech.jpg" class="w-full h-48 object-cover rounded shadow">
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Get It Now</h2>
  <button class="bg-secondary px-8 py-3 rounded-full font-bold">Download PDF (24MB)</button>
</section>`,

    'about.html': `
<!-- 2️⃣ OUR STORY -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Our Story</h2>
    <p class="text-lg">Founded in 2018, BrandNest started with a simple mission: revolutionize the corporate gifting industry through premium quality and seamless technology.</p>
  </div>
</section>
<!-- 3️⃣ MISSION -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Mission & Values</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Integrity, Sustainability, and Design Excellence. We believe every corporate gift should reflect the highest standards.</p>
  </div>
</section>
<!-- 4️⃣ TEAM -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Meet the Team</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="font-bold">CEO: Jane Doe</div>
      <div class="font-bold">CTO: John Smith</div>
      <div class="font-bold">Head of Design: Emily R.</div>
      <div class="font-bold">Logistics: Marcus T.</div>
    </div>
  </div>
</section>
<!-- 5️⃣ SOCIAL RESP -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Social Responsibility</h2>
    <p>1% of all our profits are donated to reforestation projects worldwide.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Join Our Journey</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Partner With Us</a>
</section>`,

    'contact.html': `
<!-- 2️⃣ FORM -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-2xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Send a Message</h2>
    <form class="flex flex-col gap-4">
      <input type="text" placeholder="Name" class="p-3 border rounded">
      <input type="email" placeholder="Email" class="p-3 border rounded">
      <textarea placeholder="Your Query" class="p-3 border rounded h-32"></textarea>
      <button type="button" class="bg-primary text-white font-bold py-3 rounded">Submit</button>
    </form>
  </div>
</section>
<!-- 3️⃣ OFFICES -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Global Offices</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div><h3 class="font-bold">New York</h3><p>123 Madison Ave</p></div>
      <div><h3 class="font-bold">London</h3><p>45 Oxford St</p></div>
      <div><h3 class="font-bold">Sydney</h3><p>88 George St</p></div>
    </div>
  </div>
</section>
<!-- 4️⃣ SLA -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Support SLA</h2>
    <p>Our dedicated account managers guarantee a response within 2 hours during business days.</p>
  </div>
</section>
<!-- 5️⃣ SOCIAL -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Connect</h2>
    <div class="flex justify-center gap-6 text-3xl text-primary">
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Existing Client?</h2>
  <a href="login.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Go to Dashboard</a>
</section>`,

    'home2.html': `
<!-- 2️⃣ ENTERPRISE -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Enterprise Portals</h2>
    <p class="text-lg">We build dedicated, white-labeled company stores for your employees to claim their gifts securely.</p>
  </div>
</section>
<!-- 3️⃣ INTEGRATIONS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">API Integrations</h2>
    <p>Seamlessly integrate with Workday, BambooHR, and Salesforce to automate milestone gifting.</p>
  </div>
</section>
<!-- 4️⃣ CASE STUDIES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Success Stories</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 bg-white dark:bg-gray-800 shadow rounded"><h3 class="font-bold text-primary">TechCorp</h3><p>Automated anniversary gifts for 10,000+ employees.</p></div>
      <div class="p-6 bg-white dark:bg-gray-800 shadow rounded"><h3 class="font-bold text-primary">FinBank</h3><p>Streamlined client holiday hampers globally.</p></div>
    </div>
  </div>
</section>
<!-- 5️⃣ KITS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Onboarding Kits</h2>
    <p>Welcome new hires with curated tech and apparel boxes delivered directly to their homes.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Transform Your Gifting</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Request Demo</a>
</section>`,

    'blog.html': `
<!-- 2️⃣ ARTICLES -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 uppercase">Latest Insights</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 p-4 shadow rounded"><img src="assets/images/tech.jpg" class="w-full h-32 object-cover mb-4"><h3 class="font-bold">Tech Gifts in 2026</h3></div>
      <div class="bg-white dark:bg-gray-800 p-4 shadow rounded"><img src="assets/images/book.jpg" class="w-full h-32 object-cover mb-4"><h3 class="font-bold">Eco-Friendly Merch</h3></div>
      <div class="bg-white dark:bg-gray-800 p-4 shadow rounded"><img src="assets/images/coffee.jpg" class="w-full h-32 object-cover mb-4"><h3 class="font-bold">Employee Retention</h3></div>
    </div>
  </div>
</section>
<!-- 3️⃣ TRENDS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Industry Trends</h2>
    <p>Discover how Fortune 500 companies are utilizing experiential gifts over traditional items.</p>
  </div>
</section>
<!-- 4️⃣ SPOTLIGHT -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Product Spotlight</h2>
    <p>Deep dive into our new sustainable bamboo tech accessories lineup.</p>
  </div>
</section>
<!-- 5️⃣ NEWSLETTER -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Subscribe</h2>
    <div class="flex"><input type="email" class="flex-1 p-3 border rounded-l" placeholder="Enter email"><button class="bg-primary text-white px-6 rounded-r">Join</button></div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Read Our Full Archive</h2>
  <button class="bg-secondary px-8 py-3 rounded-full font-bold">Load More</button>
</section>`,

    'faq.html': `
<!-- 2️⃣ ORDERING -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Ordering & Payments</h2>
    <p class="font-bold mt-4">Q: What are your payment terms?</p><p>A: Net 30 for approved enterprise accounts.</p>
  </div>
</section>
<!-- 3️⃣ SHIPPING FAQ -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Shipping & Delivery</h2>
    <p class="font-bold mt-4">Q: Do you ship internationally?</p><p>A: Yes, we handle customs and duties globally.</p>
  </div>
</section>
<!-- 4️⃣ CUSTOMIZATION FAQ -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Customization</h2>
    <p class="font-bold mt-4">Q: Can I see a sample before bulk ordering?</p><p>A: Yes, digital proofs are free, and physical samples are available upon request.</p>
  </div>
</section>
<!-- 5️⃣ RETURNS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Returns & Refunds</h2>
    <p>Due to the nature of branded merchandise, returns are only accepted for manufacturing defects.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Still Need Help?</h2>
  <a href="contact.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Contact Support</a>
</section>`,

    'login.html': `
<!-- 2️⃣ SECURE ACCESS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center mt-12">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase"><i class="fas fa-shield-alt text-primary"></i> Secure Access</h2>
    <p>Your portal is protected by industry-leading encryption and Two-Factor Authentication.</p>
  </div>
</section>
<!-- 3️⃣ DASHBOARD BENEFITS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Portal Benefits</h2>
    <p>Track orders in real-time, view invoices, and instantly reorder past items.</p>
  </div>
</section>
<!-- 4️⃣ ENTERPRISE -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Enterprise Features</h2>
    <p>Multi-user access control and department-level budget tracking.</p>
  </div>
</section>
<!-- 5️⃣ SUPPORT -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Dedicated Help</h2>
    <p>Your Account Manager is just a message away through the portal.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">New Here?</h2>
  <a href="register.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Create Account</a>
</section>`,

    'register.html': `
<!-- 2️⃣ ONBOARDING -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center mt-12">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Quick Onboarding</h2>
    <p>Sign up in seconds and get immediate access to our corporate catalog and pricing.</p>
  </div>
</section>
<!-- 3️⃣ VERIFICATION -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">B2B Verification</h2>
    <p>We manually verify all corporate accounts within 24 hours to ensure you get the best bulk rates.</p>
  </div>
</section>
<!-- 4️⃣ PERKS -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Member Perks</h2>
    <p>Free digital mockups, dedicated support, and net-30 terms.</p>
  </div>
</section>
<!-- 5️⃣ COMPLIANCE -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-6 uppercase">Data Privacy</h2>
    <p>We are GDPR and SOC2 compliant. Your data is safe with us.</p>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Already Registered?</h2>
  <a href="login.html" class="bg-secondary px-8 py-3 rounded-full font-bold">Sign In</a>
</section>`
};

Object.keys(pageData).forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');

    // Replace the old generic sections with the new specific ones.
    // The old sections started from <!-- 2️⃣ FEATURES / HIGHLIGHTS --> (or SEC 2 SECURE ACCESS) and ended right before <!-- FOOTER -->
    // We can use a regex to match from <!-- 2️⃣ ... --> up to <!-- FOOTER -->
    
    // For normal pages, the generic sections were inserted between the hero section and footer.
    // We just find <!-- 2️⃣ ... and everything down to the footer.
    
    const startStringRegex = /<!-- 2️⃣ .*? -->/i;
    const matchStart = content.match(startStringRegex);
    
    if (matchStart) {
        const indexStart = matchStart.index;
        const indexEnd = content.indexOf('<!-- FOOTER -->');
        
        if (indexEnd !== -1 && indexEnd > indexStart) {
            const before = content.substring(0, indexStart);
            const after = content.substring(indexEnd); // includes <!-- FOOTER -->
            
            content = before + pageData[page] + '\n' + after;
        } else if (content.indexOf('</body>') !== -1) {
            // No footer tag (e.g. login/register)
            const before = content.substring(0, indexStart);
            const after = content.substring(content.indexOf('</body>'));
            content = before + pageData[page] + '\n' + after;
        }
    }
    
    fs.writeFileSync(page, content, 'utf8');
});

console.log('Unique sections mapped and applied.');
