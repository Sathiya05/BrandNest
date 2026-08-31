const fs = require('fs');

const dashboardFiles = ['dashboard-user.html', 'dashboard-admin.html'];

dashboardFiles.forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    if (file === 'dashboard-user.html') {
        if (!content.includes('Dedicated Account Representative')) {
            const extraSection = `
              <div class="bg-card border border-theme rounded-2xl p-6 shadow-sm col-span-1 md:col-span-2 mt-6">
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
            `;
            content = content.replace('<!-- FOOTER -->', extraSection + '\n<!-- FOOTER -->');
            // Wait, my update script replaced it slightly differently. Let's insert before </section>
            content = content.replace('</section>', extraSection + '\n</section>');
        }
    }
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Dashboards updated with 6 sections.');
