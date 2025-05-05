import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useMutation, a as useQuery } from './server.mjs';
import { gql } from 'graphql-tag';
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
import 'vue-router';
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
  __name: "tache",
  __ssrInlineRender: true,
  setup(__props) {
    const GET_TACHES_QUERY = gql`
  query {
    taches {
      collection {
        id
        title
        completed
        description
        owner {
          name
          username
          email
        }
      }
    }
  }
`;
    const ADD_TACHE_MUTATION = gql`
   mutation AddTache($title: String!, $description: String!, $ownerId: ID!) {
     addTache(input: { title: $title, description: $description, owner: $owner, completed: $completed }) {
       title
       description
       completed
       owner  
     }
   }
`;
    const { loading: addTacheLoading, error: addTacheError } = useMutation(ADD_TACHE_MUTATION);
    const { result, loading, error } = useQuery(GET_TACHES_QUERY, null, {
      fetchPolicy: "cache-and-network"
    });
    const taches = computed(() => {
      var _a, _b;
      return ((_b = (_a = result.value) == null ? void 0 : _a.taches) == null ? void 0 : _b.collection) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-fuull md:w-1/2"><h1 class="text-2xl font-bold text-red-600 underline text-center">Gestion des tâches</h1></div><div><h2>Ajouter une tâche</h2><form><div><label> Titre:</label></div><input class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"${ssrRenderAttr("value", _ctx.title)} type="text" placeholder="Titre"><div><label>description:</label></div><input class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"${ssrRenderAttr("value", _ctx.description)} type="text" placeholder="Description"><div><label>Proprietaire</label></div><input class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"${ssrRenderAttr("value", _ctx.owner)} type="text" placeholder="Proprietaire"><div><button>Ajouter</button></div></form>`);
      if (unref(addTacheLoading)) {
        _push(`<p>Ajout en cours...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(addTacheError)) {
        _push(`<p>Une erreur s&#39;est produite : ${ssrInterpolate(unref(addTacheError).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><h1 class="italic underline text-center text-neutral-950 font-medium">informations des taches des utilisateurs</h1></div><div>`);
      if (unref(loading)) {
        _push(`<p class="bg-yellow text-yellow rounded">Chargement en cours...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<p>Une erreur s&#39;est produite : ${ssrInterpolate(unref(error).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (taches.value.length) {
        _push(`<ul><!--[-->`);
        ssrRenderList(taches.value, (tache) => {
          _push(`<li><table class="border text-center"><thead><tr><label for="owner">Nom du propriétaire </label><th>${ssrInterpolate(tache.owner.name)} ${ssrInterpolate(tache.owner.username)}</th></tr></thead><tbody><tr class="border border-x border-y"><th>ID</th><td>${ssrInterpolate(tache.id)}</td></tr><hr><tr class="border"><th>Tache</th><td>${ssrInterpolate(tache.title)}</td></tr><tr class="border"><th>Statut</th><td>${ssrInterpolate(tache.completed ? "Terminée" : "En cours")}</td></tr><tr class="border"><th>Description</th><td>${ssrInterpolate(tache.description)}</td></tr><tr class="border"><th>Prenom</th><td>${ssrInterpolate(tache.owner.username)}</td></tr><tr class="border"><th>Nom</th><td>${ssrInterpolate(tache.owner.name)}</td></tr><tr class="border"><th>Email de utilisateur</th><td>${ssrInterpolate(tache.owner.email)}</td></tr></tbody></table></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && !unref(error) && taches.value.length === 0) {
        _push(`<p> Aucune tâche trouvée. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col"><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"><div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">`);
      if (taches.value.length) {
        _push(`<ul><!--[-->`);
        ssrRenderList(taches.value, (tache) => {
          _push(`<li><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"><thead class="bg-gray-50 dark:bg-gray-800"><nav><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom du Proprietaire</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">tache</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">id</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">prenom</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">nom</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th></tr></nav></thead><tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"><tr><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.name)} ${ssrInterpolate(tache.owner.username)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.title)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.description)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.id)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.name)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.username)}</td><td scope="col" class="px-6 py-4 whitespace-nowrap">${ssrInterpolate(tache.owner.email)}</td><td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">${ssrInterpolate(tache.completed ? "Terminée" : "En cours")}</span></td></tr></tbody></table></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><!--]-->`);
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
