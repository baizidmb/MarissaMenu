import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

VALID_PORTIONS = [
    "25/80/100/25", "250/150/70", "150/200/50", "380/200/80", "280/300", "150/50/20",
    "150/350", "180/150", "400/150", "200/200/50", "150/200/50", "200/50", "150/150",
    "1500", "1400", "1000", "600", "550", "520", "500", "480", "450", "430", "425", "400", "385", "370", "350", "330", "300", "280", "250", "225", "200", "180", "170", "150", "125", "120", "100", "80", "70", "60", "50", "40", "30", "25", "15", "10", "5"
]

def smart_parse_header_clean(line):
    # Match price at end
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Find weight/unit at end of prefix (gr, g, ml, l, pahar, pahare, buc, set, portie, porție, sticlă, sticle, doză)
    u_match = re.search(r'([\d\s/,.-]+)\s*(gr|g|ml|l|pahar|pahare|buc|set|portie|porție|sticlă|sticle|doză)\.?\s*$', prefix, re.IGNORECASE)

    name = prefix
    weight = ""
    allergens = []

    if u_match:
        name_part = prefix[:u_match.start()].strip()
        raw_nums = u_match.group(1).strip()
        unit_name = u_match.group(2).lower()
        if unit_name in ['gr', 'g']: unit_name = 'g'
        elif unit_name == 'ml': unit_name = 'ml'
        elif unit_name == 'l': unit_name = 'L'

        # Match longest matching portion from VALID_PORTIONS at end of raw_nums
        matched_w = None
        for vp in VALID_PORTIONS:
            if raw_nums.endswith(vp):
                matched_w = vp
                alg_str = raw_nums[:-len(vp)].strip()
                if alg_str:
                    allergens = [int(x) for x in re.findall(r'\d+', alg_str) if 1 <= int(x) <= 14]
                break

        if matched_w:
            weight = matched_w + " " + unit_name
        else:
            weight = raw_nums + " " + unit_name

        name = name_part

    name = re.sub(r'[,.\s]+$', '', name).strip()
    
    # Trailing allergen check in name e.g. "Cremvurşti 7"
    m_trail = re.search(r'^(.*?)\s+([0-9,\s]+)$', name)
    if m_trail:
        c_name = m_trail.group(1).strip()
        c_algs = [int(x) for x in re.findall(r'\d+', m_trail.group(2)) if 1 <= int(x) <= 14]
        if c_algs and len(c_name) > 2:
            name = c_name
            allergens.extend(c_algs)

    return name, weight, price, sorted(list(set(allergens)))

print("=== SMART PARSER CLEAN TEST ===")
for i, l in enumerate(lines[:30]):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        parsed = smart_parse_header_clean(l)
        if parsed:
            n, w, p, a = parsed
            print(f"Line {i+24:3d}: NAME='{n}' | WEIGHT='{w}' | ALGS={a} | PRICE={p} LEI")
