import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
  }
})