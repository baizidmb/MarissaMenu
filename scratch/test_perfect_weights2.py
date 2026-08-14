import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

VALID_PORTIONS = ["1500", "1400", "1000", "600", "550", "520", "500", "480", "450", "430", "425", "400", "385", "370", "350", "330", "300", "280", "250", "225", "200", "180", "170", "150", "125", "120", "100", "80", "70", "60", "50", "40", "30", "25", "15", "10", "5"]

def parse_header_flawless(line):
    # Price
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Match unit at end
    u_match = re.search(r'([\d\s/,.-]+)\s*(gr|g|ml|l|pahar|pahare|buc|set|portie|porție|sticlă|sticle|doză)\.?\s*$', prefix, re.IGNORECASE)

    name = prefix
    weight = ""
    allergens = []

    if u_match:
        name_part = prefix[:u_match.start()].strip()
        num_part = u_match.group(1).strip()
        unit_part = u_match.group(2).lower()
        if unit_part in ['gr', 'g']: unit_part = 'g'
        elif unit_part == 'ml': unit_part = 'ml'
        elif unit_part == 'l': unit_part = 'L'

        if '/' in num_part:
            m_slash = re.search(r'(\d+(/\d+)+)', num_part)
            if m_slash:
                weight = m_slash.group(1) + unit_part
                alg_p = num_part[:m_slash.start()].strip()
                if alg_p:
                    allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
            else:
                weight = num_part + unit_part
        else:
            # Comma or space separated allergens e.g. "3,7 250"
            m_sep = re.search(r'^(.*?,\s*\d+?|\s*\d+(\s*,\s*\d+)*)\s*(\d{2,4})$', num_part)
            if m_sep:
                alg_p = m_sep.group(1)
                w_p = m_sep.group(3)
                allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
                weight = w_p + unit_part
            else:
                digits = re.sub(r'[^\d]', '', num_part)
                matched_w = None
                for sw in VALID_PORTIONS:
                    if digits == sw:
                        matched_w = sw
                        break
                    elif digits.endswith(sw) and len(digits) > len(sw):
                        matched_w = sw
                        alg_digits = digits[:-len(sw)]
                        allergens = [int(x) for x in alg_digits if 1 <= int(x) <= 14]
                        break
                
                if matched_w:
                    weight = matched_w + unit_part
                else:
                    weight = digits + unit_part if digits else "200g"

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

print("=== FLAWLESS WEIGHT PARSER TEST ===")
for i, l in enumerate(lines[:30]):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        parsed = parse_header_flawless(l)
        if parsed:
            n, w, p, a = parsed
            print(f"Line {i+24:3d}: NAME='{n}' | WEIGHT='{w}' | ALGS={a} | PRICE={p} LEI")
