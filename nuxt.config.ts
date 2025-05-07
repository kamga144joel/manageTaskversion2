export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' },
      { rel: 'apple-touch-icon', href: '/logo.jpg' }
    ]
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  apollo:{
    clients: {
        default: {
          httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://localhost:8000/api/kaiser/graphql',
          wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'wss://localhost:8000/api/kaiser/graphql',
          cookieAttributes: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'strict'
          },
          connectToDevTools: true,
          defaultOptions: {
            watchQuery: {
              fetchPolicy: 'cache-and-network',
              errorPolicy: 'ignore'
            },
            query: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'all'
            }
          }
        }
    }
  },
  build: {
    publicPath: '/_nuxt/',
    extractCSS: true,
    output: {
      dir: 'dist'
    }
  },
  runtimeConfig: {
    public: {
      app: {
        baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
        buildAssetsDir: '/_nuxt/'
      }
    }
  }
}