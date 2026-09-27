# 调试与工具链

## 安装与卸载

```bat
vesna --install            # 安装（Windows 默认 C:\Vesna / POSIX 默认 /usr/local/vesna），写入环境变量与文件关联
vesna --install D:\MyVesna # 指定目录
vesna --uninstall          # 卸载：删目录 + 清环境变量 + 删注册表
```

- **Windows**：默认安装到 `C:\Vesna`，注册 `.ves` 文件关联（`install-assoc.reg` 集成其中）、写入注册表与用户环境变量。
- **Linux / macOS**：默认安装到 `/usr/local/vesna`，环境变量（`VESNA_HOME`、`PATH`）写入 `~/.bashrc` / `~/.zshrc`（修改后需 `source` 生效），文件关联请用系统工具（如 `xdg-mime`）自行注册。

单文件分发——`vesna.exe` 无需 `lib/` 目录、无需 `VESNA_HOME` 即可独立运行。

## 跨平台构建（从源码）

除官方发行版外，可从源码自行构建（需 C++17 编译器）：

```bash
# Linux / macOS / Windows（CMake）
cmake -S src/cpp -B build
cmake --build build
sudo cmake --install build   # 安装到 /usr/local/bin（POSIX）
```

Windows 亦可直接用 `src/cpp/_build_msvc.bat`（MSVC）构建。

## 调试器

```bat
vesna --debug hello.ves
```

进入逐行调试。交互命令：

| 命令 | 说明 |
|---|---|
| `c` / `continue` | 继续运行到下一个断点或结束 |
| `n` / `next` | 下一行（不进入函数） |
| `s` / `step` | 步入函数 |
| `finish` | 运行到当前函数返回 |
| `q` / `quit` | 退出调试 |
| `b <行号>` | 设置断点 |
| `b <行号> if <条件>` | 条件断点（条件为真才停下） |
| `del <行号>` | 删除断点 |
| `del all` | 清空所有断点 |
| `watch <表达式>` | 添加监视表达式（每次停顿时显示） |
| `watches` | 列出全部监视 |
| `unwatch <序号>` | 删除指定监视 |
| `set <变量> = <表达式>` | 修改变量值 |
| `p <表达式>` | 求值表达式 |
| `vars` | 变量列表 |
| `bt` | 调用栈 |
| `list` | 显示当前源码 |
| `help` | 帮助 |

## 错误显示（2.0 起）

运行错误带源码上下文：`[第 N 行] 消息` 后跟源码行与 `^` 插入符定位列。

```text
[第 2 行] 未知字符: 2
  | count = '0',
  |         ^
```

## LSP（语言服务器）

```bat
vesna --lsp
```

原生 C++ 实现（stdio JSON-RPC），支持：诊断、补全（全部 214 内置 + 文档标识符，`#` 触发）、悬停（内置/关键字文档 + 用户标识符定义行）、`documentSymbol`、`foldingRange`、跳转定义、重命名、签名提示、工作区符号、格式化、引用查找。VSCode 插件自动拉起 `vesna --lsp`。

## 格式化器（1.5 起）

```bat
vesna --fmt hello.ves
```

行级规范化：缩进（`-` 层数）、行尾空白、连续空行压缩。纯语法保持，不移动 token。

## REPL

```bat
vesna
```

- **Tab 补全**（Windows）：补全内置名，`#js<Tab>` 唯一命中自动补全，多命中列出候选
- **上下方向键历史**（2.0 起）：浏览历史命令

## 版本与帮助

```bat
vesna --version
vesna --help
```

## VSCode 插件

`vesna-2.7.0.vsix`：语法高亮（214 内置）+ LSP（诊断/补全/悬停/符号/折叠/跳转定义/重命名/签名提示/工作区符号/格式化/引用查找）。在 VSCode 扩展面板「从 VSIX 安装」即可；`vesna` 不在 PATH 时设置 `vesna.executablePath` 指向 `vesna.exe`。
