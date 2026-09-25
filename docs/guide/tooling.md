# 调试与工具链

## 调试器

```bat
vesna --debug hello.ves
```

交互命令：`c`/`continue` 继续、`n`/`next` 下一行、`s`/`step` 步入、`q`/`quit` 退出、`b <行>` 设断点、`del <行>` 删断点、`p <表达式>` 求值、`vars` 变量列表、`bt` 调用栈、`list` 显示源码、`help` 帮助。

## LSP（语言服务器）

```bat
vesna --lsp
```

原生 C++ 实现（stdio JSON-RPC）：诊断、补全（全部内置 + 文档标识符，`#` 触发）、悬停、`documentSymbol`、`foldingRange`。VSCode 插件自动拉起 `vesna --lsp`。

## 格式化器（1.5 起）

```bat
vesna --fmt hello.ves
```

行级规范化：缩进（`-` 层数）、行尾空白、连续空行压缩。纯语法保持，不移动 token。

## REPL 补全（1.5 起，Windows）

REPL 中按 Tab 补全内置名：`#js<Tab>` 唯一命中自动补全（`json_encode`），多命中列出候选，零命中无操作。

## 版本与帮助

```bat
vesna --version
vesna --help
```

## VSCode 插件

`vesna-0.6.0.vsix`：语法高亮（176 内置）+ LSP（诊断/补全/悬停/符号/折叠）。在 VSCode 扩展面板「从 VSIX 安装」即可。
