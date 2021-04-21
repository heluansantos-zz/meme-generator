webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nvar ContextProvider = function ContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      upperText = _useState[0],\n      setUpperText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      lowerText = _useState2[0],\n      setLowerText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      image = _useState3[0],\n      setImage = _useState3[1];\n\n  var onDrop = function onDrop(selectedFiles) {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(function (File) {\n        var reader = new FileReader();\n\n        reader.onload = function () {};\n\n        reader.readAsDataURL();\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef: canvasRef,\n      upperText: upperText,\n      lowerText: lowerText,\n      setUpperText: setUpperText,\n      setLowerText: setLowerText,\n      onDrop: onDrop\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_s(ContextProvider, \"dRYbp52S/NeOwFj6Fwo6dp6fheo=\");\n\n_c = ContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ29udGV4dC50c3g/MGJhYSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJsb3dlclRleHQiLCJzZXRMb3dlclRleHQiLCJpbWFnZSIsInNldEltYWdlIiwib25Ecm9wIiwic2VsZWN0ZWRGaWxlcyIsImxlbmd0aCIsIm1hcCIsIkZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFDbkUsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUF4Qjs7QUFEbUUsa0JBRWpDQyxzREFBUSxDQUFDLEVBQUQsQ0FGeUI7QUFBQSxNQUU1REMsU0FGNEQ7QUFBQSxNQUVqREMsWUFGaUQ7O0FBQUEsbUJBR2pDRixzREFBUSxDQUFDLEVBQUQsQ0FIeUI7QUFBQSxNQUc1REcsU0FINEQ7QUFBQSxNQUdqREMsWUFIaUQ7O0FBQUEsbUJBSXpDSixzREFBUSxDQUFXLEVBQVgsQ0FKaUM7QUFBQSxNQUk1REssS0FKNEQ7QUFBQSxNQUlyREMsUUFKcUQ7O0FBTW5FLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLGFBQUQsRUFBMkI7QUFDdEMsUUFBSUEsYUFBYSxJQUFJQSxhQUFhLENBQUNDLE1BQW5DLEVBQTJDO0FBQ3ZDRCxtQkFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUN4QixZQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztBQUNBRCxjQUFNLENBQUNFLE1BQVAsR0FBZ0IsWUFBTSxDQUVyQixDQUZEOztBQUdBRixjQUFNLENBQUNHLGFBQVA7QUFDSCxPQU5EO0FBT0g7QUFDSixHQVZEOztBQVlBLFNBQ0ksTUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUU7QUFDckJqQixlQUFTLEVBQVRBLFNBRHFCO0FBRXJCRyxlQUFTLEVBQVRBLFNBRnFCO0FBR3JCRSxlQUFTLEVBQVRBLFNBSHFCO0FBSXJCRCxrQkFBWSxFQUFaQSxZQUpxQjtBQUtyQkUsa0JBQVksRUFBWkEsWUFMcUI7QUFNckJHLFlBQU0sRUFBTkE7QUFOcUIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNRVixRQVRSLENBREo7QUFjSCxDQWhDTTs7R0FBTUQsZTs7S0FBQUEsZSIsImZpbGUiOiIuL3NyYy9jb250ZXh0L0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dERhdGEsIENvbnRleHRQcm92aWRlclByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQ29udGV4dFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFt1cHBlclRleHQsIHNldFVwcGVyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbG93ZXJUZXh0LCBzZXRMb3dlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgY29uc3Qgb25Ecm9wID0gKHNlbGVjdGVkRmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlcyAmJiBzZWxlY3RlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlcy5tYXAoKEZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgY2FudmFzUmVmLFxuICAgICAgICAgICAgdXBwZXJUZXh0LFxuICAgICAgICAgICAgbG93ZXJUZXh0LFxuICAgICAgICAgICAgc2V0VXBwZXJUZXh0LFxuICAgICAgICAgICAgc2V0TG93ZXJUZXh0LFxuICAgICAgICAgICAgb25Ecm9wLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ })

})