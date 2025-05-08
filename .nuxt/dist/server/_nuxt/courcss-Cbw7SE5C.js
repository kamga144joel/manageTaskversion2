import { b as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courcss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=courcss-Cbw7SE5C.js.map
