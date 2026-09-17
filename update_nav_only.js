const fs = require('fs');
const path = require('path');

const directory = __dirname;
const indexFile = path.join(directory, 'index.html');

if (!fs.existsSync(indexFile)) {
    console.error("Template file index.html not found.");
    process.exit(1);
}

const indexContent = fs.readFileSync(indexFile, 'utf8');

// Safely extract the navigation block from index.html
function extractChunk(content, startMarker, endMarker1, endMarker2) {
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return null;
    let endIndex = content.indexOf(endMarker1, startIndex);
    let length = endMarker1.length;
    if (endIndex === -1 && endMarker2) {
        endIndex = content.indexOf(endMarker2, startIndex);
        length = endMarker2.length;
    }
    if (endIndex === -1) return null;
    return content.substring(startIndex, endIndex + length);
}

// Extract Nav from index.html
const navStart = '<!-- NAVIGATION -->';
const navEndStr = '</nav>\n  </div>';
const navEndStr2 = '</nav>\r\n  </div>';
const newNav = extractChunk(indexContent, navStart, navEndStr, navEndStr2);

if (!newNav) {
    console.error("Failed to extract the NAVIGATION block from index.html");
    process.exit(1);
}

const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));
let updatedCount = 0;

for (const file of htmlFiles) {
    if (file === 'index.html' || file === 'about.html') continue;

    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // We must handle different start markers in different files
    let startMarker = '<!-- NAVIGATION -->';
    if (!content.includes(startMarker)) {
        if (content.includes('<!-- NAVBAR -->')) startMarker = '<!-- NAVBAR -->';
        else if (content.includes('<!-- TOP NAV -->')) startMarker = '<!-- TOP NAV -->';
        else continue;
    }

    const startIndex = content.indexOf(startMarker);
    if (startIndex !== -1) {
        // Find the closing </nav> or </header> (some dashboard pages use header)
        let endIndex = content.indexOf('</nav>', startIndex);
        let endLength = 6; // length of </nav>
        
        // Include the trailing </div> if it's there like in index.html
        if (endIndex !== -1) {
            const afterNav = content.substring(endIndex, endIndex + 20);
            if (afterNav.includes('</div>')) {
                endIndex = content.indexOf('</div>', endIndex);
                endLength = 6;
            }
        } else {
            // Check for </header>
            endIndex = content.indexOf('</header>', startIndex);
            endLength = 9;
        }

        if (endIndex !== -1) {
            const oldNav = content.substring(startIndex, endIndex + endLength);
            content = content.replace(oldNav, newNav);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully updated navigation in: ${file}`);
        updatedCount++;
    }
}

console.log(`\nOperation Complete. Updated the navigation bar on ${updatedCount} pages to perfectly match index.html.`);
