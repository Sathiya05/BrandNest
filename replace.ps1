$htmlFiles = Get-ChildItem -Path .\*.html

$replacements = @(
    @("IronPulse", "BrandNest"),
    @("Transform Your Body", "Premium Corporate Gifting"),
    @("Premium fitness center, personal training, and nutrition support.", "Premium corporate gifting, custom merchandise, and bulk orders."),
    @("fa-dumbbell", "fa-gift"),
    @("fa-heartpulse", "fa-briefcase"),
    @("fa-person-running", "fa-truck-fast"),
    @("fa-stopwatch", "fa-clock"),
    @("fa-apple-whole", "fa-palette"),
    @("groupclasses\.html", "products.html"),
    @("facilities\.html", "customization.html"),
    @("nutrition\.html", "lead-times.html"),
    @("pricing\.html", "catalog.html"),
    @(">Group Classes<", ">Products<"),
    @(">Facilities<", ">Customization<"),
    @(">Nutrition<", ">Lead Times<"),
    @(">Pricing<", ">Catalog<"),
    @(">Group Classes\b", ">Products"),
    @(">Facilities\b", ">Customization"),
    @(">Nutrition\b", ">Lead Times"),
    @(">Pricing\b", ">Catalog"),
    @("\bGroup Classes\b", "Products"),
    @("\bFacilities\b", "Customization"),
    @("\bNutrition\b", "Lead Times"),
    @("\bPricing\b", "Catalog"),
    @("Fitness", "Merchandise"),
    @("Workout", "Branding"),
    @("Gym", "Corporate"),
    @("fitness", "merchandise"),
    @("workout", "branding"),
    @("gym", "company"),
    @("Trainer", "Manager"),
    @("trainer", "manager"),
    @("Coach", "Specialist"),
    @("Memberships", "Orders"),
    @("Membership", "Order"),
    @("memberships", "orders"),
    @("membership", "order"),
    @("Classes", "Items"),
    @("classes", "items")
)

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    foreach ($replacement in $replacements) {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $replacement[0], $replacement[1])
    }
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Processed $($htmlFiles.Count) files."
