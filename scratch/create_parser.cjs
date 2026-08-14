const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// docx path
const docxPath = 'C:\\Users\\bayzi\\Downloads\\Mobile Devices\\MENIU 2025 MARISSA SIMPLIFICATRESTAURANT (2).docx';

// Let's extract document.xml using python or powershell zip
const pyScript = `
import zipfile
import xml.etree.ElementTree as ET

docx_path = r"${docxPath.replace(/\\/g, '\\\\')}"
with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')

root = ET.fromstring(xml_content)
namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
    if texts:
        paragraphs.append("".join(texts))

print("\\n".join(paragraphs))
`;

fs.writeFileSync('scratch/read_docx.py', pyScript);
