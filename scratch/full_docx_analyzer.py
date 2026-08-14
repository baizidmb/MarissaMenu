import re

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

current_category = "mic-dejun"

def get_category_id(text):
    t = text.upper()
    if "MIC DEJUN" in t or "BREAKFAST" in t: return "mic-dejun"
    if "GUSTĂRI" in t or "APERITIVE" in t or "STARTER" in t: return "gustari"
    if "FAST FOOD" in t or "BURGER" in t or "SHAORMA" in t: return "fast-food"
    if "CIORB" in t or "SUP" in t or "SOUP" in t or "GOULASH" in t or "GULYA" in t: return "ciorbe"
    if "PLATOU" in t or "PLATTER" in t: return "platouri"
    if "PUI" in t or "RAȚĂ" in t or "RATA" in t or "POULTRY" in t or "DUCK" in t or "CHICKEN" in t: return "pui-rata"
    if "VITĂ" in t or "VITA" in t or "BEEF" in t or "STEAK" in t: return "vita"
    if "PORC" in t or "PORK" in t or "RIBS" in t or "CIOLAN" in t: return "porc"
    if "PEȘTE" in t or "PESTE" in t or "FISH" in t or "SEAFOOD" in t or "CREVE" in t: return "peste"
    if "PASTE" in t or "PASTA" in t or "RISOTTO" in t or "SPAGHET" in t or "PENNE" in t or "TAGLIATELLE" in t: return "paste-risotto"
    if "PIZZA" in t or "FOCACCIA" in t: return "pizza"
    if "GARNITUR" in t or "SIDE" in t or "SOS" in t or "EXTRA" in t: return "garnituri"
    if "SALAT" in t or "SALAD" in t: return "salate"
    if "DESERT" in t or "DESSERT" in t or "PAPANAS" in t or "CAKE" in t: return "desert"
    if "TRADIȚIONAL" in t or "TRADITIONAL" in t or "SĂRBĂTORI" in t or "SARMALE" in t: return "traditionale"
    if "RĂCORITOARE" in t or "RACORITOARE" in t or "CAFEA" in t or "COFFEE" in t or "TEA" in t or "FRESH" in t: return "racoritoare"
    if "COCKTAIL" in t or "TĂRII" in t or "TARII" in t or "SPIRITS" in t: return "cocktailuri"
    if "VIN" in t or "WINE" in t: return "vinuri"
    if "BERE" in t or "BEER" in t: return "bere"
    if "AMBALAJ" in t or "PACKAGING" in t or "CASEROL" in t: return "ambalaje"
    return current_category

with open('scratch/docx_analysis.txt', 'w', encoding='utf-8') as out:
    for i, line in enumerate(lines):
        if line.isupper() and len(line) > 3 and not re.search(r'\d+\s*(lei|LEI|g|ml)', line):
            cat_id = get_category_id(line)
            if cat_id != current_category:
                current_category = cat_id
                out.write(f"\n=== CATEGORY SWITCH: [{current_category}] ({line}) ===\n")
        
        match_price = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
        if match_price:
            price_val = float(match_price.group(1).replace(',', '.'))
            out.write(f"Line {i+1:3d} [{current_category}]: Price {price_val} LEI -> {line}\n")

print("Analysis written to scratch/docx_analysis.txt!")
