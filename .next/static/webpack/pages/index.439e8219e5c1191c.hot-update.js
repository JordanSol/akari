"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Background.js":
/*!**********************************!*\
  !*** ./components/Background.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar springIn = {\n    end: {\n        scale: 1,\n        transition: {\n            duration: 0.7,\n            delay: 0.1,\n            type: \"spring\",\n            bounce: 0.3\n        }\n    },\n    start: {\n        scale: 1.1\n    }\n};\nvar useWindowWidth = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), width = ref[0], setWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function() {\n        var updateSize = function updateSize() {\n            setWidth(window.innerWidth);\n        };\n        window.addEventListener('resize', updateSize);\n        updateSize();\n        return function() {\n            console.log('resize');\n            window.removeEventListener('resize', updateSize);\n        };\n    }, []);\n    return width;\n};\n_s(useWindowWidth, \"sN37OaapsR7otknhsu7IXu3r0pk=\");\nvar Background = function(param) {\n    var loading = param.loading, children = param.children, _speed = param.speed, speed = _speed === void 0 ? 10 : _speed;\n    _s1();\n    var ref = (0,react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax)({\n        speed: speed\n    }).ref;\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!loading) {\n            controls.start('end');\n        }\n    }, [\n        controls,\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: \"w-screen h-screen absolute top-0 left-0\",\n        variants: springIn,\n        initial: \"start\",\n        animate: controls,\n        startScroll: 0,\n        endScroll: 100,\n        disabled: true,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Background.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, _this));\n};\n_s1(Background, \"sZKmtAi5iQqQQNLiJ+rc9BIPNtU=\", false, function() {\n    return [\n        react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0M7QUFDUTs7O0FBRTVELEdBQUssQ0FBQ00sUUFBUSxHQUFHLENBQUM7SUFDZEMsR0FBRyxFQUFFLENBQUM7UUFDRkMsS0FBSyxFQUFFLENBQUM7UUFDUkMsVUFBVSxFQUFFLENBQUM7WUFDVEMsUUFBUSxFQUFFLEdBQUU7WUFDWkMsS0FBSyxFQUFFLEdBQUc7WUFDVkMsSUFBSSxFQUFFLENBQVE7WUFDZEMsTUFBTSxFQUFFLEdBQUU7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNKTixLQUFLLEVBQUUsR0FBRztJQUNkLENBQUM7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDTyxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzFCLEdBQUssQ0FBcUJYLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdCWSxLQUFLLEdBQWNaLEdBQVcsS0FBdkJhLFFBQVEsR0FBSWIsR0FBVztJQUNyQ0Msc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNWYSxVQUFVLEdBQW5CLFFBQVEsQ0FBQ0EsVUFBVSxHQUFHLENBQUM7WUFDbkJELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVO1FBQzlCLENBQUM7UUFDREQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVILFVBQVU7UUFDNUNBLFVBQVU7UUFDVixNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDVkksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUTtZQUNwQkosTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVOLFVBQVU7UUFDbkQsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixNQUFNLENBQUNGLEtBQUs7QUFDaEIsQ0FBQztHQWRLRCxjQUFjO0FBZ0JwQixHQUFLLENBQUNVLFVBQVUsR0FBRyxRQUFRLFFBQTZCLENBQUM7UUFBcENDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFOztJQUM5QyxHQUFLLENBQUdDLEdBQUcsR0FBSzdCLGtFQUFXLENBQUMsQ0FBQztRQUFDNEIsS0FBSyxFQUFFQSxLQUFLO0lBQUEsQ0FBQyxFQUFuQ0MsR0FBRztJQUNYLEdBQUssQ0FBQ0MsUUFBUSxHQUFHNUIsMkRBQVk7SUFFN0JDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixFQUFFLEdBQUV1QixPQUFPLEVBQUUsQ0FBQztZQUNWSSxRQUFRLENBQUNoQixLQUFLLENBQUMsQ0FBSztRQUN4QixDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUNnQjtRQUFBQSxRQUFRO1FBQUVKLE9BQU87SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0R6QixxREFBVTtRQUFDNEIsR0FBRyxFQUFFQSxHQUFHO1FBQUVHLFNBQVMsRUFBRyxDQUF1QztRQUNyRUMsUUFBUSxFQUFFM0IsUUFBUTtRQUNsQjRCLE9BQU8sRUFBQyxDQUFPO1FBQ2ZDLE9BQU8sRUFBRUwsUUFBUTtRQUNqQk0sV0FBVyxFQUFFLENBQUM7UUFDZEMsU0FBUyxFQUFFLEdBQUc7UUFDZEMsUUFBUTtrQkFFUFgsUUFBUTs7Ozs7O0FBR3JCLENBQUM7SUF0QktGLFVBQVU7O1FBQ0l6Qiw4REFBVztRQUNWRSx1REFBWTs7O0tBRjNCdUIsVUFBVTtBQXdCaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLmpzPzk4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBzcHJpbmdJbiA9IHtcclxuICAgIGVuZDogeyBcclxuICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAuNyxcclxuICAgICAgICAgICAgZGVsYXk6IDAuMSxcclxuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgYm91bmNlOiAuM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFydDoge1xyXG4gICAgICAgIHNjYWxlOiAxLjFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlV2luZG93V2lkdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlU2l6ZSlcclxuICAgICAgICB1cGRhdGVTaXplKClcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzaXplJylcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiB3aWR0aFxyXG59XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gKHtsb2FkaW5nLCBjaGlsZHJlbiwgc3BlZWQgPSAxMH0pID0+IHtcclxuICAgIGNvbnN0IHsgcmVmIH0gPSB1c2VQYXJhbGxheCh7IHNwZWVkOiBzcGVlZH0pXHJcbiAgICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighbG9hZGluZykge1xyXG4gICAgICAgICAgICBjb250cm9scy5zdGFydCgnZW5kJylcclxuICAgICAgICB9XHJcbiAgICB9LFtjb250cm9scywgbG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtgdy1zY3JlZW4gaC1zY3JlZW4gYWJzb2x1dGUgdG9wLTAgbGVmdC0wYH1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3NwcmluZ0lufVxyXG4gICAgICAgICAgICBpbml0aWFsPSdzdGFydCdcclxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgICAgICAgIHN0YXJ0U2Nyb2xsPXswfVxyXG4gICAgICAgICAgICBlbmRTY3JvbGw9ezEwMH1cclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQiXSwibmFtZXMiOlsidXNlUGFyYWxsYXgiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInNwcmluZ0luIiwiZW5kIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInR5cGUiLCJib3VuY2UiLCJzdGFydCIsInVzZVdpbmRvd1dpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInVwZGF0ZVNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQmFja2dyb3VuZCIsImxvYWRpbmciLCJjaGlsZHJlbiIsInNwZWVkIiwicmVmIiwiY29udHJvbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwic3RhcnRTY3JvbGwiLCJlbmRTY3JvbGwiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Background.js\n");

/***/ })

});