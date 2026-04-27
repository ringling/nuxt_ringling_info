export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  content: {},
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
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Code+Pro:wght@300;400;500;600;700&family=Fraunces:ital,wght@1,400&display=swap' },
      ],
      title: 'Thomas Ringling — Developer, Nærum'
    }
  }
})
