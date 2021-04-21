webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ContextProvider = function ContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      upperText = _useState[0],\n      setUpperText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      lowerText = _useState2[0],\n      setLowerText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      images = _useState3[0],\n      setImages = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('white'),\n      color = _useState4[0],\n      setColor = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Impact'),\n      font = _useState5[0],\n      setFont = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (images && images.length > 0) {\n      var image = new Image();\n\n      image.onload = function () {\n        var canvas = canvasRef.current;\n        canvas.width = 500;\n        canvas.height = 500;\n        var contexto = canvas.getContext('2d');\n        contexto.drawImage(image, 0, 0, 500, 500);\n        contexto.fillText(upperText, 50, 60);\n        contexto.font = \"25pt \".concat(font);\n        contexto.fillStyle = \"\".concat(color);\n        contexto.strokeStyle = \"black\";\n        contexto.strokeText(upperText, 50, 60);\n        contexto.fillText(upperText, 50, 60);\n        contexto.strokeText(lowerText, 50, 440);\n        contexto.fillText(lowerText, 50, 440);\n        contexto.lineWidth = 2;\n      };\n\n      image.src = images[0];\n    }\n  }, [images, upperText, lowerText, color, font]);\n\n  var onDrop = function onDrop(selectedFiles) {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(function (file) {\n        var reader = new FileReader();\n\n        reader.onload = function (e) {\n          var uploadImages = [String(e.target.result)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(images));\n          setImages(uploadImages);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef: canvasRef,\n      upperText: upperText,\n      lowerText: lowerText,\n      setUpperText: setUpperText,\n      setLowerText: setLowerText,\n      onDrop: onDrop,\n      images: images,\n      setColor: setColor\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_s(ContextProvider, \"0H22QZFp4wEdX2V/ELZSGgEkMdI=\");\n\n_c = ContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ29udGV4dC50c3g/MGJhYSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJsb3dlclRleHQiLCJzZXRMb3dlclRleHQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJjb2xvciIsInNldENvbG9yIiwiZm9udCIsInNldEZvbnQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiY2FudmFzIiwiY3VycmVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dG8iLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZmlsbFRleHQiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJsaW5lV2lkdGgiLCJzcmMiLCJvbkRyb3AiLCJzZWxlY3RlZEZpbGVzIiwibWFwIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJlIiwidXBsb2FkSW1hZ2VzIiwiU3RyaW5nIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdPLElBQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFDbkUsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUF4Qjs7QUFEbUUsa0JBRWpDQyxzREFBUSxDQUFDLEVBQUQsQ0FGeUI7QUFBQSxNQUU1REMsU0FGNEQ7QUFBQSxNQUVqREMsWUFGaUQ7O0FBQUEsbUJBR2pDRixzREFBUSxDQUFDLEVBQUQsQ0FIeUI7QUFB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ckJELGtCQUFZLEVBQVpBLFlBSnFCO0FBS3JCRSxrQkFBWSxFQUFaQSxZQUxxQjtBQU1yQnlCLFlBQU0sRUFBTkEsTUFOcUI7QUFPckJ4QixZQUFNLEVBQU5BLE1BUHFCO0FBUXJCRyxjQUFRLEVBQVJBO0FBUnFCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXUVgsUUFYUixDQURKO0FBZ0JILENBN0RNOztHQUFNRCxlOztLQUFBQSxlIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTU0xfT1BfRE9OVF9JTlNFUlRfRU1QVFlfRlJBR01FTlRTIH0gZnJvbSBcImNvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0RGF0YSwgQ29udGV4dFByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW3VwcGVyVGV4dCwgc2V0VXBwZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb3dlclRleHQsIHNldExvd2VyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCd3aGl0ZScpO1xuICAgIGNvbnN0IFtmb250LCBzZXRGb250XSA9IHVzZVN0YXRlKCdJbXBhY3QnKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSA1MDA7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0byA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgNTAwLCA1MDApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZpbGxUZXh0KHVwcGVyVGV4dCwgNTAsIDYwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5mb250ID0gYDI1cHQgJHtmb250fWA7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uZmlsbFN0eWxlID0gYCR7Y29sb3J9YDtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5zdHJva2VUZXh0KHVwcGVyVGV4dCwgNTAsIDYwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5maWxsVGV4dCh1cHBlclRleHQsIDUwLCA2MCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uc3Ryb2tlVGV4dChsb3dlclRleHQsIDUwLCA0NDApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZpbGxUZXh0KGxvd2VyVGV4dCwgNTAsIDQ0MCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8ubGluZVdpZHRoID0gMjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VzWzBdO1xuICAgICAgICB9XG4gICAgfSwgW2ltYWdlcywgdXBwZXJUZXh0LCBsb3dlclRleHQsIGNvbG9yLCBmb250XSlcblxuICAgIGNvbnN0IG9uRHJvcCA9IChzZWxlY3RlZEZpbGVzOiBGaWxlW10pID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZXMgJiYgc2VsZWN0ZWRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkSW1hZ2VzID0gW1N0cmluZyhlLnRhcmdldC5yZXN1bHQpLCAuLi5pbWFnZXNdO1xuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXModXBsb2FkSW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIGNhbnZhc1JlZixcbiAgICAgICAgICAgIHVwcGVyVGV4dCxcbiAgICAgICAgICAgIGxvd2VyVGV4dCxcbiAgICAgICAgICAgIHNldFVwcGVyVGV4dCxcbiAgICAgICAgICAgIHNldExvd2VyVGV4dCxcbiAgICAgICAgICAgIG9uRHJvcCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgICAgIHNldENvbG9yLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ })

})