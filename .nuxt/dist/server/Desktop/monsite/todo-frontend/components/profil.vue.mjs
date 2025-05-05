import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../../../_virtual/virtual_public.mjs";
import { useRoute, useRouter } from "vue-router";
import { useMutation } from "../node_modules/_vue/apollo-composable/dist/index.mjs";
import gql from "graphql-tag";
import "./profil.vue2.mjs";
import _export_sfc from "../../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "profil",
  __ssrInlineRender: true,
  setup(__props) {
    const activeDetail = ref(null);
    useRoute();
    useRouter();
    const email = ref("");
    const password = ref("");
    const localError = ref(null);
    const mutationError = ref(null);
    const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      user {
        id
        token
      }
    }
  }
`;
    const {
      loading
    } = useMutation(LOGIN_MUTATION);
    const isDarkMode = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest rounded-lg px-4 py-3 shadow-md" role="alert" data-v-11a2c9f4><div class="flex" data-v-11a2c9f4><div class="py-1" data-v-11a2c9f4><svg class="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-11a2c9f4><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" data-v-11a2c9f4></path></svg></div><div data-v-11a2c9f4><p class="font-bold" data-v-11a2c9f4>Our privacy policy has changed</p><p class="text-sm" data-v-11a2c9f4>Make sure you know how these changes affect you.</p></div></div></div><div class="responsive-container max-h-full border-green-light justify-center xl:justify-around items-center sm:justify-center w-full min-h-screen flex flex-col dark:bg-gray-900 bg-white rounded-lg max-w-full" data-v-11a2c9f4><nav class="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 cursor-pointer p-4 flex items-center max-h-full justify-between w-full max-w-full sticky top-0 z-10 shadow-lg rounded-lg" data-v-11a2c9f4><div class="flex items-center space-x-8" data-v-11a2c9f4><img class="inline-block h-16 w-16 rounded-full ring-4 ring-white flex-shrink-0"${ssrRenderAttr("src", _imports_0)} alt="MANAGETASKS Logo" data-v-11a2c9f4><h1 class="text-3xl flex font-bold text-white select-text bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent" data-v-11a2c9f4>MANAGETASKS</h1></div><div class="items-center space-x-4" data-v-11a2c9f4><div class="relative items-center" data-v-11a2c9f4><a href="/detailWeb" class="text-lg font-semibold px-4 py-3 text-lime-400 rounded-lg hover:bg-lime-900 hover:text-lime-300 transition-all duration-200 flex" data-v-11a2c9f4> detailWeb </a><div style="${ssrRenderStyle(activeDetail.value === "detailWeb" ? null : { display: "none" })}" class="absolute z-20 flex mt-2 w-48 p-2 bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600" data-v-11a2c9f4> Description rapide de la page detailWeb. </div></div><div class="relative" data-v-11a2c9f4><a href="/menutcss" class="text-lg font-semibold px-4 py-3 text-red-400 rounded-lg hover:bg-red-900 hover:text-red-300 transition-all duration-200" data-v-11a2c9f4> courGratuit(tailwindcss) </a><div style="${ssrRenderStyle(activeDetail.value === "tailwind" ? null : { display: "none" })}" class="absolute z-20 mt-2 w-48 p-2 flex bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600" data-v-11a2c9f4> Accédez au cours complet sur Tailwind CSS. </div></div><div class="relative" data-v-11a2c9f4><a href="/courcss" class="text-lg font-semibold px-4 py-3 text-yellow-400 rounded-lg hover:bg-yellow-900 hover:text-yellow-300 transition-all duration-200" data-v-11a2c9f4> courGratuit(basecss) </a><div style="${ssrRenderStyle(activeDetail.value === "basecss" ? null : { display: "none" })}" class="absolute z-20 mt-2 w-48 p-2 bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600" data-v-11a2c9f4> Apprenez les bases fondamentales du CSS. </div></div><div class="relative" data-v-11a2c9f4><a href="/login" class="text-lg font-semibold px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-all duration-200 flex" data-v-11a2c9f4> Connectez-vous </a><div style="${ssrRenderStyle(activeDetail.value === "login" ? null : { display: "none" })}" class="absolute z-20 mt-2 w-48 p-2 flex bg-white dark:bg-gray-700 rounded-md shadow-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600 right-0" data-v-11a2c9f4> Accédez à votre compte ou créez-en un. </div></div><button class="p-2 rounded-md text-gray-500 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Toggle Dark Mode" data-v-11a2c9f4>`);
      if (!isDarkMode.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-11a2c9f4><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-v-11a2c9f4></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-11a2c9f4><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-v-11a2c9f4></path></svg>`);
      }
      _push(`</button></div></nav><div class="flex-grow flex items-center justify-center p-6" data-v-11a2c9f4><div class="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md" data-v-11a2c9f4><h1 class="underline font-bold text-center mb-4 text-green-600" data-v-11a2c9f4> Bienvenue sur notre site Web </h1><h2 class="text-center text-gray-700 mb-6" data-v-11a2c9f4> Connectez-vous pour bénéficier de nos services </h2><h2 class="bg-red-700" data-v-11a2c9f4>vous n&#39;avez pas de conte MANAGETASKS??? c&#39;est pas grave!!!<a href="/inscription" class="underline" data-v-11a2c9f4>créez-en</a></h2>`);
      if (unref(loading)) {
        _push(`<p class="text-center text-gray-500" data-v-11a2c9f4>Connexion en cours...</p>`);
      } else {
        _push(`<form class="space-y-4" data-v-11a2c9f4><div data-v-11a2c9f4><label for="email" class="block text-gray-700 mb-1" data-v-11a2c9f4>Email</label><input${ssrRenderAttr("value", email.value)} type="email" id="email" name="email" placeholder="dev-kaiser@gmail.com" autocomplete="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400" data-v-11a2c9f4></div><div data-v-11a2c9f4><label for="password" class="block text-gray-700 mb-1" data-v-11a2c9f4>Mot de passe</label><input${ssrRenderAttr("value", password.value)} type="password" id="password" name="password" placeholder="********" autocomplete="current-password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400" data-v-11a2c9f4></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition disabled:opacity-50" data-v-11a2c9f4> Se connecter </button><a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#" data-v-11a2c9f4> Mot de passe oublier? </a><button type="button" class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center mt-2 hover:bg-gray-50" data-v-11a2c9f4><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" class="w-5 h-5 mr-2 hover:text-yellow-500" data-v-11a2c9f4> Se connecter avec Google </button>`);
        if (mutationError.value || localError.value) {
          _push(`<p class="text-red-600 text-center mt-2" data-v-11a2c9f4>${ssrInterpolate(mutationError.value ? mutationError.value.message : localError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div></div><div class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert" data-v-11a2c9f4><p class="font-bold" data-v-11a2c9f4>Message d&#39;information</p><p class="text-sm" data-v-11a2c9f4> Quelques textes supplémentaires pour expliquer ledit message..</p></div><p class="text-center text-yellow-900 text-xs" data-v-11a2c9f4> ©2020 Acme Corp. All rights reserved. </p></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profil.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profil = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11a2c9f4"]]);
export {
  profil as default
};
//# sourceMappingURL=profil.vue.mjs.map
