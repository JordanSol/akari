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

/***/ "./components/FadeInRight.js":
/*!***********************************!*\
  !*** ./components/FadeInRight.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar fadeInRight = {\n    visible: {\n        opacity: 1,\n        x: 0,\n        transition: {\n            duration: 0.9,\n            delay: 0.5,\n            type: 'spring',\n            bounce: 0.5\n        }\n    },\n    hidden: {\n        opacity: 0,\n        x: 100\n    }\n};\nvar FadeInRight = function(param) {\n    var children = param.children;\n    _s();\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inView) {\n            controls.start('visible');\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref1,\n        initial: \"hidden\",\n        animate: controls,\n        variants: fadeInRight,\n        className: \"relative\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\FadeInRight.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this));\n};\n_s(FadeInRight, \"3svxJeIYMbbYsUK4ZaCJ9lB1xqw=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = FadeInRight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FadeInRight);\nvar _c;\n$RefreshReg$(_c, \"FadeInRight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZhZGVJblJpZ2h0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNIO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLEdBQUssQ0FBQ0ksV0FBVyxHQUFHLENBQUM7SUFDakJDLE9BQU8sRUFBRSxDQUFDO1FBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLFVBQVUsRUFBRSxDQUFDQztZQUFBQSxRQUFRLEVBQUUsR0FBRTtZQUFFQyxLQUFLLEVBQUUsR0FBRTtZQUFFQyxJQUFJLEVBQUUsQ0FBUTtZQUFFQyxNQUFNLEVBQUUsR0FBRTtRQUFBLENBQUM7SUFBQSxDQUFDO0lBQy9GQyxNQUFNLEVBQUUsQ0FBQztRQUFDUCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsR0FBRztJQUFBLENBQUM7QUFDakMsQ0FBQztBQUdELEdBQUssQ0FBQ08sV0FBVyxHQUFHLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzNCLEdBQUssQ0FBbUJmLEdBQVcsa0JBQVhBLHNFQUFTLFFBQXpCZ0IsSUFBRyxHQUFhaEIsR0FBVyxLQUF0QmlCLE1BQU0sR0FBS2pCLEdBQVc7SUFDbkMsR0FBSyxDQUFDa0IsUUFBUSxHQUFHakIsMkRBQVk7SUFFN0JFLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixFQUFFLEVBQUVjLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQVM7UUFDNUIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDRDtRQUFBQSxRQUFRO1FBQUVELE1BQU07SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0RmLHFEQUFVO1FBQ1hjLEdBQUcsRUFBRUEsSUFBRztRQUNSSyxPQUFPLEVBQUMsQ0FBUTtRQUNoQkMsT0FBTyxFQUFFSixRQUFRO1FBQ2pCSyxRQUFRLEVBQUVuQixXQUFXO1FBQ3JCb0IsU0FBUyxFQUFDLENBQVU7a0JBQ2ZULFFBQVE7Ozs7OztBQUdyQixDQUFDO0dBcEJLRCxXQUFXOztRQUNXZCxrRUFBUztRQUNoQkMsdURBQVk7OztLQUYzQmEsV0FBVztBQXNCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYWRlSW5SaWdodC5qcz81YjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGZhZGVJblJpZ2h0ID0ge1xyXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7ZHVyYXRpb246IC45LCBkZWxheTogLjUsIHR5cGU6ICdzcHJpbmcnLCBib3VuY2U6IC41fX0sXHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogMTAwfVxyXG59XHJcblxyXG5cclxuY29uc3QgRmFkZUluUmlnaHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbIHJlZiwgaW5WaWV3IF0gPSB1c2VJblZpZXcoKVxyXG4gICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluVmlldykge1xyXG4gICAgICAgICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyb2xzLCBpblZpZXddKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgcmVmPXtyZWZ9IFxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIiBcclxuICAgICAgICBhbmltYXRlPXtjb250cm9sc30gXHJcbiAgICAgICAgdmFyaWFudHM9e2ZhZGVJblJpZ2h0fVxyXG4gICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWRlSW5SaWdodCJdLCJuYW1lcyI6WyJ1c2VJblZpZXciLCJ1c2VBbmltYXRpb24iLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJmYWRlSW5SaWdodCIsInZpc2libGUiLCJvcGFjaXR5IiwieCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwidHlwZSIsImJvdW5jZSIsImhpZGRlbiIsIkZhZGVJblJpZ2h0IiwiY2hpbGRyZW4iLCJyZWYiLCJpblZpZXciLCJjb250cm9scyIsInN0YXJ0IiwiZGl2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FadeInRight.js\n");

/***/ })

});