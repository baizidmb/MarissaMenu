import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

def parse_line_robust(line):
    # Match price at end
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Clean underscores and trailing garbage
    prefix = re.sub(r'_+', ' ', prefix).strip()

    name = prefix
    weight = ""
    allergens = []

    # 1. Check for kg weights e.g. "1,71 kg" or "1.5 kg"
    kg_match = re.search(r'(\d+([.,]\d+)?)\s*(kg|KG)', prefix)
    if kg_match:
        weight = kg_match.group(1).replace(',', '.') + " kg"
        prefix = prefix[:kg_match.start()].strip()

    # 2. Check for ml / l volumes e.g. "250ml", "500ml", "50ml", "750ml", "200 ml", "0.75l", "330 ml"
    elif re.search(r'(\d+(/\d+)*\s*(ml|l|cl|pahar|pahare|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE):
        vol_match = re.search(r'(\d+(/\d+)*\s*(ml|l|cl|pahar|pahare|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)
        weight = vol_match.group(1).strip()
        prefix = prefix[:vol_match.start()].strip()

    # 3. Check for compound weights or standard grammage e.g. "150/200/50", "380/200/80", "300 gr", "250g", "180g"
    elif re.search(r'(\d+(/\d+)*\s*(gr|g|buc|portie|porție)\.?)', prefix, re.IGNORECASE):
        w_match = re.search(r'(\d+(/\d+)*\s*(gr|g|buc|portie|porție)\.?)', prefix, re.IGNORECASE)
        weight = w_match.group(1).strip()
        prefix = prefix[:w_match.start()].strip()

    # 4. Fallback for raw numbers at end of prefix e.g. "150/200/50" or "380/200/80" or "500" or "450"
    else:
        num_tail = re.search(r'([\d/,.-]+)$', prefix)
        if num_tail:
            raw_w = num_tail.group(1).strip()
            if '/' in raw_w or len(raw_w) >= 2:
                weight = raw_w + "g"
                prefix = prefix[:num_tail.start()].strip()

    # Extract allergen codes from trailing numbers of prefix if any e.g. "7", "3,7", "1,3,7,11"
    alg_match = re.search(r'(\s+\d+(\s*,\s*\d+)*)$', prefix)
    if alg_match:
        alg_str = alg_match.group(1)
        allergens = [int(x) for x in re.findall(r'\d+', alg_str) if 1 <= int(x) <= 14]
        prefix = prefix[:alg_match.start()].strip()

    # Clean name
    name = re.sub(r'[,._\-\s]+$', '', prefix).strip()
    
    # Strip leading numbers like "3.PIZZA PROSCIUTTO" -> "Pizza Prosciutto"
    name = re.sub(r'^\d+[\.\)]\s*', '', name).strip()
    
    # Strip alcohol text like "– 40%alcool/volum" from name
    name = re.sub(r'[\s–\-]+\d+([.,]\d+)?\s*%?\s*alcool.*$', '', name, flags=re.IGNORECASE).strip()

    # Normalize weight string
    weight = re.sub(r'\s+', '', weight).strip()
    weight = weight.replace('gr', 'g').replace('ML', 'ml').replace('KG', 'kg')
    if weight.endswith('.'): weight = weight[:-1]
    
    if not weight or len(weight) < 2:
        if "PIZZA" in name.upper():
            weight = "450g"
        elif "VIN" in name.upper() or "CHARDONNAY" in name.upper() or "CABERNET" in name.upper() or "ROSE" in name.upper() or "SAUVIGNON" in name.upper() or "FETEASCĂ" in name.upper() or "PINOT" in name.upper():
            weight = "750ml"
        elif "BERE" in name.upper() or "PERONI" in name.upper() or "URSUS" in name.upper() or "PILSNER" in name.upper() or "TIMIȘOREANA" in name.upper():
            weight = "500ml"
        else:
            weight = "200g"

    return name, weight, price, sorted(list(set(allergens)))

parsed_items = []
for i, l in enumerate(lines):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        res = parse_line_robust(l)
        if res:
            n, w, p, a = res
            parsed_items.append({"idx": len(parsed_items)+1, "name": n, "weight": w, "price": p, "allergens": a})

print(f"Robustly parsed {len(parsed_items)} items!")

# Print items that previously failed
print("\n=== VERIFYING PREVIOUSLY SUSPICIOUS ITEMS ===")
target_indices = [37, 46, 47, 104, 106, 107, 108, 109, 115, 116, 117, 118, 119, 156, 157, 184, 198, 199, 200, 201, 202, 203, 204, 205, 206]
for item in parsed_items:
    if item['idx'] in target_indices:
        print(f"Item #{item['idx']:3d}: NAME='{item['name']}' | WEIGHT='{item['weight']}' | PRICE={item['price']} LEI | ALGS={item['allergens']}")
