import { defineStore } from "pinia";
import { ref, computed } from "vue";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs";
import { useFetch } from "../node_modules/nuxt/dist/app/composables/fetch.mjs";
import { useCookie } from "../node_modules/nuxt/dist/app/composables/cookie.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs";
const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
  const user = ref(null);
  const isAuthenticated = ref(false);
  const tokenExpiration = ref(null);
  const error = ref(null);
  const authCookie = useCookie("auth_token", {
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });
  const isTokenExpired = computed(() => {
    if (!tokenExpiration.value) return true;
    return tokenExpiration.value < /* @__PURE__ */ new Date();
  });
  const hasError = computed(() => !!error.value);
  async function setToken(newToken) {
    try {
      token.value = newToken;
      isAuthenticated.value = true;
      error.value = null;
      authCookie.value = newToken;
      const expirationDate = /* @__PURE__ */ new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      tokenExpiration.value = expirationDate;
      await fetchUser();
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors de la connexion";
      logout();
    }
  }
  async function fetchUser() {
    try {
      const { data } = await useFetch("/api/user/me", {
        headers: token.value ? {
          Authorization: `Bearer ${token.value}`
        } : {}
      }, "$_0xThhzApo");
      user.value = data.value;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors de la récupération des informations utilisateur";
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
    localStorage.removeItem("auth_token");
  }
  async function refreshToken() {
    try {
      const { data } = await useFetch("/api/auth/refresh", {
        headers: token.value ? {
          Authorization: `Bearer ${token.value}`
        } : {}
      }, "$EhN7PzVZGy");
      if (data.value) {
        await setToken(data.value);
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors du rafraîchissement du token";
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
    refreshToken
  };
});
export {
  useAuthStore
};
//# sourceMappingURL=auth.mjs.map
