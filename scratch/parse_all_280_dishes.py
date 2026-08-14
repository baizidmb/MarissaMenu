import json
import re

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

# Let's group into items
raw_items = []
current_cat = "mic-dejun"

def get_cat(text):
    u = text.upper()
    if "MIC DEJUN" in u or "BREAKFAST" in u: return "mic-dejun"
    if "GUSTĂRI" in u or "APERITIVE" in u or "GUSTARI" in u: return "gustari"
    if "FAST FOOD" in u or "BURGER" in u or "SHAORMA" in u: return "fast-food"
    if "CIORB" in u or "SUP" in u or "SOUP" in u or "GOULASH" in u or "GULYA" in u: return "ciorbe"
    if "PLATOU" in u or "PLATTER" in u: return "platouri"
    if "PUI" in u or "RAȚĂ" in u or "RATA" in u or "POULTRY" in u or "DUCK" in u or "CHICKEN" in u: return "pui-rata"
    if "VITĂ" in u or "VITA" in u or "BEEF" in u or "STEAK" in u: return "vita"
    if "PORC" in u or "PORK" in u or "RIBS" in u or "CIOLAN" in u: return "porc"
    if "PEȘTE" in u or "PESTE" in u or "FISH" in u or "SEAFOOD" in u or "CREVE" in u: return "peste"
    if "PASTE" in u or "PASTA" in u or "RISOTTO" in u or "SPAGHET" in u: return "paste-risotto"
    if "PIZZA" in u or "FOCACCIA" in u: return "pizza"
    if "GARNITUR" in u or "SIDE" in u or "SOS" in u or "EXTRA" in u: return "garnituri"
    if "SALAT" in u or "SALAD" in u: return "salate"
    if "DESERT" in u or "DESSERT" in u or "PAPANAS" in u: return "desert"
    if "TRADIȚIONAL" in u or "TRADITIONAL" in u or "SĂRBĂTORI" in u or "SARMALE" in u: return "traditionale"
    if "RĂCORITOARE" in u or "RACORITOARE" in u or "CAFEA" in u or "TEA" in u or "COFFEE" in u: return "racoritoare"
    if "COCKTAIL" in u or "TĂRII" in u or "TARII" in u or "SPIRITS" in u: return "cocktailuri"
    if "VIN" in u or "WINE" in u: return "vinuri"
    if "BERE" in u or "BEER" in u: return "bere"
    if "AMBALAJ" in u or "PACKAGING" in u or "CASEROL" in u: return "ambalaje"
    return None

# Parse items
idx = 0
while idx < len(lines):
    line = lines[idx]
    cat_match = get_cat(line)
    if cat_match and not re.search(r'\d+\s*(lei|LEI|g|ml)', line):
        current_cat = cat_match
        idx += 1
        continue
    
    # Check if line contains a price
    price_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if price_match:
        price_val = float(price_match.group(1).replace(',', '.'))
        
        # Name and weight might be in prev lines or same line
        prev1 = lines[idx-1] if idx > 0 else ""
        prev2 = lines[idx-2] if idx > 1 else ""
        nxt = lines[idx+1] if idx < len(lines)-1 else ""
        
        raw_items.append({
            "line_idx": idx+1,
            "category": current_cat,
            "price": price_val,
            "line": line,
            "prev1": prev1,
            "prev2": prev2,
            "next": nxt
        })
    idx += 1

print(f"Parsed {len(raw_items)} items with prices!")
with open('scratch/items_parsed_raw.json', 'w', encoding='utf-8') as out:
    json.dump(raw_items, out, ensure_ascii=False, indent=2)
