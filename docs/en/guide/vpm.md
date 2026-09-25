# Package Manager (vpm)

Vesna ships a built-in package manager (`lib\pkg.ves`) — entry point `vesna --pkg <command>`.

## Commands

```bat
vesna --pkg init                 # scaffold vesna-pkg.json
vesna --pkg registry             # cache index (default: Vesna Package Garden)
vesna --pkg install <dir|zip|owner:repo|name>
vesna --pkg remove <name>
vesna --pkg list
vesna --pkg search <keyword>
vesna --pkg publish              # one-command publish
```

## Package metadata (vesna-pkg.json)

```json
{
  "name": "mypkg",
  "version": "1.0.0",
  "description": "...",
  "license": "MIT",
  "entry": "main.ves",
  "dependencies": []
}
```

- `name` must match `^[a-z][a-z0-9_-]+$`
- `version` must be `x.y.z`
- `entry` points to the package's entry script

## Validation & install

- Metadata is validated item by item (since 1.3)
- Registry entries may carry a `sha256` hash verified before install
- Dependencies are installed automatically (version checks + loop protection)
- `remove` refuses to uninstall a package others still depend on (`--force` overrides)

## Publish (since 1.5)

```bat
vesna --pkg publish
```

One command: validate metadata → pack `entry` + metadata into `<name>-<version>.zip` → compute the zip `sha256` → write `registry-entry.json` → append to a local `registry.json` if present.

## Official registry

Default registry: [Vesna Package Garden](https://youakasakura-YAS.github.io/vesna-pkg/). Available packages:

- `strutil` — string utilities
- `hello_vesna` — sample package
- `vesna-test` — unit test framework (`test_case` / `test_run` / `test_eq` / `test_assert` / `test_true` / `test_count`)

```bat
vesna --pkg install vesna-test
```

## Dynamic invocation inside packages

Since 1.5 the builtin `#call(fname; arg...)` invokes a function by name string, enabling package-level frameworks (e.g. `vesna-test` hands test function names to `test_run`).
