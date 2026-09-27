# -*- coding: utf-8 -*-
import subprocess, time

def run(args, cwd):
    p = subprocess.run(args, cwd=cwd, capture_output=True, text=True, encoding='utf-8', errors='replace')
    return p.returncode, (p.stdout or '') + (p.stderr or '')

for repo in [r'F:\Vesna-docs']:
    ok = False
    for i in range(1, 5):
        rc, out = run(['git', 'push', 'origin', 'main'], repo)
        if rc == 0:
            print('push main OK:', repo)
            ok = True
            break
        print('retry', i, out.strip()[:120])
        time.sleep(5)
    if not ok:
        print('FAILED', repo)
