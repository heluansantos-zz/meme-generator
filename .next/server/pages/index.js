module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context/Context.tsx":
/*!*********************************!*\
  !*** ./src/context/Context.tsx ***!
  \*********************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nconst ContextProvider = ({\n  children\n}) => {\n  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const {\n    0: upperText,\n    1: setUpperText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: lowerText,\n    1: setLowerText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef,\n      upperText,\n      lowerText,\n      setUpperText,\n      setLowerText\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeD8wYmFhIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJ1c2VTdGF0ZSIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdPLE1BQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQXNDO0FBQ2pFLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBRUEsU0FDSSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRTtBQUNyQkosZUFEcUI7QUFFckJFLGVBRnFCO0FBR3JCRyxlQUhxQjtBQUlyQkYsa0JBSnFCO0FBS3JCRztBQUxxQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUlQLFFBUkosQ0FESjtBQWFILENBbEJNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0RGF0YSwgQ29udGV4dFByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufTogQ29udGV4dFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFt1cHBlclRleHQsIHNldFVwcGVyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbG93ZXJUZXh0LCBzZXRMb3dlclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgY2FudmFzUmVmLFxuICAgICAgICAgICAgdXBwZXJUZXh0LFxuICAgICAgICAgICAgbG93ZXJUZXh0LFxuICAgICAgICAgICAgc2V0VXBwZXJUZXh0LFxuICAgICAgICAgICAgc2V0TG93ZXJUZXh0XG4gICAgICAgIH19PlxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"react-dropzone\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst Home = () => {\n  const {\n    canvasRef,\n    lowerText,\n    setLowerText,\n    setUpperText,\n    upperText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]);\n  const {\n    getRootProps,\n    getInputProps\n  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])({});\n  const {\n    0: name\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: 'Meme Generator',\n    description: 'Meme Generator or editing.'\n  });\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Meme Generator\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, name.title), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, name.description), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Canvas\"], _extends({}, getRootProps, {\n    ref: canvasRef,\n    style: {\n      background: 'red',\n      margin: 10,\n      width: 400,\n      borderRadius: 10\n    },\n    onClick: () => {\n      alert(canvasRef.current);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", _extends({}, getInputProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }))), __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"DivInput\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n    htmlFor: \"upperText\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    value: upperText,\n    onChange: e => setUpperText(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"DivInput\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n    htmlFor: \"lowerText\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Description\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    value: lowerText,\n    onChange: e => setLowerText(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsImNhbnZhc1JlZiIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsInNldFVwcGVyVGV4dCIsInVwcGVyVGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInVzZURyb3B6b25lIiwibmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmQiLCJtYXJnaW4iLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImFsZXJ0IiwiY3VycmVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVNBOztBQUVBLE1BQU1BLElBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU07QUFDSkMsYUFESTtBQUVKQyxhQUZJO0FBR0pDLGdCQUhJO0FBSUpDLGdCQUpJO0FBS0pDO0FBTEksTUFNRkMsd0RBQVUsQ0FBQ0Msd0RBQUQsQ0FOZDtBQU9BLFFBQU07QUFBRUMsZ0JBQUY7QUFBZ0JDO0FBQWhCLE1BQWtDQyxrRUFBVyxDQUFDLEVBQUQsQ0FBbkQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0M7QUFBRCxNQUFTQyxzREFBUSxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsZ0JBRGU7QUFFdEJDLGVBQVcsRUFBRTtBQUZTLEdBQUQsQ0FBdkI7QUFJQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCxJQUFJLENBQUNFLEtBQWIsQ0FMRixFQU1FLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjRixJQUFJLENBQUNHLFdBQW5CLENBTkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRCxlQUNNTixZQUROO0FBRUUsT0FBRyxFQUFFUCxTQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVjLGdCQUFVLEVBQUUsS0FBZDtBQUFxQkMsWUFBTSxFQUFFLEVBQTdCO0FBQWlDQyxXQUFLLEVBQUUsR0FBeEM7QUFBNkNDLGtCQUFZLEVBQUU7QUFBM0QsS0FIVDtBQUlFLFdBQU8sRUFBRSxNQUFNO0FBQ2JDLFdBQUssQ0FBQ2xCLFNBQVMsQ0FBQ21CLE9BQVgsQ0FBTDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFFLDRCQUFXWCxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSRixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFSixTQURUO0FBRUUsWUFBUSxFQUFHZ0IsQ0FBRCxJQUFPakIsWUFBWSxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFRRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVyQixTQURUO0FBRUUsWUFBUSxFQUFHbUIsQ0FBRCxJQUFPbEIsWUFBWSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUkYsQ0FYRixDQVJGLENBREY7QUF3Q0QsQ0FyREQ7O0FBdURldkIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFRpdGxlLFxuICBEZXNjcmlwdGlvbixcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBEaXZJbnB1dCxcbiAgQ2FudmFzXG59IGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ29udGV4dCdcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjYW52YXNSZWYsXG4gICAgbG93ZXJUZXh0LFxuICAgIHNldExvd2VyVGV4dCxcbiAgICBzZXRVcHBlclRleHQsXG4gICAgdXBwZXJUZXh0XG4gIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7fSlcbiAgY29uc3QgW25hbWVdID0gdXNlU3RhdGUoe1xuICAgIHRpdGxlOiAnTWVtZSBHZW5lcmF0b3InLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVtZSBHZW5lcmF0b3Igb3IgZWRpdGluZy4nXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWVtZSBHZW5lcmF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGl0bGU+e25hbWUudGl0bGV9PC9UaXRsZT5cbiAgICAgIDxEZXNjcmlwdGlvbj57bmFtZS5kZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPENhbnZhc1xuICAgICAgICAgIHsuLi5nZXRSb290UHJvcHN9XG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JlZCcsIG1hcmdpbjogMTAsIHdpZHRoOiA0MDAsIGJvcmRlclJhZGl1czogMTAgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChjYW52YXNSZWYuY3VycmVudCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wc30gLz5cbiAgICAgICAgPC9DYW52YXM+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxEaXZJbnB1dD5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXBwZXJUZXh0XCI+VGl0bGU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt1cHBlclRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBwZXJUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaXZJbnB1dD5cbiAgICAgICAgICA8RGl2SW5wdXQ+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxvd2VyVGV4dFwiPkRlc2NyaXB0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17bG93ZXJUZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvd2VyVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGl2SW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, Title, Description, Input, Label, DivInput, Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivInput\", function() { return DivInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:100vh;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"Home__Title\",\n  componentId: \"heizgz-1\"\n})([\"font-size:54px;color:\", \";margin-top:40px;\"], props => props.theme.colors.primary);\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"Home__Description\",\n  componentId: \"heizgz-2\"\n})([\"margin-top:24px;font-size:24px;line-height:32px;\"]);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.attrs({\n  id: \"upperText\",\n  name: \"upperText\"\n}).withConfig({\n  displayName: \"Home__Input\",\n  componentId: \"heizgz-3\"\n})([\"margin:4px;font-size:24px;line-height:32px;border-radius:10px;\"]);\nconst Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({\n  displayName: \"Home__Label\",\n  componentId: \"heizgz-4\"\n})([\"color:#ddd;align-self:center;\"]);\nconst DivInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Home__DivInput\",\n  componentId: \"heizgz-5\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;\"]);\nconst Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.canvas.withConfig({\n  displayName: \"Home__Canvas\",\n  componentId: \"heizgz-6\"\n})([\"background:red;margin:10px;width:400px;border-radius:10px;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUudHM/YmY3NyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaXRsZSIsImgxIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJEZXNjcmlwdGlvbiIsInAiLCJJbnB1dCIsImlucHV0IiwiYXR0cnMiLCJpZCIsIm5hbWUiLCJMYWJlbCIsImxhYmVsIiwiRGl2SW5wdXQiLCJDYW52YXMiLCJjYW52YXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWY7QUFVQSxNQUFNQyxLQUFLLEdBQUdGLHdEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsbURBRVBDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BRnJCLENBQVg7QUFNQSxNQUFNQyxXQUFXLEdBQUdSLHdEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsd0RBQWpCO0FBTUEsTUFBTUMsS0FBSyxHQUFHVix3REFBTSxDQUFDVyxLQUFQLENBQWFDLEtBQWIsQ0FBbUI7QUFDdENDLElBQUUsRUFBRSxXQURrQztBQUV0Q0MsTUFBSSxFQUFFO0FBRmdDLENBQW5CLENBQUg7QUFBQTtBQUFBO0FBQUEsc0VBQVg7QUFVQSxNQUFNQyxLQUFLLEdBQUdmLHdEQUFNLENBQUNnQixLQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFYO0FBS0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5RUFBZDtBQU1BLE1BQU1pQixNQUFNLEdBQUdsQix3REFBTSxDQUFDbUIsTUFBVjtBQUFBO0FBQUE7QUFBQSxrRUFBWiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDsgIFxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQuYXR0cnMoe1xuICBpZDogXCJ1cHBlclRleHRcIixcbiAgbmFtZTogXCJ1cHBlclRleHRcIixcbn0pYFxuICBtYXJnaW46IDRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDsgIFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAjZGRkOyAgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IERpdklucHV0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5leHBvcnQgY29uc3QgQ2FudmFzID0gc3R5bGVkLmNhbnZhc2BcbiAgYmFja2dyb3VuZDogcmVkO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dropzone\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kcm9wem9uZVwiP2ZkZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZHJvcHpvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcm9wem9uZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dropzone\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });