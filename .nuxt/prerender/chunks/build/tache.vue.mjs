import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useMutation } from './server.mjs';
import { gql } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/graphql-tag/main.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ts-invariant/lib/invariant.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/zen-observable-ts/index.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/graphql/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@wry/caches/lib/bundle.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@vue/apollo-option/dist/vue-apollo-option.esm.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/optimism/lib/bundle.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@wry/equality/lib/bundle.cjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@wry/trie/lib/bundle.cjs';

const _sfc_main = {
  __name: "tache",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const description = ref("");
    const owner = ref("");
    gql`
  query GetTaches {
    taches {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`;
    const ADD_TACHE_MUTATION = gql`
  mutation AddTache($title: String!, $description: String!, $owner: String!) {
    addTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`;
    const { loading: addTacheLoading, error: addTacheError } = useMutation(ADD_TACHE_MUTATION);
    const taches = ref([]);
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Gestion des tâches</h1><div class="bg-white rounded-lg shadow-md p-6 mb-8"><h2 class="text-xl font-semibold mb-4">Ajouter une tâche</h2><form><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1">Titre:</label><input${ssrRenderAttr("value", title.value)} type="text" placeholder="Titre" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Description:</label><input${ssrRenderAttr("value", description.value)} type="text" placeholder="Description" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Propriétaire:</label><input${ssrRenderAttr("value", owner.value)} type="text" placeholder="Propriétaire" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div class="flex justify-end"><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Ajouter </button></div></div></form>`);
      if (unref(addTacheLoading)) {
        _push(`<p class="mt-4 text-blue-500">Ajout en cours...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(addTacheError)) {
        _push(`<p class="mt-4 text-red-500">Une erreur s&#39;est produite : ${ssrInterpolate(unref(addTacheError).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-xl font-semibold mb-4">Liste des tâches</h2>`);
      if (loading.value) {
        _push(`<div class="text-center py-4"><p class="text-yellow-600">Chargement en cours...</p></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-4"><p class="text-red-600">Une erreur s&#39;est produite : ${ssrInterpolate(error.value.message)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (taches.value.length === 0) {
        _push(`<div class="text-center py-4"><p>Aucune tâche trouvée.</p></div>`);
      } else {
        _push(`<div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriétaire</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
        ssrRenderList(taches.value, (tache) => {
          _push(`<tr><td class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.name)} ${ssrInterpolate(tache.owner.username)}</td><td class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.title)}</td><td class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.description)}</td><td class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.id)}</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
            tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          ])}">${ssrInterpolate(tache.completed ? "Terminée" : "En cours")}</span></td><td class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.email)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tache.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tache.vue.mjs.map
