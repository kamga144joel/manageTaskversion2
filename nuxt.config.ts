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
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
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