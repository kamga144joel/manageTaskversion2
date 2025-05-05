import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "vue";
import { navigateTo } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import { useCookie } from "../node_modules/nuxt/dist/app/composables/cookie.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs";
import { useAuthStore } from "../stores/auth.mjs";
const auth_ydS_uAQ5qS4E2Ez9vBX0d0JPoo00WYZNOgh9_nraCUo = defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  nuxtApp.hook("app:created", () => {
    const token = useCookie("auth_token").value;
    if (token) {
      authStore.setToken(token);
      if (authStore.isTokenExpired) {
        authStore.logout();
      }
    }
  });
  nuxtApp.hook("vue:error", (error) => {
    if (error instanceof Error && (error.message.includes("401") || error.message.includes("unauthorized"))) {
      authStore.logout();
      navigateTo("/login");
    }
  });
  nuxtApp.provide("auth", {
    isAuthenticated: () => authStore.isAuthenticated,
    user: () => authStore.user,
    login: (token) => authStore.setToken(token),
    logout: () => authStore.logout(),
    hasError: () => authStore.hasError,
    error: () => authStore.error
  });
});
export {
  auth_ydS_uAQ5qS4E2Ez9vBX0d0JPoo00WYZNOgh9_nraCUo as default
};
//# sourceMappingURL=auth.mjs.map
