# -*- coding: utf-8 -*-
import io

def insert(path, head, body):
    s = io.open(path, encoding='utf-8').read()
    assert head in s, path
    s = s.replace(head, body + '\n' + head, 1)
    io.open(path, 'w', encoding='utf-8', newline='\n').write(s)
    print('updated', path)

zh = '''## 2.9.1

### 新增
- **`vesna-mc` 1.3.0**：事件 11 → 16（新增 `player_use_block` / `player_use_item` / `player_respawn` / `entity_damage` / `player_drop_item`），动作 8 → 14（新增 `title` / `actionbar` / `set_block` / `summon` / `spawn_particle` / `scoreboard`）
- **性能优化**：`events.json` 顶层 `"tick_interval"` 可调 `server_tick` 频率（默认 20 tick）；事件级 `"min_interval"`（秒）做高频节流（`server_tick`、`entity_damage` 默认 1s）；常驻脚本顶层新增共享 `state` dict，可在事件函数间读写
- 语言本体无新内置（Vesna 2.9.0 不变）

### 说明
- 1.3.0 验证：生成器断言 7/7、协议端到端 17/17（含 5 新事件 + 节流 + no_such_event）、三平台（Fabric/Forge/NeoForge）桥类 javac 语法级 0 错误、入口仅剩 MC API 缺失类报错。

## 2.9.0'''

en = '''## 2.9.1

### Added
- **`vesna-mc` 1.3.0**: events 11 → 16 (new `player_use_block` / `player_use_item` / `player_respawn` / `entity_damage` / `player_drop_item`), actions 8 → 14 (new `title` / `actionbar` / `set_block` / `summon` / `spawn_particle` / `scoreboard`)
- **Performance**: top-level `"tick_interval"` in `events.json` tunes `server_tick` frequency (default 20 ticks); per-event `"min_interval"` (seconds) throttles high-frequency events (`server_tick`, `entity_damage` default 1s); resident scripts gain a shared top-level `state` dict readable/writable across event functions
- No new language builtins (Vesna 2.9.0 unchanged)

### Notes
- 1.3.0 verified: generator assertions 7/7, protocol end-to-end 17/17 (5 new events + throttling + no_such_event), three-platform (Fabric/Forge/NeoForge) bridge javac syntax 0 errors, entrypoints only missing MC API symbols.

## 2.9.0'''

insert(r'F:\Vesna-docs\docs\guide\changelog.md', '## 2.9.0', zh)
insert(r'F:\Vesna-docs\docs\en\guide\changelog.md', '## 2.9.0', en)
