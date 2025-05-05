import __nuxt_component_0 from "../node_modules/nuxt/dist/pages/runtime/page.mjs";
import { defineComponent, ref, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "courcss",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref("fr");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UApp = resolveComponent("UApp");
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UApp, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=courcss.vue2.mjs.map
