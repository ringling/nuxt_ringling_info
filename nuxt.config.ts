export default defineNuxtConfig({
  //ssr: false,

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/css/styles.scss'
  ],

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap' }

      ],

      title: "Thomas Ringling"
    }
  }
})
