module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_post_type/_id","2":"pages/post/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const rootKeys = ['class-name', 'class', 'style'];

const cached = fn => {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

const hyphenate = cached(str => {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
});

function propsToData(props, doc) {
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    const obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];

    if (key === 'className') {
      obj.class = props.className.join(' ');
    } else if (key.indexOf('data') === 0) {
      obj[key.replace(/[A-Z]/g, g => `-${g.toLowerCase()}`)] = value;
    } else if (key === 'v-bind') {
      let val = doc[value];

      if (!val) {
        val = eval(`(${value})`);
      }

      obj = Object.assign(obj, val);
    } else if (key.indexOf(':') === 0 || key.indexOf('v-bind:') === 0) {
      key = key.replace('v-bind:', '').replace(':', '');

      if (doc[value]) {
        obj[key] = doc[value];
      } else {
        obj[key] = eval(`(${value})`);
      }
    } else if (Array.isArray(value)) {
      obj[hyphenate(key)] = value.join(' ');
    } else {
      obj[hyphenate(key)] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node.props, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      return;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    user: null,
    token: null,
    loggedIn: false
  }),
  mutations: {
    ['SET_USER'](state, user) {
      state.user = user;
      state.loggedIn = !!user;
    },

    ['SET_TOKEN'](state, token) {
      state.token = token;
    }

  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    publication: null
  }),
  mutations: {
    ['SET_PUBLICATION'](state, ct) {
      state.publication = ct;
    }

  },
  actions: {},
  getters: {}
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("cookieparser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(13);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(14);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "SITE_URL": "http://127.0.0.1:3000",
        "API_ENDPOINT": "https://api.fournalist.com/v1"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(15);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(3);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _2d35c73e = () => interopDefault(__webpack_require__.e(/* import() | pages/post/index */ 2).then(__webpack_require__.bind(null, 40)));

const _2ab70380 = () => interopDefault(__webpack_require__.e(/* import() | pages/_post_type/_id */ 1).then(__webpack_require__.bind(null, 41))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/post",
    component: _2d35c73e,
    name: "post"
  }, {
    path: "/:post_type?/:id?",
    component: _2ab70380,
    name: "post_type-id"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "53238542"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// EXTERNAL MODULE: ./assets/scss/app.scss
var scss_app = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@mdi/font/css/materialdesignicons.css
var materialdesignicons = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=6fe5f1b8&
var defaultvue_type_template_id_6fe5f1b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('partial-header'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('partial-footer')],2)}
var defaultvue_type_template_id_6fe5f1b8_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=6fe5f1b8&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_6fe5f1b8_render,
  defaultvue_type_template_id_6fe5f1b8_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "14ac5e84"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        globalHandleError(error);
        this.error(error);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(23), 'auth.js');
  resolveStoreModules(__webpack_require__(24), 'config.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const storeModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(storeModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(12);

// CONCATENATED MODULE: ./.nuxt/nuxt-icons.js
/* harmony default export */ var nuxt_icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(16);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "ck",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./.nuxt/content/nuxt-content.js
var nuxt_content = __webpack_require__(11);

// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content["a" /* default */].name, nuxt_content["a" /* default */]);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(17);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'https://api.fournalist.com/v1'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/repository/index.js
const RestfulRepo = (app, item) => {
  let out = {
    list: async query => {
      let q = {
        publications: process.env.PUBLICATION
      };
      Object.keys(query).forEach(field => {
        if (Array.isArray(query[field])) {
          q[field] = query[field].toString();
        } else {
          q[field] = query[field];
        }
      });
      return await app.$axios.$get(`/${item.space}/${item.endpoint}/`, {
        params: q
      }).then(res => {
        if (res.results === null) {
          res.results = [];
        }

        return res;
      });
    },
    create: async body => {
      return await app.$axios.$post(`/${item.space}/${item.endpoint}/`, body);
    },
    get: async (id, query) => {
      return await app.$axios.$get(`/${item.space}/${item.endpoint}/${id}/`, {
        params: query
      });
    },
    update: async (id, body) => {
      return await app.$axios.$put(`/${item.space}/${item.endpoint}/${id}/`, body);
    },
    delete: async id => {
      return await app.$axios.$delete(`/${item.space}/${item.endpoint}/${id}/`);
    }
  };

  if (item.methods) {
    item.methods.forEach(callback => {
      if (callback.hasId) {
        out[callback.name] = async (id, body) => {
          return await app.$axios[callback.method](`/${item.space}/${item.endpoint}/${id}/${callback.endpoint}`, body);
        };
      } else {
        out[callback.name] = async body => {
          return await app.$axios[callback.method](`/${item.space}/${callback.endpoint}`, body);
        };
      }
    });
  }

  return out;
};

const apis_module = [{
  space: 'activity',
  endpoint: 'actions',
  name: 'activity',
  methods: [{
    hasId: true,
    name: 'vote',
    method: '$post',
    endpoint: 'vote'
  }]
}, {
  space: 'general',
  endpoint: 'config',
  name: 'config',
  methods: []
}, {
  space: 'auth',
  endpoint: 'users',
  name: 'user',
  methods: []
}, {
  space: 'media',
  endpoint: 'medias',
  name: 'media',
  methods: []
}, {
  space: 'cms',
  endpoint: 'publications',
  name: 'publication',
  methods: []
}, {
  space: `pub-${process.env.PUBLICATION}`,
  endpoint: 'taxonomies',
  name: 'taxonomy',
  methods: []
}, {
  space: `pub-${process.env.PUBLICATION}`,
  endpoint: 'posts',
  name: 'post',
  methods: []
}];
/* harmony default export */ var repository = (function (app, inject) {
  const API = {};
  apis_module.forEach(item => {
    API[item.name] = RestfulRepo(app, item);
  });
  app.$api = API;
  inject('api', API);
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=23c12f16&
var Headervue_type_template_id_23c12f16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_vm._ssrNode("<nav role=\"navigation\" aria-label=\"main navigation\" class=\"navbar is-dark\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"navbar-brand\">","</div>",[(_vm.partHost)?_c('n-link',{staticClass:"navbar-item logo",attrs:{"to":"/"}},[_c('span',{staticClass:"is-uppercase"},[_vm._v(_vm._s(_vm.partHost.name))]),_vm._v(" "),_c('span',[_vm._v("."+_vm._s(_vm.partHost.ext))])]):_c('n-link',{staticClass:"navbar-item logo",attrs:{"to":"/"}},[_c('span',{staticClass:"is-uppercase"},[_vm._v("FOURNALIST")]),_vm._v(" "),_c('span',[_vm._v(".com")])]),_vm._ssrNode(" <a role=\"button\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\" class=\"navbar-burger burger\"><span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span></a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"navbarBasicExample\" class=\"navbar-menu\">","</div>",[_vm._ssrNode("<div class=\"navbar-end\">","</div>",[_vm._ssrNode("<div class=\"navbar-item\">","</div>",[_c('login-bar')],1)])])],2)])])}
var Headervue_type_template_id_23c12f16_staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=23c12f16&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginBar.vue?vue&type=template&id=10d380ef&scoped=true&
var LoginBarvue_type_template_id_10d380ef_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!Boolean(_vm.currentUser))?_c('b-dropdown',{attrs:{"position":"is-bottom-left","append-to-body":""}},[_c('div',{attrs:{"slot":"trigger"},slot:"trigger"},[_vm._v("Log in")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"custom":""}},[_c('login')],1)],1):_c('button',{staticClass:"button normalize is-bold"},[_vm._v(_vm._s(_vm.convertName(_vm.currentUser)))])}
var LoginBarvue_type_template_id_10d380ef_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginBar.vue?vue&type=template&id=10d380ef&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=6cac9744&scoped=true&
var Loginvue_type_template_id_6cac9744_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"width":"350px"}},[_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"grouped":""}},[_c('b-field',{attrs:{"label":"First name","expanded":""}},[_c('b-input',{attrs:{"placeholder":"Larry","required":""},model:{value:(_vm.form.first_name),callback:function ($$v) {_vm.$set(_vm.form, "first_name", $$v)},expression:"form.first_name"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Last name","expanded":""}},[_c('b-input',{attrs:{"placeholder":"Page","required":""},model:{value:(_vm.form.last_name),callback:function ($$v) {_vm.$set(_vm.form, "last_name", $$v)},expression:"form.last_name"}})],1)],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Username"}},[_c('b-input',{attrs:{"type":"text","placeholder":"Your username","required":"","icon":"account"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Email"}},[_c('b-input',{attrs:{"type":"email","icon":"at","placeholder":"Your email","required":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(_vm.loginTemp),expression:"loginTemp"}],attrs:{"label":"Password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password1),callback:function ($$v) {_vm.$set(_vm.form, "password1", $$v)},expression:"form.password1"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Repeat password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password2),callback:function ($$v) {_vm.$set(_vm.form, "password2", $$v)},expression:"form.password2"}})],1),_vm._ssrNode(" "),_c('b-field',[_c('b-checkbox',[_vm._v("Remember me")])],1),_vm._ssrNode(" <div class=\"level\" data-v-6cac9744><div class=\"level-left\" data-v-6cac9744><button class=\"button is-text\" data-v-6cac9744>"+_vm._ssrEscape(_vm._s(_vm.loginTemp ? 'Register' :
                'Login')+"\n            ")+"</button></div> <div class=\"level-right\" data-v-6cac9744><div class=\"buttons\" data-v-6cac9744><button type=\"button\" class=\"button\" data-v-6cac9744>Close</button> <button class=\"button is-primary\" data-v-6cac9744>"+_vm._ssrEscape(_vm._s(_vm.loginTemp ? 'Login' : 'Register')+"\n                ")+"</button></div></div></div>")],2)}
