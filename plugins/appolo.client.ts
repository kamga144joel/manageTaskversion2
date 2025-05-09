// plugins/apollo.client.ts

import { defineNuxtPlugin, useCookie, useRuntimeConfig, useNuxtApp, type NuxtApp } from '#app';
import { ref, watch } from 'vue';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const auth_token = useCookie('auth_token');

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: auth_token.value ? `Bearer ${auth_token.value}` : ''
      }
    };
  });

  watch(auth_token, (newToken) => {
    if (newToken) {
      nuxtApp.callHook('apollo:auth', {
        client: 'default',
        token: ref(newToken)
      });
    }
  });

  await nuxtApp.callHook('apollo:auth', {
    client: 'default',
    token: auth_token.value ? ref(auth_token.value) : ref(null)
  });

  // Wait for the Apollo client to be initialized
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      const apollo = nuxtApp.vueApp.config.globalProperties.$apollo;
      if (apollo && apollo.clients && apollo.clients.default) {
        clearInterval(interval);
        resolve(true);
      }
    }, 100);
  });

  const apollo = nuxtApp.vueApp.config.globalProperties.$apollo;
  if (!apollo || !apollo.clients || !apollo.clients.default) {
    console.error('Default Apollo client not found or not properly initialized.');
    return;
  }

  const defaultClient = apollo.clients.default;
  const currentLink = defaultClient.link;
  const newLink = authLink.concat(currentLink);
  defaultClient.setLink(newLink);
});
