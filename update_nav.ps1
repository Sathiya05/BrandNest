$nav = (Get-Content index.html -Raw) -match '(?s)(<!-- NAVIGATION -->\r?\n.*?</nav>\r?\n\s+</div>)'
if (-not $nav) {
    Write-Host "Nav block not found in index.html"
    exit 1
}
$navBlock = $matches[1]

# In blog.html there are two <!-- NAVIGATION --> comments, so the regex might grab from the first to the end.
# We'll use a slightly more specific regex:
$regex = '(?s)<!-- NAVIGATION -->.*?</nav>\r?\n\s+</div>'

$files = @('blog.html', 'catalog.html', 'contact.html', 'customization.html', 'faq.html')
foreach ($f in $files) {
    $content = Get-Content $f -Raw
    $newContent = $content -replace $regex, $navBlock
    Set-Content -Path $f -Value $newContent -NoNewline
    Write-Host "Updated $f"
}
