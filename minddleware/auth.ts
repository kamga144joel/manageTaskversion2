
  // Si l'utilisateur n'est pas connecté et essaie d'accéder à une page protégée

import { useAuthStore } from '~/stores/auth';
import { useCookie } from '#app';
import { navigateTo } from '#app';

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const token = useCookie('auth_token').value || localStorage.getItem('auth_token');
  // Vérifier si l'utilisateur est connecté
  if (!authStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }
  if (!token && to.path !== '/login') {
    return navigateTo('/login');
  }
  // Vérifier l'expiration du token
  if (authStore.isTokenExpired) {
    try {
      await authStore.refreshToken();
    } catch (error) {
      console.error('Error refreshing token:', error);

      authStore.logout();
      return navigateTo('/login');
    }
  }
});