import zipfile
import xml.etree.ElementTree as ET
import json
import re

docx_path = r"C:\Users\bayzi\Downloads\Mobile Devices\MENIU 2025 MARISSA SIMPLIFICATRESTAURANT (2).docx"

with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')

root = ET.fromstring(xml_content)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

# Extract all text elements, table rows, and headings
body = root.find('w:body', ns)

elements = []

for elem in body:
    tag = elem.tag.split('}')[-1]
    if tag == 'p':
        texts = [t.text for t in elem.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
        full_p = "".join(texts).strip()
        if full_p:
            elements.append({'type': 'p', 'text': full_p})
    elif tag == 'tbl':
        table_data = []
        for row in elem.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr'):
            row_cells = []
            for cell in row.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc'):
                cell_texts = [t.text for t in cell.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
                row_cells.append("".join(cell_texts).strip())
            if any(row_cells):
                table_data.append(row_cells)
        if table_data:
            elements.append({'type': 'table', 'data': table_data})

print(f"Extracted {len(elements)} top-level elements (paragraphs & tables)!")

with open('scratch/parsed_docx_elements.json', 'w', encoding='utf-8') as out:
    json.dump(elements, out, ensure_ascii=False, indent=2)

print("Saved elements to scratch/parsed_docx_elements.json!")
