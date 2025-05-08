import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpEndpoint = process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://your-hasura-project.hasura.app/v1/graphql'

// Create the Apollo Client
const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: httpEndpoint,
    headers: {
      'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
    }
  }),
  cache: new InMemoryCache()
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
