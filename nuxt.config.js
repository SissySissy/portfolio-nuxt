export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Silvia Monti — Design & Code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://umami.morme.ch/umami.js',
        async: true,
        defer: true,
        body: true,
        'data-website-id': process.env.UMAMI_ID,
        'data-domains': process.env.UMAMI_DOMAIN,
        'data-do-not-track': process.env.UMAMI_TRACK,
        'data-cache': process.env.UMAMI_CACHE
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/style/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vueinview.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },

  graphql: {
    clients: {
      default: {
        endpoint: process.env.API_ENDPOINT || 'https://api.silviamonti.ch/graphql'
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
