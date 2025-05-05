export default {
  clients: {
    default: {
      httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || 'https://localhost:8000/api/kaiser/graphql',
      wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || 'wss://localhost:8000/api/kaiser/graphql',
      cookieAttributes: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict'
      },
      connectToDevTools: true,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all'
        }
      }
    }
  }
}
