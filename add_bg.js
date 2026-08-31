const fs = require('fs');

const authPages = ['login.html', 'register.html'];
const dashPages = ['dashboard-user.html', 'dashboard-admin.html'];

const bgHtml = `
  <!-- BACKGROUND IMAGE -->
  <div class="fixed inset-0 z-[-1] pointer-events-none">
    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover opacity-20 dark:opacity-40" alt="Corporate Gifting Background">
  </div>
`;

authPages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    if (!content.includes('Corporate Gifting Background')) {
        content = content.replace(/<body[^>]*>/, match => match + '\n' + bgHtml);
        fs.writeFileSync(page, content, 'utf8');
    }
});

dashPages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    if (!content.includes('Corporate Gifting Background')) {
        content = content.replace(/<body[^>]*>/, match => match + '\n' + bgHtml);
        fs.writeFileSync(page, content, 'utf8');
    }
});

console.log('Added background image to auth and dashboard pages.');
