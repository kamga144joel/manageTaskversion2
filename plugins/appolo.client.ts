// plugins/apollo.client.ts

import { defineNuxtPlugin, useCookie, useRuntimeConfig, useNuxtApp, type NuxtApp } from '#app';
import { ref, watch } from 'vue';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  if (process.client) {
    const token = localStorage.getItem('auth_token');
    const nuxtApp = useNuxtApp();
    const auth_token = useCookie('auth_token');

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,          
          Authorization: auth_token.value ? `Bearer ${auth_token.value}` : ''
        },
      };
    });

    watch(auth_token, (newToken) => {
      if (newToken) {
        nuxtApp.callHook('apollo:auth', { // Use the correct hook name
          client: 'default',
          token: ref(newToken)
        });
      }
    });

    await nuxtApp.callHook('apollo:auth', { // Use the correct hook name
      client: 'default',
      token: token ? ref(token) : ref(null)
    });

    const apollo = nuxtApp.vueApp.config.globalProperties.$apollo as {
      clients: {
        default: ApolloClient<InMemoryCache>;
      };
    };    const defaultClient = apollo.clients.default;

    if (defaultClient) {
      const currentLink = defaultClient.link;
      const newLink = authLink.concat(currentLink);
      defaultClient.setLink(newLink);
    } else {
      console.error('Default Apollo client not found or not properly initialized.');
    }
  }
});
