import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    raw_lines = [line.split(': ', 1)[1].strip() for line in f if ': ' in line]

# Find Ciorbe section lines
ciorbe_lines = []
in_ciorbe = False

for idx, l in enumerate(raw_lines):
    if "ciorb" in l.lower() or "sup" in l.lower() or "babgulyas" in l.lower():
        in_ciorbe = True
    elif in_ciorbe and ("platou" in l.lower() or "preparate din pui" in l.lower()):
        in_ciorbe = False
    
    if in_ciorbe:
        ciorbe_lines.append((idx+1, l))

print(f"Found {len(ciorbe_lines)} lines in Ciorbe section:\n")
for idx, l in ciorbe_lines:
    print(f"Line {idx:3d}: {l}")
