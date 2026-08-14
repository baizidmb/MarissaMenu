import json
import re

with open('scratch/parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

lines = [e['text'].strip() for e in elements if e['text'].strip()]

print(f"Total non-empty lines: {len(lines)}")

# Let's see all lines with prices and what comes before/after
dishes = []
i = 0
current_cat_id = "mic-dejun"
current_cat_name = "Mic Dejun"

# Map of Romanian category titles to category IDs
def map_cat(title):
    u = title.upper()
    if "MIC DEJUN" in u or "BREAKFAST" in u: return ("mic-dejun", "Mic Dejun", "Breakfast")
    if "GUSTĂRI" in u or "APERITIVE" in u or "GUSTARI" in u: return ("gustari", "Gustări Reci & Calde", "Starters & Appetizers")
    if "FAST FOOD" in u or "BURGER" in u or "SHAORMA" in u: return ("fast-food", "Fast Food & Burgeri", "Fast Food & Burgers")
    if "CIORB" in u or "SUP" in u or "SOUP" in u or "GOULASH" in u or "GULYA" in u: return ("ciorbe", "Ciorbe / Supe", "Traditional Soups")
    if "PLATOU" in u or "PLATTER" in u: return ("platouri", "Platouri Generoase", "Sharing Platters")
    if "PUI" in u or "RAȚĂ" in u or "RATA" in u or "CHICKEN" in u or "DUCK" in u: return ("pui-rata", "Preparate din Pui & Rață", "Poultry & Duck Specialties")
    if "VITĂ" in u or "VITA" in u or "BEEF" in u or "STEAK" in u: return ("vita", "Preparate din Vită", "Beef & Steak House")
    if "PORC" in u or "PORK" in u or "RIBS" in u or "CIOLAN" in u: return ("porc", "Preparate din Porc", "Pork Specialties")
    if "PEȘTE" in u or "PESTE" in u or "FISH" in u or "SEAFOOD" in u or "CREVE" in u: return ("peste", "Pește & Fructe de Mare", "Fish & Seafood")
    if "PASTE" in u or "PASTA" in u or "RISOTTO" in u or "SPAGHET" in u: return ("paste-risotto", "Paste & Risotto", "Pasta & Risotto")
    if "PIZZA" in u or "FOCACCIA" in u: return ("pizza", "Pizza & Focaccia", "Pizza & Focaccia")
    if "GARNITUR" in u or "GARNITURI" in u or "SIDE" in u or "SOS" in u or "EXTRA" in u: return ("garnituri", "Garnituri, Sosuri & Extra", "Sides & House Sauces")
    if "SALAT" in u or "SALAD" in u: return ("salate", "Salate Aperitiv & Însoțiri", "Fresh Salads")
    if "DESERT" in u or "DESSERT" in u or "PAPANAS" in u: return ("desert", "Desert", "Desserts")
    if "TRADIȚIONAL" in u or "TRADITIONAL" in t if 't' in locals() else False or "SĂRBĂTORI" in u or "SARMALE" in u: return ("traditionale", "Tradiționale de Sărbători", "Traditional Feast Specialties")
    if "RĂCORITOARE" in u or "RACORITOARE" in u or "CAFEA" in u or "TEA" in u or "COFFEE" in u: return ("racoritoare", "Băuturi Răcoritoare, Cafea & Ceai", "Soft Drinks, Coffee & Tea")
    if "COCKTAIL" in u or "TĂRII" in u or "TARII" in u or "SPIRITS" in u: return ("cocktailuri", "Cocktailuri & Tării", "Cocktails & Spirits")
    if "VIN" in u or "WINE" in u: return ("vinuri", "Vinuri & Alcoolice", "Wines & Fine Spirits")
    if "BERE" in u or "BEER" in u: return ("bere", "Bere", "Beers")
    if "AMBALAJ" in u or "PACKAGING" in u or "CASEROL" in u: return ("ambalaje", "Ambalaje la Pachet", "Takeaway Packaging")
    return None

categories_set = set()

# Let's iterate through lines and construct dishes
for idx, line in enumerate(lines):
    cat_match = map_cat(line)
    if cat_match and not re.search(r'\d+\s*(lei|LEI|g|ml)', line):
        categories_set.add(cat_match)

print(f"Categories detected: {len(categories_set)}")
for c in sorted(categories_set):
    print("  ", c)
