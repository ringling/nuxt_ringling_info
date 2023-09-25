export default defineNuxtConfig({
  //ssr: false,

  modules: [
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/css/styles.scss',

  ],

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'Thomas Ringling',
          name: 'Thomas Ringling website',
          content: 'A lifetime learner and polyglot software craftsman. Who am I, what am I doing and what I have done. '
        }
      ],
      link: [
        { rel: 'sitemap', type: 'application/xml', title: 'Sitemap - Thomas Ringling', href: '/sitemap.xml' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap' }

      ],

      title: "Thomas Ringling: A lifetime learner and polyglot software craftsman"
    }
  }
})
