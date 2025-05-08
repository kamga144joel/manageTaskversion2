import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useMutation, a as useQuery } from "../server.mjs";
import { gql } from "graphql-tag";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/radix3/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ufo/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs";
import "throttle-debounce";
import "tslib";
import "ts-invariant";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/destr/dist/index.mjs";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "logos",
  __ssrInlineRender: true,
  setup(__props) {
    const logoName = ref("");
    const logoUrl = ref("");
    const logoDescription = ref("");
    const logoCategory = ref("");
    const GET_LOGOS_QUERY = gql`
  query GetLogos {
    logos {
      id
      name
      url
      description
      category
    }
  }
`;
    const CREATE_LOGO_MUTATION = gql`
  mutation CreateLogo($name: String!, $url: String!, $description: String!, $category: String!) {
    createLogo(
      name: $name,
      url: $url,
      description: $description,
      category: $category
    ) {
      id
      name
      url
      description
      category
    }
  }
`;
    const { loading: addLogoLoading, error: addLogoError } = useMutation(CREATE_LOGO_MUTATION);
    const logos = ref([]);
    const { result, loading, error } = useQuery(GET_LOGOS_QUERY);
    watch(result, (newValue) => {
      if (newValue == null ? void 0 : newValue.logos) {
        logos.value = newValue.logos;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Gestion des logos</h1><div class="bg-white rounded-lg shadow-md p-6 mb-8"><h2 class="text-xl font-semibold mb-4">Ajouter un logo</h2><form><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1">Nom:</label><input${ssrRenderAttr("value", logoName.value)} type="text" placeholder="Nom du logo" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div><label class="block text-sm font-medium text-gray-700 mb-1">URL:</label><input${ssrRenderAttr("value", logoUrl.value)} type="text" placeholder="URL de l&#39;image" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Description:</label><input${ssrRenderAttr("value", logoDescription.value)} type="text" placeholder="Description" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Catégorie:</label><input${ssrRenderAttr("value", logoCategory.value)} type="text" placeholder="Catégorie" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" required></div><div class="flex justify-end"><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Ajouter </button></div></div></form>`);
      if (unref(addLogoLoading)) {
        _push(`<p class="mt-4 text-blue-500">Ajout en cours...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(addLogoError)) {
        _push(`<p class="mt-4 text-red-500">Une erreur s&#39;est produite : ${ssrInterpolate(unref(addLogoError).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-xl font-semibold mb-4">Liste des logos</h2>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-4"><p class="text-yellow-600">Chargement en cours...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-4"><p class="text-red-600">Une erreur s&#39;est produite : ${ssrInterpolate(unref(error).message)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (logos.value.length === 0) {
        _push(`<div class="text-center py-4"><p>Aucun logo trouvé.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(logos.value, (logo) => {
          _push(`<div class="bg-gray-50 rounded-lg p-4"><div class="flex items-center gap-4"><img${ssrRenderAttr("src", logo.url)}${ssrRenderAttr("alt", logo.name)} class="w-16 h-16 object-contain"><div><h3 class="font-semibold">${ssrInterpolate(logo.name)}</h3><p class="text-sm text-gray-600">${ssrInterpolate(logo.description)}</p><p class="text-sm text-gray-500">Catégorie: ${ssrInterpolate(logo.category)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/logos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=logos-CnfxaOuw.js.map
