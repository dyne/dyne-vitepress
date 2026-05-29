import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dyne VitePress',
  description: 'Dyne-styled documentation scaffold',
  base: process.env.BASE_PATH ?? '/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'About Dyne.org', link: 'https://dyne.org' }
    ],

    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
          { text: 'About', link: '/about' }
        ]
      }
    ]
  }
})
