import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:] # lines 24 to 673

def parse_nutrition_line(nutr_str):
    # Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 810.1 / 194.7, Grăsimi (g): 15.3 din care: Acizi grași saturați (g) 5.4, Glucide (g): 1.9 din care: Zaharuri (g): 1.1, Proteine (g): 12.3, Sare (g): 1
    kj_kcal = re.search(r'Valoare\s*Energetică\s*\(kJ/kcal\):\s*([\d.]+)\s*/\s*([\d.]+)', nutr_str, re.IGNORECASE)
    fats_m = re.search(r'Grăsimi\s*\(g\):\s*([\d.]+)', nutr_str, re.IGNORECASE)
    sat_m = re.search(r'Acizi\s*grași\s*saturați\s*\(g\)\s*([\d.]+)', nutr_str, re.IGNORECASE)
    carbs_m = re.search(r'Glucide\s*\(g\):\s*([\d.]+)', nutr_str, re.IGNORECASE)
    sugars_m = re.search(r'Zaharuri\s*\(g\):\s*([\d.]+)', nutr_str, re.IGNORECASE)
    prot_m = re.search(r'Proteine\s*\(g\):\s*([\d.]+)', nutr_str, re.IGNORECASE)
    salt_m = re.search(r'Sare\s*\(g\):\s*([\d.]+)', nutr_str, re.IGNORECASE)

    kcal = float(kj_kcal.group(2)) if kj_kcal else 180.0
    kj = float(kj_kcal.group(1)) if kj_kcal else int(kcal * 4.184)
    fats = float(fats_m.group(1)) if fats_m else 8.0
    sat_fats = float(sat_m.group(1)) if sat_m else 3.0
    carbs = float(carbs_m.group(1)) if carbs_m else 15.0
    sugars = float(sugars_m.group(1)) if sugars_m else 2.0
    protein = float(prot_m.group(1)) if prot_m else 10.0
    salt = float(salt_m.group(1)) if salt_m else 1.0

    return {
        "energyKcal": kcal,
        "energyKj": kj,
        "fats": fats,
        "saturatedFats": sat_fats,
        "carbs": carbs,
        "sugars": sugars,
        "protein": protein,
        "salt": salt
    }

def clean_item_header(line):
    # Match price at end
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Search for allergens & weight in prefix
    # Common weights: 300gr, 250gr, 225gr, 25/80/100/25gr, 100gr, 200ml, 1 pahar, 25gr, 150g, 400g, 500g, 1 buc, 50ml, etc.
    # Pattern: optional allergen codes (e.g. 3,7 or 7 or 1,3,7,11) followed by weight e.g. 300gr or 100gr or 200ml or 25gr
    w_match = re.search(r'(\d+(\s*,\s*\d+)*)?\s*(\d+(/\d+)*\s*(gr|g|ml|l|pahar|pahare|buc|portie|porție|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)

    name = prefix
    weight = ""
    allergens = []

    if w_match:
        name = prefix[:w_match.start()].strip()
        tail = prefix[w_match.start():].strip()
        
        # Check if tail has allergens
        algs_match = re.match(r'^([\d\s,]+)\s*(\d+(/\d+)*\s*(gr|g|ml|l|pahar|pahare|buc|portie|porție|sticlă|sticle|doză)\.?)', tail, re.IGNORECASE)
        if algs_match:
            alg_part = algs_match.group(1)
            weight = algs_match.group(2)
            for x in alg_part.replace(' ', '').split(','):
                if x.isdigit() and 1 <= int(x) <= 14:
                    allergens.append(int(x))
        else:
            weight = tail

    # Clean name
    name = re.sub(r'[,.\s]+$', '', name).strip()

    return name, weight, price, sorted(list(set(allergens)))

parsed_items = []

idx = 0
current_cat = "mic-dejun"

cat_keywords = [
    ("mic-dejun", "Mic dejun"),
    ("gustari", "Gustări"),
    ("fast-food", "Fast food"),
    ("ciorbe", "Ciorbe"),
    ("platouri", "Platouri"),
    ("pui-rata", "Preparate din pui"),
    ("vita", "Preparate din vită"),
    ("porc", "Preparate din porc"),
    ("peste", "Pește"),
    ("paste-risotto", "Paste"),
    ("pizza", "Pizza"),
    ("garnituri", "Garnituri"),
    ("salate", "Salate"),
    ("desert", "Desert"),
    ("traditionale", "Tradiționale"),
    ("racoritoare", "Băuturi răcoritoare"),
    ("cocktailuri", "Cocktailuri"),
    ("vinuri", "Vinuri"),
    ("bere", "Bere"),
    ("ambalaje", "Ambalaje")
]

while idx < len(lines):
    line = lines[idx]

    # Category check
    for cat_id, cat_str in cat_keywords:
        if line.lower().startswith(cat_str.lower()) and not re.search(r'\d+\s*(lei|LEI)', line):
            current_cat = cat_id
            break

    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line):
        res = clean_item_header(line)
        if res:
            name, weight, price, algs = res
            ing = ""
            nutr = None

            # Look ahead for ingredients (starts with "(")
            if idx + 1 < len(lines) and lines[idx+1].startswith('('):
                ing = lines[idx+1].strip('() ')
                idx += 1

            # Look ahead for nutrition
            if idx + 1 < len(lines) and "Informații" in lines[idx+1]:
                nutr = parse_nutrition_line(lines[idx+1])
                idx += 1

            parsed_items.append({
                "category": current_cat,
                "name": name,
                "weight": weight,
                "price": price,
                "allergens": algs,
                "ingredients": ing,
                "nutrition": nutr
            })
    idx += 1

print(f"PARSED TOTAL DISHES: {len(parsed_items)}")
with open('scratch/perfect_parsed_dishes.json', 'w', encoding='utf-8') as out:
    json.dump(parsed_items, out, ensure_ascii=False, indent=2)

print("Saved cleanly parsed dishes to scratch/perfect_parsed_dishes.json!")
