# 包管理器 vpm

Vesna 内置包管理器（`lib\pkg.ves`），命令入口 `vesna --pkg <命令>`。

## 命令总览

```bat
vesna --pkg init                 # 生成 vesna-pkg.json 脚手架
vesna --pkg registry             # 缓存索引（默认：Vesna 包花园）
vesna --pkg install <目录|zip|owner:repo|包名>
vesna --pkg remove <包名>
vesna --pkg list
vesna --pkg search <关键词>
vesna --pkg publish              # 一键发布
```

## 包元数据（vesna-pkg.json）

```json
{
  "name": "mypkg",
  "version": "1.0.0",
  "description": "……",
  "license": "MIT",
  "entry": "main.ves",
  "dependencies": []
}
```

- `name` 必须匹配 `^[a-z][a-z0-9_-]+$`
- `version` 必须为 `x.y.z`
- `entry` 指向包的入口脚本

## 校验与安装

- 元数据逐项校验（1.3 起）
- registry 条目可携带 `sha256`，安装前校验 zip 哈希
- 依赖自动安装（版本检查 + 环路保护）
- `remove` 拒绝卸载仍被其他包依赖的包（`--force` 覆盖）

## 发布（publish，1.5 起）

```bat
vesna --pkg publish
```

一条命令完成：校验元数据 → 打包 `entry` + 元数据为 `<name>-<version>.zip` → 计算 zip `sha256` → 写入 `registry-entry.json` → 本地 `registry.json` 存在则自动追加条目。

## 官方包花园

默认 registry：[Vesna 包花园](https://youakasakura-YAS.github.io/vesna-pkg/)。已收录：

- `strutil` — 字符串工具
- `hello_vesna` — 示例包
- `vesna-test` — 单元测试框架（`test_case` / `test_run` / `test_eq` / `test_assert` / `test_true` / `test_count`）

```bat
vesna --pkg install vesna-test
```

## 包内动态调用

1.5 起新增内置 `#call(fname; arg...)`：按函数名字符串动态调用，支撑包级框架（如 `vesna-test` 把测试函数名交给 `test_run` 执行）。
