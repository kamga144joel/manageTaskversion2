import { useSSRContext, ref, watch, mergeProps, withCtx, createVNode, unref, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, withDirectives, vModelText, Fragment, renderList } from "vue";
import { ssrRenderSlotInner, ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, u as useMutation, a as useQuery } from "../server.mjs";
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
const _sfc_main$1 = {
  __name: "AnimatedTransition",
  __ssrInlineRender: true,
  props: {
    transitionName: {
      type: String,
      default: "fade"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedTransition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AnimatedTransition = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82515d94"]]);
const _sfc_main = {
  __name: "tache",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const description = ref("");
    const owner = ref("");
    const loading = ref(false);
    const error = ref(null);
    const taches = ref([]);
    const GET_TACHES_QUERY = gql`
  query GetTaches {
    taches {
      collection {
        title
        description
        completed
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
  mutation CreateTache($title: String!, $description: String!, $owner: String!) {
    createTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      title
      description
      completed
      owner {
        name
        username
        email
      }
    }
  }
`;
    const { mutate: addTache, loading: addTacheLoading, error: addTacheError } = useMutation(ADD_TACHE_MUTATION);
    const { result } = useQuery(GET_TACHES_QUERY);
    watch(result, (newValue) => {
      var _a;
      if ((_a = newValue == null ? void 0 : newValue.taches) == null ? void 0 : _a.collection) {
        taches.value = newValue.taches.collection;
      }
    });
    const handleAddTache = async () => {
      if (!title.value || !description.value || !owner.value) return;
      try {
        await addTache({
          title: title.value,
          description: description.value,
          owner: owner.value
        });
        title.value = "";
        description.value = "";
        owner.value = "";
      } catch (err) {
        console.error("Erreur lors de l'ajout de la tâche:", err);
        addTacheError.value = err;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}>`);
      _push(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl font-bold text-red-600 underline text-center mb-8"${_scopeId}>Gestion des tâches</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-2xl font-bold text-red-600 underline text-center mb-8" }, "Gestion des tâches")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AnimatedTransition, { transitionName: "slide" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white rounded-lg shadow-md p-6 mb-8"${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}>Ajouter une tâche</h2><form${_scopeId}><div class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Titre:</label><input${ssrRenderAttr("value", title.value)} type="text" placeholder="Titre" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200" required${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Description:</label><input${ssrRenderAttr("value", description.value)} type="text" placeholder="Description" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200" required${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Propriétaire:</label><input${ssrRenderAttr("value", owner.value)} type="text" placeholder="Propriétaire" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200" required${_scopeId}></div><div class="flex justify-end"${_scopeId}><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"${_scopeId}> Ajouter </button></div></div></form>`);
            _push2(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(addTacheLoading)) {
                    _push3(`<p class="mt-4 text-blue-500"${_scopeId2}>Ajout en cours...</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(addTacheLoading) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-4 text-blue-500"
                    }, "Ajout en cours...")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(addTacheError)) {
                    _push3(`<p class="mt-4 text-red-500"${_scopeId2}>Une erreur s&#39;est produite : ${ssrInterpolate(unref(addTacheError).message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(addTacheError) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-4 text-red-500"
                    }, "Une erreur s'est produite : " + toDisplayString(unref(addTacheError).message), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white rounded-lg shadow-md p-6 mb-8" }, [
                createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Ajouter une tâche"),
                createVNode("form", {
                  onSubmit: withModifiers(handleAddTache, ["prevent"])
                }, [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Titre:"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => title.value = $event,
                        type: "text",
                        placeholder: "Titre",
                        class: "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, title.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description:"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => description.value = $event,
                        type: "text",
                        placeholder: "Description",
                        class: "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, description.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Propriétaire:"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => owner.value = $event,
                        type: "text",
                        placeholder: "Propriétaire",
                        class: "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, owner.value]
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                      }, " Ajouter ")
                    ])
                  ])
                ], 32),
                createVNode(AnimatedTransition, { transitionName: "fade" }, {
                  default: withCtx(() => [
                    unref(addTacheLoading) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-4 text-blue-500"
                    }, "Ajout en cours...")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(AnimatedTransition, { transitionName: "fade" }, {
                  default: withCtx(() => [
                    unref(addTacheError) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-4 text-red-500"
                    }, "Une erreur s'est produite : " + toDisplayString(unref(addTacheError).message), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AnimatedTransition, { transitionName: "slide" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white rounded-lg shadow-md p-6"${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}>Liste des tâches</h2><div class="text-center py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (loading.value) {
                    _push3(`<div class="text-center py-4"${_scopeId2}><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"${_scopeId2}></div></div>`);
                  } else if (error.value) {
                    _push3(`<div class="text-center py-4"${_scopeId2}><p class="text-red-500"${_scopeId2}>Une erreur s&#39;est produite : ${ssrInterpolate(error.value.message)}</p></div>`);
                  } else if (taches.value.length === 0) {
                    _push3(`<div class="text-center py-4"${_scopeId2}><p class="text-gray-500"${_scopeId2}>Aucune tâche trouvée.</p></div>`);
                  } else {
                    _push3(ssrRenderComponent(AnimatedTransition, { transitionName: "slide" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="overflow-x-auto"${_scopeId3}><table class="min-w-full divide-y divide-gray-200"${_scopeId3}><thead class="bg-gray-50"${_scopeId3}><tr${_scopeId3}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId3}>Propriétaire</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId3}>Tâche</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId3}>Description</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId3}>Statut</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId3}><!--[-->`);
                          ssrRenderList(taches.value, (tache) => {
                            _push4(ssrRenderComponent(AnimatedTransition, {
                              transitionName: "slide",
                              key: tache.title
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<tr class="transition-all duration-200 hover:bg-gray-50"${_scopeId4}><td class="px-6 py-4 whitespace-nowrap"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(tache.owner.name)} ${ssrInterpolate(tache.owner.username)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(tache.owner.name) + " " + toDisplayString(tache.owner.username), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(tache.title)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(tache.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(tache.description)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(tache.description), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(AnimatedTransition, { transitionName: "fade" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="${ssrRenderClass([
                                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                          tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                        ])}"${_scopeId5}>${ssrInterpolate(tache.completed ? "Terminée" : "En cours")}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", {
                                            class: [
                                              "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                              tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                            ]
                                          }, toDisplayString(tache.completed ? "Terminée" : "En cours"), 3)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</td></tr>`);
                                } else {
                                  return [
                                    createVNode("tr", { class: "transition-all duration-200 hover:bg-gray-50" }, [
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.owner.name) + " " + toDisplayString(tache.owner.username), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: [
                                                "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                                tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                              ]
                                            }, toDisplayString(tache.completed ? "Terminée" : "En cours"), 3)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></tbody></table></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "overflow-x-auto" }, [
                              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                                createVNode("thead", { class: "bg-gray-50" }, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Propriétaire"),
                                    createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Tâche"),
                                    createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Description"),
                                    createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Statut")
                                  ])
                                ]),
                                createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(taches.value, (tache) => {
                                    return openBlock(), createBlock(AnimatedTransition, {
                                      transitionName: "slide",
                                      key: tache.title
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("tr", { class: "transition-all duration-200 hover:bg-gray-50" }, [
                                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                            createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(tache.owner.name) + " " + toDisplayString(tache.owner.username), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                            createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(tache.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                            createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(tache.description), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                            createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                              default: withCtx(() => [
                                                createVNode("span", {
                                                  class: [
                                                    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                                    tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                                  ]
                                                }, toDisplayString(tache.completed ? "Terminée" : "En cours"), 3)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center py-4"
                    }, [
                      createVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto" })
                    ])) : error.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-4"
                    }, [
                      createVNode("p", { class: "text-red-500" }, "Une erreur s'est produite : " + toDisplayString(error.value.message), 1)
                    ])) : taches.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-center py-4"
                    }, [
                      createVNode("p", { class: "text-gray-500" }, "Aucune tâche trouvée.")
                    ])) : (openBlock(), createBlock(AnimatedTransition, {
                      key: 3,
                      transitionName: "slide"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "overflow-x-auto" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Propriétaire"),
                                createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Tâche"),
                                createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Description"),
                                createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Statut")
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(taches.value, (tache) => {
                                return openBlock(), createBlock(AnimatedTransition, {
                                  transitionName: "slide",
                                  key: tache.title
                                }, {
                                  default: withCtx(() => [
                                    createVNode("tr", { class: "transition-all duration-200 hover:bg-gray-50" }, [
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.owner.name) + " " + toDisplayString(tache.owner.username), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(tache.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                        createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: [
                                                "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                                tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                              ]
                                            }, toDisplayString(tache.completed ? "Terminée" : "En cours"), 3)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white rounded-lg shadow-md p-6" }, [
                createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Liste des tâches"),
                createVNode("div", { class: "text-center py-4" }, [
                  createVNode(AnimatedTransition, { transitionName: "fade" }, {
                    default: withCtx(() => [
                      loading.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-4"
                      }, [
                        createVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto" })
                      ])) : error.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-center py-4"
                      }, [
                        createVNode("p", { class: "text-red-500" }, "Une erreur s'est produite : " + toDisplayString(error.value.message), 1)
                      ])) : taches.value.length === 0 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "text-center py-4"
                      }, [
                        createVNode("p", { class: "text-gray-500" }, "Aucune tâche trouvée.")
                      ])) : (openBlock(), createBlock(AnimatedTransition, {
                        key: 3,
                        transitionName: "slide"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "overflow-x-auto" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50" }, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Propriétaire"),
                                  createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Tâche"),
                                  createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Description"),
                                  createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Statut")
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(taches.value, (tache) => {
                                  return openBlock(), createBlock(AnimatedTransition, {
                                    transitionName: "slide",
                                    key: tache.title
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("tr", { class: "transition-all duration-200 hover:bg-gray-50" }, [
                                        createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                          createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(tache.owner.name) + " " + toDisplayString(tache.owner.username), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                          createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(tache.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                          createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(tache.description), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                                          createVNode(AnimatedTransition, { transitionName: "fade" }, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: [
                                                  "px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",
                                                  tache.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                                ]
                                              }, toDisplayString(tache.completed ? "Terminée" : "En cours"), 3)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tache.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=tache-QPAfRcOk.js.map
