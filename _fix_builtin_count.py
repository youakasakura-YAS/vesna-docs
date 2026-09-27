# -*- coding: utf-8 -*-
import io, glob

files = glob.glob(r'F:\Vesna-docs\docs\guide\*.md') + glob.glob(r'F:\Vesna-docs\docs\en\guide\*.md')
for f in files:
    s = io.open(f, encoding='utf-8').read()
    orig = s
    s = s.replace('193 内置', '198 内置')
    s = s.replace('193 built-in', '198 built-in')
    s = s.replace('193 builtins', '198 builtins')
    s = s.replace('vesna-2.0.0.vsix', 'vesna-2.3.0.vsix')
    s = s.replace('VSCode 插件 2.0.0', 'VSCode 插件 2.3.0')
    s = s.replace('VSCode extension 2.0.0', 'VSCode extension 2.3.0')
    s = s.replace('全部 193 内置', '全部 198 内置')
    s = s.replace('all 193 builtins', 'all 198 builtins')
    if s != orig:
        io.open(f, 'w', encoding='utf-8', newline='\n').write(s)
        print('updated:', f)
    else:
        print('unchanged:', f)
