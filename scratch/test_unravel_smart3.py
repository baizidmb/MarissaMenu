import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

lines = raw_lines[23:]

def smart_parse_header(line):
    # Match price at end
    p_match = re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', line)
    if not p_match:
        return None
    price = float(p_match.group(1).replace(',', '.'))
    prefix = line[:p_match.start()].strip()

    # Find the unit token: gr, g, ml, l, pahar, pahare, buc, set, portie, porție, sticlă, sticle, doză
    u_match = re.search(r'(([\d\s/,.-]+)\s*(gr|g|ml|l|pahar|pahare|buc|set|portie|porție|sticlă|sticle|doză)\.?)', prefix, re.IGNORECASE)

    name = prefix
    weight = ""
    allergens = []

    if u_match:
        name_part = prefix[:u_match.start()].strip()
        num_unit_part = u_match.group(1).strip()
        unit_name = u_match.group(3)
        raw_nums = u_match.group(2).strip()

        # Extract all numbers from raw_nums
        # e.g., "3,7300" -> algs [3, 7], weight "300"
        # e.g., "3,7225" -> algs [3, 7], weight "225"
        # e.g., "7100" -> algs [7], weight "100"
        # e.g., "7200" -> algs [7], weight "200"
        # e.g., "725" -> algs [7], weight "25"
        # e.g., "3,725/80/100/25" -> algs [3, 7], weight "25/80/100/25"
        # e.g., "7,8 200/50" -> algs [7, 8], weight "200/50"
        
        # If there's a comma in raw_nums
        m_comma = re.search(r'^(.*?,\s*\d+?)\s*(\d{2,4})$', raw_nums)
        if m_comma:
            alg_p = m_comma.group(1)
            w_p = m_comma.group(2)
            allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
            weight = w_p + " " + unit_name
        elif '/' in raw_nums:
            m_slash = re.search(r'^(.*?)((\d+/\d+.*))$', raw_nums)
            if m_slash and m_slash.group(1).strip():
                alg_p = m_slash.group(1).strip()
                w_p = m_slash.group(2).strip()
                allergens = [int(x) for x in re.findall(r'\d+', alg_p) if 1 <= int(x) <= 14]
                weight = w_p + " " + unit_name
            else:
                weight = raw_nums + " " + unit_name
        elif len(raw_nums) >= 4 and raw_nums[0] in '123456789' and raw_nums[1:].isdigit():
            val = int(raw_nums[1:])
            if val in [25, 30, 40, 50, 60, 70, 80, 100, 120, 150, 180, 200, 225, 250, 300, 350, 400, 450, 500]:
                allergens = [int(raw_nums[0])]
                weight = str(val) + " " + unit_name
            else:
                weight = raw_nums + " " + unit_name
        elif len(raw_nums) == 3 and raw_nums[0] in '123456789' and raw_nums[1:].isdigit():
            val = int(raw_nums[1:])
            if val in [25, 50, 80]:
                allergens = [int(raw_nums[0])]
                weight = str(val) + " " + unit_name
            else:
                weight = raw_nums + " " + unit_name
        elif len(raw_nums) == 2 and raw_nums[0] in '123456789' and raw_nums[1] in '12345':
            allergens = [int(raw_nums[0])]
            weight = raw_nums[1] + " " + unit_name
        else:
            weight = raw_nums + " " + unit_name

        name = name_part

    # Clean name
    name = re.sub(r'[,.\s]+$', '', name).strip()
    weight = re.sub(r'\s+', ' ', weight).strip()

    return name, weight, price, sorted(list(set(allergens)))

print("=== PARSING ALL DISH HEADERS ===")
parsed_count = 0
for i, l in enumerate(lines):
    if re.search(r'(\d+([.,]\d+)?)\s*(lei|LEI|ron|RON)', l):
        parsed = smart_parse_header(l)
        if parsed:
            parsed_count += 1
            n, w, p, a = parsed
            if parsed_count <= 25:
                print(f"[{parsed_count:2d}] NAME: '{n}' | ALGS: {a} | WEIGHT: '{w}' | PRICE: {p} LEI")

print(f"\nTotal parsed dish headers: {parsed_count}")
