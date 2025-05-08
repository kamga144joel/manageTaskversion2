import { createApolloClient } from '@vue/apollo-composable'
import { createApp } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const httpEndpoint = process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://your-hasura-project.hasura.app/v1/graphql'

// Create the Apollo Client
const apolloClient = new ApolloClient({
  uri: httpEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide('apolloClient', apolloClient)
  nuxtApp.vueApp.config.globalProperties.$apolloClient = apolloClient
})
