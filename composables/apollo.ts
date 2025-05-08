export const useApolloClient = () => {
  const app = useNuxtApp()
  return app.$apolloClient
}
