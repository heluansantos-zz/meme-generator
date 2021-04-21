webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ContextProvider = function ContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      upperText = _useState[0],\n      setUpperText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      lowerText = _useState2[0],\n      setLowerText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      images = _useState3[0],\n      setImages = _useState3[1];\n\n  var onDrop = function onDrop(selectedFiles) {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(function (file) {\n        var reader = new FileReader();\n\n        reader.onload = function (e) {\n          var uploadImages = [String(e.target.result)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(images));\n          setImages(uploadImages);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef: canvasRef,\n      upperText: upperText,\n      lowerText: lowerText,\n      setUpperText: setUpperText,\n      setLowerText: setLowerText,\n      onDrop: onDrop,\n      images: images\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_s(ContextProvider, \"ZfRALSChnYGc9cjzmWiqqyckbDQ=\");\n\n_c = ContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ29udGV4dC50c3g/MGJhYSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJsb3dlclRleHQiLCJzZXRMb3dlclRleHQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvbkRyb3AiLCJzZWxlY3RlZEZpbGVzIiwibGVuZ3RoIiwibWFwIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidXBsb2FkSW1hZ2VzIiwiU3RyaW5nIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFDbkUsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUF4Qjs7QUFEbUUsa0JBRWpDQyxzREFBUSxDQUFDLEVBQUQsQ0FGeUI7QUFBQSxNQUU1REMsU0FGNEQ7QUFBQSxNQUVqREMsWUFGaUQ7O0FBQUEsbUJBR2pDRixzREFBUSxDQUFDLEVBQUQsQ0FIeUI7QUFBQSxNQUc1REcsU0FINEQ7QUFBQSxNQUdqREMsWUFIaUQ7O0FBQUEsbUJBSXZDSixzREFBUSxDQUFXLEVBQVgsQ0FKK0I7QUFBQSxNQUk1REssTUFKNEQ7QUFBQSxNQUlwREMsU0FKb0Q7O0FBTW5FLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLGFBQUQsRUFBMkI7QUFDdEMsUUFBSUEsYUFBYSxJQUFJQSxhQUFhLENBQUNDLE1BQW5DLEVBQTJDO0FBQ3ZDRCxtQkFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUN4QixZQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztBQUNBRCxjQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLGNBQU1DLFlBQVksSUFBSUMsTUFBTSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsTUFBVixDQUFWLHNHQUFnQ2QsTUFBaEMsRUFBbEI7QUFDQUMsbUJBQVMsQ0FBQ1UsWUFBRCxDQUFUO0FBQ0gsU0FIRDs7QUFJQUosY0FBTSxDQUFDUSxhQUFQLENBQXFCVCxJQUFyQjtBQUNILE9BUEQ7QUFRSDtBQUNKLEdBWEQ7O0FBYUEsU0FDSSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRTtBQUNyQmIsZUFBUyxFQUFUQSxTQURxQjtBQUVyQkcsZUFBUyxFQUFUQSxTQUZxQjtBQUdyQkUsZUFBUyxFQUFUQSxTQUhxQjtBQUlyQkQsa0JBQVksRUFBWkEsWUFKcUI7QUFLckJFLGtCQUFZLEVBQVpBLFlBTHFCO0FBTXJCRyxZQUFNLEVBQU5BLE1BTnFCO0FBT3JCRixZQUFNLEVBQU5BO0FBUHFCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVUVIsUUFWUixDQURKO0FBZUgsQ0FsQ007O0dBQU1ELGU7O0tBQUFBLGUiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHREYXRhLCBDb250ZXh0UHJvdmlkZXJQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IENvbnRleHRQcm92aWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbdXBwZXJUZXh0LCBzZXRVcHBlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvd2VyVGV4dCwgc2V0TG93ZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgY29uc3Qgb25Ecm9wID0gKHNlbGVjdGVkRmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlcyAmJiBzZWxlY3RlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRJbWFnZXMgPSBbU3RyaW5nKGUudGFyZ2V0LnJlc3VsdCksIC4uLmltYWdlc107XG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyh1cGxvYWRJbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgY2FudmFzUmVmLFxuICAgICAgICAgICAgdXBwZXJUZXh0LFxuICAgICAgICAgICAgbG93ZXJUZXh0LFxuICAgICAgICAgICAgc2V0VXBwZXJUZXh0LFxuICAgICAgICAgICAgc2V0TG93ZXJUZXh0LFxuICAgICAgICAgICAgb25Ecm9wLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ })

})