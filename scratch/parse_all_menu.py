import re
import json

with open('scratch/menu_docx_raw.txt', 'r', encoding='utf-8') as f:
    lines = [l.strip() for l in f if l.strip()]

print(f"Total non-empty lines: {len(lines)}")

# Let's inspect category headers or items
for i, line in enumerate(lines[:100]):
    print(f"{i+1:3d}: {line}")
