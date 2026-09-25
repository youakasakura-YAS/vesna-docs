---
layout: home

hero:
  name: "Vesna"
  text: "Scripts of spring"
  tagline: A lightweight text-processing scripting language · pure C++ · single-file executable
  actions:
    - theme: brand
      text: Quick Start
      link: /en/guide/quickstart
    - theme: alt
      text: Builtins
      link: /en/guide/builtins
  image:
    src: /vesna-docs/icon.png
    alt: Vesna

features:
  - title: Pure C++ implementation
    details: Statically linked, zero runtime dependencies, single vesna.exe; C++ is authoritative, the Python reference is frozen for regression only
  - title: Fast text processing
    details: ~240ms for 100k log lines; a lightweight alternative to awk / sed / jq / perl
  - title: 176 builtins
    details: strings / lists / dicts, regex, filesystem, concurrency, networking, binary, JSON/CSV/INI/XML, SHA256/AES, FFI
  - title: vpm package manager
    details: init / install / remove / list / search / registry / publish, with an official package garden
  - title: Full toolchain
    details: native C++ LSP, breakpoint debugger, --fmt formatter, REPL Tab completion, VSCode extension
  - title: Bilingual docs
    details: Chinese and English maintained together; repo, release bundles and docs site stay in sync
---
