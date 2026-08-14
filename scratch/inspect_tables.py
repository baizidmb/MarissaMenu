import json
import re

with open('scratch/parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

print(f"Total elements: {len(elements)}")

# Let's inspect paragraphs vs tables
tables = [e for e in elements if e['type'] == 'table']
print(f"Total tables: {len(tables)}")

for idx, t in enumerate(tables[:10]):
    print(f"\n--- TABLE {idx+1} (Rows: {len(t['data'])}) ---")
    for r_idx, row in enumerate(t['data'][:5]):
        print(f"  Row {r_idx+1}: {row}")
