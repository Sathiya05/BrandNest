const fs = require('fs');
const path = require('path');

const dir = __dirname;

// BrandNest SVG favicon as data URI - blue gradient with stacked layers icon
const svgFavicon = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563EB"/>
      <stop offset="100%" style="stop-color:#60A5FA"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#bg)"/>
  <rect x="20" y="62" width="60" height="10" rx="5" fill="white" opacity="0.95"/>
  <rect x="24" y="47" width="52" height="10" rx="5" fill="white" opacity="0.85"/>
  <rect x="28" y="32" width="44" height="10" rx="5" fill="white" opacity="0.75"/>
</svg>`)}`;

// New active-state + nav script - much more visible active styling
const newNavScript = `<script>
  // ── Active Nav Highlighting ──────────────────────────────────────────────
  (function() {
    var current = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav links (not dropdown items, not logo, not buttons)
    document.querySelectorAll('nav > div > div .flex.items-center.gap-1 > a, nav .flex.items-center.gap-1 > a').forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href === current) {
        // Remove any existing state classes
        link.classList.remove('text-dark-bg', 'dark:text-white', 'text-gray-600');
        // Apply strong active style: blue text + underline + bold
        link.classList.add('!text-primary', 'font-bold');
        link.style.cssText = 'color:#2563EB !important; font-weight:700; position:relative;';
        // Add animated underline indicator
        var indicator = document.createElement('span');
        indicator.style.cssText = 'position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);width:70%;height:2.5px;background:linear-gradient(90deg,#2563EB,#60A5FA);border-radius:9999px;';
        link.style.position = 'relative';
        link.appendChild(indicator);
      }
    });

    // Mobile nav links
    document.querySelectorAll('#mobile-menu a').forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href === current) {
        link.style.cssText = 'color:#2563EB !important; font-weight:800; border-left:3px solid #2563EB; padding-left:12px;';
      }
    });
  })();
</script>`;

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !['dashboard-admin.html','dashboard-user.html','login.html','register.html'].includes(f));

let updated = 0;
htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace favicon link with inline SVG data URI
  content = content.replace(
    /<link rel="icon"[^>]*>/g,
    `<link rel="icon" type="image/svg+xml" href="${svgFavicon}">`
  );

  // 2. Remove old active-state scripts (the DOMContentLoaded nav highlighter blocks)
  content = content.replace(
    /<script>\s*document\.addEventListener\("DOMContentLoaded"[\s\S]*?<\/script>/g,
    ''
  );

  // 3. Inject new active-state script just before </body>
  // Only add if not already present
  if (!content.includes('Active Nav Highlighting')) {
    content = content.replace('</body>', newNavScript + '\n</body>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
  console.log('✅ Updated:', file);
});

console.log(`\nDone! Updated ${updated} files.`);
