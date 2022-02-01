export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  publicRuntimeConfig: {
    umami: {
      scriptUrl: process.env.UMAMI_SCRIPT_URL,
      websiteId: process.env.UMAMI_ID,
      domains: process.env.UMAMI_DOMAIN,
      cache: true
    }
  },
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
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/style/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vueinview.js',
    { src: '~/plugins/Umami.js', ssr: false }
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
