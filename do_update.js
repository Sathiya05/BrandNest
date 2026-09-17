import fs from 'fs';

const indexHtml = fs.readFileSync('index.html', 'utf-8');
const indexLines = indexHtml.split('\n');
// index.html nav block is roughly lines 57 to 186 (1-indexed), which is index 56 to 185.
// Let's find it dynamically to be safe.
const navStartIndex = indexLines.findIndex(l => l.includes('<!-- NAVIGATION -->'));
let navEndIndex = navStartIndex;
while (navEndIndex < indexLines.length) {
    if (indexLines[navEndIndex].includes('</nav>')) {
        navEndIndex += 2; // include the closing </div>
        break;
    }
    navEndIndex++;
}

const newNavBlock = indexLines.slice(navStartIndex, navEndIndex).join('\n');

function updateFile(filename, startMarker, endMarker) {
    let content = fs.readFileSync(filename, 'utf-8');
    const lines = content.split('\n');
    
    const startIdx = lines.findIndex(l => l.includes(startMarker));
    let endIdx = startIdx;
    
    if (startIdx === -1) {
        console.log(`Could not find start marker in ${filename}`);
        return;
    }

    if (endMarker === '</header>') {
        endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('</header>')) + 1;
    } else {
        while (endIdx < lines.length) {
            if (lines[endIdx].includes('</nav>')) {
                if (filename.includes('dashboard')) {
                    endIdx += 1;
                } else {
                    endIdx += 2;
                }
                break;
            }
            endIdx++;
        }
    }

    const before = lines.slice(0, startIdx).join('\n');
    const after = lines.slice(endIdx).join('\n');
    
    fs.writeFileSync(filename, before + '\n' + newNavBlock + '\n' + after);
    console.log(`Updated ${filename}`);
}

updateFile('home2.html', '<!-- NAVIGATION -->', '</nav>');
updateFile('lead-times.html', '<!-- NAVIGATION -->', '</nav>');
updateFile('dashboard-admin.html', '<!-- NAVBAR -->', '</nav>');
updateFile('dashboard-user.html', '<!-- TOP NAV -->', '</header>');
