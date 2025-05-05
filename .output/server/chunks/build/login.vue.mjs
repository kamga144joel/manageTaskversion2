import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useMutation } from './server.mjs';
import gql from 'graphql-tag';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'ts-invariant';
import 'zen-observable-ts';
import 'graphql';
import '@wry/caches';
import '@vue/apollo-option';
import 'throttle-debounce';
import 'optimism';
import '@wry/equality';
import '@wry/trie';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const email = ref("");
    const password = ref("");
    const localError = ref(null);
    const mutationError = ref(null);
    const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: {
      email: $email,
      password: $password
    }) {
      user {
        id      # Assurez-vous que l'ID est bien retourné par la mutation
        token
      }
    }
  }
`;
    const {
      loading
    } = useMutation(LOGIN_MUTATION);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-yellow-900 bg-gray-900 rounded-lg" }, _attrs))}><div class="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md"><h1 class="underline font-bold text-center mb-4 text-green-900"> Bienvenue sur le de Gestion des Tâches </h1><h2 class="text-center text-gray-700 mb-6"> Connectez-vous pour bénéficier de nos services </h2><h2 class="bg-red-700">je n&#39;est pas de conte MANAGETASKS<a></a></h2>`);
      if (unref(loading)) {
        _push(`<p class="text-center text-gray-500">Connexion en cours...</p>`);
      } else {
        _push(`<form class="space-y-4"><div><label for="email" class="block text-gray-700 mb-1">Email</label><input${ssrRenderAttr("value", email.value)} type="email" id="email" name="email" placeholder="exemple@mail.com" autocomplete="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"></div><div><label for="password" class="block text-gray-700 mb-1">Mot de passe</label><input${ssrRenderAttr("value", password.value)} type="password" id="password" name="password" placeholder="********" autocomplete="current-password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition disabled:opacity-50"> Se connecter </button><button type="button" class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center mt-2 hover:bg-gray-50"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" class="w-5 h-5 mr-2"> Se connecter avec Google </button>`);
        if (mutationError.value || localError.value) {
          _push(`<p class="text-red-600 text-center mt-2">${ssrInterpolate(mutationError.value ? mutationError.value.message : localError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.vue.mjs.map
