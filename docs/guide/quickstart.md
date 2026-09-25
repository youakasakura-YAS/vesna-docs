# 快速开始

## 下载

从 [GitHub Releases](https://github.com/youakasakura-YAS/vesna/releases) 下载 `vesna-1.5.0-windows-x64.zip`，解压到任意目录即可使用，无需安装依赖。

| 文件 | 说明 |
| --- | --- |
| `bin\vesna.exe` | 解释器（静态链接，零运行时依赖） |
| `lib\*.ves` | 标准库（vpm 包管理器等） |
| `docs\` | 内置函数与语法文档 |
| `vesna-0.6.0.vsix` | VSCode 插件（语法高亮 + LSP） |

## 运行脚本

```bat
vesna hello.ves
vesna hello.ves arg1 arg2
```

不带参数进入 REPL：

```bat
vesna
```

## 安装到系统（可选）

```bat
vesna --install            # 安装到 C:\Vesna，写入环境变量与文件关联
vesna --install D:\MyVesna # 指定目录
vesna --uninstall          # 卸载：删目录 + 清环境变量 + 删注册表
```

## Hello, World

```vesna
print("Hello, World"),
```

一个完整示例——读 CSV 输出 JSON：

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

## 包管理器

```bat
vesna --pkg init                 # 生成 vesna-pkg.json
vesna --pkg registry             # 缓存索引（默认：Vesna 包花园）
vesna --pkg install <目录|zip|owner:repo|包名>
vesna --pkg remove <包名>
vesna --pkg list
vesna --pkg search <关键词>
vesna --pkg publish              # 打包 + sha256 + registry 条目
```

安装的包通过 `import <名称>` 从 `<VESNA_HOME>\packages\<名称>\<entry>` 导入（`entry` 字段见 `vesna-pkg.json`）。
