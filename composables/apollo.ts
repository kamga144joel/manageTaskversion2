import { createApolloClient } from '@vue/apollo-composable'

const httpEndpoint = process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://localhost:8000/api/kaiser/graphql'
const wsEndpoint = process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'wss://localhost:8000/api/kaiser/graphql'

export const apolloClient = createApolloClient({
  httpEndpoint,
  wsEndpoint,
  fetchOptions: {
    credentials: 'include'
  },
  webSocketOptions: {
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
      }
    }
  }
})

export const apolloProvider = {
  defaultClient: apolloClient,
  clients: {
    default: apolloClient
  }
}