var Loginvue_type_template_id_6cac9744_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=6cac9744&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "Login",
  props: {
    login: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: false,
      form: {
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        name: null,
        password: null,
        password1: null,
        password2: null
      },
      validForm: {},
      loginTemp: this.login
    };
  },

  methods: {
    async handleSubmit() {
      if (this.loginTemp) {
        let res = await this.$auth.login({
          email: this.form.email,
          password: this.form.password
        }).then(res => {
          this.$emit('success');
        }).catch(err => {
          console.log(err);
        });
      } else {
        await this.$axios.$post('/auth/rest-auth/registration/', this.form).then(res => {
          this.loginTemp = true;
        }).catch(err => {
          console.log(err);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Login.vue



function Login_injectStyles (context) {
  
  
}

/* normalize component */

var Login_component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_6cac9744_scoped_true_render,
  Loginvue_type_template_id_6cac9744_scoped_true_staticRenderFns,
  false,
  Login_injectStyles,
  "6cac9744",
  "1bf2c317"
  
)

/* harmony default export */ var Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LoginBarvue_type_script_lang_js_ = ({
  name: "LoginBar",
  components: {
    Login: Login
  },
  props: {
    layout: {
      default: 'private'
    }
  },

  data() {
    return {
      showLogin: false
    };
  },

  methods: {
    handleClick(flag) {
      this.showLogin = true;
    }

  },
  computed: {
    app() {
      return this.$store.state.config.app;
    }

  }
});
// CONCATENATED MODULE: ./components/LoginBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginBarvue_type_script_lang_js_ = (LoginBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LoginBar.vue



function LoginBar_injectStyles (context) {
  
  
}

/* normalize component */

var LoginBar_component = Object(componentNormalizer["a" /* default */])(
  components_LoginBarvue_type_script_lang_js_,
  LoginBarvue_type_template_id_10d380ef_scoped_true_render,
  LoginBarvue_type_template_id_10d380ef_scoped_true_staticRenderFns,
  false,
  LoginBar_injectStyles,
  "10d380ef",
  "5d62302c"
  
)

/* harmony default export */ var LoginBar = (LoginBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "PartialHeader",
  components: {
    LoginBar: LoginBar
  },
  computed: {
    publication() {
      return this.$store.state.config.publication;
    },

    partHost() {
      if (this.publication) {
        let arr = this.publication.host.split(".");
        return {
          name: (this.publication.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1],
          ext: arr[arr.length - 1]
        };
      } else {
        return null;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_23c12f16_render,
  Headervue_type_template_id_23c12f16_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  "430f3bcf"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=3995528a&
var Footervue_type_template_id_3995528a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"has-text-centered\"><p>"+_vm._ssrEscape(_vm._s(_vm.publication.host)+" © 2020 All Rights Reserved")+"</p></div>")])}
var Footervue_type_template_id_3995528a_staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=3995528a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "PartialFooter",
  computed: {
    publication() {
      return this.$store.state.config.publication;
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  Footervue_type_template_id_3995528a_render,
  Footervue_type_template_id_3995528a_staticRenderFns,
  false,
  null,
  null,
  "21dcd7dd"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=template&id=3095adb4&scoped=true&
var Commentvue_type_template_id_3095adb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"media"},[_vm._ssrNode("<figure class=\"media-left\" data-v-3095adb4>","</figure>",[_c('avatar',{class:(_vm.avatarSize + " is-bordered"),attrs:{"icon":"shield-account-outline","value":_vm.value.user.profile.media}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\" data-v-3095adb4>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-3095adb4>","</div>",[_vm._ssrNode("<div class=\"level\" style=\"margin-bottom: 0;\" data-v-3095adb4>","</div>",[_vm._ssrNode("<div data-v-3095adb4>","</div>",[_c('n-link',{staticClass:"is-bold",attrs:{"to":("/profile/" + (_vm.value.user.username))}},[_vm._v(_vm._s(_vm.convertName(_vm.value.user))+"\n                    ")]),_vm._ssrNode(" "),(!_vm.readonly)?_vm._ssrNode("<small class=\"button is-small is-text\" data-v-3095adb4>","</small>",[_c('b-icon',{attrs:{"icon":"reply","size":"is-small"}}),_vm._ssrNode(" <span data-v-3095adb4>"+_vm._ssrEscape("#"+_vm._s(_vm.value.id))+"</span>")],2):_vm._e()],2),_vm._ssrNode(" <div class=\"level-right\" data-v-3095adb4><div class=\"buttons\" data-v-3095adb4><small class=\"button is-text is-small\" data-v-3095adb4>"+_vm._ssrEscape(_vm._s(_vm.timeSince(_vm.value.created))+" ago")+"</small></div></div>")],2),_vm._ssrNode(" <p data-v-3095adb4>"+_vm._ssrEscape(_vm._s(_vm.value.content))+"</p>")],2),_vm._ssrNode(" "),_vm._l((_vm.response.results),function(comment){return _c('comment',{key:comment.id,attrs:{"value":comment,"avatar-size":"is-32x32"},on:{"reply":_vm.reply}})})],2)],2)}
var Commentvue_type_template_id_3095adb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Comment.vue?vue&type=template&id=3095adb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=template&id=545bb4d2&
var Avatarvue_type_template_id_545bb4d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"image avatar relative",class:{'initials': !_vm.isUpdating && !(_vm.data && _vm.data.sizes)}},[(_vm.isUpdating)?_c('Upload',{staticClass:"upload",on:{"done":_vm.handleUpload}}):(_vm.data && _vm.data.sizes)?_c('img',{staticClass:"is-round",attrs:{"src":_vm.cleanURI(_vm.data.sizes['thumb_247_247'] ? _vm.data.sizes['thumb_247_247'] : _vm.data.path),"alt":""}}):_c('b-icon',{attrs:{"icon":_vm.icon}}),_vm._ssrNode(" "),(_vm.canUpdate)?_vm._ssrNode("<div class=\"medal\">","</div>",[_c('b-icon',{attrs:{"size":"is-small","icon":_vm.isUpdating ? 'close' : 'upload'}})],1):_vm._e(),_vm._ssrNode(" "+((_vm.canUpdate && _vm.data)?("<div class=\"delete\"></div>"):"<!---->"))],2)}
var Avatarvue_type_template_id_545bb4d2_staticRenderFns = []


// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=template&id=545bb4d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: "Avatar",
  props: {
    canUpdate: {
      type: Boolean,
      default: false
    },
    value: {
      default: null,
      type: Object
    },
    name: {
      default: null
    },
    icon: {
      default: 'account-circle-outline',
      type: String
    }
  },

  data() {
    return {
      data: this.value,
      isUpdating: false
    };
  },

  methods: {
    handleUpload(files) {
      if (files.length) {
        this.data = files[0];
        this.isUpdating = false;
      }
    }

  },
  watch: {
    data() {
      this.$emit('input', this.data);
    },

    value() {
      this.data = this.value;
    }

  }
});
// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Avatar.vue



