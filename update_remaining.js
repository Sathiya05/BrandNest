const fs = require('fs');
const path = require('path');

const directory = './';

// The new corporate tailwind config
const newConfig = `  <script>
    tailwind.config = { 
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'dark-bg': '#0F172A',
            'light-bg': '#F8FAFC',
            'primary': '#2563EB', // Bright Corporate Blue
            'secondary': '#F59E0B' // Vibrant Amber
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          backgroundImage: {
            'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
            'gradient-secondary': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
          }
        }
      }
    }
  </script>`;

// Read the exact new navigation from index.html
let indexContent = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
const navStartStr = '  <!-- NAVIGATION -->';
const navEndStr = '    </nav>\n  </div>';
const navStart = indexContent.indexOf(navStartStr);
const navEnd = indexContent.indexOf(navEndStr) + navEndStr.length;

if (navStart === -1 || navEnd === -1) {
    console.error("Could not find navigation block in index.html");
    process.exit(1);
}
const newNav = indexContent.slice(navStart, navEnd);

fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.html' && file !== 'index.html') {
            const filePath = path.join(directory, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // Replace tailwind config
            const configRegex = /<script>\s*tailwind\.config\s*=\s*{[\s\S]*?}\s*<\/script>/;
            if (configRegex.test(content)) {
                content = content.replace(configRegex, newConfig);
                modified = true;
            }

            // Replace Navigation
            const navRegex = /<!-- NAVIGATION -->[\s\S]*?<\/nav>\s*<\/div>/;
            if (navRegex.test(content)) {
                content = content.replace(navRegex, newNav);
                modified = true;
            } else {
                console.log(`Could not find nav block in ${file}`);
            }

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
    console.log('All files updated successfully!');
});
