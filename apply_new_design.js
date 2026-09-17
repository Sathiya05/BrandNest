const fs = require('fs');
const path = require('path');

const directory = __dirname;
const templateFile = path.join(directory, 'about.html');

if (!fs.existsSync(templateFile)) {
    console.error("Template file about.html not found.");
    process.exit(1);
}

const templateContent = fs.readFileSync(templateFile, 'utf8');

function extractChunk(content, startMarker, endMarker) {
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return null;
    const endIndex = content.indexOf(endMarker, startIndex);
    if (endIndex === -1) return null;
    return content.substring(startIndex, endIndex + endMarker.length);
}

// 1. Extract Head
const headStart = '<link rel="preconnect" href="https://fonts.googleapis.com">';
const headEnd = '</style>';
let newHead = extractChunk(templateContent, headStart, headEnd);

// 2. Extract Nav
const navStart = '<!-- NAVIGATION -->';
const navEndStr = '</nav>\n  </div>';
const navEndStr2 = '</nav>\r\n  </div>';
let newNav = extractChunk(templateContent, navStart, navEndStr) || extractChunk(templateContent, navStart, navEndStr2);

// 3. Extract Footer
const footerStart = '<!-- FOOTER -->';
const footerEnd = '</html>';
let newFooter = extractChunk(templateContent, footerStart, footerEnd);

if (!newHead || !newNav || !newFooter) {
    console.error("Failed to extract necessary chunks from about.html");
    if (!newHead) console.error("Missing Head");
    if (!newNav) console.error("Missing Nav");
    if (!newFooter) console.error("Missing Footer");
    process.exit(1);
}

const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));
let updatedCount = 0;

for (const file of htmlFiles) {
    if (file === 'index.html' || file === 'about.html') continue;

    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace Head
    const oldHeadStartStr = '<script src="https://cdn.tailwindcss.com"></script>';
    const headStartIndex = content.indexOf(oldHeadStartStr);
    const headEndIndex = content.indexOf(headEnd, headStartIndex);
    if (headStartIndex !== -1 && headEndIndex !== -1) {
        const oldHead = content.substring(headStartIndex, headEndIndex + headEnd.length);
        content = content.replace(oldHead, newHead);
        modified = true;
    }

    // Replace Nav
    const navStartIndex = content.indexOf(navStart);
    let navEndIndex = content.indexOf(navEndStr, navStartIndex);
    let nEndLength = navEndStr.length;
    if (navEndIndex === -1) {
        navEndIndex = content.indexOf(navEndStr2, navStartIndex);
        nEndLength = navEndStr2.length;
    }
    
    if (navStartIndex !== -1 && navEndIndex !== -1) {
        const oldNav = content.substring(navStartIndex, navEndIndex + nEndLength);
        content = content.replace(oldNav, newNav);
        modified = true;
    }

    // Replace Footer
    const footerStartIndex = content.indexOf(footerStart);
    const footerEndIndex = content.indexOf(footerEnd, footerStartIndex);
    if (footerStartIndex !== -1 && footerEndIndex !== -1) {
        const oldFooter = content.substring(footerStartIndex, footerEndIndex + footerEnd.length);
        content = content.replace(oldFooter, newFooter);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${file}`);
        updatedCount++;
    } else {
        console.log(`Skipped (no markers found): ${file}`);
    }
}

console.log(`\nSuccessfully updated ${updatedCount} files.`);