function Avatar_injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Avatar_component = Object(componentNormalizer["a" /* default */])(
  components_Avatarvue_type_script_lang_js_,
  Avatarvue_type_template_id_545bb4d2_render,
  Avatarvue_type_template_id_545bb4d2_staticRenderFns,
  false,
  Avatar_injectStyles,
  null,
  "95ae56ca"
  
)

/* harmony default export */ var Avatar = (Avatar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: "Comment",
  components: {
    Avatar: Avatar
  },
  props: {
    value: {
      default: null
    },
    avatarSize: {
      default: 'is-64x64'
    },
    readonly: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      response: {
        results: [],
        count: 0
      }
    };
  },

  methods: {
    reply(comment) {
      this.$emit('reply', comment);
    },

    async fetchChild() {
      if (this.value['has_child']) {}
    }

  },

  created() {
    this.fetchChild();
  }

});
// CONCATENATED MODULE: ./components/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Comment.vue



function Comment_injectStyles (context) {
  
  
}

/* normalize component */

var Comment_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_,
  Commentvue_type_template_id_3095adb4_scoped_true_render,
  Commentvue_type_template_id_3095adb4_scoped_true_staticRenderFns,
  false,
  Comment_injectStyles,
  "3095adb4",
  "5845498d"
  
)

