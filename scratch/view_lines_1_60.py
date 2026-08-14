import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/lines_first_120.txt', 'r', encoding='utf-8') as f:
    for i in range(70):
        print(f.readline().strip())
