webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ContextProvider = function ContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      upperText = _useState[0],\n      setUpperText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      lowerText = _useState2[0],\n      setLowerText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      images = _useState3[0],\n      setImages = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('white'),\n      color = _useState4[0],\n      setColor = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Impact'),\n      font = _useState5[0],\n      setFont = _useState5[1]; // Roboto, Zen Dots, Karantina\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (images && images.length > 0) {\n      var image = new Image();\n\n      image.onload = function () {\n        var canvas = canvasRef.current;\n        canvas.width = 500;\n        canvas.height = 500;\n        var contexto = canvas.getContext('2d');\n        contexto.drawImage(image, 0, 0, 500, 500);\n        contexto.fillText(upperText, 50, 60);\n        contexto.font = \"25pt \".concat(font);\n        contexto.fillStyle = \"\".concat(color);\n        contexto.strokeStyle = \"black\";\n        contexto.strokeText(upperText, 50, 60);\n        contexto.fillText(upperText, 50, 60);\n        contexto.strokeText(lowerText, 50, 440);\n        contexto.fillText(lowerText, 50, 440);\n        contexto.lineWidth = 2;\n      };\n\n      image.src = images[0];\n    }\n  }, [images, upperText, lowerText, color, font]);\n\n  var seletcFont = function seletcFont(selectedFont) {\n    setFont(selectedFont);\n  };\n\n  var seletcColor = function seletcColor(selectedColor) {\n    setColor(selectedColor);\n  };\n\n  var onDrop = function onDrop(selectedFiles) {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(function (file) {\n        var reader = new FileReader();\n\n        reader.onload = function (e) {\n          var uploadImages = [String(e.target.result)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(images));\n          setImages(uploadImages);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef: canvasRef,\n      upperText: upperText,\n      lowerText: lowerText,\n      setUpperText: setUpperText,\n      setLowerText: setLowerText,\n      onDrop: onDrop,\n      images: images,\n      seletcFont: seletcFont,\n      seletcColor: seletcColor\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_s(ContextProvider, \"0H22QZFp4wEdX2V/ELZSGgEkMdI=\");\n\n_c = ContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ29udGV4dC50c3g/MGJhYSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJsb3dlclRleHQiLCJzZXRMb3dlclRleHQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJjb2xvciIsInNldENvbG9yIiwiZm9udCIsInNldEZvbnQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiY2FudmFzIiwiY3VycmVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dG8iLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZmlsbFRleHQiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJsaW5lV2lkdGgiLCJzcmMiLCJzZWxldGNGb250Iiwic2VsZWN0ZWRGb250Iiwic2VsZXRjQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwib25Ecm9wIiwic2VsZWN0ZWRGaWxlcyIsIm1hcCIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZSIsInVwbG9hZEltYWdlcyIsIlN0cmluZyIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHTyxJQUFNQSxPQUFPLEdBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUE3QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBd0M7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQ25FLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7O0FBRG1FLGtCQUVqQ0Msc0RBQVEsQ0FBQyxFQUFELENBRnlCO0FBQUEsTUFFNURDLFNBRjRE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c0dBQWdDdEMsTUFBaEMsRUFBbEI7QUFDQUMsbUJBQVMsQ0FBQ2tDLFlBQUQsQ0FBVDtBQUNILFNBSEQ7O0FBSUFILGNBQU0sQ0FBQ08sYUFBUCxDQUFxQlIsSUFBckI7QUFDSCxPQVBEO0FBUUg7QUFDSixHQVhEOztBQWFBLFNBQ0ksTUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUU7QUFDckJ0QyxlQUFTLEVBQVRBLFNBRHFCO0FBRXJCRyxlQUFTLEVBQVRBLFNBRnFCO0FBR3JCRSxlQUFTLEVBQVRBLFNBSHFCO0FBSXJCRCxrQkFBWSxFQUFaQSxZQUpxQjtBQUtyQkUsa0JBQVksRUFBWkEsWUFMcUI7QUFNckI2QixZQUFNLEVBQU5BLE1BTnFCO0FBT3JCNUIsWUFBTSxFQUFOQSxNQVBxQjtBQVFyQndCLGdCQUFVLEVBQVZBLFVBUnFCO0FBU3JCRSxpQkFBVyxFQUFYQTtBQVRxQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWVFsQyxRQVpSLENBREo7QUFpQkgsQ0F0RU07O0dBQU1ELGU7O0tBQUFBLGUiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNTTF9PUF9ET05UX0lOU0VSVF9FTVBUWV9GUkFHTUVOVFMgfSBmcm9tIFwiY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHREYXRhLCBDb250ZXh0UHJvdmlkZXJQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IENvbnRleHRQcm92aWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbdXBwZXJUZXh0LCBzZXRVcHBlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvd2VyVGV4dCwgc2V0TG93ZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJ3doaXRlJyk7XG4gICAgY29uc3QgW2ZvbnQsIHNldEZvbnRdID0gdXNlU3RhdGUoJ0ltcGFjdCcpXG4gICAgLy8gUm9ib3RvLCBaZW4gRG90cywgS2FyYW50aW5hXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDUwMDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRvID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uZHJhd0ltYWdlKGltYWdlLCAwLCAwLCA1MDAsIDUwMCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uZmlsbFRleHQodXBwZXJUZXh0LCA1MCwgNjApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZvbnQgPSBgMjVwdCAke2ZvbnR9YDtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5maWxsU3R5bGUgPSBgJHtjb2xvcn1gO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLnN0cm9rZVRleHQodXBwZXJUZXh0LCA1MCwgNjApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZpbGxUZXh0KHVwcGVyVGV4dCwgNTAsIDYwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5zdHJva2VUZXh0KGxvd2VyVGV4dCwgNTAsIDQ0MCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uZmlsbFRleHQobG93ZXJUZXh0LCA1MCwgNDQwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VzWzBdO1xuICAgICAgICB9XG4gICAgfSwgW2ltYWdlcywgdXBwZXJUZXh0LCBsb3dlclRleHQsIGNvbG9yLCBmb250XSlcblxuICAgIGNvbnN0IHNlbGV0Y0ZvbnQgPSAoc2VsZWN0ZWRGb250OiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9udChzZWxlY3RlZEZvbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGV0Y0NvbG9yID0gKHNlbGVjdGVkQ29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRDb2xvcihzZWxlY3RlZENvbG9yKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyb3AgPSAoc2VsZWN0ZWRGaWxlczogRmlsZVtdKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZpbGVzICYmIHNlbGVjdGVkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZEltYWdlcyA9IFtTdHJpbmcoZS50YXJnZXQucmVzdWx0KSwgLi4uaW1hZ2VzXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKHVwbG9hZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBjYW52YXNSZWYsXG4gICAgICAgICAgICB1cHBlclRleHQsXG4gICAgICAgICAgICBsb3dlclRleHQsXG4gICAgICAgICAgICBzZXRVcHBlclRleHQsXG4gICAgICAgICAgICBzZXRMb3dlclRleHQsXG4gICAgICAgICAgICBvbkRyb3AsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgICAgICBzZWxldGNGb250LFxuICAgICAgICAgICAgc2VsZXRjQ29sb3IsXG4gICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ })

})