/* harmony default export */ var Comment = (Comment_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=78fa7616&scoped=true&
var CommentFormvue_type_template_id_78fa7616_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"item",attrs:{"id":"response"}},[_c('b-field',[_c('b-input',{attrs:{"rows":_vm.size === 'is-small' ? 1 : 2,"type":"textarea","placeholder":"Add a comment..."},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"level is-mobile v-center\" data-v-78fa7616>","</div>",[_vm._ssrNode("<div class=\"level-left\" data-v-78fa7616>","</div>",[_vm._ssrNode("<div class=\"level-item\" data-v-78fa7616>","</div>",[_vm._ssrNode("<div class=\"button is-white is-small\" data-v-78fa7616>","</div>",[_c('user',{attrs:{"value":_vm.currentUser ? _vm.currentUser : undefined,"avatar-size":"is-16x16"}})],1)]),_vm._ssrNode(" "),_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"level-right\" data-v-78fa7616>","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",!_vm.currentUser || _vm.comment === null || _vm.comment === ''))+" class=\"button is-small\" data-v-78fa7616>","</button>",[_c('b-icon',{attrs:{"size":"is-small","icon":"send-outline"}}),_vm._ssrNode(" <span data-v-78fa7616>Send</span>")],2)])],2)],2)}
var CommentFormvue_type_template_id_78fa7616_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=78fa7616&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({
  name: "Comment",
  props: {
    size: {
      default: null
    },
    parent: {
      default: null
    },
    post: Object
  },

  data() {
    return {
      comment: null
    };
  },

  methods: {
    async submit() {
      let res = await this.$api['public_feature']['feedback_post'](this.feature.id, {
        content: this.comment,
        parent: this.parent ? this.parent.id : undefined,
        is_private: this.private
      });
      this.$emit('done', { ...res,
        user: this.currentUser
      });
      this.comment = null;
    }

  }
});
// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CommentForm.vue



