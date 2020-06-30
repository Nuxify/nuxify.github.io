import colors from 'vuetify/es5/util/colors'

require('dotenv').config()

const APP_NAME = "Nuxify | Writing Software Like It's Ours"
const APP_DESCRIPTION = "Writing Software Like It's Ours"
const APP_URL = 'https://nuxify.tech'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: APP_NAME,
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: APP_DESCRIPTION
      },
      // OG Tag setup
      // https://vue-meta.nuxtjs.org/api/#meta
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type'
      },
      {
        property: 'og:title',
        content: APP_NAME,
        vmid: 'og:title'
      },
      {
        property: 'og:description',
        content: APP_DESCRIPTION,
        vmid: 'og:description'
      },
      {
        property: 'og:site_name',
        content: APP_URL,
        vmid: 'og:site_name'
      },
      {
        property: 'og:url',
        content: APP_URL,
        vmid: 'og:url'
      },
      {
        property: 'og:image',
        content: APP_URL + '/landing/nuxify-box.svg',
        vmid: 'og:image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/landing/nuxify-box.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/repository', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: process.env.NODE_ENV !== 'production',
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    }
  },
  /**
   *  PWA module configuration
   *  https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    meta: {
      title: APP_NAME
    },
    manifest: {
      name: APP_NAME,
      short_name: APP_NAME,
      description: APP_DESCRIPTION,
      start_url: APP_URL,
      lang: 'en'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          nuxify: '#ED1967'
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          nuxify: '#ED1967'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
