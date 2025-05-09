export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: 'netlify-legacy',
    prerender: {
      routes: ['/']
    }
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
    link: [
      { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' },
      { rel: 'apple-touch-icon', href: '/logo.jpg' }
    ]
  },
  css: [
    '~/assets/css/tailwind.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apollo: {
        httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://gestionnary.netlify.app/api/kaiser/graphql',
        wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'wss://gestionnary.netlify.app/api/kaiser/graphql'
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['http2', 'http2-wrapper', 'apollo-server'],
      output: {
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    transpile: ['@apollo/client', '@vue/apollo-composable'],
    optimizeCSS: true,
    terser: {
      compress: {
        drop_console: true
      }
    }
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'http://localhost:8000/api/kaiser/graphql',
        wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'ws://localhost:8000/api/kaiser/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
          }
        }
      }
    },
    ssr: false
  },
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    buildAssetsDir: '/_nuxt/'
  },
  vite: {
    optimizeDeps: {
      include: ['@apollo/client', '@vue/apollo-composable']
    },
    server: {
      hmr: {
        host: 'localhost',
        port: 3001
      }
    }
  },
})
