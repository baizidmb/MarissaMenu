import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

# Comprehensive allergen detector
def detect_allergens_from_text(text):
    t = text.lower()
    algs = set()
    
    # 1. Gluten: grâu, faina, făină, pesmet, chifla, chiflă, paine, pâine, blat, spaghete, penne, tagliatelle, croissant, cereale, foietaj, focaccia, biscuiti, biscuiți
    if any(w in t for w in ['grâu', 'grau', 'făină', 'faina', 'pesmet', 'chiflă', 'chifla', 'pâine', 'paine', 'blat', 'spaghete', 'penne', 'tagliatelle', 'croissant', 'cereale', 'foietaj', 'focaccia', 'biscuiți', 'biscuiti']):
        algs.add(1)
        
    # 2. Crustacee: creveți, creveti, rac, homar, crab
    if any(w in t for w in ['creveți', 'creveti', 'rac', 'homar', 'crab']):
        algs.add(2)
        
    # 3. Ouă: ou, ouă, oua, gălbenuș, galbenus, albuș, albus, maioneză, maioneza, ecler, lava cake, papanași, papanasi, tiramisu, omletă, omleta
    if any(w in t for w in ['ou', 'ouă', 'oua', 'gălbenuș', 'galbenus', 'albuș', 'albus', 'maioneză', 'maioneza', 'ecler', 'lava cake', 'papanași', 'papanasi', 'tiramisu', 'omletă', 'omleta']):
        algs.add(3)
        
    # 4. Pește: pește, peste, somon, păstrăv, pastrav, doradă, dorada, ton, anșoa, ansoa
    if any(w in t for w in ['pește', 'peste', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'ton', 'anșoa', 'ansoa']):
        algs.add(4)
        
    # 5. Arahide: arahide
    if 'arahide' in t:
        algs.add(5)
        
    # 6. Soia: soia, tofu, teriyaki
    if any(w in t for w in ['soia', 'tofu', 'teriyaki']):
        algs.add(6)
        
    # 7. Lapte / Lactoză: lapte, smântână, smantana, unt, cașcaval, cascaval, brânză, branza, telemea, mozzarella, parmesan, parmigiano, gorgonzola, cheddar, feta, iaurt, frișcă, frisca, mascarpone, cheesecake
    if any(w in t for w in ['lapte', 'smântână', 'smantana', 'unt', 'cașcaval', 'cascaval', 'brânză', 'branza', 'telemea', 'mozzarella', 'parmesan', 'parmigiano', 'gorgonzola', 'cheddar', 'feta', 'iaurt', 'frișcă', 'frisca', 'mascarpone', 'cheesecake']):
        algs.add(7)
        
    # 8. Fructe cu coajă: nucă, nuca, nuci, migdale, fistic, caju, alune, finetti, nutella
    if any(w in t for w in ['nucă', 'nuca', 'nuci', 'migdale', 'fistic', 'caju', 'alune', 'finetti', 'nutella']):
        algs.add(8)
        
    # 9. Țelină: țelină, telina
    if any(w in t for w in ['țelină', 'telina']):
        algs.add(9)
        
    # 10. Muștar: muștar, mustar, dijon, mici
    if any(w in t for w in ['muștar', 'mustar', 'dijon', 'mici']):
        algs.add(10)
        
    # 11. Susan: susan
    if 'susan' in t:
        algs.add(11)
        
    # 12. Sulfiți: sulfiți, sulfiti, vin, oțet, otet, bere, prosecco
    if any(w in t for w in ['sulfiți', 'sulfiti', 'vin', 'oțet', 'otet', 'bere', 'prosecco']):
        algs.add(12)
        
    # 13. Lupin: lupin
    if 'lupin' in t:
        algs.add(13)
        
    # 14. Moluște: calamar, caracatiță, caracatita, scoici, stridii, moluște, moluste, fructe de mare
    if any(w in t for w in ['calamar', 'caracatiță', 'caracatita', 'scoici', 'stridii', 'moluște', 'moluste', 'fructe de mare']):
        algs.add(14)
        
    return sorted(list(algs))

print("Testing allergen detection on Ciorbe items...\n")

with open('src/data/marissaMenuData.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

json_str = js_content.split('export const MENU_ITEMS = ')[1].rstrip(';')
items = json.loads(json_str)

ciorbe_items = [item for item in items if item['category'] == 'ciorbe']

for item in ciorbe_items:
    name = item['name']['ro']
    ing = item['ingredients']['ro']
    declared_algs = item['allergens']
    detected_algs = detect_allergens_from_text(name + " " + ing)
    combined = sorted(list(set(declared_algs + detected_algs)))
    print(f"DISH: '{name}' ({item['weight']}) - {item['price']} LEI")
    print(f"  ING: '{ing}'")
    print(f"  DECLARED ALGS: {declared_algs}")
    print(f"  DETECTED ALGS: {detected_algs}")
    print(f"  COMBINED ALGS: {combined}\n")
