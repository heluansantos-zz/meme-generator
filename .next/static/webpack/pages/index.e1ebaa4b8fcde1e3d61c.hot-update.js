webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]),\n      canvasRef = _useContext.canvasRef,\n      lowerText = _useContext.lowerText,\n      setLowerText = _useContext.setLowerText,\n      setUpperText = _useContext.setUpperText,\n      upperText = _useContext.upperText;\n\n  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"])({}),\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: 'Meme Generator',\n    description: 'Meme Generator or editing.'\n  }),\n      name = _useState[0];\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Meme Generator\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, name.title), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, name.description), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getRootProps, {\n    ref: canvasRef,\n    style: {\n      background: 'red',\n      padding: 10\n    },\n    onClick: function onClick() {\n      alert(canvasRef.current);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getInputProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }))), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"upperText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: upperText,\n    onChange: function onChange(e) {\n      return setUpperText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"lowerText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Description\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: lowerText,\n    onChange: function onChange(e) {\n      return setLowerText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Home, \"qc+L+ryUlbVbuNe5ayjCKfkL+4Q=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImNhbnZhc1JlZiIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsInNldFVwcGVyVGV4dCIsInVwcGVyVGV4dCIsInVzZURyb3B6b25lIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImFsZXJ0IiwiY3VycmVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7O0FBRUEsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUEsb0JBT3ZCQyx3REFBVSxDQUFDQyx3REFBRCxDQVBhO0FBQUEsTUFFekJDLFNBRnlCLGVBRXpCQSxTQUZ5QjtBQUFBLE1BR3pCQyxTQUh5QixlQUd6QkEsU0FIeUI7QUFBQSxNQUl6QkMsWUFKeUIsZUFJekJBLFlBSnlCO0FBQUEsTUFLekJDLFlBTHlCLGVBS3pCQSxZQUx5QjtBQUFBLE1BTXpCQyxTQU55QixlQU16QkEsU0FOeUI7O0FBQUEscUJBUWFDLGtFQUFXLENBQUMsRUFBRCxDQVJ4QjtBQUFBLE1BUW5CQyxZQVJtQixnQkFRbkJBLFlBUm1CO0FBQUEsTUFRTEMsYUFSSyxnQkFRTEEsYUFSSzs7QUFBQSxrQkFTWkMsc0RBQVEsQ0FBQztBQUN0QkMsU0FBSyxFQUFFLGdCQURlO0FBRXRCQyxlQUFXLEVBQUU7QUFGUyxHQUFELENBVEk7QUFBQSxNQVNwQkMsSUFUb0I7O0FBYTNCLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLElBQUksQ0FBQ0YsS0FBYixDQUxGLEVBTUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWNFLElBQUksQ0FBQ0QsV0FBbkIsQ0FORixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSx1R0FDTUosWUFETjtBQUVFLE9BQUcsRUFBRU4sU0FGUDtBQUdFLFNBQUssRUFBRTtBQUFFWSxnQkFBVSxFQUFFLEtBQWQ7QUFBcUJDLGFBQU8sRUFBRTtBQUE5QixLQUhUO0FBSUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLFdBQUssQ0FBQ2QsU0FBUyxDQUFDZSxPQUFYLENBQUw7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRSxzR0FBV1IsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRUgsU0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU9iLFlBQVksQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFPLFdBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFakIsU0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLGFBQU9kLFlBQVksQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLENBWEYsQ0FSRixDQURGO0FBd0NELENBckREOztHQUFNckIsSTtVQVFvQ1EsMEQ7OztLQVJwQ1IsSTtBQXVEU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFRpdGxlLFxuICBEZXNjcmlwdGlvbixcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBEaXZJbnB1dFxufSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRleHQnXG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY2FudmFzUmVmLFxuICAgIGxvd2VyVGV4dCxcbiAgICBzZXRMb3dlclRleHQsXG4gICAgc2V0VXBwZXJUZXh0LFxuICAgIHVwcGVyVGV4dFxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoe30pXG4gIGNvbnN0IFtuYW1lXSA9IHVzZVN0YXRlKHtcbiAgICB0aXRsZTogJ01lbWUgR2VuZXJhdG9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ01lbWUgR2VuZXJhdG9yIG9yIGVkaXRpbmcuJ1xuICB9KVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1lbWUgR2VuZXJhdG9yPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPntuYW1lLnRpdGxlfTwvVGl0bGU+XG4gICAgICA8RGVzY3JpcHRpb24+e25hbWUuZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzfVxuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZWQnLCBwYWRkaW5nOiAxMCB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGNhbnZhc1JlZi5jdXJyZW50KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzfSAvPlxuICAgICAgICA8L2NhbnZhcz5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPERpdklucHV0PlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1cHBlclRleHRcIj5UaXRsZTwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3VwcGVyVGV4dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcHBlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpdklucHV0PlxuICAgICAgICAgIDxEaXZJbnB1dD5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibG93ZXJUZXh0XCI+RGVzY3JpcHRpb248L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtsb3dlclRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG93ZXJUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaXZJbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuXG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})