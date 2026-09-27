# Debug & Tooling

## Install & uninstall

```bat
vesna --install            # install to C:\Vesna, writes env vars and file association
vesna --install D:\MyVesna # custom directory
vesna --uninstall          # uninstall: remove directory + env vars + registry
```

The installer also registers the `.ves` file association (integrated `install-assoc.reg`). Single-file distribution — `vesna.exe` runs standalone without a `lib/` directory or `VESNA_HOME`.

## Debugger

```bat
vesna --debug hello.ves
```

Line-by-line debugging. Interactive commands:

| Command | Description |
|---|---|
| `c` / `continue` | run to the next breakpoint or the end |
| `n` / `next` | next line (do not step into functions) |
| `s` / `step` | step into a function |
| `finish` | run until the current function returns |
| `q` / `quit` | quit debugging |
| `b <line>` | set a breakpoint |
| `b <line> if <condition>` | conditional breakpoint (stops only when true) |
| `del <line>` | delete a breakpoint |
| `del all` | clear all breakpoints |
| `watch <expr>` | add a watch expression (shown at every stop) |
| `watches` | list all watches |
| `unwatch <index>` | remove a watch |
| `set <var> = <expr>` | modify a variable value |
| `p <expr>` | evaluate an expression |
| `vars` | list variables |
| `bt` | backtrace |
| `list` | show current source |
| `help` | help |

## Error display (since 2.0)

Runtime errors show source context: `[line N] message` followed by the source line and a `^` caret at the offending column.

```text
[第 2 行] 未知字符: 2
  | count = '0',
  |         ^
```

## LSP

```bat
vesna --lsp
```

Native C++ implementation (stdio JSON-RPC): diagnostics, completion (all 193 builtins + document identifiers, `#` trigger), hover (builtin/keyword docs + definition line for user identifiers), `documentSymbol`, `foldingRange`, go-to-definition, rename, signature help, workspace symbols. The VSCode extension spawns `vesna --lsp` automatically.

## Formatter (since 1.5)

```bat
vesna --fmt hello.ves
```

Line-level normalization: indentation (`-` runs), trailing whitespace, blank-line collapsing. Syntax-preserving — tokens are never moved.

## REPL

```bat
vesna
```

- **Tab completion** (Windows): completes builtin names; `#js<Tab>` auto-completes a unique hit, lists candidates on multiple hits
- **Up/down history** (since 2.0): browse command history

## Version & help

```bat
vesna --version
vesna --help
```

## VSCode extension

`vesna-2.0.0.vsix`: syntax highlighting (193 builtins) + LSP (diagnostics/completion/hover/symbols/folding/definition/rename/signature/workspace symbols). Install from the extension panel → "Install from VSIX"; if `vesna` is not on PATH, set `vesna.executablePath` to the full path of `vesna.exe`.
