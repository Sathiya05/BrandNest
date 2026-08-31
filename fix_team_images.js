const fs = require('fs');

const page = 'about.html';
if (fs.existsSync(page)) {
    let content = fs.readFileSync(page, 'utf8');

    // We have 4 identical placeholders. We will use a regex replacer function to increment.
    let count = 1;
    const placeholder = /<div class="h-48 bg-gray-300 dark:bg-gray-700 w-full mb-4 flex items-center justify-center"><i class="fas fa-user-tie text-6xl text-gray-400"><\/i><\/div>/g;

    content = content.replace(placeholder, (match) => {
        const img = `<img src="assets/images/team${count}.jpg" class="h-48 w-full object-cover mb-4">`;
        count++;
        return img;
    });

    fs.writeFileSync(page, content, 'utf8');
    console.log('Team images updated in about.html');
} else {
    console.log('about.html not found');
}
