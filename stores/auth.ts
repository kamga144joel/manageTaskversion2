// stores/auth.ts
import { defineStore, storeToRefs } from 'pinia';
import { useCookie, useFetch } from '#app';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);
  const user = ref<any>(null);
  const isAuthenticated = ref(false);
  const tokenExpiration = ref<Date | null>(null);
  const error = ref<string | null>(null);

  const authCookie = useCookie<string | null>('auth_token', {
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  const isTokenExpired = computed(() => {
    if (!tokenExpiration.value) return true;
    return tokenExpiration.value < new Date();
  });

  const hasError = computed(() => !!error.value);

  async function setToken(newToken: string) {
    try {
      token.value = newToken;
      isAuthenticated.value = true;
      error.value = null;

      authCookie.value = newToken;

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      tokenExpiration.value = expirationDate;

      await fetchUser();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erreur lors de la connexion';
      logout();
    }
  }

  async function fetchUser() {
    try {
      const { data } = await useFetch('/api/user/me', {
        headers: token.value ? { 
          Authorization: `Bearer ${token.value}` 
        } : {},
      });
      user.value = data.value;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erreur lors de la récupération des informations utilisateur';
      logout();
    }
  }

  function logout() {
    token.value = null;
    user.value = null;
    isAuthenticated.value = false;
    tokenExpiration.value = null;
    error.value = null;
    authCookie.value = null;
    localStorage.removeItem('auth_token');
  }

  async function refreshToken() {
    try {
      const { data } = await useFetch('/api/auth/refresh', {
        headers: token.value ? { 
          Authorization: `Bearer ${token.value}` 
        } : {},
      });
      if (data.value) {
        await setToken(data.value as string);
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erreur lors du rafraîchissement du token';
      logout();
    }
  }

  return {
    token,
    user,
    isAuthenticated,
    tokenExpiration,
    error,
    isTokenExpired,
    hasError,
    setToken,
    fetchUser,
    logout,
    refreshToken,
  };
});
