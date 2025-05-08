import { ref, resolveComponent, mergeProps, withCtx, unref, createBlock, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const isDarkMode = ref(false);
    const applyDarkModePreference = (darkModeEnabled) => {
      isDarkMode.value = darkModeEnabled;
      if (darkModeEnabled) {
        (void 0).documentElement.classList.add("dark");
      } else {
        (void 0).documentElement.classList.remove("dark");
      }
    };
    const toggleDarkMode = () => {
      const newState = !isDarkMode.value;
      applyDarkModePreference(newState);
      try {
        localStorage.setItem("theme", newState ? "dark" : "light");
      } catch (error) {
        console.error("echec de la sauvegade de la preference de theme", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_buton = resolveComponent("buton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "justify-start md:flex-row, sm:w-100%, lg:w-100%, 2xl:w-100% min-h-screen flex flex-col md:flex-row dark:bg-gray-900 bg-white-600" }, _attrs))}><h1 class="dark:caret-stone-950 font-semibold-medium-serif-bold text-fuchsia-950 text-left-10">MANAGETASKS</h1>`);
      _push(ssrRenderComponent(_component_buton, {
        onClick: toggleDarkMode,
        class: "p-2 rounded-md text-gray-500 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900",
        "aria-label": "Toggle Dark Mode"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isDarkMode)) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"${_scopeId}></path></svg>`);
            }
          } else {
            return [
              !unref(isDarkMode) ? (openBlock(), createBlock("svg", {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                })
              ])) : (openBlock(), createBlock("svg", {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav><img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://www.economie-gestion.com/wp-content/uploads/2021/02/2-principaux-qualites-dun-bon-manager-768x512.png" alt=""><div><a href="/detailWeb" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">detailWeb</a><a href="/menutcss" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">courGratuit(tailwindcss)</a><a href="/courcss" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">courGratuit(basecss)</a><a href="/login" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Connectez-vous</a></div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-WoF3CDSU.js.map
