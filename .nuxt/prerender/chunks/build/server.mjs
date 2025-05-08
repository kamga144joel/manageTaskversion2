import { defineComponent, ref, inject, h, Suspense, hasInjectionContext, getCurrentInstance, getCurrentScope, shallowRef, onScopeDispose, onServerPrefetch, computed, watch, unref, nextTick, provide, shallowReactive, Fragment, isRef, reactive, createElementBlock, createApp, toRef, onErrorCaptured, createVNode, resolveDynamicComponent, effectScope, isReadonly, isShallow, isReactive, toRaw, toValue, defineAsyncComponent, mergeProps, withCtx, useSSRContext } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, getRequestHeader, setCookie, getCookie, deleteCookie } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pinia/dist/pinia.prod.cjs';
import { defu } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/defu/dist/defu.mjs';
import { RouterView, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/radix3/dist/index.mjs';
import { hasProtocol, isScriptProtocol, joinURL, withQuery } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ufo/dist/index.mjs';
import { klona } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/klona/dist/index.mjs';
import { throttle, debounce } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/throttle-debounce/esm/index.js';
import { __extends, __spreadArray } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/tslib/modules/index.js';
import { invariant } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ts-invariant/lib/invariant.cjs';
import { parse } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import destr from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/destr/dist/index.mjs';
import { isEqual, hash } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/ohash/dist/index.mjs';
import { isPlainObject } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { debounce as debounce$1 } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/perfect-debounce/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/devalue/index.js';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/unhead/dist/plugins.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-xWPxnvjH.mjs')
  },
  {
    name: "login",
    path: "/login",
    component: () => import('./login-Tsfyfx7b.mjs')
  },
  {
    name: "logos",
    path: "/logos",
    component: () => import('./logos-CnfxaOuw.mjs')
  },
  {
    name: "tache",
    path: "/tache",
    component: () => import('./tache-QPAfRcOk.mjs')
  },
  {
    name: "theme",
    path: "/theme",
    component: () => import('./theme-SnuzhbYF.mjs')
  },
  {
    name: "bascule",
    path: "/bascule",
    component: () => import('./bascule-VJeKl_rl.mjs')
  },
  {
    name: "courcss",
    path: "/courcss",
    component: () => import('./courcss-Cbw7SE5C.mjs')
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import('./profile-WoF3CDSU.mjs')
  },
  {
    name: "taiwind",
    path: "/taiwind",
    component: () => import('./taiwind-MNkOuOP_.mjs')
  },
  {
    name: "infolink",
    path: "/infolink",
    component: () => import('./infolink-D7pebpwz.mjs')
  },
  {
    name: "menutcss",
    path: "/menutcss",
    component: () => import('./menutcss-Dfm7G71k.mjs')
  },
  {
    name: "component",
    path: "/component",
    component: () => import('./component-BaJugGfT.mjs')
  },
  {
    name: "detailWeb",
    path: "/detailWeb",
    component: () => import('./detailWeb-D5sNGHfh.mjs')
  },
  {
    name: "Inscription",
    path: "/Inscription",
    component: () => import('./Inscription-hAdhYfRk.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string" && typeof args[0] !== "object" && !(typeof args[0] === "function" && typeof args[1] === "function")) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = (key2, nuxtApp2, ctx) => {
    if (nuxtApp2.isHydrating) {
      return nuxtApp2.payload.data[key2];
    }
    if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
      return nuxtApp2.static.data[key2];
    }
  };
  options.server ?? (options.server = true);
  options.default ?? (options.default = getDefault);
  options.getCachedData ?? (options.getCachedData = getDefaultCachedData);
  options.lazy ?? (options.lazy = false);
  options.immediate ?? (options.immediate = true);
  options.deep ?? (options.deep = asyncDataDefaults.deep);
  options.dedupe ?? (options.dedupe = "cancel");
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialCachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
  if (!((_a = nuxtApp._asyncData[key.value]) == null ? void 0 : _a._init)) {
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialCachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute({ cause: "initial", dedupe: options.dedupe });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.data;
    }),
    pending: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.pending;
    }),
    status: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.status;
    }),
    error: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.error;
    }),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      var _a;
      return (_a = getter()) == null ? void 0 : _a.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  var _a, _b;
  (_a = nuxtApp.payload._errors)[key] ?? (_a[key] = asyncDataDefaults.errorValue);
  const handler = !((_b = nuxtApp.ssrContext) == null ? void 0 : _b._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (opts = {}) => {
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = opts.cause === "initial" ? initialCachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        {
          asyncData.pending.value = false;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce$1((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: nuxtApp.hook("app:data:refresh", async (keys) => {
      if (!keys || keys.includes(key)) {
        await asyncData.execute({ cause: "refresh:hook" });
      }
    })
  };
  return asyncData;
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    if (watchSources) {
      watch([...watchSources, _fetchOptions], setImmediate, { flush: "sync", once: true });
    }
  }
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      segments.push(hash(Object.fromEntries(value.entries())));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
var version = "3.13.8";
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a) {
  }
}
const global$1 = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return void 0;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe(function() {
  return maybe.constructor("return this")();
});
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value, space) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }, space).split(JSON.stringify(undefId)).join("<undefined>");
}
function wrap(fn) {
  return function(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof message === "number") {
      var arg0 = message;
      message = getHandledErrorMsg(arg0);
      if (!message) {
        message = getFallbackErrorMsg(arg0, args);
        args = [];
      }
    }
    fn.apply(void 0, [message].concat(args));
  };
}
Object.assign(function invariant$1(condition, message) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (!condition) {
    invariant(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
  }
}, {
  debug: wrap(invariant.debug),
  log: wrap(invariant.log),
  warn: wrap(invariant.warn),
  error: wrap(invariant.error)
});
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
function stringify(arg) {
  if (typeof arg == "string") {
    return arg;
  }
  try {
    return stringifyForDisplay(arg, 2).slice(0, 1e3);
  } catch (_a) {
    return "<non-serializable>";
  }
}
function getHandledErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return global$1[ApolloErrorMessageHandler] && global$1[ApolloErrorMessageHandler](message, messageArgs.map(stringify));
}
function getFallbackErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
    version,
    message,
    args: messageArgs.map(stringify)
  })));
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = (
  /** @class */
  function(_super) {
    __extends(ApolloError2, _super);
    function ApolloError2(_a) {
      var graphQLErrors = _a.graphQLErrors, protocolErrors = _a.protocolErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
      var _this = _super.call(this, errorMessage) || this;
      _this.name = "ApolloError";
      _this.graphQLErrors = graphQLErrors || [];
      _this.protocolErrors = protocolErrors || [];
      _this.clientErrors = clientErrors || [];
      _this.networkError = networkError || null;
      _this.message = errorMessage || generateErrorMessage(_this);
      _this.extraInfo = extraInfo;
      _this.cause = __spreadArray(__spreadArray(__spreadArray([
        networkError
      ], graphQLErrors || [], true), protocolErrors || [], true), clientErrors || [], true).find(function(e) {
        return !!e;
      }) || null;
      _this.__proto__ = ApolloError2.prototype;
      return _this;
    }
    return ApolloError2;
  }(Error)
);
var DefaultApolloClient = Symbol("default-apollo-client");
var ApolloClients = Symbol("apollo-clients");
function resolveDefaultClient(providedApolloClients, providedApolloClient) {
  const resolvedClient = providedApolloClients ? providedApolloClients.default : providedApolloClient != null ? providedApolloClient : void 0;
  return resolvedClient;
}
function resolveClientWithId(providedApolloClients, clientId) {
  return providedApolloClients == null ? void 0 : providedApolloClients[clientId];
}
function useApolloClient(clientId) {
  let resolveImpl;
  const savedCurrentClients = currentApolloClients;
  if (!hasInjectionContext()) {
    resolveImpl = (id) => {
      if (id) {
        return resolveClientWithId(savedCurrentClients, id);
      }
      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
    };
  } else {
    const providedApolloClients = inject(ApolloClients, null);
    const providedApolloClient = inject(DefaultApolloClient, null);
    resolveImpl = (id) => {
      if (id) {
        const client2 = resolveClientWithId(providedApolloClients, id);
        if (client2) {
          return client2;
        }
        return resolveClientWithId(savedCurrentClients, id);
      }
      const client = resolveDefaultClient(providedApolloClients, providedApolloClient);
      if (client) {
        return client;
      }
      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
    };
  }
  function resolveClient(id = clientId) {
    const client = resolveImpl(id);
    if (!client) {
      throw new Error(
        `Apollo client with id ${id != null ? id : "default"} not found. Use an app.runWithContext() or provideApolloClient() if you are outside of a component setup.`
      );
    }
    return client;
  }
  return {
    resolveClient,
    get client() {
      return resolveClient();
    }
  };
}
var currentApolloClients = {};
({
  queries: ref(0),
  mutations: ref(0),
  subscriptions: ref(0)
});
function paramToReactive(param) {
  if (isRef(param)) {
    return param;
  } else if (typeof param === "function") {
    return computed(param);
  } else if (param) {
    return reactive(param);
  } else {
    return param;
  }
}
function paramToRef(param) {
  if (isRef(param)) {
    return param;
  } else if (typeof param === "function") {
    return computed(param);
  } else {
    return ref(param);
  }
}
function toApolloError(error) {
  if (!(error instanceof Error)) {
    return new ApolloError({
      networkError: Object.assign(new Error(error == null ? void 0 : error.message), { originalError: error }),
      errorMessage: String(error)
    });
  }
  if (isApolloError(error)) {
    return error;
  }
  return new ApolloError({ networkError: error, errorMessage: error.message });
}
function resultErrorsToApolloError(errors) {
  return new ApolloError({
    graphQLErrors: errors,
    errorMessage: `GraphQL response contains errors: ${errors.map((e) => e.message).join(" | ")}`
  });
}
function useEventHook() {
  const fns = [];
  function on(fn) {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  }
  function off(fn) {
    const index = fns.indexOf(fn);
    if (index !== -1) {
      fns.splice(index, 1);
    }
  }
  function trigger(...params) {
    for (const fn of fns) {
      fn(...params);
    }
  }
  function getCount() {
    return fns.length;
  }
  return {
    on,
    off,
    trigger,
    getCount
  };
}
function useQuery(document, variables, options) {
  return useQueryImpl(document, variables, options);
}
function useQueryImpl(document, variables, options = {}, lazy = false) {
  var _a;
  const currentScope = getCurrentScope();
  const currentInstance = getCurrentInstance();
  const currentOptions = ref();
  const documentRef = paramToRef(document);
  const variablesRef = paramToRef(variables);
  const optionsRef = paramToReactive(options);
  const result = shallowRef();
  const resultEvent = useEventHook();
  const error = shallowRef(null);
  const errorEvent = useEventHook();
  const loading = ref(false);
  const networkStatus = ref();
  let firstResolve;
  let firstResolveTriggered = false;
  let firstReject;
  let firstRejectError;
  const tryFirstResolve = () => {
    firstResolveTriggered = true;
    if (firstResolve)
      firstResolve();
  };
  const tryFirstReject = (apolloError) => {
    firstRejectError = apolloError;
    if (firstReject)
      firstReject(apolloError);
  };
  const resetFirstResolveReject = () => {
    firstResolve = void 0;
    firstReject = void 0;
    firstResolveTriggered = false;
    firstRejectError = void 0;
  };
  currentInstance && ((_a = onServerPrefetch) == null ? void 0 : _a(() => {
    var _a2;
    if (!isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false)
      return;
    return new Promise((resolve, reject) => {
      firstResolve = () => {
        resetFirstResolveReject();
        resolve();
      };
      firstReject = (apolloError) => {
        resetFirstResolveReject();
        reject(apolloError);
      };
      if (firstResolveTriggered) {
        firstResolve();
      } else if (firstRejectError) {
        firstReject(firstRejectError);
      }
    }).finally(stop);
  }));
  const { resolveClient } = useApolloClient();
  function getClient() {
    var _a2;
    return resolveClient((_a2 = currentOptions.value) == null ? void 0 : _a2.clientId);
  }
  const query = shallowRef();
  let observer;
  let started = false;
  let ignoreNextResult = false;
  function start() {
    var _a2, _b;
    if (started || !isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false || !currentDocument) {
      tryFirstResolve();
      return;
    }
    {
      applyDocument(documentRef.value);
      applyVariables(variablesRef.value);
      applyOptions(unref(optionsRef));
    }
    started = true;
    error.value = null;
    loading.value = true;
    const client = getClient();
    query.value = client.watchQuery({
      query: currentDocument,
      variables: currentVariables != null ? currentVariables : {},
      ...currentOptions.value,
      ...((_b = currentOptions.value) == null ? void 0 : _b.fetchPolicy) !== "no-cache" ? {
        fetchPolicy: "network-only"
      } : {}
    });
    startQuerySubscription();
  }
  function startQuerySubscription() {
    if (observer && !observer.closed)
      return;
    if (!query.value)
      return;
    ignoreNextResult = false;
    observer = query.value.subscribe({
      next: onNextResult,
      error: onError
    });
  }
  function getErrorPolicy() {
    var _a2, _b, _c, _d;
    const client = resolveClient((_a2 = currentOptions.value) == null ? void 0 : _a2.clientId);
    return ((_b = currentOptions.value) == null ? void 0 : _b.errorPolicy) || ((_d = (_c = client.defaultOptions) == null ? void 0 : _c.watchQuery) == null ? void 0 : _d.errorPolicy);
  }
  function onNextResult(queryResult) {
    var _a2;
    if (ignoreNextResult) {
      ignoreNextResult = false;
      return;
    }
    error.value = null;
    processNextResult(queryResult);
    const errorPolicy = getErrorPolicy();
    if (errorPolicy && errorPolicy === "all" && !queryResult.error && ((_a2 = queryResult.errors) == null ? void 0 : _a2.length)) {
      processError(resultErrorsToApolloError(queryResult.errors));
    }
    tryFirstResolve();
  }
  function processNextResult(queryResult) {
    var _a2, _b;
    result.value = queryResult.data && Object.keys(queryResult.data).length === 0 ? queryResult.error && !((_a2 = currentOptions.value) == null ? void 0 : _a2.returnPartialData) && ((_b = currentOptions.value) == null ? void 0 : _b.errorPolicy) === "none" ? void 0 : result.value : queryResult.data;
    loading.value = queryResult.loading;
    networkStatus.value = queryResult.networkStatus;
    nextTick(() => {
      resultEvent.trigger(queryResult, {
        client: getClient()
      });
    });
  }
  function onError(queryError) {
    if (ignoreNextResult) {
      ignoreNextResult = false;
      return;
    }
    const apolloError = toApolloError(queryError);
    const errorPolicy = getErrorPolicy();
    if (errorPolicy && errorPolicy !== "none") {
      processNextResult(query.value.getCurrentResult());
    }
    processError(apolloError);
    tryFirstReject(apolloError);
    resubscribeToQuery();
  }
  function processError(apolloError) {
    error.value = apolloError;
    loading.value = false;
    networkStatus.value = 8;
    nextTick(() => {
      errorEvent.trigger(apolloError, {
        client: getClient()
      });
    });
  }
  function resubscribeToQuery() {
    if (!query.value)
      return;
    const lastError = query.value.getLastError();
    const lastResult = query.value.getLastResult();
    query.value.resetLastResults();
    startQuerySubscription();
    Object.assign(query.value, { lastError, lastResult });
  }
  let onStopHandlers = [];
  function stop() {
    tryFirstResolve();
    if (!started)
      return;
    started = false;
    loading.value = false;
    onStopHandlers.forEach((handler) => handler());
    onStopHandlers = [];
    if (query.value) {
      query.value.stopPolling();
      query.value = null;
    }
    if (observer) {
      observer.unsubscribe();
      observer = void 0;
    }
  }
  let restarting = false;
  function baseRestart() {
    if (!started || restarting)
      return;
    restarting = true;
    nextTick(() => {
      if (started) {
        stop();
        start();
      }
      restarting = false;
    });
  }
  let debouncedRestart;
  let isRestartDebounceSetup = false;
  function updateRestartFn() {
    var _a2, _b;
    if (!currentOptions.value) {
      debouncedRestart = baseRestart;
    } else {
      if ((_a2 = currentOptions.value) == null ? void 0 : _a2.throttle) {
        debouncedRestart = throttle(currentOptions.value.throttle, baseRestart);
      } else if ((_b = currentOptions.value) == null ? void 0 : _b.debounce) {
        debouncedRestart = debounce(currentOptions.value.debounce, baseRestart);
      } else {
        debouncedRestart = baseRestart;
      }
      isRestartDebounceSetup = true;
    }
  }
  function restart() {
    if (!started || restarting)
      return;
    if (!isRestartDebounceSetup)
      updateRestartFn();
    debouncedRestart();
  }
  let currentDocument = documentRef.value;
  const forceDisabled = ref(lazy);
  const enabledOption = computed(() => !currentOptions.value || currentOptions.value.enabled == null || currentOptions.value.enabled);
  const isEnabled = computed(() => enabledOption.value && !forceDisabled.value && !!documentRef.value);
  watch(() => unref(optionsRef), applyOptions, {
    deep: true,
    immediate: true
  });
  function applyOptions(value) {
    if (currentOptions.value && (currentOptions.value.throttle !== value.throttle || currentOptions.value.debounce !== value.debounce)) {
      updateRestartFn();
    }
    currentOptions.value = value;
    restart();
  }
  watch(documentRef, applyDocument);
  function applyDocument(value) {
    currentDocument = value;
    restart();
  }
  let currentVariables;
  let currentVariablesSerialized;
  watch(() => {
    if (isEnabled.value) {
      return variablesRef.value;
    } else {
      return void 0;
    }
  }, applyVariables, {
    deep: true,
    immediate: true
  });
  function applyVariables(value) {
    const serialized = JSON.stringify([value, isEnabled.value]);
    if (serialized !== currentVariablesSerialized) {
      currentVariables = value;
      restart();
    }
    currentVariablesSerialized = serialized;
  }
  function refetch(variables2 = void 0) {
    if (query.value) {
      if (variables2) {
        currentVariables = variables2;
      }
      error.value = null;
      loading.value = true;
      return query.value.refetch(variables2).then((refetchResult) => {
        var _a2;
        const currentResult = (_a2 = query.value) == null ? void 0 : _a2.getCurrentResult();
        currentResult && processNextResult(currentResult);
        return refetchResult;
      });
    }
  }
  function updateQuery(mapFn) {
    if (query.value) {
      query.value.updateQuery(mapFn);
    }
  }
  function fetchMore(options2) {
    if (query.value) {
      error.value = null;
      loading.value = true;
      return query.value.fetchMore(options2).then((fetchMoreResult) => {
        var _a2;
        const currentResult = (_a2 = query.value) == null ? void 0 : _a2.getCurrentResult();
        currentResult && processNextResult(currentResult);
        return fetchMoreResult;
      });
    }
  }
  function subscribeToMore(options2) {
    return;
  }
  watch(isEnabled, (value) => {
    if (value) {
      nextTick(() => {
        start();
      });
    } else {
      stop();
    }
  });
  if (isEnabled.value) {
    start();
  }
  if (currentScope) {
    onScopeDispose(() => {
      stop();
    });
  } else {
    console.warn("[Vue apollo] useQuery() is called outside of an active effect scope and the query will not be automatically stopped.");
  }
  return {
    result,
    loading,
    networkStatus,
    error,
    start,
    stop,
    restart,
    forceDisabled,
    document: documentRef,
    variables: variablesRef,
    options: optionsRef,
    query,
    refetch,
    fetchMore,
    subscribeToMore,
    updateQuery,
    onResult: resultEvent.on,
    onError: errorEvent.on
  };
}
function useMutation(document, options = {}) {
  const currentScope = getCurrentScope();
  const loading = ref(false);
  const error = shallowRef(null);
  const called = ref(false);
  const doneEvent = useEventHook();
  const errorEvent = useEventHook();
  const { resolveClient } = useApolloClient();
  async function mutate(variables, overrideOptions = {}) {
    let currentDocument;
    if (typeof document === "function") {
      currentDocument = document();
    } else if (isRef(document)) {
      currentDocument = document.value;
    } else {
      currentDocument = document;
    }
    let currentOptions;
    if (typeof options === "function") {
      currentOptions = options();
    } else if (isRef(options)) {
      currentOptions = options.value;
    } else {
      currentOptions = options;
    }
    const client = resolveClient(currentOptions.clientId);
    error.value = null;
    loading.value = true;
    called.value = true;
    try {
      const result = await client.mutate({
        mutation: currentDocument,
        ...currentOptions,
        ...overrideOptions,
        variables: (variables != null ? variables : currentOptions.variables) ? {
          ...currentOptions.variables,
          ...variables
        } : void 0
      });
      loading.value = false;
      await nextTick();
      doneEvent.trigger(result, {
        client
      });
      return result;
    } catch (e) {
      const apolloError = toApolloError(e);
      error.value = apolloError;
      loading.value = false;
      await nextTick();
      errorEvent.trigger(apolloError, {
        client
      });
      if (currentOptions.throws === "always" || currentOptions.throws !== "never" && !errorEvent.getCount()) {
        throw apolloError;
      }
    }
    return null;
  }
  currentScope && onScopeDispose(() => {
    loading.value = false;
  });
  return {
    mutate,
    loading,
    error,
    called,
    onDone: doneEvent.on,
    onError: errorEvent.on
  };
}
({
  httpEndpoint: process.env.NUXT_PUBLIC_APOLLO_HTTP_ENDPOINT || "https://localhost:8000/api/kaiser/graphql",
  wsEndpoint: process.env.NUXT_PUBLIC_APOLLO_WS_ENDPOINT || "ws://localhost:8000/api/kaiser/graphql"
});
const apollo_mgb5iL8pimUkqqhu5n66JRv5YLad_Ana7KlAEOw6cu0 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
  });
});
const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
  const user = ref(null);
  const isAuthenticated = ref(false);
  const tokenExpiration = ref(null);
  const error = ref(null);
  const authCookie = useCookie("auth_token", {
    maxAge: 60 * 60 * 24 * 7,
    secure: "prerender" === "production",
    sameSite: "strict"
  });
  const isTokenExpired = computed(() => {
    if (!tokenExpiration.value) return true;
    return tokenExpiration.value < /* @__PURE__ */ new Date();
  });
  const hasError = computed(() => !!error.value);
  async function setToken(newToken) {
    try {
      token.value = newToken;
      isAuthenticated.value = true;
      error.value = null;
      authCookie.value = newToken;
      const expirationDate = /* @__PURE__ */ new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      tokenExpiration.value = expirationDate;
      await fetchUser();
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors de la connexion";
      logout();
    }
  }
  async function fetchUser() {
    try {
      const { data } = await useFetch("/api/user/me", {
        headers: token.value ? {
          Authorization: `Bearer ${token.value}`
        } : {}
      }, "$_0xThhzApo");
      user.value = data.value;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors de la récupération des informations utilisateur";
      logout();
    }
  }
  function logout() {
    token.value = null;
    user.value = null;
    isAuthenticated.value = false;
    tokenExpiration.value = null;
    error.value = null;
    authCookie.value = null;
    localStorage.removeItem("auth_token");
  }
  async function refreshToken() {
    try {
      const { data } = await useFetch("/api/auth/refresh", {
        headers: token.value ? {
          Authorization: `Bearer ${token.value}`
        } : {}
      }, "$EhN7PzVZGy");
      if (data.value) {
        await setToken(data.value);
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors du rafraîchissement du token";
      logout();
    }
  }
  return {
    token,
    user,
    isAuthenticated,
    tokenExpiration,
    error,
    isTokenExpired,
    hasError,
    setToken,
    fetchUser,
    logout,
    refreshToken
  };
});
const auth_ydS_uAQ5qS4E2Ez9vBX0d0JPoo00WYZNOgh9_nraCUo = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  nuxtApp.hook("app:created", () => {
    const token = useCookie("auth_token").value;
    if (token) {
      authStore.setToken(token);
      if (authStore.isTokenExpired) {
        authStore.logout();
      }
    }
  });
  nuxtApp.hook("vue:error", (error) => {
    if (error instanceof Error && (error.message.includes("401") || error.message.includes("unauthorized"))) {
      authStore.logout();
      navigateTo("/login");
    }
  });
  nuxtApp.provide("auth", {
    isAuthenticated: () => authStore.isAuthenticated,
    user: () => authStore.user,
    login: (token) => authStore.setToken(token),
    logout: () => authStore.logout(),
    hasError: () => authStore.hasError,
    error: () => authStore.error
  });
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  apollo_mgb5iL8pimUkqqhu5n66JRv5YLad_Ana7KlAEOw6cu0,
  auth_ydS_uAQ5qS4E2Ez9vBX0d0JPoo00WYZNOgh9_nraCUo
];
const layouts = {};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-DnWj3pkb.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-vbBYpyK-.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, useQuery as a, __nuxt_component_0 as b, useRouter as c, useNuxtApp as d, entry$1 as default, useRuntimeConfig as e, nuxtLinkDefaults as f, navigateTo as n, resolveRouteObject as r, tryUseNuxtApp as t, useMutation as u };
//# sourceMappingURL=server.mjs.map
