import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

with open('src/data/marissaMenuData.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

# Extract MENU_ITEMS json string
json_str = js_text.split('export const MENU_ITEMS = ')[1].rstrip(';')
items = json.loads(json_str)

print(f"Auditing {len(items)} items from marissaMenuData.js against raw docx lines...\n")

issues = []

for idx, item in enumerate(items):
    weight = item['weight']
    name_ro = item['name']['ro']
    price = item['price']
    
    # Check if weight is missing, suspicious, or contains default "200g"
    if not weight or weight == "200g" or re.search(r'^\d\s*g$', weight) or len(weight) < 2:
        issues.append((idx+1, name_ro, weight, price))

print(f"Found {len(issues)} items with potentially default or suspicious weight:\n")
for idx, name, w, p in issues[:40]:
    print(f"Item #{idx:3d}: NAME='{name}' | WEIGHT='{w}' | PRICE={p} LEI")
