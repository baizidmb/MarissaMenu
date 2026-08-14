import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/perfect_parsed_dishes.json', 'r', encoding='utf-8') as f:
    dishes = json.load(f)

print(f"Total parsed dishes: {len(dishes)}\n")

for i, d in enumerate(dishes[:15]):
    print(f"[{i+1:2d}] CAT: {d['category']} | NAME: '{d['name']}'")
    print(f"     WEIGHT: '{d['weight']}' | PRICE: {d['price']} LEI | ALGS: {d['allergens']}")
    print(f"     ING: '{d['ingredients']}'")
    print(f"     NUTR: {d['nutrition']}")
    print("-" * 60)
