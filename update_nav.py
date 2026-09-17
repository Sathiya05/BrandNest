import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

nav_pattern = re.compile(r'<!-- NAVIGATION -->.*?<\/nav>\n  <\/div>', re.DOTALL)
match = nav_pattern.search(index_content)
if not match:
    print("Not found in index")
    exit(1)

nav_block = match.group(0)

files = ['blog.html', 'catalog.html', 'contact.html', 'customization.html', 'faq.html']
for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = nav_pattern.sub(nav_block, content, count=1)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filename}")
