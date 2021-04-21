webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, Title, Description, Input, Label, DivInput, Canvas, DivCanvas, DragActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivInput\", function() { return DivInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivCanvas\", function() { return DivCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragActive\", function() { return DragActive; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:100vh;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"Home__Title\",\n  componentId: \"heizgz-1\"\n})([\"font-size:54px;color:\", \";margin-top:40px;font-family:'Zen Dots'\"], function (props) {\n  return props.theme.colors.primary;\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"Home__Description\",\n  componentId: \"heizgz-2\"\n})([\"margin-top:24px;font-size:24px;line-height:32px;\"]);\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.attrs({\n  id: \"upperText\",\n  name: \"upperText\"\n}).withConfig({\n  displayName: \"Home__Input\",\n  componentId: \"heizgz-3\"\n})([\"margin:4px;font-size:24px;line-height:32px;border-radius:10px;\"]);\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label.withConfig({\n  displayName: \"Home__Label\",\n  componentId: \"heizgz-4\"\n})([\"color:#ddd;align-self:center;\"]);\nvar DivInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivInput\",\n  componentId: \"heizgz-5\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;\"]);\nvar Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.withConfig({\n  displayName: \"Home__Canvas\",\n  componentId: \"heizgz-6\"\n})([\"background:#666;margin:10px;width:500px;height:300px;border-radius:10px;\"]);\nvar DivCanvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivCanvas\",\n  componentId: \"heizgz-7\"\n})([\"\"]);\nvar DragActive = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DragActive\",\n  componentId: \"heizgz-8\"\n})([\"background:#ff6600;margin:10px;width:500px;height:300px;border-radius:10px;text-align:center;color:#333;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGUiLCJoMSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiRGVzY3JpcHRpb24iLCJwIiwiSW5wdXQiLCJpbnB1dCIsImF0dHJzIiwiaWQiLCJuYW1lIiwiTGFiZWwiLCJsYWJlbCIsIkRpdklucHV0IiwiQ2FudmFzIiwiY2FudmFzIiwiRGl2Q2FudmFzIiwiRHJhZ0FjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtIQUFmO0FBVUEsSUFBTUMsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUVQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBdkI7QUFBQSxDQUZFLENBQVg7QUFPQSxJQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsd0RBQWpCO0FBTUEsSUFBTUMsS0FBSyxHQUFHVix5REFBTSxDQUFDVyxLQUFQLENBQWFDLEtBQWIsQ0FBbUI7QUFDdENDLElBQUUsRUFBRSxXQURrQztBQUV0Q0MsTUFBSSxFQUFFO0FBRmdDLENBQW5CLENBQUg7QUFBQTtBQUFBO0FBQUEsc0VBQVg7QUFVQSxJQUFNQyxLQUFLLEdBQUdmLHlEQUFNLENBQUNnQixLQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFYO0FBS0EsSUFBTUMsUUFBUSxHQUFHakIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5RUFBZDtBQU1BLElBQU1pQixNQUFNLEdBQUdsQix5REFBTSxDQUFDbUIsTUFBVjtBQUFBO0FBQUE7QUFBQSxnRkFBWjtBQVFBLElBQU1DLFNBQVMsR0FBR3BCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBZjtBQUlBLElBQU1vQixVQUFVLEdBQUdyQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdIQUFoQiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LWZhbWlseTogJ1plbiBEb3RzJ1xuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDsgIFxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQuYXR0cnMoe1xuICBpZDogXCJ1cHBlclRleHRcIixcbiAgbmFtZTogXCJ1cHBlclRleHRcIixcbn0pYFxuICBtYXJnaW46IDRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDsgIFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAjZGRkOyAgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IERpdklucHV0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5leHBvcnQgY29uc3QgQ2FudmFzID0gc3R5bGVkLmNhbnZhc2BcbiAgYmFja2dyb3VuZDogIzY2NjtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBEaXZDYW52YXMgPSBzdHlsZWQuZGl2YFxuICBcbmBcblxuZXhwb3J0IGNvbnN0IERyYWdBY3RpdmUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})