const fs = require('fs');

const extraData = {
    'contact.html': `
<!-- 2️⃣ FORM -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl">
        <h2 class="text-3xl font-bold mb-8 uppercase text-center">Send a Message</h2>
        <form class="flex flex-col gap-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" class="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-xl focus:outline-none focus:border-primary">
            <input type="email" placeholder="Corporate Email" class="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-xl focus:outline-none focus:border-primary">
        </div>
        <textarea placeholder="How can we help with your corporate gifting needs?" class="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-xl h-40 focus:outline-none focus:border-primary"></textarea>
        <button type="button" class="bg-primary text-white font-bold py-4 rounded-xl text-lg hover:bg-secondary transition-colors">Submit Inquiry</button>
        </form>
    </div>
  </div>
</section>
<!-- 3️⃣ OFFICES -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-12 uppercase">Global Offices</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
        <i class="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-2xl mb-2">New York (HQ)</h3><p class="text-gray-500">123 Madison Ave, NY 10016<br>+1 (212) 555-0198</p>
      </div>
      <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
        <i class="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-2xl mb-2">London</h3><p class="text-gray-500">45 Oxford St, W1D 2DZ<br>+44 20 7946 0958</p>
      </div>
      <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
        <i class="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-2xl mb-2">Sydney</h3><p class="text-gray-500">88 George St, NSW 2000<br>+61 2 9876 5432</p>
      </div>
    </div>
  </div>
</section>
<!-- 4️⃣ SLA -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border-t-4 border-secondary flex flex-col items-center">
        <i class="fas fa-clock text-5xl text-secondary mb-4"></i>
        <h2 class="text-2xl font-bold mb-4 uppercase">Support SLA</h2>
        <p class="text-gray-600 dark:text-gray-400">Our dedicated account managers guarantee a response within <strong>2 hours</strong> during standard business days (Monday - Friday, 9AM - 6PM EST).</p>
    </div>
  </div>
</section>
<!-- 5️⃣ SOCIAL -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white text-center">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase">Connect With Us</h2>
    <div class="flex justify-center gap-8">
      <a href="#" class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl text-primary hover:bg-primary hover:text-white transition-colors shadow-md"><i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl text-primary hover:bg-primary hover:text-white transition-colors shadow-md"><i class="fab fa-twitter"></i></a>
      <a href="#" class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl text-primary hover:bg-primary hover:text-white transition-colors shadow-md"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Existing Client?</h2>
  <a href="login.html" class="bg-secondary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-primary transition-colors">Go to Dashboard</a>
</section>`,

    'faq.html': `
<!-- 2️⃣ ORDERING -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase flex items-center gap-4"><i class="fas fa-shopping-cart text-primary"></i> Ordering & Payments</h2>
    <div class="space-y-4">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">Q: What are your payment terms?</h3>
            <p class="text-gray-600 dark:text-gray-400">A: Net 30 terms are available for approved enterprise accounts. Standard orders require a 50% deposit before production begins.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">Q: How do I reorder past items?</h3>
            <p class="text-gray-600 dark:text-gray-400">A: Log into your Client Dashboard and navigate to the "Order History" tab. You can duplicate past orders with a single click.</p>
        </div>
    </div>
  </div>
</section>
<!-- 3️⃣ SHIPPING FAQ -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase flex items-center gap-4"><i class="fas fa-truck text-secondary"></i> Shipping & Delivery</h2>
    <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">Q: Do you ship internationally?</h3>
            <p class="text-gray-500">A: Yes, we handle customs and duties globally. We can split your bulk order to ship to multiple international offices.</p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">Q: Can I track my shipments?</h3>
            <p class="text-gray-500">A: Absolutely. Tracking numbers for all shipments (including multi-location drops) are visible in your dashboard.</p>
        </div>
    </div>
  </div>
</section>
<!-- 4️⃣ CUSTOMIZATION FAQ -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50 text-dark-bg dark:text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase flex items-center gap-4"><i class="fas fa-paint-brush text-primary"></i> Customization</h2>
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 class="font-bold text-lg mb-2">Q: Can I see a sample before bulk ordering?</h3>
        <p class="text-gray-600 dark:text-gray-400">A: Digital 3D proofs are completely free and provided within 24 hours. Physical branded samples are available upon request for a small fee.</p>
    </div>
  </div>
</section>
<!-- 5️⃣ RETURNS -->
<section class="py-16 bg-white dark:bg-dark-bg text-dark-bg dark:text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold mb-8 uppercase flex items-center gap-4"><i class="fas fa-undo text-secondary"></i> Returns & Refunds</h2>
    <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-red-500">
        <p class="text-gray-600 dark:text-gray-400">Due to the custom nature of branded merchandise, returns are generally not accepted unless there is a confirmed manufacturing defect or printing error. If an issue arises, contact your Account Representative within 7 days of delivery.</p>
    </div>
  </div>
</section>
<!-- 6️⃣ CTA -->
<section class="py-16 bg-primary text-white text-center">
  <h2 class="text-4xl font-bold mb-6 uppercase">Still Need Help?</h2>
  <a href="contact.html" class="bg-secondary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-primary transition-colors">Contact Support</a>
</section>`
};

Object.keys(extraData).forEach(page => {
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
            content = before + extraData[page] + '\n' + after;
        } 
    }
    
    fs.writeFileSync(page, content, 'utf8');
});

console.log('Extra pages enriched with cards.');
