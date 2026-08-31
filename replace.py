import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

replacements = [
    (r"IronPulse", r"BrandNest"),
    (r"Transform Your Body", r"Premium Corporate Gifting"),
    (r"Premium fitness center, personal training, and nutrition support.", r"Premium corporate gifting, custom merchandise, and bulk orders."),
    (r"fa-dumbbell", r"fa-gift"),
    (r"fa-heartpulse", r"fa-briefcase"),
    (r"fa-person-running", r"fa-truck-fast"),
    (r"fa-stopwatch", r"fa-clock"),
    (r"fa-apple-whole", r"fa-palette"),
    (r"groupclasses\.html", r"products.html"),
    (r"facilities\.html", r"customization.html"),
    (r"nutrition\.html", r"lead-times.html"),
    (r"pricing\.html", r"catalog.html"),
    (r">Group Classes<", r">Products<"),
    (r">Facilities<", r">Customization<"),
    (r">Nutrition<", r">Lead Times<"),
    (r">Pricing<", r">Catalog<"),
    (r">Group Classes\b", r">Products"),
    (r">Facilities\b", r">Customization"),
    (r">Nutrition\b", r">Lead Times"),
    (r">Pricing\b", r">Catalog"),
    (r"\bGroup Classes\b", r"Products"),
    (r"\bFacilities\b", r"Customization"),
    (r"\bNutrition\b", r"Lead Times"),
    (r"\bPricing\b", r"Catalog"),
    (r"Fitness", r"Merchandise"),
    (r"Workout", r"Branding"),
    (r"Gym", r"Corporate"),
    (r"fitness", r"merchandise"),
    (r"workout", r"branding"),
    (r"gym", r"company"),
    (r"Trainer", r"Manager"),
    (r"trainer", r"manager"),
    (r"Coach", r"Specialist"),
    (r"Memberships", r"Orders"),
    (r"Membership", r"Order"),
    (r"memberships", r"orders"),
    (r"membership", r"order"),
    (r"Classes", r"Items"),
    (r"classes", r"items"),
]

for file_name in html_files:
    with open(file_name, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = re.sub(old, new, content)
        
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Processed {len(html_files)} files.")
