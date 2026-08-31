const fs = require('fs');

['dashboard-user.html', 'dashboard-admin.html'].forEach(page => {
    if (fs.existsSync(page)) {
        let content = fs.readFileSync(page, 'utf8');

        // The background image block looks like:
        // <!-- BACKGROUND IMAGE -->
        // <div class="fixed inset-0 z-[-1] pointer-events-none">
        //   <img src="assets/images/..." ...>
        // </div>
        
        // Use a regular expression to match and remove the block
        content = content.replace(/<!-- BACKGROUND IMAGE -->\s*<div class="fixed inset-0 z-\[-1\] pointer-events-none">\s*<img[^>]+>\s*<\/div>/g, '');
        
        fs.writeFileSync(page, content, 'utf8');
    }
});

console.log('Background images removed from dashboard pages.');