function CommentForm_injectStyles (context) {
  
  
}

/* normalize component */

var CommentForm_component = Object(componentNormalizer["a" /* default */])(
  components_CommentFormvue_type_script_lang_js_,
  CommentFormvue_type_template_id_78fa7616_scoped_true_render,
  CommentFormvue_type_template_id_78fa7616_scoped_true_staticRenderFns,
  false,
  CommentForm_injectStyles,
  "78fa7616",
  "007535f1"
  
)

/* harmony default export */ var CommentForm = (CommentForm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/User.vue?vue&type=template&id=25d0971c&
var Uservue_type_template_id_25d0971c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value)?_c('div',{staticClass:"media user clickable",on:{"click":_vm.click}},[_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('avatar',{class:("avatar " + _vm.avatarSize),attrs:{"icon":"shield-account-outline","value":_vm.value.profile ? _vm.value.profile.media : null}})],1),_vm._ssrNode(" "),(!_vm.onlyAvatar)?_vm._ssrNode("<div class=\"media-content v-center\">","</div>",[(_vm.clickable)?_c('n-link',{staticClass:"value",attrs:{"to":_vm.value.id ? ("/profile/" + (_vm.value.username)) : '#'}},[_vm._v(_vm._s(_vm.convertName(_vm.value)))]):_c('span',[_vm._v(_vm._s(_vm.convertName(_vm.value)))]),_vm._ssrNode(" "+((_vm.username)?("<div class=\"field\"><small>"+_vm._ssrEscape("@"+_vm._s(_vm.value.username))+"</small></div>"):"<!---->")+" "),_vm._t("default")],2):_vm._e(),_vm._ssrNode(" "+((_vm.canFollow && !_vm.onlyAvatar)?("<div class=\"media-right\"></div>"):"<!---->"))],2):_vm._e()}
var Uservue_type_template_id_25d0971c_staticRenderFns = []


