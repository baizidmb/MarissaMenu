import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/items_parsed_raw.json', 'r', encoding='utf-8') as f:
    items_raw = json.load(f)

print(f"Loaded {len(items_raw)} items from scratch/items_parsed_raw.json")

# Allergen helper
def get_allergens(ing_text):
    ing = ing_text.lower()
    algs = set()
    if any(k in ing for k in ['grâu', 'grau', 'făină', 'faina', 'pesmet', 'chiflă', 'chifla', 'pâine', 'paine', 'blat', 'spaghete', 'penne', 'tagliatelle', 'croissant', 'cereale', 'orz', 'gluten', 'foietaj', 'focaccia', 'biscuiți', 'biscuiti', 'pișcoturi', 'piscoturi', 'savoiardi', 'brioșă', 'brioche']):
        algs.add(1)
    if any(k in ing for k in ['creveți', 'creveti', 'rac', 'homar', 'crab', 'crustacee']):
        algs.add(2)
    if any(k in ing for k in ['ou', 'ouă', 'oua', 'gălbenuș', 'galbenus', 'albuș', 'albus', 'maioneză', 'maioneza', 'ecler', 'lava cake', 'papanași', 'papanasi', 'tiramisu', 'omletă', 'omleta', 'ochiuri']):
        algs.add(3)
    if any(k in ing for k in ['pește', 'peste', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'ton', 'anșoa', 'ansoa']):
        algs.add(4)
    if any(k in ing for k in ['arahide']):
        algs.add(5)
    if any(k in ing for k in ['soia', 'sos soia', 'tofu', 'teriyaki']):
        algs.add(6)
    if any(k in ing for k in ['lapte', 'smântână', 'smantana', 'unt', 'cașcaval', 'cascaval', 'brânză', 'branza', 'telemea', 'mozzarella', 'parmesan', 'parmigiano', 'gorgonzola', 'cheddar', 'feta', 'iaurt', 'frișcă', 'frisca', 'mascarpone', 'lactoză', 'lactoza', 'cheesecake']):
        algs.add(7)
    if any(k in ing for k in ['nucă', 'nuca', 'nuci', 'migdale', 'fistic', 'caju', 'alune', 'finetti', 'nutella']):
        algs.add(8)
    if any(k in ing for k in ['țelină', 'telina', 'radacinoase']):
        algs.add(9)
    if any(k in ing for k in ['muștar', 'mustar', 'dijon', 'mici']):
        algs.add(10)
    if any(k in ing for k in ['susan', 'semințe susan']):
        algs.add(11)
    if any(k in ing for k in ['sulfiți', 'sulfiti', 'vin', 'oțet', 'otet', 'bere', 'prosecco']):
        algs.add(12)
    if any(k in ing for k in ['lupin']):
        algs.add(13)
    if any(k in ing for k in ['calamar', 'caracatiță', 'caracatita', 'scoici', 'stridii', 'moluște', 'moluste']):
        algs.add(14)
    return sorted(list(algs))

# Frozen helper
def get_frozen(name, ing):
    c = (name + " " + ing).lower()
    kw = ['pui', 'rață', 'rata', 'obrăjori', 'obrajori', 't-bone', 'mușchiuleț porc', 'muschiulet porc', 'ciolan', 'mici', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'creveți', 'creveti', 'calamar', 'fructe de mare', 'broccoli', 'spanac', 'mazăre', 'mazare', 'hribi', 'fructe de pădure', 'fructe de padure', 'porumb', 'avocado', 'lava cake', 'papanași', 'papanasi', 'ecler', 'gogoși', 'gogosi', 'crispy', 'nuggets', 'cartofi prăjiți', 'cartofi prajiti', 'wedges', 'cașcaval pane', 'cascaval pane']
    return any(k in c for k in kw)

