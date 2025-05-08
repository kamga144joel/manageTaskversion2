import { createApolloClient } from '@vue/apollo-composable'

// Utiliser l'URL de l'API GraphQL de Hasura
const httpEndpoint = process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://your-hasura-project.hasura.app/v1/graphql'

export const apolloClient = createApolloClient({
  httpEndpoint,
  fetchOptions: {
    credentials: 'include',
    headers: {
      'x-hasura-admin-secret': process.env.NUXT_PUBLIC_HASURA_ADMIN_SECRET || ''
    }
  }
})

export const apolloProvider = {
  defaultClient: apolloClient
}