// CONCATENATED MODULE: ./components/User.vue?vue&type=template&id=25d0971c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/User.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const SAMPLE = {
  first_name: "",
  last_name: "",
  username: "anonymous",
  profile: {
    media: null,
    description: null,
    nick: "Anonymous"
  },
  is_staff: false
};
/* harmony default export */ var Uservue_type_script_lang_js_ = ({
  name: "User",
  components: {
    Avatar: Avatar
  },
  props: {
    canFollow: {
      default: false,
      type: Boolean
    },
    value: {
      default: () => SAMPLE
    },
    username: {
      default: false,
      type: Boolean
    },
    avatarSize: {
      default: 'is-32x32',
      type: String
    },
    onlyAvatar: {
      default: false,
      type: Boolean
    },
    clickable: {
      default: true,
      type: Boolean
    },
    following: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    click() {
      if (!this.canFollow && this.value.id && this.clickable) {
        this.$router.replace({
          path: `/profile/${this.value.username}`
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/User.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Uservue_type_script_lang_js_ = (Uservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/User.vue





/* normalize component */

var User_component = Object(componentNormalizer["a" /* default */])(
  components_Uservue_type_script_lang_js_,
  Uservue_type_template_id_25d0971c_render,
  Uservue_type_template_id_25d0971c_staticRenderFns,
  false,
  null,
  null,
  "bca48ee6"
  
)

/* harmony default export */ var User = (User_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Item.vue?vue&type=template&id=159f433e&
var Itemvue_type_template_id_159f433e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value.id)?_c('div',{staticClass:"media item"},[(!_vm.isFull && _vm.value.media)?_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('avatar',{staticClass:"is-96x96 is-bordered",attrs:{"value":_vm.value.media}})],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\">","</div>",[(_vm.isFull)?_vm._ssrNode("<h1 class=\"title\">","</h1>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.value.title)))],2):_vm._ssrNode("<h4>","</h4>",[_c('n-link',{staticClass:"widget-title",attrs:{"to":("/" + (_vm.value['post_type']) + "/" + (_vm.value.slug))}},[_vm._v(_vm._s(_vm.value.title)+"\n            ")])],1),_vm._ssrNode(" "+((_vm.visibleItems.includes('description'))?("<p class=\"description\">"+_vm._ssrEscape(_vm._s(_vm.value.description))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"meta\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[(_vm.value['vote_object'] && _vm.visibleItems.includes('vote'))?_vm._ssrNode("<div"+(_vm._ssrClass("button is-text is-small",{'is-active': _vm.value['vote_object']['is-voted']}))+">","</div>",[_c('b-icon',{staticClass:"is-clickable",attrs:{"icon":!_vm.value['vote_object']['is-voted'] ? 'chevron-up' : 'chevron-down'}}),_vm._ssrNode(" <div>"+_vm._ssrEscape(_vm._s(_vm.value['vote_object']['total']))+"</div>")],2):_vm._e(),_vm._ssrNode(" "),(_vm.value.user)?_vm._ssrNode("<div class=\"button is-text is-small\">","</div>",[_c('user',{attrs:{"value":_vm.value.user,"avatar-size":"is-16x16"}})],1):_vm._e(),_vm._ssrNode(" "),_vm._l((_vm.taxPrimaries),function(tax){return _c('n-link',{key:tax.id,staticClass:"button is-text is-small",attrs:{"to":("/" + (tax.taxonomy) + "/" + (tax.term.slug))}},[_c('avatar',{staticClass:"is-16x16",attrs:{"icon":"pound","value":tax.media}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(tax.term.title))])],1)}),_vm._ssrNode(" "),_c('n-link',{staticClass:"button is-text is-small",attrs:{"to":("/" + (_vm.value['post_type']) + "/" + (_vm.value.slug))}},[_c('span',[_vm._v(_vm._s(_vm.timeSince(new Date(_vm.value.created)))+" ago")])]),_vm._ssrNode(" "),(_vm.value.meta.source)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.value.meta.source.href))+" target=\"_blank\" class=\"button is-text is-small\">","</a>",[_c('b-icon',{attrs:{"icon":"link","size":"is-small"}}),_vm._ssrNode(" "+((_vm.value.meta.source.archor)?("<span>"+_vm._ssrEscape(_vm._s(_vm.value.meta.source.archor))+"</span>"):"<!---->"))],2):_vm._e()],2)]),_vm._ssrNode(" "),_vm._t("default")],2)],2):_vm._e()}
var Itemvue_type_template_id_159f433e_staticRenderFns = []


// CONCATENATED MODULE: ./components/Item.vue?vue&type=template&id=159f433e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Itemvue_type_script_lang_js_ = ({
  name: "Item",
  props: {
    value: {},
    visibleItems: {
      default: () => []
    },
    isFull: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    taxPrimaries() {
      if (this.visibleItems.includes['hashtag']) {
        return this.value['terms'].filter(x => x.taxonomy === 'object');
      }

      return [];
    }

  },
  methods: {
    icon() {
      let arr = ['triangle-outline', 'square-outline', 'checkbox-blank-circle-outline'];
      return arr[Math.floor(Math.random() * arr.length)];
    }

  }
});
// CONCATENATED MODULE: ./components/Item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Itemvue_type_script_lang_js_ = (Itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Item.vue



