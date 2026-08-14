import json

with open('scratch/menu_docx_raw.txt', 'r', encoding='utf-8') as f:
    lines = [l.strip() for l in f if l.strip()]

with open('scratch/lines_out.txt', 'w', encoding='utf-8') as out:
    out.write(f"Total non-empty lines: {len(lines)}\n\n")
    for i, line in enumerate(lines):
        out.write(f"{i+1:4d}: {line}\n")

print(f"Wrote {len(lines)} lines to scratch/lines_out.txt!")
