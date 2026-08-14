import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# High quality curated dish image database tailored to Hotel & Restaurant Marissa menu
IMAGE_CATALOG = {
    # Breakfast
    "mic_dejun": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "omleta": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "bruschete": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
    "cremvursti": "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=800&q=80",
    "croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    "cereale": "https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=800&q=80",
    
    # Starters & Fast Food
    "mici": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "cascaval_pane": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=800&q=80",
    "mamaliga": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    "burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "burger_crispy": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    "shaorma": "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
    
    # Traditional Ciorbe / Soups
    "ciorba_burta": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "ciorba_radauteana": "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80",
    "babgulyas": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "ciorba_porc": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80",
    "ciorba_fasole": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "paine": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "smantana": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    
    # Platouri
    "platou": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    
    # Chicken & Duck
    "pui_gratar": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "rata": "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80",
    "crispy_wings": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    "snitel": "https://images.unsplash.com/photo-1599921841143-819025a2333b?auto=format&fit=crop&w=800&q=80",
    
    # Beef
    "t_bone": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "muschi_vita": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "obrajori": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "ossobuco": "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    
    # Pork
    "ceafa": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "coaste_ribs": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "ciolan": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "tochitura": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    
    # Fish & Seafood
    "somon": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "pastrav": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "creveti": "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    "calamar": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "fructe_mare": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    
    # Pasta & Risotto
    "spaghete_carbonara": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    "paste_fructe_mare": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    "tagliatelle": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "penne": "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    "risotto": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    
    # Pizza & Focaccia
    "pizza_margherita": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    "pizza_marissa": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "pizza_diavola": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    "pizza_quattro": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
    "focaccia": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    
    # Sides & Salads
    "cartofi_prajiti": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "piure": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    "legume_gratar": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
    "salata_greceasca": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "salata_cezar": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    "salata_caprese": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
    
    # Desserts
    "lava_cake": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    "papanasi": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    "clatite": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "cheesecake": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    "tiramisu": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    
    # Traditional
    "sarmale": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    
    # Drinks
    "cafea": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "limonada": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "cocktail": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    "vin": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "bere": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "cola": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
}