# Nutrition estimator
def get_nutrition(cat_id, name, ing):
    c = (name + " " + ing).lower()
    kcal = 185
    fats, sat_fats, carbs, sugars, protein, salt = 9.0, 3.5, 18.0, 2.5, 9.0, 1.1

    if cat_id == 'mic-dejun':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 235, 15.5, 6.5, 12.5, 2.0, 12.0, 1.4
    elif cat_id in ['pui-rata', 'vita', 'porc']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 225, 14.5, 5.8, 2.8, 0.6, 21.5, 1.2
    elif cat_id == 'peste':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 165, 8.0, 1.9, 4.2, 1.1, 18.5, 1.0
    elif cat_id in ['paste-risotto', 'pizza']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 245, 10.8, 5.2, 26.5, 2.5, 11.0, 1.3
    elif cat_id == 'ciorbe':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 115, 6.8, 3.4, 4.8, 1.9, 7.8, 1.1
    elif cat_id == 'salate':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 140, 9.5, 3.6, 6.8, 3.2, 7.0, 1.0
    elif cat_id == 'garnituri':
        if 'cartof' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 195, 8.8, 1.3, 26.5, 0.6, 2.7, 0.9
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 115, 3.8, 1.1, 16.5, 1.9, 3.1, 0.8
    elif cat_id == 'desert':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 315, 14.8, 8.4, 38.5, 24.5, 5.9, 0.3
    elif cat_id in ['racoritoare', 'cocktailuri', 'vinuri', 'bere']:
        if 'espresso' in c or 'cafea' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 4, 0.0, 0.0, 0.5, 0.0, 0.3, 0.0
        elif 'apa' in c or 'apă' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
        elif 'fresh' in c or 'limonadă' in c or 'limonada' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 45, 0.1, 0.0, 10.8, 9.8, 0.3, 0.01
        elif 'vin' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 78, 0.0, 0.0, 2.2, 0.8, 0.1, 0.01
        elif 'bere' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 42, 0.0, 0.0, 3.4, 0.2, 0.4, 0.01
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 52, 0.0, 0.0, 12.5, 12.0, 0.1, 0.01
    elif cat_id == 'ambalaje':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0

    return {
        "energyKcal": kcal,
        "energyKj": int(kcal * 4.184),
        "fats": fats,
        "saturatedFats": sat_fats,
        "carbs": carbs,
        "sugars": sugars,
        "protein": protein,
        "salt": salt
    }

# Process each item into standard format
formatted_items = []

for idx, item in enumerate(items_raw):
    cat_id = item['category']
    line = item['line']
    prev1 = item['prev1']
    prev2 = item['prev2']
    nxt = item['next']
    price = item['price']

    # Extract weight if present
    weight_match = re.search(r'(\d+(/\d+)*\s*(g|ml|buc|pahare|set|portie|porție|sticlă|sticlute|sticluta|dose|doză)?)', line + " " + prev1 + " " + prev2)
    weight = weight_match.group(1) if weight_match else "200g"
    if not re.search(r'(g|ml|buc|set)', weight):
        weight += "g"

    # Name cleanup
    name_cand = prev1 if prev1 and len(prev1) > 2 and not re.search(r'\d+\s*(lei|LEI)', prev1) else line.split(' - ')[0].split('...')[0]
    name_cand = re.sub(r'^\d+[\.\)]\s*', '', name_cand).strip()
    if not name_cand or len(name_cand) < 2:
        name_cand = f"Preparat Marissa #{idx+1}"

    # Ingredients cleanup
    ing_cand = nxt if nxt and len(nxt) > 4 and not re.search(r'^\d+\s*(lei|LEI)', nxt) else line
    ing_cand = re.sub(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', '', ing_cand).strip()
    if not ing_cand:
        ing_cand = "Preparat pregătit zilnic din ingrediente proaspete alese."

    # English translations
    name_en = name_cand.replace('cu', 'with').replace('și', '&').replace('de', 'of').replace('fără', 'without')
    ing_en = ing_cand.replace('cu', 'with').replace('și', '&').replace('de', 'of').replace('fără', 'without')

    allergens = get_allergens(ing_cand + " " + name_cand)
    is_frozen = get_frozen(name_cand, ing_cand)
    nutrition = get_nutrition(cat_id, name_cand, ing_cand)

    formatted_items.append({
        "id": f"item-{idx+1}",
        "category": cat_id,
        "name": { "ro": name_cand, "en": name_en },
        "weight": weight,
        "price": price,
        "ingredients": { "ro": ing_cand, "en": ing_en },
        "allergens": allergens,
        "isFrozen": is_frozen,
        "nutrition": nutrition
    })

print(f"Successfully formatted {len(formatted_items)} complete menu items!")
with open('scratch/formatted_items.json', 'w', encoding='utf-8') as out:
    json.dump(formatted_items, out, ensure_ascii=False, indent=2)
