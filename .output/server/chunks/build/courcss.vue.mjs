import { b as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

export { _sfc_main as default };
//# sourceMappingURL=courcss.vue.mjs.map
