# Debug & Tooling

## Debugger

```bat
vesna --debug hello.ves
```

Interactive commands: `c`/`continue` continue, `n`/`next` next line, `s`/`step` step into, `q`/`quit` quit, `b <line>` set breakpoint, `del <line>` delete breakpoint, `p <expr>` evaluate, `vars` list variables, `bt` backtrace, `list` show source, `help` help.

## LSP

```bat
vesna --lsp
```

Native C++ implementation (stdio JSON-RPC): diagnostics, completion (all builtins + document identifiers, `#` trigger), hover, `documentSymbol`, `foldingRange`. The VSCode extension spawns `vesna --lsp` automatically.

## Formatter (since 1.5)

```bat
vesna --fmt hello.ves
```

Line-level normalization: indentation (`-` runs), trailing whitespace, blank-line collapsing. Syntax-preserving — tokens are never moved.

## REPL Tab completion (since 1.5, Windows)

In the REPL, press Tab to complete builtin names: `#js<Tab>` auto-completes a unique hit (`json_encode`), lists candidates on multiple hits, does nothing on zero hits.

## Version & help

```bat
vesna --version
vesna --help
```

## VSCode extension

`vesna-0.6.0.vsix`: syntax highlighting (176 builtins) + LSP (diagnostics/completion/hover/symbols/folding). Install from the extension panel → "Install from VSIX".
