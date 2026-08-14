import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/test_parser_out.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    print("".join(lines[:50]))
