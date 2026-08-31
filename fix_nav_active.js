const fs = require('fs');

const allFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const betterScript = `
<script>
  document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // First, clear active classes from ALL nav links and reset them to default inactive state
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('text-primary', 'dark:text-primary', 'bg-gray-100', 'dark:bg-primary/10', 'font-bold');
        // Add default inactive classes if they don't have them
        if (!link.classList.contains('bg-primary')) { // Don't mess with dropdown item hovers if they exist
            link.classList.add('text-dark-bg', 'dark:text-white');
        }
    });

    // Then, find the exact matching link and apply active state
    let foundMatch = false;
    document.querySelectorAll('nav a').forEach(link => {
      let href = link.getAttribute('href');
      if (href && href === currentPath) {
        link.classList.add('text-primary', 'dark:text-primary', 'bg-gray-100', 'dark:bg-primary/10', 'font-bold');
        link.classList.remove('text-dark-bg', 'text-gray-600', 'dark:text-white', 'dark:text-white/70');
        foundMatch = true;
        
        // If it's a dropdown child (like index.html or home2.html), also highlight the parent "Home" link
        let parentDropdown = link.closest('.group');
        if (parentDropdown) {
            let parentLink = parentDropdown.querySelector('a[href="#"]');
            if (parentLink) {
                parentLink.classList.add('text-primary', 'dark:text-primary', 'bg-gray-100', 'dark:bg-primary/10', 'font-bold');
                parentLink.classList.remove('text-dark-bg', 'dark:text-white');
            }
        }
      }
    });
    
    // Fallback: if somehow no match, but we are at root, highlight index.html
    if (!foundMatch && currentPath === '') {
        let homeLink = document.querySelector('nav a[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('text-primary', 'dark:text-primary', 'bg-gray-100', 'dark:bg-primary/10', 'font-bold');
            homeLink.classList.remove('text-dark-bg', 'dark:text-white');
        }
    }
  });
</script>
`;

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove hardcoded active state from the Home link in HTML
    content = content.replace(/text-primary bg-gray-100 dark:bg-primary\/10/g, 'text-dark-bg dark:text-white hover:text-primary');

    // 2. Replace the old script with the new better one
    // The old script starts with <script>\n  document.addEventListener("DOMContentLoaded" and ends with </script>\n</body>
    
    const scriptStartRegex = /<script>\s*document\.addEventListener\("DOMContentLoaded", function\(\) \{\s*let currentPath = window\.location\.pathname/g;
    
    if (scriptStartRegex.test(content)) {
        // It has the script. Let's replace the whole block.
        content = content.replace(/<script>\s*document\.addEventListener\("DOMContentLoaded", function\(\) \{\s*let currentPath = window\.location\.pathname[\s\S]*?<\/script>/g, betterScript.trim());
    } else {
        // Doesn't have the script? Shouldn't happen unless I missed it.
        content = content.replace('</body>', betterScript + '\n</body>');
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Navigation active state fixed globally.');
