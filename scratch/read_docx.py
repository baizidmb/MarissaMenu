import zipfile
import xml.etree.ElementTree as ET

docx_path = r"C:\Users\bayzi\Downloads\Mobile Devices\MENIU 2025 MARISSA SIMPLIFICATRESTAURANT (2).docx"
with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')

root = ET.fromstring(xml_content)

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
    if texts:
        paragraphs.append("".join(texts))

with open('scratch/menu_docx_raw.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(paragraphs))

print("Successfully extracted menu_docx_raw.txt! Paragraphs count:", len(paragraphs))
