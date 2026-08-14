import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

# List of known standard portion weights & volumes in Romanian restaurant menus
STANDARD_WEIGHTS = [
    "25/80/100/25", "250/150/70", "150/200/50", "380/200/80", "280/300", "150/50/20",
    "150/350", "180/150", "400/150", "200/200/50", "150/200/50", "200/150", "250/200",
    "250/80", "400", "350", "450", "300", "280", "250", "240", "230", "225", "200",
    "180", "170", "150", "140", "130", "125", "120", "100", "80", "70", "60", "50",
    "40", "30", "25", "15", "10", "5", "3", "2", "1"
]

def extract_weight_and_allergens(line_prefix):
    # e.g., "Mic dejun 3,7300gr."
    # e.g., "Mic dejun, cartofi prăjiți cu ouă și slănină 3,7 250gr"
    # e.g., "Omletă cu şuncă și caşcaval 3,7225 gr."
    # e.g., "Omletă ţărănească cu slănină și ceapă 3300 gr."
    # e.g., "Marissa breakfast 1,3, 7, 11 370gr"
    # e.g., "Platou mic dejun 3,725/80/100/25 gr."
    # e.g., "Bruschete cu roșii 7300 gr"
    # e.g., "Bacon prăjit/slănină prăjită100 gr."
    # e.g., "Cremvurşti 7 100 gr."
    # e.g., "Telemea 7100 gr."
    # e.g., "Caşcaval 7100 gr."
    # e.g., "Lapte 7200 ml."
    # e.g., "Iaurt 71 pahar"
    # e.g., "Unt porţionat 725 gr."
    # e.g., "Cacao cu lapte7200 ml."
    # e.g., "Cereale cu lapte7,8 200gr/50 gr."
    
    # 1. Match unit at end of prefix (gr, g, ml, l, pahar, pahare, buc, set, portie, porție, sticlă, sticle, doză)
    u_match = re.search(r'(([\d\s/,.-]+)\s*\b(gr|g|ml|l|pahar|pahare|buc|set|portie|porție|sticlă|sticle|doză)\.?)$', line_prefix, re.IGNORECASE)

    if not u_match:
        # Fallback if unit missing (e.g. "Telemea 100")
        u_match = re.search(r'([\d\s/,.-]+)$', line_prefix)
        if not u_match:
            return line_prefix, "200g", []
        
        raw_num = u_match.group(1).strip()
        name_part = line_prefix[:u_match.start()].strip()
        unit_str = "g"
    else:
        name_part = line_prefix[:u_match.start()].strip()
        raw_num = u_match.group(2).strip()
        unit_str = u_match.group(3).strip().lower()
        if unit_str in ['gr', 'g', 'gr.']: unit_str = 'g'
        elif unit_str in ['ml', 'ml.']: unit_str = 'ml'
        elif unit_str in ['l', 'l.']: unit_str = 'L'

    # Extract clean weight and allergens from raw_num
    allergens = []
    weight_str = ""

    # Check for slash weights first (e.g. 25/80/100/25 or 200/50)
    m_slash = re.search(r'(\d+(/\d+)+)', raw_num)
    if m_slash:
        weight_str = m_slash.group(1) + unit_str
        alg_part = raw_num[:m_slash.start()].strip()
        if alg_part:
            allergens = [int(x) for x in re.findall(r'\d+', alg_part) if 1 <= int(x) <= 14]
    else:
        # Number string e.g. "3,7300", "3,7225", "3300", "7100", "7200", "725", "71", "100", "250", "370"
        # Check if there is explicit comma or space separating allergens e.g. "3,7 250" or "1,3, 7, 11 370"
        m_sep = re.search(r'^(.*?,\s*\d+?)\s*(\d+)$', raw_num)
        if m_sep:
            alg_part = m_sep.group(1)
            weight_str = m_sep.group(2) + unit_str
            allergens = [int(x) for x in re.findall(r'\d+', alg_part) if 1 <= int(x) <= 14]
        else:
            # Digits without comma e.g. "3,7300" or "7100" or "7200" or "725" or "3300" or "100"
            # Try to match largest trailing standard weight
            digits = re.sub(r'[^\d]', '', raw_num)
            matched_w = None
            for sw in ["1500", "1400", "1000", "600", "550", "520", "500", "480", "450", "430", "425", "400", "385", "370", "350", "330", "300", "280", "250", "225", "200", "180", "170", "150", "125", "120", "100", "80", "70", "60", "50", "40", "30", "25", "15", "10", "5", "1"]:
                if digits.endswith(sw) and len(digits) > len(sw):
                    matched_w = sw
                    alg_digits = digits[:-len(sw)]
                    allergens = [int(x) for x in alg_digits if 1 <= int(x) <= 14]
                    break
            
            if matched_w:
                weight_str = matched_w + unit_str
            else:
                weight_str = digits + unit_str if digits else "200g"

    # Clean name
    name_clean = re.sub(r'[,.\s]+$', '', name_part).strip()

    # If name_clean still has trailing numbers like "Cremvurşti 7" or "Caşcaval 7"
    m_trail = re.search(r'^(.*?)\s+([0-9,\s]+)$', name_clean)
    if m_trail:
        c_name = m_trail.group(1).strip()
        c_algs = [int(x) for x in re.findall(r'\d+', m_trail.group(2)) if 1 <= int(x) <= 14]
        if c_algs and len(c_name) > 2:
            name_clean = c_name
            allergens.extend(c_algs)

    return name_clean, weight_str, sorted(list(set(allergens)))

print("=== TESTING PERFECT WEIGHT FIXER ===")
idx = 0
for i, l in enumerate(lines[:35]):
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l)
    if p_match:
        price = float(p_match.group(1).replace(',', '.'))
        prefix = l[:p_match.start()].strip()
        n, w, a = extract_weight_and_allergens(prefix)
        print(f"Line {i+24:3d}: NAME='{n}' | WEIGHT='{w}' | ALGS={a} | PRICE={price} LEI")
