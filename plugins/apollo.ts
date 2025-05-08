import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Configuration Apollo
const apolloConfig = {
  httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://localhost:8000/api/kaiser/graphql',
  wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'ws://localhost:8000/api/kaiser/graphql'
}

// Initialisation du client Apollo
let apolloClient

export const getApolloClient = () => {
  if (!apolloClient && typeof window !== 'undefined') {
    try {
      apolloClient = new ApolloClient({
        link: new HttpLink({
          uri: apolloConfig.httpEndpoint,
          headers: {
            'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
          }
        }),
        cache: new InMemoryCache()
      })
    } catch (error) {
      console.error('Erreur lors de l\'initialisation d\'Apollo:', error)
      return null
    }
  }
  return apolloClient
}

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    try {
      // Initialisation côté client
      const client = getApolloClient()
      if (client) {
        nuxtApp.vueApp.provide(DefaultApolloClient, client)
      } else {
        console.error('Impossible d\'initialiser Apollo')
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du plugin Apollo:', error)
    }
  }
})
