webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, Title, Description, Input, Label, DivInput, Canvas, DivCanvas, DragActive, DragActiveTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivInput\", function() { return DivInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivCanvas\", function() { return DivCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragActive\", function() { return DragActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragActiveTitle\", function() { return DragActiveTitle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:100vh;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"Home__Title\",\n  componentId: \"heizgz-1\"\n})([\"font-size:54px;color:\", \";margin-top:40px;font-family:'Zen Dots'\"], function (props) {\n  return props.theme.colors.primary;\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"Home__Description\",\n  componentId: \"heizgz-2\"\n})([\"margin-top:24px;font-size:24px;line-height:32px;\"]);\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.attrs({\n  id: \"upperText\",\n  name: \"upperText\"\n}).withConfig({\n  displayName: \"Home__Input\",\n  componentId: \"heizgz-3\"\n})([\"margin:4px;font-size:24px;line-height:32px;border-radius:10px;\"]);\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label.withConfig({\n  displayName: \"Home__Label\",\n  componentId: \"heizgz-4\"\n})([\"color:#ddd;align-self:center;\"]);\nvar DivInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivInput\",\n  componentId: \"heizgz-5\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;\"]);\nvar Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.withConfig({\n  displayName: \"Home__Canvas\",\n  componentId: \"heizgz-6\"\n})([\"background:#666;margin:10px;width:500px;height:300px;border-radius:10px;\"]);\nvar DivCanvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivCanvas\",\n  componentId: \"heizgz-7\"\n})([\"\"]);\nvar DragActive = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DragActive\",\n  componentId: \"heizgz-8\"\n})([\"background:#ff6600;margin:10px;width:500px;height:300px;border-radius:10px;\"]);\nvar DragActiveTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DragActiveTitle\",\n  componentId: \"heizgz-9\"\n})([\"text-align:center;color:#333;justify-content:center;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGUiLCJoMSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiRGVzY3JpcHRpb24iLCJwIiwiSW5wdXQiLCJpbnB1dCIsImF0dHJzIiwiaWQiLCJuYW1lIiwiTGFiZWwiLCJsYWJlbCIsIkRpdklucHV0IiwiQ2FudmFzIiwiY2FudmFzIiwiRGl2Q2FudmFzIiwiRHJhZ0FjdGl2ZSIsIkRyYWdBY3RpdmVUaXRsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWY7QUFVQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBRVAsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUF2QjtBQUFBLENBRkUsQ0FBWDtBQU9BLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSx3REFBakI7QUFNQSxJQUFNQyxLQUFLLEdBQUdWLHlEQUFNLENBQUNXLEtBQVAsQ0FBYUMsS0FBYixDQUFtQjtBQUN0Q0MsSUFBRSxFQUFFLFdBRGtDO0FBRXRDQyxNQUFJLEVBQUU7QUFGZ0MsQ0FBbkIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxzRUFBWDtBQVVBLElBQU1DLEtBQUssR0FBR2YseURBQU0sQ0FBQ2dCLEtBQVY7QUFBQTtBQUFBO0FBQUEscUNBQVg7QUFLQSxJQUFNQyxRQUFRLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFkO0FBTUEsSUFBTWlCLE1BQU0sR0FBR2xCLHlEQUFNLENBQUNtQixNQUFWO0FBQUE7QUFBQTtBQUFBLGdGQUFaO0FBUUEsSUFBTUMsU0FBUyxHQUFHcEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBSUEsSUFBTW9CLFVBQVUsR0FBR3JCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUZBQWhCO0FBUUEsSUFBTXFCLGVBQWUsR0FBR3RCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNERBQXJCIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1NHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnWmVuIERvdHMnXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyAgXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dC5hdHRycyh7XG4gIGlkOiBcInVwcGVyVGV4dFwiLFxuICBuYW1lOiBcInVwcGVyVGV4dFwiLFxufSlgXG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyAgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6ICNkZGQ7ICBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRGl2SW5wdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxuICBiYWNrZ3JvdW5kOiAjNjY2O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbmBcblxuZXhwb3J0IGNvbnN0IERpdkNhbnZhcyA9IHN0eWxlZC5kaXZgXG4gIFxuYFxuXG5leHBvcnQgY29uc3QgRHJhZ0FjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRHJhZ0FjdGl2ZVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})