def get_smart_image_for_dish(name, category):
    n = name.lower()
    c = category.lower()
    
    # Ciorbe specific
    if "burtă" in n: return IMAGE_CATALOG["ciorba_burta"]
    if "rădăuțeană" in n: return IMAGE_CATALOG["ciorba_radauteana"]
    if "babgulyas" in n or "gulaș" in n: return IMAGE_CATALOG["babgulyas"]
    if "fasole" in n: return IMAGE_CATALOG["ciorba_fasole"]
    if "țărănească" in n: return IMAGE_CATALOG["ciorba_porc"]
    if "smântână" in n: return IMAGE_CATALOG["smantana"]
    if "pâine" in n or "pâinici" in n: return IMAGE_CATALOG["paine"]
    
    # Breakfast
    if "omletă" in n: return IMAGE_CATALOG["omleta"]
    if "bruschete" in n: return IMAGE_CATALOG["bruschete"]
    if "cremvur" in n: return IMAGE_CATALOG["cremvursti"]
    if "croissant" in n: return IMAGE_CATALOG["croissant"]
    if "cereale" in n: return IMAGE_CATALOG["cereale"]
    if c == "mic-dejun": return IMAGE_CATALOG["mic_dejun"]
    
    # Fast Food & Starters
    if "mici" in n: return IMAGE_CATALOG["mici"]
    if "cașcaval pane" in n: return IMAGE_CATALOG["cascaval_pane"]
    if "mămăligă" in n: return IMAGE_CATALOG["mamaliga"]
    if "crispy" in n or "nuggets" in n: return IMAGE_CATALOG["burger_crispy"]
    if "burger" in n or "cheeseburger" in n: return IMAGE_CATALOG["burger"]
    if "shaorma" in n: return IMAGE_CATALOG["shaorma"]
    
    # Platouri
    if c == "platouri" or "platou" in n: return IMAGE_CATALOG["platou"]
    
    # Poultry
    if "rață" in n or "rata" in n: return IMAGE_CATALOG["rata"]
    if "aripioare" in n: return IMAGE_CATALOG["crispy_wings"]
    if "șnițel" in n or "snitel" in n: return IMAGE_CATALOG["snitel"]
    if c == "pui-rata" or "pui" in n: return IMAGE_CATALOG["pui_gratar"]
    
    # Beef
    if "t-bone" in n: return IMAGE_CATALOG["t_bone"]
    if "obrăjori" in n: return IMAGE_CATALOG["obrajori"]
    if "ossobuco" in n: return IMAGE_CATALOG["ossobuco"]
    if c == "vita" or "vită" in n: return IMAGE_CATALOG["muschi_vita"]
    
    # Pork
    if "ceafă" in n or "cotlet" in n: return IMAGE_CATALOG["ceafa"]
    if "scăriță" in n or "coaste" in n: return IMAGE_CATALOG["coaste_ribs"]
    if "ciolan" in n: return IMAGE_CATALOG["ciolan"]
    if "tochitură" in n: return IMAGE_CATALOG["tochitura"]
    if c == "porc": return IMAGE_CATALOG["ceafa"]
    
    # Fish & Seafood
    if "somon" in n: return IMAGE_CATALOG["somon"]
    if "păstrăv" in n or "doradă" in n: return IMAGE_CATALOG["pastrav"]
    if "creveți" in n: return IMAGE_CATALOG["creveti"]
    if "calamar" in n: return IMAGE_CATALOG["calamar"]
    if c == "peste" or "fructe de mare" in n: return IMAGE_CATALOG["fructe_mare"]
    
    # Pasta & Risotto
    if "carbonara" in n or "milanese" in n: return IMAGE_CATALOG["spaghete_carbonara"]
    if "penne" in n or "arrabbiata" in n: return IMAGE_CATALOG["penne"]
    if "tagliatelle" in n: return IMAGE_CATALOG["tagliatelle"]
    if "risotto" in n: return IMAGE_CATALOG["risotto"]
    if c == "paste-risotto": return IMAGE_CATALOG["spaghete_carbonara"]
    
    # Pizza & Focaccia
    if "focaccia" in n: return IMAGE_CATALOG["focaccia"]
    if "margherita" in n: return IMAGE_CATALOG["pizza_margherita"]
    if "diavola" in n: return IMAGE_CATALOG["pizza_diavola"]
    if "quattro formaggi" in n: return IMAGE_CATALOG["pizza_quattro"]
    if c == "pizza" or "pizza" in n: return IMAGE_CATALOG["pizza_marissa"]
    
    # Sides & Salads
    if "piure" in n: return IMAGE_CATALOG["piure"]
    if "legume" in n: return IMAGE_CATALOG["legume_gratar"]
    if "cartofi" in n: return IMAGE_CATALOG["cartofi_prajiti"]
    if "cezar" in n: return IMAGE_CATALOG["salata_cezar"]
    if "grecească" in n: return IMAGE_CATALOG["salata_greceasca"]
    if "caprese" in n: return IMAGE_CATALOG["salata_caprese"]
    if c == "salate": return IMAGE_CATALOG["salata_greceasca"]
    if c == "garnituri": return IMAGE_CATALOG["cartofi_prajiti"]
    
    # Desserts
    if "vulcan" in n or "lava cake" in n: return IMAGE_CATALOG["lava_cake"]
    if "papana" in n: return IMAGE_CATALOG["papanasi"]
    if "clătite" in n or "clatite" in n: return IMAGE_CATALOG["clatite"]
    if "cheesecake" in n: return IMAGE_CATALOG["cheesecake"]
    if "tiramisu" in n: return IMAGE_CATALOG["tiramisu"]
    if c == "desert": return IMAGE_CATALOG["papanasi"]
    
    # Traditional
    if "sarmale" in n or c == "traditionale": return IMAGE_CATALOG["sarmale"]
    
    # Drinks
    if "cafea" in n or "espresso" in n or "cappuccino" in n or "latte" in n: return IMAGE_CATALOG["cafea"]
    if "limonad" in n or "fresh" in n or "suc" in n or "cola" in n or "fanta" in n: return IMAGE_CATALOG["limonada"]
    if c == "cocktailuri": return IMAGE_CATALOG["cocktail"]
    if c == "vinuri" or "vin" in n: return IMAGE_CATALOG["vin"]
    if c == "bere" or "bere" in n: return IMAGE_CATALOG["bere"]
    if c == "racoritoare": return IMAGE_CATALOG["limonada"]
    
    return IMAGE_CATALOG["mic_dejun"]

with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# Extract MENU_ITEMS json array
m = re.search(r'export const MENU_ITEMS: MenuItem\[\] = (\[[\s\S]*\]);', code)
if not m:
    print("Could not find MENU_ITEMS array!")
    sys.exit(1)

items = json.loads(m.group(1))

for item in items:
    name_ro = item['name']['ro']
    cat = item['categoryId']
    item['imageUrl'] = get_smart_image_for_dish(name_ro, cat)

new_code = code[:m.start(1)] + json.dumps(items, ensure_ascii=False, indent=2) + code[m.end(1):]

with open('src/data/menuData.ts', 'w', encoding='utf-8') as out:
    out.write(new_code)

print(f"Successfully mapped high quality dish-specific images for all {len(items)} dishes!")
