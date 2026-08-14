import json

with open('scratch/parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

paragraphs = [e['text'] for e in elements if e['type'] == 'p']

with open('scratch/para_sample.txt', 'w', encoding='utf-8') as out:
    for i, p in enumerate(paragraphs[:150]):
        out.write(f"[{i+1:3d}] {p}\n")

print("Wrote first 150 paragraphs to scratch/para_sample.txt!")
