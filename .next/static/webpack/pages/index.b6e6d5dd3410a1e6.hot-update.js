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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar springIn = {\n    end: {\n        scale: 1,\n        transition: {\n            duration: 0.7,\n            delay: 0.1,\n            type: \"spring\",\n            bounce: 0.3\n        }\n    },\n    start: {\n        scale: 1.1\n    }\n};\nvar useWindowWidth = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), width = ref[0], setWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function() {\n        var updateSize = function updateSize() {\n            setWidth(window.innerWidth);\n        };\n        window.addEventListener('resize', updateSize);\n        updateSize();\n        return function() {\n            console.log('resize');\n            window.removeEventListener('resize', updateSize);\n        };\n    }, []);\n    return width;\n};\n_s(useWindowWidth, \"sN37OaapsR7otknhsu7IXu3r0pk=\");\nvar Background = function(param) {\n    var loading = param.loading, children = param.children, _speed = param.speed, speed = _speed === void 0 ? 10 : _speed;\n    _s1();\n    var ref = (0,react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax)({\n        speed: speed\n    }).ref;\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!loading) {\n            controls.start('end');\n        }\n    }, [\n        controls,\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: \"w-screen h-screen absolute top-0 left-0\",\n        variants: springIn,\n        initial: \"start\",\n        animate: controls,\n        startScroll: 0,\n        endScroll: 100,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Background.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, _this));\n};\n_s1(Background, \"sZKmtAi5iQqQQNLiJ+rc9BIPNtU=\", false, function() {\n    return [\n        react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0M7QUFDUTs7O0FBRTVELEdBQUssQ0FBQ00sUUFBUSxHQUFHLENBQUM7SUFDZEMsR0FBRyxFQUFFLENBQUM7UUFDRkMsS0FBSyxFQUFFLENBQUM7UUFDUkMsVUFBVSxFQUFFLENBQUM7WUFDVEMsUUFBUSxFQUFFLEdBQUU7WUFDWkMsS0FBSyxFQUFFLEdBQUc7WUFDVkMsSUFBSSxFQUFFLENBQVE7WUFDZEMsTUFBTSxFQUFFLEdBQUU7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNKTixLQUFLLEVBQUUsR0FBRztJQUNkLENBQUM7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDTyxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzFCLEdBQUssQ0FBcUJYLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdCWSxLQUFLLEdBQWNaLEdBQVcsS0FBdkJhLFFBQVEsR0FBSWIsR0FBVztJQUNyQ0Msc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNWYSxVQUFVLEdBQW5CLFFBQVEsQ0FBQ0EsVUFBVSxHQUFHLENBQUM7WUFDbkJELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVO1FBQzlCLENBQUM7UUFDREQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVILFVBQVU7UUFDNUNBLFVBQVU7UUFDVixNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDVkksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUTtZQUNwQkosTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVOLFVBQVU7UUFDbkQsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixNQUFNLENBQUNGLEtBQUs7QUFDaEIsQ0FBQztHQWRLRCxjQUFjO0FBZ0JwQixHQUFLLENBQUNVLFVBQVUsR0FBRyxRQUFRLFFBQTZCLENBQUM7UUFBcENDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFOztJQUM5QyxHQUFLLENBQUdDLEdBQUcsR0FBSzdCLGtFQUFXLENBQUMsQ0FBQztRQUFDNEIsS0FBSyxFQUFFQSxLQUFLO0lBQUEsQ0FBQyxFQUFuQ0MsR0FBRztJQUNYLEdBQUssQ0FBQ0MsUUFBUSxHQUFHNUIsMkRBQVk7SUFFN0JDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixFQUFFLEdBQUV1QixPQUFPLEVBQUUsQ0FBQztZQUNWSSxRQUFRLENBQUNoQixLQUFLLENBQUMsQ0FBSztRQUN4QixDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUNnQjtRQUFBQSxRQUFRO1FBQUVKLE9BQU87SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0R6QixxREFBVTtRQUFDNEIsR0FBRyxFQUFFQSxHQUFHO1FBQUVHLFNBQVMsRUFBRyxDQUF1QztRQUNyRUMsUUFBUSxFQUFFM0IsUUFBUTtRQUNsQjRCLE9BQU8sRUFBQyxDQUFPO1FBQ2ZDLE9BQU8sRUFBRUwsUUFBUTtRQUNqQk0sV0FBVyxFQUFFLENBQUM7UUFDZEMsU0FBUyxFQUFFLEdBQUc7a0JBRWJWLFFBQVE7Ozs7OztBQUdyQixDQUFDO0lBckJLRixVQUFVOztRQUNJekIsOERBQVc7UUFDVkUsdURBQVk7OztLQUYzQnVCLFVBQVU7QUF1QmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFja2dyb3VuZC5qcz85OGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3Qgc3ByaW5nSW4gPSB7XHJcbiAgICBlbmQ6IHsgXHJcbiAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogLjcsXHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjEsXHJcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXHJcbiAgICAgICAgICAgIGJvdW5jZTogLjNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQ6IHtcclxuICAgICAgICBzY2FsZTogMS4xXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZVdpbmRvd1dpZHRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgICAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpXHJcbiAgICAgICAgdXBkYXRlU2l6ZSgpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc2l6ZScpXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gd2lkdGhcclxufVxyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9ICh7bG9hZGluZywgY2hpbGRyZW4sIHNwZWVkID0gMTB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZiB9ID0gdXNlUGFyYWxsYXgoeyBzcGVlZDogc3BlZWR9KVxyXG4gICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWxvYWRpbmcpIHtcclxuICAgICAgICAgICAgY29udHJvbHMuc3RhcnQoJ2VuZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29udHJvbHMsIGxvYWRpbmddKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YHctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlIHRvcC0wIGxlZnQtMGB9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtzcHJpbmdJbn1cclxuICAgICAgICAgICAgaW5pdGlhbD0nc3RhcnQnXHJcbiAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICAgICAgICBzdGFydFNjcm9sbD17MH1cclxuICAgICAgICAgICAgZW5kU2Nyb2xsPXsxMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kIl0sIm5hbWVzIjpbInVzZVBhcmFsbGF4IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJzcHJpbmdJbiIsImVuZCIsInNjYWxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwiYm91bmNlIiwic3RhcnQiLCJ1c2VXaW5kb3dXaWR0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJ1cGRhdGVTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkJhY2tncm91bmQiLCJsb2FkaW5nIiwiY2hpbGRyZW4iLCJzcGVlZCIsInJlZiIsImNvbnRyb2xzIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInN0YXJ0U2Nyb2xsIiwiZW5kU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Background.js\n");

/***/ })

});