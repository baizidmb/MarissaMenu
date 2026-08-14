import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

# Skip preamble (allergens legend and frozen notice) until line 24 ("Mic dejun")
lines = raw_lines[23:] # starts at line 24

dishes = []
current_cat = "mic-dejun"

def parse_price_and_weight(line):
    # e.g., "Mic dejun 3,7300gr.  25,00 lei"
    # e.g., "Mic dejun, cartofi prăjiți cu ouă și slănină 3,7 250gr  28,00lei"
    # e.g., "Omletă cu şuncă și caşcaval 3,7225 gr.28,00 lei"
    # e.g., "Bacon prăjit/slănină prăjită100 gr. 18,00 lei"
    
    # 1. Price match at end
    price_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    price = float(price_match.group(1).replace(',', '.')) if price_match else 0.0
    
    # Text before price
    prefix = line[:price_match.start()].strip() if price_match else line
    
    # 2. Weight match (e.g., 300gr., 250gr, 25/80/100/25 gr., 100 gr., 1 pahar, 200 ml.)
    weight_match = re.search(r'(\d+(/\d+)*\s*(gr|g|ml|l|pahar|buc|portie|porție|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)
    weight = weight_match.group(1) if weight_match else ""
    
    name_and_allergens = prefix[:weight_match.start()].strip() if weight_match else prefix
    
    # 3. Allergen indices match at end of name_and_allergens (e.g. 3,7 or 1,3, 7, 11 or 7 or 3, 7)
    # Be careful not to confuse numbers that are part of name like "3" in "3 ouă"
    allergens = []
    
    # Match trailing numbers and commas e.g. " 3,7" or " 1,3, 7, 11"
    alg_match = re.search(r'(\s+\d+(\s*,\s*\d+)*)$', name_and_allergens)
    if alg_match:
        alg_str = alg_match.group(1)
        allergens = [int(num.strip()) for num in re.findall(r'\d+', alg_str) if 1 <= int(num.strip()) <= 14]
        name = name_and_allergens[:alg_match.start()].strip()
    else:
        name = name_and_allergens.strip()

    # Clean up name trailing digits if attached like "Cașcaval 7"
    name_clean_match = re.search(r'^(.*?)\s*(\d+(\s*,\s*\d+)*)$', name)
    if name_clean_match:
        cand_name = name_clean_match.group(1).strip()
        cand_algs = [int(num.strip()) for num in re.findall(r'\d+', name_clean_match.group(2)) if 1 <= int(num.strip()) <= 14]
        if cand_algs and len(cand_name) > 2:
            name = cand_name
            allergens.extend(cand_algs)
            allergens = sorted(list(set(allergens)))

    return name, weight, price, allergens

# Let's test on the first 20 lines
print("=== TESTING PARSER ===")
idx = 0
while idx < len(lines):
    l = lines[idx]
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        name, weight, price, algs = parse_price_and_weight(l)
        ing = ""
        nutr = ""
        
        # Check next line for ingredients (in parens)
        if idx + 1 < len(lines) and lines[idx+1].startswith('('):
            ing = lines[idx+1].strip('() ')
            idx += 1
            
        # Check next line for nutritional info
        if idx + 1 < len(lines) and "Informații" in lines[idx+1]:
            nutr = lines[idx+1]
            idx += 1
            
        print(f"NAME: '{name}' | WEIGHT: '{weight}' | PRICE: {price} LEI | ALGS: {algs}")
        if ing: print(f"  ING: '{ing}'")
        if nutr: print(f"  NUTR: '{nutr[:60]}...'")
        print("-" * 50)
    idx += 1
