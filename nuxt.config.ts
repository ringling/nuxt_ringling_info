export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/styles.scss',
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'sitemap', type: 'application/xml', title: 'Sitemap - Thomas Ringling', href: '/sitemap.xml' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Work+Sans:wght@300;400;500;600&family=Noto+Serif+JP:wght@200;300;400;500&family=JetBrains+Mono:wght@300;400&display=swap' },
      ],
      title: 'Thomas Ringling — Developer, Nærum'
    }
  }
})
