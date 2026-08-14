import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

def smart_parse_header(line):
    # 1. Price
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # 2. Extract portion & allergens from trailing part of prefix
    # Common weights end with gr, g, ml, l, pahar, pahare, buc, set, portie, porție, sticlă, doză
    # e.g., "Mic dejun 3,7300gr."
    # e.g., "Omletă cu şuncă și caşcaval 3,7225 gr."
    # e.g., "Telemea 7100 gr."
    # e.g., "Lapte 7200 ml."
    # e.g., "Unt porţionat 725 gr."
    # e.g., "Cereale cu lapte7,8 200gr/50 gr."
    
    # Match the unit part
    u_match = re.search(r'(([\d\s/,.-]+)\s*(gr|g|ml|l|pahar|pahare|buc|set|portie|porție|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)
    
    name = prefix
    weight = ""
    allergens = []

    if u_match:
        name_part = prefix[:u_match.start()].strip()
        num_unit_part = u_match.group(1).strip()
        
        # Parse num_unit_part which contains concatenated allergens and weight e.g. "3,7300gr." or "7100 gr." or "725 gr." or "3,7225 gr."
        unit_name = u_match.group(3)
        raw_nums = u_match.group(2).strip() # e.g. "3,7300" or "3,7225" or "7100" or "7200" or "725" or "7,8 200/50" or "25/80/100/25"
        
        # Let's separate allergens and weight number
        # If raw_nums contains slashes e.g. "25/80/100/25" or "200/50"
        if '/' in raw_nums:
            # Check if there is allergen prefix before slashes or embedded
            # e.g., "3,725/80/100/25" -> algs: 3,7, weight: 25/80/100/25g
            m_slash = re.search(r'^(.*?)((\d+/\d+.*))$', raw_nums)
            if m_slash:
                alg_p = m_slash.group(1).strip()
                w_p = m_slash.group(2).strip()
                if alg_p:
                    allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
                weight = w_p + " " + unit_name
            else:
                weight = raw_nums + " " + unit_name
        else:
            # Simple number string e.g. "3,7300" or "3,7225" or "7100" or "7200" or "725" or "100" or "250"
            # Standard portion weights: 25, 30, 40, 50, 60, 70, 80, 100, 120, 125, 150, 170, 180, 200, 225, 230, 250, 300, 330, 350, 370, 385, 400, 425, 430, 450, 480, 500, 520, 550, 600, 750, 1000, 1400, 1500
            # If length of digits > 3 or contains comma:
            # e.g., "3,7300" -> algs "3,7", weight "300"
            # e.g., "3,7225" -> algs "3,7", weight "225"
            # e.g., "7100" -> alg "7", weight "100"
            # e.g., "7200" -> alg "7", weight "200"
            # e.g., "725" -> alg "7", weight "25"
            # e.g., "71" -> alg "7", weight "1" (pahar)
            
            # Let's extract allergens if commas exist e.g. "3,7300" -> "3,7" & "300"
            m_comma = re.search(r'^(.*?,\s*\d+?)(\d{2,4})$', raw_nums)
            if m_comma:
                alg_p = m_comma.group(1)
                w_p = m_comma.group(2)
                allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
                weight = w_p + " " + unit_name
            elif len(raw_nums) >= 4 and raw_nums[0] in '123456789' and int(raw_nums[1:]) in [25, 50, 60, 70, 80, 100, 120, 150, 180, 200, 225, 250, 300, 350, 400, 450, 500]:
                allergens = [int(raw_nums[0])]
                weight = raw_nums[1:] + " " + unit_name
            elif len(raw_nums) == 3 and raw_nums[0] in '123456789' and int(raw_nums[1:]) in [25, 50, 80]:
                allergens = [int(raw_nums[0])]
                weight = raw_nums[1:] + " " + unit_name
            elif len(raw_nums) == 2 and raw_nums[0] in '123456789' and raw_nums[1] in '12345':
                allergens = [int(raw_nums[0])]
                weight = raw_nums[1] + " " + unit_name
            else:
                weight = raw_nums + " " + unit_name

        name = name_part

    # Clean name
    name = re.sub(r'[,.\s]+$', '', name).strip()
    # Normalize weight
    weight = re.sub(r'\s+', ' ', weight).strip()

    return name, weight, price, sorted(list(set(allergens)))

print("=== TESTING SMART UNRAVEL 2 ===")
for i, l in enumerate(lines[:25]):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        parsed = smart_parse_header(l)
        if parsed:
            n, w, p, a = parsed
            print(f"Line {i+24:3d}: NAME='{n}' | ALGS={a} | WEIGHT='{w}' | PRICE={p} LEI")
