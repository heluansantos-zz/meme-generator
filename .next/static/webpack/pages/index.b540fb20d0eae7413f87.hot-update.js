webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]),\n      canvasRef = _useContext.canvasRef,\n      lowerText = _useContext.lowerText,\n      setLowerText = _useContext.setLowerText,\n      setUpperText = _useContext.setUpperText,\n      upperText = _useContext.upperText;\n\n  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"])({}),\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: 'Meme Generator',\n    description: 'Meme Generator or editing.'\n  }),\n      name = _useState[0];\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Meme Generator\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, name.title), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, name.description), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getRootProps, {\n    ref: canvasRef,\n    style: {\n      background: 'red'\n    },\n    onClick: function onClick() {\n      alert(canvasRef.current);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getInputProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }))), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"upperText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: upperText,\n    onChange: function onChange(e) {\n      return setUpperText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"lowerText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: lowerText,\n    onChange: function onChange(e) {\n      return setLowerText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Home, \"ts0/uQe/GQU4AmRV0EsdCTAl9VM=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImNhbnZhc1JlZiIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsInNldFVwcGVyVGV4dCIsInVwcGVyVGV4dCIsInVzZURyb3B6b25lIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJiYWNrZ3JvdW5kIiwiYWxlcnQiLCJjdXJyZW50IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxvQkFPdkJDLHdEQUFVLENBQUNDLHdEQUFELENBUGE7QUFBQSxNQUV6QkMsU0FGeUIsZUFFekJBLFNBRnlCO0FBQUEsTUFHekJDLFNBSHlCLGVBR3pCQSxTQUh5QjtBQUFBLE1BSXpCQyxZQUp5QixlQUl6QkEsWUFKeUI7QUFBQSxNQUt6QkMsWUFMeUIsZUFLekJBLFlBTHlCO0FBQUEsTUFNekJDLFNBTnlCLGVBTXpCQSxTQU55Qjs7QUFBQSxxQkFRV0Msa0VBQVcsQ0FBQyxFQUFELENBUnRCO0FBQUEsTUFRcEJDLFlBUm9CLGdCQVFwQkEsWUFSb0I7QUFBQSxNQVFOQyxhQVJNLGdCQVFOQSxhQVJNOztBQUFBLGtCQVNaQyxzREFBUSxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsZ0JBRGU7QUFFdEJDLGVBQVcsRUFBRTtBQUZTLEdBQUQsQ0FUSTtBQUFBLE1BU3BCQyxJQVRvQjs7QUFhM0IsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsSUFBSSxDQUFDRixLQUFiLENBTEYsRUFNRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0UsSUFBSSxDQUFDRCxXQUFuQixDQU5GLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHVHQUNJSixZQURKO0FBRUEsT0FBRyxFQUFFTixTQUZMO0FBR0EsU0FBSyxFQUFFO0FBQUNZLGdCQUFVLEVBQUU7QUFBYixLQUhQO0FBSUEsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLFdBQUssQ0FBQ2IsU0FBUyxDQUFDYyxPQUFYLENBQUw7QUFDRCxLQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRSSxzR0FBV1AsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkosQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRUgsU0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGFBQU9aLFlBQVksQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFPLFdBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFaEIsU0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGFBQU9iLFlBQVksQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLENBWEYsQ0FSRixDQURGO0FBd0NELENBckREOztHQUFNcEIsSTtVQVFrQ1EsMEQ7OztLQVJsQ1IsSTtBQXVEU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZURyb3B6b25lfSBmcm9tICdyZWFjdC1kcm9wem9uZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBUaXRsZSwgRGVzY3JpcHRpb24sIElucHV0LCBMYWJlbCwgRGl2SW5wdXQgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRleHQnXG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IFxuICAgIGNhbnZhc1JlZiwgXG4gICAgbG93ZXJUZXh0LCBcbiAgICBzZXRMb3dlclRleHQsIFxuICAgIHNldFVwcGVyVGV4dCwgXG4gICAgdXBwZXJUZXh0IFxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzfSA9IHVzZURyb3B6b25lKHt9KVxuICBjb25zdCBbbmFtZV0gPSB1c2VTdGF0ZSh7XG4gICAgdGl0bGU6ICdNZW1lIEdlbmVyYXRvcicsXG4gICAgZGVzY3JpcHRpb246ICdNZW1lIEdlbmVyYXRvciBvciBlZGl0aW5nLidcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NZW1lIEdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaXRsZT57bmFtZS50aXRsZX08L1RpdGxlPlxuICAgICAgPERlc2NyaXB0aW9uPntuYW1lLmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb24+XG4gIFxuICAgICAgPG1haW4+XG4gICAgICAgIDxjYW52YXMgXG4gICAgICAgIHsuLi5nZXRSb290UHJvcHN9IFxuICAgICAgICByZWY9e2NhbnZhc1JlZn0gXG4gICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogJ3JlZCd9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoY2FudmFzUmVmLmN1cnJlbnQpO1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHN9IC8+XG4gICAgICAgIDwvY2FudmFzPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8RGl2SW5wdXQ+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInVwcGVyVGV4dFwiPlRpdGxlPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgdmFsdWU9e3VwcGVyVGV4dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcHBlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpdklucHV0PlxuICAgICAgICAgIDxEaXZJbnB1dD5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxvd2VyVGV4dFwiPkRlc2NyaXB0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgdmFsdWU9e2xvd2VyVGV4dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb3dlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpdklucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgXG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})