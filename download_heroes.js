const { execSync } = require('child_process');

const pages = [
    'index', 'products', 'customization', 
    'lead-times', 'catalog', 'about', 'contact',
    'home2', 'blog', 'faq', 'login', 'register',
    'dashboard-user', 'dashboard-admin'
];

pages.forEach(page => {
    const url = 'https://picsum.photos/seed/' + page + '/1920/1080';
    const dest = 'assets/images/hero-' + page + '.jpg';
    console.log('Downloading ' + page + '...');
    try {
        execSync('curl.exe -L "' + url + '" -o "' + dest + '"', { stdio: 'ignore' });
    } catch (e) {
        console.error('Failed for', page);
    }
});

console.log('All hero images downloaded.');
