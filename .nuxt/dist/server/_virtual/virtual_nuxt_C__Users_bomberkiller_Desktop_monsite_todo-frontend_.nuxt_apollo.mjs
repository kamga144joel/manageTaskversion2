const NuxtApollo = {
  clientAwareness: false,
  cookieAttributes: { "maxAge": 604800, "secure": true, "sameSite": "lax" },
  clients: { "default": { "httpEndpoint": "https://localhost:8000/api/kaiser/graphql", "wsEndpoint": "wss://localhost:8000/api/kaiser/graphql", "cookieAttributes": { "maxAge": 604800, "secure": true, "sameSite": "strict", "httpOnly": true }, "connectToDevTools": true, "defaultOptions": { "watchQuery": { "fetchPolicy": "cache-and-network", "errorPolicy": "ignore" }, "query": { "fetchPolicy": "no-cache", "errorPolicy": "all" } }, "authType": "Bearer", "authHeader": "Authorization", "tokenName": "apollo:default.token", "tokenStorage": "cookie" } }
};
export {
  NuxtApollo
};
//# sourceMappingURL=virtual_nuxt_C__Users_bomberkiller_Desktop_monsite_todo-frontend_.nuxt_apollo.mjs.map
