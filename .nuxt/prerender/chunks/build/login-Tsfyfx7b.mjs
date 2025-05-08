import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useMutation } from './server.mjs';
import gql from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/graphql-tag/main.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/devalue/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/throttle-debounce/esm/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/tslib/modules/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ts-invariant/lib/invariant.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/perfect-debounce/dist/index.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-yellow-900 bg-gray-900 rounded-lg" }, _attrs))}><div class="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md"><h1 class="underline font-bold text-center mb-4 text-green-900"> Bienvenue sur le de Gestion des T\xE2ches </h1><h2 class="text-center text-gray-700 mb-6"> Connectez-vous pour b\xE9n\xE9ficier de nos services </h2><h2 class="bg-red-700">je n&#39;est pas de conte MANAGETASKS<a></a></h2>`);
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
//# sourceMappingURL=login-Tsfyfx7b.mjs.map
