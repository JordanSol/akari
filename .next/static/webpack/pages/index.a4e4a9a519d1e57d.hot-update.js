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

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-ssr */ \"./components/no-ssr.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carouselmages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carouselmages */ \"./components/carouselmages.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Carousel = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref[0], setWidth = ref[1];\n    var carousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 32);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_no_ssr__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"Showcase\",\n                className: \"relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-8 bg-carouselbg bg-center bg-cover border-yellow-300 border-t-4 border-b-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    ref: carousel,\n                    whileTap: {\n                        pointer: 'grabbing'\n                    },\n                    className: \"cursor-grab overflow-x-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        drag: \"x\",\n                        dragConstraints: {\n                            right: 0,\n                            left: -width\n                        },\n                        className: \"flex justify-between w-inherit pl-4\",\n                        children: _carouselmages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function(image) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"mx-4 z-2 relative overflow-hidden min-w-[200px] md:min-w-[300px] lg:min-w-[400px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: image,\n                                        placeholder: \"blur\",\n                                        width: 400,\n                                        height: 400,\n                                        layout: \"intrinsic\",\n                                        alt: \"Akari Preview\",\n                                        className: \"z-1 pointer-events-none rounded-md\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 33\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full absolute top-0 left-0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 33\n                                    }, _this1)\n                                ]\n                            }, image.id, true, {\n                                fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, _this1));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jordanfreeman/Docs/Repositories/akari/components/Carousel.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Carousel, \"oifPnhUyOjk9zScmiNt2zN7dDl8=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNiO0FBQ1Y7QUFDRTtBQUNNOzs7QUFFcEMsR0FBSyxDQUFDTyxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7O0lBQ3BCLEdBQUssQ0FBcUJQLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdCUSxLQUFLLEdBQWNSLEdBQVcsS0FBdkJTLFFBQVEsR0FBSVQsR0FBVztJQUNyQyxHQUFLLENBQUNVLFFBQVEsR0FBR1IsNkNBQU07SUFFdkJELGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JRLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxPQUFPLENBQUNFLFdBQVcsR0FBRyxFQUFFO0lBQzdFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNOzhGQUVEVCwrQ0FBSztrR0FDTFUsQ0FBTztnQkFBQ0MsRUFBRSxFQUFDLENBQVU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFrSjtzR0FDOUtiLHFEQUFVO29CQUFDZSxHQUFHLEVBQUVSLFFBQVE7b0JBQUVTLFFBQVEsRUFBRSxDQUFDQzt3QkFBQUEsT0FBTyxFQUFFLENBQVU7b0JBQUEsQ0FBQztvQkFBRUosU0FBUyxFQUFDLENBQStCOzBHQUNoR2IscURBQVU7d0JBQUNrQixJQUFJLEVBQUMsQ0FBRzt3QkFBQ0MsZUFBZSxFQUFFLENBQUNDOzRCQUFBQSxLQUFLLEVBQUMsQ0FBQzs0QkFBRUMsSUFBSSxHQUFHaEIsS0FBSzt3QkFBQSxDQUFDO3dCQUFFUSxTQUFTLEVBQUMsQ0FBcUM7a0NBQ3pHViwwREFBVSxDQUFDb0IsUUFBUSxDQUFSQSxLQUFLLEVBQUksQ0FBQzs0QkFDbEIsTUFBTSw2RUFDRHZCLHFEQUFVO2dDQUNYYSxTQUFTLEVBQUMsQ0FBbUY7O2dIQUV4RlgsbURBQUs7d0NBQUNzQixHQUFHLEVBQUVELEtBQUs7d0NBQUVFLFdBQVcsRUFBQyxDQUFNO3dDQUFDcEIsS0FBSyxFQUFFLEdBQUc7d0NBQUVxQixNQUFNLEVBQUUsR0FBRzt3Q0FBRUMsTUFBTSxFQUFDLENBQVc7d0NBQUNDLEdBQUcsRUFBQyxDQUFlO3dDQUFDZixTQUFTLEVBQUMsQ0FBb0M7Ozs7OztnSEFDbkpDLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFxQzs7Ozs7OzsrQkFKdkNVLEtBQUssQ0FBQ1gsRUFBRTs7Ozs7d0JBT2pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckIsQ0FBQztHQTlCS1IsUUFBUTtLQUFSQSxRQUFRO0FBZ0NkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgTm9Tc3IgZnJvbSAnLi9uby1zc3InXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9jYXJvdXNlbG1hZ2VzJ1xuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgY2Fyb3VzZWwgPSB1c2VSZWYoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0V2lkdGgoY2Fyb3VzZWwuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsLmN1cnJlbnQub2Zmc2V0V2lkdGggKyAzMilcbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPE5vU3NyPlxuICAgICAgICA8c2VjdGlvbiBpZD0nU2hvd2Nhc2UnIGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1zY3JlZW4gYmctZGFya1B1cnBsZSBzaGFkb3ctaW5uZXJMZyBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTggYmctY2Fyb3VzZWxiZyBiZy1jZW50ZXIgYmctY292ZXIgYm9yZGVyLXllbGxvdy0zMDAgYm9yZGVyLXQtNCBib3JkZXItYi00Jz5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHJlZj17Y2Fyb3VzZWx9IHdoaWxlVGFwPXt7cG9pbnRlcjogJ2dyYWJiaW5nJ319IGNsYXNzTmFtZT0nY3Vyc29yLWdyYWIgb3ZlcmZsb3cteC1oaWRkZW4nPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRyYWc9J3gnIGRyYWdDb25zdHJhaW50cz17e3JpZ2h0OjAsIGxlZnQ6IC13aWR0aH19IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1pbmhlcml0IHBsLTQnPlxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aW1hZ2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC00IHotMiByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gbWluLXctWzIwMHB4XSBtZDptaW4tdy1bMzAwcHhdIGxnOm1pbi13LVs0MDBweF0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHBsYWNlaG9sZGVyPSdibHVyJyB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gbGF5b3V0PSdpbnRyaW5zaWMnIGFsdD1cIkFrYXJpIFByZXZpZXdcIiBjbGFzc05hbWU9J3otMSBwb2ludGVyLWV2ZW50cy1ub25lIHJvdW5kZWQtbWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgdG9wLTAgbGVmdC0wJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9Ob1Nzcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIm1vdGlvbiIsIk5vU3NyIiwiSW1hZ2UiLCJpbWFnZXMiLCJDYXJvdXNlbCIsIndpZHRoIiwic2V0V2lkdGgiLCJjYXJvdXNlbCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwid2hpbGVUYXAiLCJwb2ludGVyIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsInJpZ2h0IiwibGVmdCIsIm1hcCIsImltYWdlIiwic3JjIiwicGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJsYXlvdXQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});