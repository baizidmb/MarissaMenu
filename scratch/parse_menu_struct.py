import re
import json

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_text = f.read()

# Let's inspect category titles and item patterns
lines = [line.split(': ', 1)[1].strip() for line in raw_text.splitlines() if ': ' in line]

categories = []
items = []
current_cat = "General"

print(f"Total lines read: {len(lines)}")

# Let's write a python script to dump all price-containing lines and surrounding text
items_found = []
for i, line in enumerate(lines):
    # Check for LEI price pattern or LEI/lei
    if re.search(r'\b\d+([.,]\d+)?\s*(lei|LEI|RON)\b', line) or re.search(r'\b(LEI|lei)\b', line):
        prev = lines[i-1] if i > 0 else ""
        nxt = lines[i+1] if i < len(lines)-1 else ""
        items_found.append((i+1, prev, line, nxt))

with open('scratch/extracted_dishes.txt', 'w', encoding='utf-8') as f:
    f.write(f"Total items with LEI prices: {len(items_found)}\n\n")
    for idx, p, l, n in items_found:
        f.write(f"Line {idx}:\n  PREV: {p}\n  ITEM: {l}\n  NEXT: {n}\n-------------------\n")

print(f"Extracted {len(items_found)} items with LEI prices to scratch/extracted_dishes.txt!")
