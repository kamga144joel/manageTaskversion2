import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Configuration Apollo
export const apolloConfig = {
  httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://your-hasura-project.hasura.app/v1/graphql',
  wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || null
}

// Initialisation du client Apollo
export const initApolloClient = () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: apolloConfig.httpEndpoint,
      headers: {
        'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
      }
    }),
    cache: new InMemoryCache()
  })
  return client
}

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    // Initialisation côté client
    const client = initApolloClient()
    nuxtApp.vueApp.provide(DefaultApolloClient, client)
  }
})
