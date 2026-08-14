import re
import json

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

def parse_smart_line(line):
    # Match price at end
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Regex for weight at end of prefix: e.g., "300gr.", "250gr", "225 gr.", "25/80/100/25 gr.", "100 gr.", "1 pahar", "200 ml."
    w_match = re.search(r'(\d+(/\d+)*\s*(gr|g|ml|l|pahar|pahare|buc|portie|porție|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)
    
    if w_match:
        weight = w_match.group(1)
        name_and_algs = prefix[:w_match.start()].strip()
    else:
        weight = ""
        name_and_algs = prefix

    # Now look for trailing allergen numbers in name_and_algs e.g., "3,7" or "1,3, 7, 11" or "7"
    # Note: if weight was attached e.g. "3,7300gr", w_match matched "300gr", leaving "3,7" at end of name_and_algs!
    algs = []
    
    # Strip any trailing comma or dot
    name_and_algs = re.sub(r'[,.\s]+$', '', name_and_algs)
    
    a_match = re.search(r'(\d+(\s*,\s*\d+)*)$', name_and_algs)
    if a_match:
        alg_str = a_match.group(1)
        extracted = [int(x.strip()) for x in alg_str.split(',') if x.strip().isdigit() and 1 <= int(x.strip()) <= 14]
        if extracted:
            algs = extracted
            name = name_and_algs[:a_match.start()].strip()
        else:
            name = name_and_algs
    else:
        name = name_and_algs

    return name, weight, price, algs

print("=== TESTING SMART UNRAVEL ===")
for i, l in enumerate(lines[:30]):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        parsed = parse_smart_line(l)
        if parsed:
            n, w, p, a = parsed
            print(f"Line {i+24:3d}: NAME='{n}' | ALGS={a} | WEIGHT='{w}' | PRICE={p} LEI")
