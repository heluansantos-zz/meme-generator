webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ContextProvider = function ContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      upperText = _useState[0],\n      setUpperText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      lowerText = _useState2[0],\n      setLowerText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      images = _useState3[0],\n      setImages = _useState3[1];\n\n  var onDrop = function onDrop(selectedFiles) {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(function (file) {\n        var reader = new FileReader();\n\n        reader.onload = function (e) {\n          var uploadImages = [e.target.value].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(images));\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef: canvasRef,\n      upperText: upperText,\n      lowerText: lowerText,\n      setUpperText: setUpperText,\n      setLowerText: setLowerText,\n      onDrop: onDrop\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_s(ContextProvider, \"ZfRALSChnYGc9cjzmWiqqyckbDQ=\");\n\n_c = ContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ29udGV4dC50c3g/MGJhYSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJsb3dlclRleHQiLCJzZXRMb3dlclRleHQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvbkRyb3AiLCJzZWxlY3RlZEZpbGVzIiwibGVuZ3RoIiwibWFwIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidXBsb2FkSW1hZ2VzIiwidGFyZ2V0IiwidmFsdWUiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsT0FBTyxHQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBN0I7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQztBQUNuRSxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQW9CLElBQXBCLENBQXhCOztBQURtRSxrQkFFakNDLHNEQUFRLENBQUMsRUFBRCxDQUZ5QjtBQUFBLE1BRTVEQyxTQUY0RDtBQUFBLE1BRWpEQyxZQUZpRDs7QUFBQSxtQkFHakNGLHNEQUFRLENBQUMsRUFBRCxDQUh5QjtBQUFBLE1BRzVERyxTQUg0RDtBQUFBLE1BR2pEQyxZQUhpRDs7QUFBQSxtQkFJdkNKLHNEQUFRLENBQVcsRUFBWCxDQUorQjtBQUFBLE1BSTVESyxNQUo0RDtBQUFBLE1BSXBEQyxTQUpvRDs7QUFNbkUsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsYUFBRCxFQUEyQjtBQUN0QyxRQUFJQSxhQUFhLElBQUlBLGFBQWEsQ0FBQ0MsTUFBbkMsRUFBMkM7QUFDdkNELG1CQUFhLENBQUNFLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLFlBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBQ0FELGNBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFDQyxDQUFELEVBQU87QUFDbkIsY0FBTUMsWUFBWSxJQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBYixzR0FBdUJiLE1BQXZCLEVBQWxCO0FBQ0gsU0FGRDs7QUFHQU8sY0FBTSxDQUFDTyxhQUFQLENBQXFCUixJQUFyQjtBQUNILE9BTkQ7QUFPSDtBQUNKLEdBVkQ7O0FBWUEsU0FDSSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRTtBQUNyQmIsZUFBUyxFQUFUQSxTQURxQjtBQUVyQkcsZUFBUyxFQUFUQSxTQUZxQjtBQUdyQkUsZUFBUyxFQUFUQSxTQUhxQjtBQUlyQkQsa0JBQVksRUFBWkEsWUFKcUI7QUFLckJFLGtCQUFZLEVBQVpBLFlBTHFCO0FBTXJCRyxZQUFNLEVBQU5BO0FBTnFCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTUVYsUUFUUixDQURKO0FBY0gsQ0FoQ007O0dBQU1ELGU7O0tBQUFBLGUiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHREYXRhLCBDb250ZXh0UHJvdmlkZXJQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IENvbnRleHRQcm92aWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbdXBwZXJUZXh0LCBzZXRVcHBlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvd2VyVGV4dCwgc2V0TG93ZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgY29uc3Qgb25Ecm9wID0gKHNlbGVjdGVkRmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlcyAmJiBzZWxlY3RlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRJbWFnZXMgPSBbZS50YXJnZXQudmFsdWUsIC4uLmltYWdlc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBjYW52YXNSZWYsXG4gICAgICAgICAgICB1cHBlclRleHQsXG4gICAgICAgICAgICBsb3dlclRleHQsXG4gICAgICAgICAgICBzZXRVcHBlclRleHQsXG4gICAgICAgICAgICBzZXRMb3dlclRleHQsXG4gICAgICAgICAgICBvbkRyb3AsXG4gICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ })

})