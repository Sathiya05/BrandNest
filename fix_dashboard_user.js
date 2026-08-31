const fs = require('fs');

let content = fs.readFileSync('dashboard-user.html', 'utf8');

// The main area was overwritten, so we need to rebuild the sections.
// Here are the missing sections for the user dashboard.

const fullMainContent = `
      <!-- MAIN CONTENT -->
      <main class="flex-1 p-4 md:p-6 overflow-y-auto">
        <!-- BACKGROUND IMAGE -->
        <div class="fixed inset-0 z-[-1] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-10 dark:opacity-20" alt="Corporate Gifting Background">
        </div>

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
                
                <button type="button" class="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors" onclick="alert('Order Submitted Successfully!')">Submit Order</button>
            </form>
          </div>
        </section>

        <!-- ============= SECTION: TRACK PRODUCTION ============= -->
        <section id="section-track-order" class="animate-fade-in hidden pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Track Production</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">View real-time status of your orders</p>
          </div>
          <div class="bg-card border border-theme rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="text-lg font-bold mb-4">Order #ORD-94827 - Tech Hampers</h2>
            <div class="flex flex-wrap justify-between items-center text-sm gap-2">
                <div class="text-primary font-bold"><i class="fas fa-check-circle"></i> Order Received</div>
                <div class="text-primary font-bold"><i class="fas fa-arrow-right"></i> Design Proof Sent</div>
                <div class="text-secondary font-bold"><i class="fas fa-spinner fa-spin"></i> Production In Progress</div>
                <div class="text-gray-400"><i class="fas fa-arrow-right"></i> Quality Checked</div>
                <div class="text-gray-400"><i class="fas fa-circle"></i> Dispatched</div>
            </div>
          </div>
        </section>

        <!-- ============= SECTION: DELIVERY ============= -->
        <section id="section-delivery" class="animate-fade-in hidden pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Delivery Schedules</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">Track shipments to multiple office locations</p>
          </div>
          <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
            <h2 class="text-lg font-bold mb-4">Current Shipments</h2>
            <ul class="text-sm space-y-4">
                <li class="border-b border-theme pb-2"><strong>New York HQ:</strong> Dispatched (Expected Oct 12) <br><span class="text-xs text-gray-500">Tracking: UPS-1Z99999999</span></li>
                <li class="border-b border-theme pb-2"><strong>London Branch:</strong> Production in Progress (Expected Oct 15)</li>
                <li class="pb-2"><strong>Sydney Office:</strong> Quality Checked (Expected Oct 18)</li>
            </ul>
          </div>
        </section>

        <!-- ============= SECTION: INVOICES ============= -->
        <section id="section-invoices" class="animate-fade-in hidden pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Invoices & Docs</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">Download confirmations and itemized bills</p>
          </div>
          <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
            <div class="flex justify-between items-center border-b border-theme pb-4 mb-4">
                <div>
                    <h3 class="font-bold">Order #ORD-94827</h3>
                    <p class="text-xs text-gray-500">Oct 01, 2026 - $12,500.00</p>
                </div>
                <div>
                    <button class="bg-secondary/10 text-secondary px-4 py-2 rounded font-bold text-sm mr-2 mb-2 hover:bg-secondary hover:text-white transition-colors"><i class="fas fa-download"></i> Order Confirmation</button>
                    <button class="bg-secondary/10 text-secondary px-4 py-2 rounded font-bold text-sm hover:bg-secondary hover:text-white transition-colors"><i class="fas fa-download"></i> Itemized Invoice</button>
                </div>
            </div>
          </div>
        </section>

        <!-- ============= SECTION: ORDER HISTORY ============= -->
        <section id="section-my-orders" class="animate-fade-in hidden pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Order History</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">Past completed orders</p>
          </div>
          <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
             <p class="text-sm">No past orders found.</p>
          </div>
        </section>

        <!-- ============= SECTION: PROFILE ============= -->
        <section id="section-profile" class="animate-fade-in hidden pb-16">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-color)] uppercase tracking-tight">Company Profile</h1>
            <p class="text-xs text-body-muted mt-1 uppercase tracking-widest">Manage your corporate details</p>
          </div>
          <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm">
             <p class="text-sm"><strong>Company:</strong> Infosys Technologies</p>
             <p class="text-sm mt-2"><strong>Representative:</strong> Rajesh Kumar</p>
          </div>
        </section>
        
        <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm mt-6">
            <h2 class="text-lg font-bold mb-4">Dedicated Account Representative</h2>
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg"><i class="fas fa-headset"></i></div>
                <div>
                <h3 class="font-bold">Sarah Jenkins</h3>
                <p class="text-sm text-gray-500">Corporate Gifting Specialist</p>
                <p class="text-sm text-primary font-bold mt-1">sarah.j@brandnest.com | +1 (555) 123-4567</p>
                </div>
            </div>
        </div>

      </main>
`;

content = content.replace(/<main[\s\S]*?<\/main>/, fullMainContent);
fs.writeFileSync('dashboard-user.html', content, 'utf8');

console.log('User dashboard fixed.');
