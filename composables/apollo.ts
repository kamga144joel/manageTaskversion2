import { useApolloClient } from '@vue/apollo-composable'

export const useApollo = () => {
  const apolloClient = useApolloClient()
  return {
    client: apolloClient,
    query: apolloClient.query,
    mutate: apolloClient.mutate
  }
}
