import { useApolloClient } from '@vue/apollo-composable'
import { getApolloClient } from '~/plugins/apollo'

export const useApollo = () => {
  const apolloClient = useApolloClient()
  
  // Si le client n'est pas encore initialisé, on le récupère
  if (!apolloClient.value) {
    const client = getApolloClient()
    if (client) {
      apolloClient.value = client
    } else {
      console.error('Impossible d\'initialiser Apollo dans le composable')
      return {
        client: null,
        query: () => Promise.reject(new Error('Apollo non initialisé')),
        mutate: () => Promise.reject(new Error('Apollo non initialisé'))
      }
    }
  }

  return {
    client: apolloClient,
    query: apolloClient.value.query,
    mutate: apolloClient.value.mutate
  }
}
