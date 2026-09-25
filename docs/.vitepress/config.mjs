import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vesna',
  description: 'Scripts of spring — 轻量文本处理脚本语言 / a lightweight text-processing scripting language',
  lang: 'zh-CN',
  base: '/vesna-docs/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/vesna-docs/icon.png' }],
  ],
  themeConfig: {
    logo: '/vesna-docs/icon.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { translations: { button: { buttonText: '搜索文档', placeholder: '搜索文档' } } },
          en: { translations: { button: { buttonText: 'Search', placeholder: 'Search docs' } } },
        },
      },
    },
    nav: [
      { text: '指南', link: '/guide/syntax', activeMatch: '^/guide/' },
      { text: '内置函数', link: '/guide/builtins' },
      { text: '更新日志', link: '/guide/changelog' },
      { text: 'GitHub', link: 'https://github.com/youakasakura-YAS/vesna' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '语法', link: '/guide/syntax' },
            { text: '内置函数', link: '/guide/builtins' },
            { text: '包管理器 vpm', link: '/guide/vpm' },
            { text: '调试与工具链', link: '/guide/tooling' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
        },
      ],
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Quick Start', link: '/en/guide/quickstart' },
            { text: 'Syntax', link: '/en/guide/syntax' },
            { text: 'Builtins', link: '/en/guide/builtins' },
            { text: 'Package Manager vpm', link: '/en/guide/vpm' },
            { text: 'Debug & Tooling', link: '/en/guide/tooling' },
            { text: 'Changelog', link: '/en/guide/changelog' },
          ],
        },
      ],
    },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页目录', level: [2, 3] },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
    langMenuLabel: '语言',
    footer: {
      message: 'MIT License · Scripts of spring',
    },
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/syntax', activeMatch: '^/guide/' },
          { text: '内置函数', link: '/guide/builtins' },
          { text: '更新日志', link: '/guide/changelog' },
          { text: 'GitHub', link: 'https://github.com/youakasakura-YAS/vesna' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/guide/quickstart' },
                { text: '语法', link: '/guide/syntax' },
                { text: '内置函数', link: '/guide/builtins' },
                { text: '包管理器 vpm', link: '/guide/vpm' },
                { text: '调试与工具链', link: '/guide/tooling' },
                { text: '更新日志', link: '/guide/changelog' },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/syntax', activeMatch: '^/en/guide/' },
          { text: 'Builtins', link: '/en/guide/builtins' },
          { text: 'Changelog', link: '/en/guide/changelog' },
          { text: 'GitHub', link: 'https://github.com/youakasakura-YAS/vesna' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Quick Start', link: '/en/guide/quickstart' },
                { text: 'Syntax', link: '/en/guide/syntax' },
                { text: 'Builtins', link: '/en/guide/builtins' },
                { text: 'Package Manager vpm', link: '/en/guide/vpm' },
                { text: 'Debug & Tooling', link: '/en/guide/tooling' },
                { text: 'Changelog', link: '/en/guide/changelog' },
              ],
            },
          ],
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page', level: [2, 3] },
        darkModeSwitchLabel: 'Appearance',
        returnToTopLabel: 'Back to top',
        lastUpdatedText: 'Last updated',
        langMenuLabel: 'Language',
      },
    },
  },
})
