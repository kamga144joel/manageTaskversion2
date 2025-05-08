import { useApolloClient } from '@vue/apollo-composable'
import { getApolloClient } from '~/plugins/apollo'

export const useApollo = () => {
  const apolloClient = useApolloClient()
  
  // Si le client n'est pas encore initialisé, on le récupère
  if (!apolloClient.value) {
    apolloClient.value = getApolloClient()
  }

  return {
    client: apolloClient,
    query: apolloClient.value.query,
    mutate: apolloClient.value.mutate
  }
}
