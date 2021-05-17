/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Amodules.js":
/*!********************************************!*\
  !*** ./src/scripts/components/Amodules.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Amodules {\n    constructor() {\n        this.modulesStore = {};\n    }\n\n    /**\n     * @param {String} name\n     * @param {String[]} [deps]\n     * @param {Function} fn\n     */\n    define(name, deps, fn) {\n        this.modulesStore[name] = {\n            name,\n            deps,\n            fn: () => {\n                return new Promise((resolve) => {\n                    if (!deps.length) return fn(resolve);\n\n                    this.require(deps, (...res) => {\n                        fn(resolve, ...res);\n                    });\n                });\n            },\n        };\n    }\n\n    /**\n     * @param {String[]} modules\n     * @param {Function} cb\n     */\n    require(modules, cb) {\n        const pendingModules = [];\n        modules.forEach((moduleName) => {\n            pendingModules.push(this.modulesStore[moduleName].fn());\n        });\n\n        Promise.all(pendingModules).then((res) => {\n            cb(...res);\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Amodules());\n\n\n//# sourceURL=webpack://test_frontend/./src/scripts/components/Amodules.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Amodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Amodules */ \"./src/scripts/components/Amodules.js\");\n\n\n_components_Amodules__WEBPACK_IMPORTED_MODULE_0__.default.define('A', [], (provide) => {\n    setTimeout(() => {\n        provide('Модуль A');\n    }, 2000);\n});\n\n_components_Amodules__WEBPACK_IMPORTED_MODULE_0__.default.define('B', ['C', 'A'], (provide, c, a) => {\n    setTimeout(() => {\n        provide(`Я модуль B, а это мои зависимости: ${c}, ${a}`);\n    }, 1000);\n});\n\n_components_Amodules__WEBPACK_IMPORTED_MODULE_0__.default.define('C', [], (provide) => {\n    setTimeout(() => {\n        provide('Модуль C');\n    }, 500);\n});\n\n// modules.require(['A', 'C'], (A, C) => {\n//     console.log(`${A}, ${C}`);\n// });\n\n_components_Amodules__WEBPACK_IMPORTED_MODULE_0__.default.require(['B'], (B) => {\n    console.log('А я асинхронный');\n    console.log(B);\n});\n\nconsole.log('Я первый');\n\n\n//# sourceURL=webpack://test_frontend/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;