function Item_injectStyles (context) {
  
  
}

/* normalize component */

var Item_component = Object(componentNormalizer["a" /* default */])(
  components_Itemvue_type_script_lang_js_,
  Itemvue_type_template_id_159f433e_render,
  Itemvue_type_template_id_159f433e_staticRenderFns,
  false,
  Item_injectStyles,
  null,
  "10813856"
  
)

/* harmony default export */ var Item = (Item_component.exports);
// CONCATENATED MODULE: ./components/index.js








external_vue_default.a.component('partial-header', Header);
external_vue_default.a.component('partial-footer', Footer);
external_vue_default.a.component('comment', Comment);
external_vue_default.a.component('comment-form', CommentForm);
external_vue_default.a.component('avatar', Avatar);
external_vue_default.a.component('user', User);
external_vue_default.a.component('item', Item);
// CONCATENATED MODULE: ./plugins/auth.js
const cookieparser =  true ? __webpack_require__(27) : undefined;
/* harmony default export */ var auth = (async function (context, inject) {
  const $auth = {};

  const logout = async () => {
    await setToken(null);
    await setUser(null);
  };

  const login = async credential => {
    let res = await context.$axios.$post('/auth/rest-auth/login/', credential).catch(e => {
      console.log(e);
    });

    if (res) {
      await setToken(res['token']);
      let user = await getUser();
      await setUser(user);
    }
  };

  const getUser = async () => {
    try {
      return await context.$axios.$get('/auth/users/me/');
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await logout();
      }

      return null;
    }
  };

  const getToken = async () => {
    let token = null;

    if ( true && context.req.headers.cookie) {
      const parsed = cookieparser.parse(context.req.headers.cookie);
      token = parsed['auth.token'];
    } else {
      token = context.store.$ck.get('auth.token');
    }

    return token;
  };

  const setToken = async token => {
    if (token) {
      context.$axios.setHeader('Authorization', 'JWT ' + token);
      context.store.$ck.set('auth.token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    } else {
      context.$axios.setHeader('Authorization', undefined);
      context.store.$ck.remove('auth.token');
    }

    await context.store.commit('auth/SET_TOKEN', token);
  };

  const setUser = async user => {
    await context.store.commit('auth/SET_USER', user);
  };

  const init = async () => {
    let hostname = null;

    if (true) {
      hostname = context.req.headers.host;
    } else {}

    if (hostname.includes('127.0.0.1')) {
      hostname = 'reacthacks.com';
    }

    let token = await getToken();
    await setToken(token);
    const {
      p,
      u
    } = await context.$axios.$post(`/${hostname}/init/`, {
      schema: [{
        "p": ["id", "title", "description", "options", "host"]
      }, "u"]
    });
    await context.store.commit('config/SET_PUBLICATION', p);

    if (token) {
      await setUser(u);
    }
  };

  if (true) {
    await init();
  }

  $auth.login = login;
  $auth.logout = logout;
  context.$auth = $auth;
  inject('auth', $auth);
});
// CONCATENATED MODULE: ./plugins/axios.js
/* harmony default export */ var plugins_axios = (function (context) {
  context.$axios.onError(async e => {
    if (e.response.status === 401) {
      await context.$auth.logout();
    }
  });
  context.$axios.onRequest(config => {});
});
// CONCATENATED MODULE: ./plugins/mixins.js


const showdown = __webpack_require__(28);

