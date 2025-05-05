import { defineNuxtPlugin } from '#app';
import { useAuthStore } from '~/stores/auth';
import { useCookie } from '#app';
import { navigateTo } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  
  // Vérification du token à chaque navigation
  nuxtApp.hook('app:created', () => {
    const token = useCookie('auth_token').value;
    if (token) {
      authStore.setToken(token);
      if (authStore.isTokenExpired) {
        authStore.logout();
      }
    }
  });

  // Gestion des erreurs d'authentification
  nuxtApp.hook('vue:error', (error: unknown) => {
    if (error instanceof Error && (
      error.message.includes('401') || error.message.includes('unauthorized')
    )) {
      authStore.logout();
      navigateTo('/login');
    }
  });

  // Ajouter des méthodes globales
  nuxtApp.provide('auth', {
    isAuthenticated: () => authStore.isAuthenticated,
    user: () => authStore.user,
    login: (token: string) => authStore.setToken(token),
    logout: () => authStore.logout(),
    hasError: () => authStore.hasError,
    error: () => authStore.error
  });
});