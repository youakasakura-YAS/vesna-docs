---
layout: home

hero:
  name: "Vesna"
  text: "Scripts of spring"
  tagline: 轻量文本处理脚本语言 · 纯 C++ 实现 · 单文件可执行
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quickstart
    - theme: alt
      text: 内置函数
      link: /guide/builtins
  image:
    src: /vesna-docs/icon.png
    alt: Vesna

features:
  - title: 纯 C++ 自研
    details: 静态链接、零运行时依赖、单文件 vesna.exe；C++ 为权威实现，Python 参考实现冻结仅做回归
  - title: 极速文本处理
    details: 10 万行日志约 240ms 处理；awk / sed / jq / perl 的轻量替代
  - title: 176 个内置函数
    details: 字符串/列表/字典、正则、文件系统、并发、网络、二进制、JSON/CSV/INI/XML、SHA256/AES、FFI
  - title: vpm 包管理器
    details: init / install / remove / list / search / registry / publish 一条龙，官方包花园
  - title: 完整工具链
    details: 原生 C++ LSP、断点调试器、--fmt 格式化、REPL Tab 补全、VSCode 插件
  - title: 双语文档
    details: 中文与英文同步维护；仓库、发布包、文档站一体
---

<HomeCards />
