import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "detailWeb",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const description = ref("");
    const content = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-red-600 underline text-center mb-8">Détails Web</h1><div class="bg-white rounded-lg shadow-md p-6"><div class="space-y-6"><div><label class="block text-sm font-medium text-gray-700 mb-1">Titre:</label><input${ssrRenderAttr("value", title.value)} type="text" placeholder="Titre" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Description:</label><textarea rows="4" placeholder="Description" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600">${ssrInterpolate(description.value)}</textarea></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Contenu:</label><textarea rows="6" placeholder="Contenu détaillé" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600">${ssrInterpolate(content.value)}</textarea></div><div class="flex justify-end"><button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Sauvegarder </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/detailWeb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=detailWeb.vue.mjs.map