const converter = new showdown.Converter();
external_vue_default.a.mixin({
  methods: {
    convertName(user) {
      if (user === null) {
        return 'Anonymouse';
      }

      if (user.profile && user.profile.nick) {
        return user.profile.nick;
      }

      if (user.first_name || user.last_name) {
        return user.first_name + ' ' + user.last_name;
      }

      return user.username;
    },

    cleanData(data, fields) {
      let out = {};

      if (typeof fields === 'undefined') {
        fields = Object.keys(data);
      }

      fields.forEach(i => {
        if (typeof data[i] !== 'undefined') {
          if (data[i] && ['created', 'updated', 'start_date', 'due_date'].includes(i)) {
            out[i] = this.momentTime(data[i]).format('YYYY-MM-DD HH:mm');
          } else if (data[i] && i === "options") {
            out[i] = {};

            for (let j in data[i]) {
              out[i][j] = data[i][j];
            }
          } else if (Array.isArray(data[i])) {
            out[i] = data[i].map(x => {
              return x.id ? x.id : x;
            });
          } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
            out[i] = data[i].id;
          } else {
            out[i] = data[i];
          }
        }
      });
      return out;
    },

    toTop() {
      const myDiv = document.getElementById('__layout');
      myDiv.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    convertTime(seconds) {
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years";
      }

      interval = Math.floor(seconds / 2592000);

      if (interval > 1) {
        return interval + " month";
      }

      interval = Math.floor(seconds / 86400);

      if (interval > 1) {
        return interval + " day";
      }

      interval = Math.floor(seconds / 3600);

      if (interval > 1) {
        return interval + " hours";
      }

      interval = Math.floor(seconds / 60);

      if (interval > 1) {
        return interval + " minutes";
      }

      return Math.floor(seconds) + " seconds";
    },

    timeSince(date) {
      let seconds = Math.floor((new Date() - date) / 1000);
      let interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years";
      }

      interval = seconds / 2592000;

      if (interval > 1) {
        return Math.floor(interval) + " months";
      }

      interval = seconds / 86400;

      if (interval > 1) {
        return Math.floor(interval) + " days";
      }

      interval = seconds / 3600;

      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }

      interval = seconds / 60;

      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }

      return Math.floor(seconds) + " seconds";
    },

    momentTime(date) {},

    toHTML(val) {
      return val ? converter.makeHtml(val) : '';
    },

    cleanURI(url) {
      if (url) {
        return url.split("?")[0].split("#")[0];
      }

      return null;
    }

  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters['auth/getUser'];
      },

      set() {}

    }
  }
});
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(2);

// CONCATENATED MODULE: ./themes/default/index.js


external_vue_default.a.use(external_buefy_["Input"]);
external_vue_default.a.use(external_buefy_["Field"]);
external_vue_default.a.use(external_buefy_["Icon"]);
external_vue_default.a.use(external_buefy_["Checkbox"]);
external_vue_default.a.use(external_buefy_["Skeleton"]);
external_vue_default.a.use(external_buefy_["Dropdown"]);
external_vue_default.a.use(external_buefy_["Taginput"]);
external_vue_default.a.use(external_buefy_["Upload"]);
external_vue_default.a.use(external_buefy_["Loading"]);
external_vue_default.a.use(external_buefy_["Pagination"]);
external_vue_default.a.use(external_buefy_["Snackbar"]);
external_vue_default.a.mixin({
  methods: {
    rdNum(min, max) {
      return Math.random() * (max - min) + min;
    }

  }
});
// CONCATENATED MODULE: ./plugins/theme.js

// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: ./workbox.js (mode: 'client')

 // Source: ./nuxt-icons.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./content/plugin.client.js (mode: 'client')

 // Source: ./content/plugin.server.js (mode: 'server')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/repository (mode: 'all')

 // Source: ../components (mode: 'all')

 // Source: ../plugins/auth (mode: 'all')

 // Source: ../plugins/axios (mode: 'all')

 // Source: ../plugins/mixins (mode: 'all')

 // Source: ../plugins/theme (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "title": "nuxt-cms",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }, {
        "hid": "mobile-web-app-capable",
        "name": "mobile-web-app-capable",
        "content": "yes"
      }, {
        "hid": "apple-mobile-web-app-title",
        "name": "apple-mobile-web-app-title",
        "content": "nuxt-cms"
      }, {
        "hid": "og:type",
        "name": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og:title",
        "name": "og:title",
        "property": "og:title",
        "content": "nuxt-cms"
      }, {
        "hid": "og:site_name",
        "name": "og:site_name",
        "property": "og:site_name",
        "content": "nuxt-cms"
      }, {
        "hid": "og:description",
        "name": "og:description",
        "property": "og:description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap",
        "rel": "stylesheet"
      }, {
        "rel": "manifest",
        "href": "\u002F_nuxt\u002Fmanifest.b8ac6dd4.json"
      }, {
        "rel": "shortcut icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"
      }, {
        "rel": "apple-touch-icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png",
        "sizes": "512x512"
      }],
      "style": [],
      "script": [],
      "htmlAttrs": {
        "lang": "en"
      }
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof nuxt_icons === 'function') {
    await nuxt_icons(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof repository === 'function') {
    await repository(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./components/index.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./components/index.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/mixins.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mixins.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/theme.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/theme.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.3.4/src/history/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 1
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@tinymce/tinymce-vue");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("turndown");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map