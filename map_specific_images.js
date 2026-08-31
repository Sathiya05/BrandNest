const fs = require('fs');

const replacements = {
    'products.html': {
        'assets/images/tech.jpg': 'assets/images/powerbank.jpg',
        'assets/images/book.jpg': 'assets/images/journal.jpg',
        'assets/images/coffee.jpg': 'assets/images/mug.jpg'
    },
    'customization.html': {
        'assets/images/camera.jpg': 'assets/images/engraving.jpg',
        'assets/images/coffee.jpg': 'assets/images/mug.jpg',
        'assets/images/tech.jpg': 'assets/images/powerbank.jpg',
        'assets/images/book.jpg': 'assets/images/journal.jpg'
    },
    'catalog.html': {
        'assets/images/book.jpg': 'assets/images/eco.jpg',
        'assets/images/tech.jpg': 'assets/images/office.jpg',
        'assets/images/coffee.jpg': 'assets/images/mug.jpg',
        'assets/images/camera.jpg': 'assets/images/team.jpg'
    },
    'about.html': {
        'assets/images/tech.jpg': 'assets/images/team.jpg'
    },
    'blog.html': {
        'assets/images/tech.jpg': 'assets/images/powerbank.jpg',
        'assets/images/book.jpg': 'assets/images/eco.jpg',
        'assets/images/coffee.jpg': 'assets/images/office.jpg',
        'assets/images/camera.jpg': 'assets/images/eco.jpg'
    },
    'home2.html': {
        'assets/images/tech.jpg': 'assets/images/kit.jpg'
    }
};

Object.keys(replacements).forEach(page => {
    if (fs.existsSync(page)) {
        let content = fs.readFileSync(page, 'utf8');
        let oldContent = content;
        
        // Ensure we only replace within the main content (between 2️⃣ and FOOTER) 
        // to avoid touching the hero images which are correctly set!
        const startStringRegex = /<!-- 2️⃣ .*? -->/i;
        const matchStart = content.match(startStringRegex);
        
        if (matchStart) {
            const indexStart = matchStart.index;
            const indexEnd = content.indexOf('<!-- FOOTER -->');
            
            if (indexEnd !== -1 && indexEnd > indexStart) {
                const before = content.substring(0, indexStart);
                let middle = content.substring(indexStart, indexEnd); 
                const after = content.substring(indexEnd); 
                
                // Do replacements ONLY in the middle section!
                for (const [oldImg, newImg] of Object.entries(replacements[page])) {
                    // Regex globally within the middle string
                    const regex = new RegExp(oldImg.replace(/\\/g, '\\\\').replace(/\//g, '\\/').replace(/\./g, '\\.'), 'g');
                    middle = middle.replace(regex, newImg);
                }
                
                content = before + middle + after;
            } 
        }
        
        fs.writeFileSync(page, content, 'utf8');
    }
});

console.log('Images swapped to highly relevant specific images.');
