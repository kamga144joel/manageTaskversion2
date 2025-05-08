import { mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, Transition, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Disclosure, Menu, MenuButton, MenuItems, MenuItem, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const _sfc_main = {
  __name: "taiwind",
  __ssrInlineRender: true,
  setup(__props) {
    const user = {
      name: "Tom Cook",
      email: "tom@example.com",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    };
    const navigation = [
      { name: "Dashboard", href: "#", current: true },
      { name: "Team", href: "#", current: false },
      { name: "Projects", href: "#", current: false },
      { name: "Calendar", href: "#", current: false },
      { name: "Reports", href: "#", current: false }
    ];
    const userNavigation = [
      { name: "Your Profile", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Sign out", href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Disclosure), {
        as: "nav",
        class: "bg-gray-800"
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex items-center justify-between h-16"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"${_scopeId}></div><div class="hidden md:block"${_scopeId}><div class="ml-10 flex items-baseline space-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(navigation, (item) => {
              _push2(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([
                item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              ])}"${ssrRenderAttr("aria-current", item.current ? "page" : void 0)}${_scopeId}>${ssrInterpolate(item.name)}</a>`);
            });
            _push2(`<!--]--></div></div></div><div class="hidden md:block"${_scopeId}><div class="ml-4 flex items-center md:ml-6"${_scopeId}><button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"${_scopeId}><span class="sr-only"${_scopeId}>View notifications</span>`);
            _push2(ssrRenderComponent(unref(BellIcon), {
              class: "h-6 w-6",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(ssrRenderComponent(unref(Menu), {
              as: "div",
              class: "ml-3 relative"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuButton), { class: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Open user menu</span><img class="h-8 w-8 rounded-full"${ssrRenderAttr("src", user.imageUrl)} alt=""${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Open user menu"),
                          createVNode("img", {
                            class: "h-8 w-8 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(MenuItems), { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(userNavigation, (item) => {
                          _push4(ssrRenderComponent(unref(MenuItem), {
                            key: item.name
                          }, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                ])}"${_scopeId4}>${ssrInterpolate(item.name)}</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: item.href,
                                    class: [
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    ]
                                  }, toDisplayString(item.name), 11, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                            return createVNode(unref(MenuItem), {
                              key: item.name
                            }, {
                              default: withCtx(({ active }) => [
                                createVNode("a", {
                                  href: item.href,
                                  class: [
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  ]
                                }, toDisplayString(item.name), 11, ["href"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(unref(MenuButton), { class: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "sr-only" }, "Open user menu"),
                          createVNode("img", {
                            class: "h-8 w-8 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-100",
                      "enter-from-class": "transform opacity-0 scale-95",
                      "enter-to-class": "transform opacity-100 scale-100",
                      "leave-active-class": "transition ease-in duration-75",
                      "leave-from-class": "transform opacity-100 scale-100",
                      "leave-to-class": "transform opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MenuItems), { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                              return createVNode(unref(MenuItem), {
                                key: item.name
                              }, {
                                default: withCtx(({ active }) => [
                                  createVNode("a", {
                                    href: item.href,
                                    class: [
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    ]
                                  }, toDisplayString(item.name), 11, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="-mr-2 flex md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open main menu</span>`);
                  if (!open) {
                    _push3(ssrRenderComponent(unref(Bars3Icon), {
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(XMarkIcon), {
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open main menu"),
                    !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                      key: 0,
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    })) : (openBlock(), createBlock(unref(XMarkIcon), {
                      key: 1,
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "md:hidden" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(ssrRenderComponent(unref(DisclosureButton), {
                      key: item.name,
                      as: "a",
                      href: item.href,
                      class: [
                        item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      ],
                      "aria-current": item.current ? "page" : void 0
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="pt-4 pb-3 border-t border-gray-700"${_scopeId2}><div class="flex items-center px-5"${_scopeId2}><div class="shrink-0"${_scopeId2}><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", user.imageUrl)} alt=""${_scopeId2}></div><div class="ml-3"${_scopeId2}><div class="text-base font-medium text-white"${_scopeId2}>${ssrInterpolate(user.name)}</div><div class="text-sm font-medium text-gray-400"${_scopeId2}>${ssrInterpolate(user.email)}</div></div><button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"${_scopeId2}><span class="sr-only"${_scopeId2}>View notifications</span>`);
                  _push3(ssrRenderComponent(unref(BellIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-3 space-y-1 px-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(userNavigation, (item) => {
                    _push3(ssrRenderComponent(unref(DisclosureButton), {
                      key: item.name,
                      as: "a",
                      href: item.href,
                      class: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-2 pt-2 pb-3 space-y-1 sm:px-3" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return createVNode(unref(DisclosureButton), {
                          key: item.name,
                          as: "a",
                          href: item.href,
                          class: [
                            item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          ],
                          "aria-current": item.current ? "page" : void 0
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "class", "aria-current"]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "pt-4 pb-3 border-t border-gray-700" }, [
                      createVNode("div", { class: "flex items-center px-5" }, [
                        createVNode("div", { class: "shrink-0" }, [
                          createVNode("img", {
                            class: "h-10 w-10 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-base font-medium text-white" }, toDisplayString(user.name), 1),
                          createVNode("div", { class: "text-sm font-medium text-gray-400" }, toDisplayString(user.email), 1)
                        ]),
                        createVNode("button", { class: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, [
                          createVNode("span", { class: "sr-only" }, "View notifications"),
                          createVNode(unref(BellIcon), {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                          return createVNode(unref(DisclosureButton), {
                            key: item.name,
                            as: "a",
                            href: item.href,
                            class: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 64))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "flex items-center justify-between h-16" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                        alt: "Workflow"
                      })
                    ]),
                    createVNode("div", { class: "hidden md:block" }, [
                      createVNode("div", { class: "ml-10 flex items-baseline space-x-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: item.href,
                            class: [
                              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            ],
                            "aria-current": item.current ? "page" : void 0
                          }, toDisplayString(item.name), 11, ["href", "aria-current"]);
                        }), 64))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "hidden md:block" }, [
                    createVNode("div", { class: "ml-4 flex items-center md:ml-6" }, [
                      createVNode("button", {
                        type: "button",
                        class: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      }, [
                        createVNode("span", { class: "sr-only" }, "View notifications"),
                        createVNode(unref(BellIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]),
                      createVNode(unref(Menu), {
                        as: "div",
                        class: "ml-3 relative"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(unref(MenuButton), { class: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "sr-only" }, "Open user menu"),
                                createVNode("img", {
                                  class: "h-8 w-8 rounded-full",
                                  src: user.imageUrl,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-100",
                            "enter-from-class": "transform opacity-0 scale-95",
                            "enter-to-class": "transform opacity-100 scale-100",
                            "leave-active-class": "transition ease-in duration-75",
                            "leave-from-class": "transform opacity-100 scale-100",
                            "leave-to-class": "transform opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(MenuItems), { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                                    return createVNode(unref(MenuItem), {
                                      key: item.name
                                    }, {
                                      default: withCtx(({ active }) => [
                                        createVNode("a", {
                                          href: item.href,
                                          class: [
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                          ]
                                        }, toDisplayString(item.name), 11, ["href"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "-mr-2 flex md:hidden" }, [
                    createVNode(unref(DisclosureButton), { class: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open main menu"),
                        !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                          key: 0,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(XMarkIcon), {
                          key: 1,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ])
              ]),
              createVNode(unref(DisclosurePanel), { class: "md:hidden" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-2 pt-2 pb-3 space-y-1 sm:px-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                      return createVNode(unref(DisclosureButton), {
                        key: item.name,
                        as: "a",
                        href: item.href,
                        class: [
                          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        ],
                        "aria-current": item.current ? "page" : void 0
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href", "class", "aria-current"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "pt-4 pb-3 border-t border-gray-700" }, [
                    createVNode("div", { class: "flex items-center px-5" }, [
                      createVNode("div", { class: "shrink-0" }, [
                        createVNode("img", {
                          class: "h-10 w-10 rounded-full",
                          src: user.imageUrl,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "ml-3" }, [
                        createVNode("div", { class: "text-base font-medium text-white" }, toDisplayString(user.name), 1),
                        createVNode("div", { class: "text-sm font-medium text-gray-400" }, toDisplayString(user.email), 1)
                      ]),
                      createVNode("button", { class: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, [
                        createVNode("span", { class: "sr-only" }, "View notifications"),
                        createVNode(unref(BellIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                        return createVNode(unref(DisclosureButton), {
                          key: item.name,
                          as: "a",
                          href: item.href,
                          class: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]);
                      }), 64))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold text-gray-900">Dashboard</h1></div></header><main><div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"><div class="px-4 py-6 sm:px-0"><div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center"><p class="text-gray-500 text-lg">Your Content Here</p></div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/taiwind.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=taiwind-MNkOuOP_.js.map
