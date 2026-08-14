with open('scratch/lines_out.txt', 'r', encoding='utf-8') as f:
    lines = [l.strip() for l in f]

with open('scratch/lines_first_120.txt', 'w', encoding='utf-8') as out:
    out.write("\n".join(lines[:120]))

print("Wrote first 120 lines to scratch/lines_first_120.txt!")
