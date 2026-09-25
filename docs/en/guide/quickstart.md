# Quick Start

## Download

Grab `vesna-1.5.0-windows-x64.zip` from [GitHub Releases](https://github.com/youakasakura-YAS/vesna/releases) and extract it anywhere — no dependencies needed.

| File | Description |
| --- | --- |
| `bin\vesna.exe` | Interpreter (statically linked, zero runtime deps) |
| `lib\*.ves` | Standard library (vpm package manager, etc.) |
| `docs\` | Builtins & syntax docs |
| `vesna-0.6.0.vsix` | VSCode extension (highlighting + LSP) |

## Run scripts

```bat
vesna hello.ves
vesna hello.ves arg1 arg2
```

No arguments enters the REPL:

```bat
vesna
```

## Install (optional)

```bat
vesna --install            # install to C:\Vesna, set PATH & file association
vesna --install D:\MyVesna # custom directory
vesna --uninstall          # remove dir + clean PATH + delete registry keys
```

## Hello, World

```vesna
print("Hello, World"),
```

A complete example — read CSV, output JSON:

```vesna
import csv,
import json,

text = #fread("data.csv"),
rows = csv_parse(text),

header = rows['1'],
result = [],

i = '2',
while i <= #len(rows)-
-row = rows[i]
-obj = {}
-j = '1'
-while j <= #len(header)-
--obj[header[j]] = row[j]
--j += '1'
-#append(result; obj)
-i += '1',

print(json_write(result)),
```

## Package manager

```bat
vesna --pkg init                 # scaffold vesna-pkg.json
vesna --pkg registry             # cache index (default: Vesna Package Garden)
vesna --pkg install <dir|zip|owner:repo|name>
vesna --pkg remove <name>
vesna --pkg list
vesna --pkg search <keyword>
vesna --pkg publish              # pack + sha256 + registry entry
```

Installed packages are imported with `import <name>` from `<VESNA_HOME>\packages\<name>\<entry>` (the `entry` field of `vesna-pkg.json`).
