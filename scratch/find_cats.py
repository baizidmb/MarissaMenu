import re

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

category_candidates = []
for i, l in enumerate(raw_lines):
    if len(l) >= 3 and not re.search(r'\d+\s*(lei|LEI|g|ml|kcal)', l):
        if l.isupper() or any(k in l.upper() for k in ['MIC DEJUN', 'GUSTĂRI', 'FAST FOOD', 'CIORBE', 'SUPE', 'PLATOURI', 'PUI', 'RAȚĂ', 'VITĂ', 'PORC', 'PEȘTE', 'PASTE', 'RISOTTO', 'PIZZA', 'GARNITURI', 'SALATE', 'DESERT', 'TRADIȚIONALE', 'BĂUTURI', 'COCKTAIL', 'VINURI', 'BERE', 'AMBALAJE']):
            category_candidates.append((i+1, l))

with open('scratch/categories_found.txt', 'w', encoding='utf-8') as out:
    for idx, cat in category_candidates:
        out.write(f"Line {idx:4d}: {cat}\n")

print(f"Wrote {len(category_candidates)} potential category headers!")
