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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nconst ContextProvider = ({\n  children\n}) => {\n  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const {\n    0: upperText,\n    1: setUpperText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: lowerText,\n    1: setLowerText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: images,\n    1: setImages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (images && images.length > 0) {\n      const image = new Image();\n\n      image.onload = () => {\n        const canvas = canvasRef.current;\n        canvas.width = 500;\n        canvas.height = 500;\n        const contexto = canvas.getContext('2d');\n        contexto.drawImage(image, 0, 0);\n      };\n\n      image.src = images[0];\n    }\n  }, [images]);\n\n  const onDrop = selectedFiles => {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(file => {\n        const reader = new FileReader();\n\n        reader.onload = e => {\n          const uploadImages = [String(e.target.result), ...images];\n          setImages(uploadImages);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef,\n      upperText,\n      lowerText,\n      setUpperText,\n      setLowerText,\n      onDrop,\n      images\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeD8wYmFhIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJ1c2VTdGF0ZSIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsImltYWdlcyIsInNldEltYWdlcyIsInVzZUVmZmVjdCIsImxlbmd0aCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJjYW52YXMiLCJjdXJyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0byIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJzcmMiLCJvbkRyb3AiLCJzZWxlY3RlZEZpbGVzIiwibWFwIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJlIiwidXBsb2FkSW1hZ2VzIiwiU3RyaW5nIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUdPLE1BQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXdDO0FBQ25FLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFXLEVBQVgsQ0FBcEM7QUFFQUsseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUYsTUFBTSxJQUFJQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUM7QUFDN0IsWUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDs7QUFDQUQsV0FBSyxDQUFDRSxNQUFOLEdBQWUsTUFBTTtBQUNqQixjQUFNQyxNQUFNLEdBQUdkLFNBQVMsQ0FBQ2UsT0FBekI7QUFDQUQsY0FBTSxDQUFDRSxLQUFQLEdBQWUsR0FBZjtBQUNBRixjQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxjQUFNQyxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFqQjtBQUNBRCxnQkFBUSxDQUFDRSxTQUFULENBQW1CVCxLQUFuQixFQUEwQixDQUExQixFQUE2QixDQUE3QjtBQUNILE9BTkQ7O0FBT0FBLFdBQUssQ0FBQ1UsR0FBTixHQUFZZCxNQUFNLENBQUMsQ0FBRCxDQUFsQjtBQUNIO0FBQ0osR0FaUSxFQVlOLENBQUNBLE1BQUQsQ0FaTSxDQUFUOztBQWNBLFFBQU1lLE1BQU0sR0FBSUMsYUFBRCxJQUEyQjtBQUN0QyxRQUFJQSxhQUFhLElBQUlBLGFBQWEsQ0FBQ2IsTUFBbkMsRUFBMkM7QUFDdkNhLG1CQUFhLENBQUNDLEdBQWQsQ0FBbUJDLElBQUQsSUFBVTtBQUN4QixjQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztBQUNBRCxjQUFNLENBQUNiLE1BQVAsR0FBaUJlLENBQUQsSUFBTztBQUNuQixnQkFBTUMsWUFBWSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLE1BQVYsQ0FBUCxFQUEwQixHQUFHekIsTUFBN0IsQ0FBckI7QUFDQUMsbUJBQVMsQ0FBQ3FCLFlBQUQsQ0FBVDtBQUNILFNBSEQ7O0FBSUFILGNBQU0sQ0FBQ08sYUFBUCxDQUFxQlIsSUFBckI7QUFDSCxPQVBEO0FBUUg7QUFDSixHQVhEOztBQWFBLFNBQ0ksTUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUU7QUFDckJ6QixlQURxQjtBQUVyQkUsZUFGcUI7QUFHckJHLGVBSHFCO0FBSXJCRixrQkFKcUI7QUFLckJHLGtCQUxxQjtBQU1yQmdCLFlBTnFCO0FBT3JCZjtBQVBxQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVVFSLFFBVlIsQ0FESjtBQWVILENBaERNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTU0xfT1BfRE9OVF9JTlNFUlRfRU1QVFlfRlJBR01FTlRTIH0gZnJvbSBcImNvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0RGF0YSwgQ29udGV4dFByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW3VwcGVyVGV4dCwgc2V0VXBwZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb3dlclRleHQsIHNldExvd2VyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gNTAwO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dG8gPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VzWzBdO1xuICAgICAgICB9XG4gICAgfSwgW2ltYWdlc10pXG5cbiAgICBjb25zdCBvbkRyb3AgPSAoc2VsZWN0ZWRGaWxlczogRmlsZVtdKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZpbGVzICYmIHNlbGVjdGVkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZEltYWdlcyA9IFtTdHJpbmcoZS50YXJnZXQucmVzdWx0KSwgLi4uaW1hZ2VzXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKHVwbG9hZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBjYW52YXNSZWYsXG4gICAgICAgICAgICB1cHBlclRleHQsXG4gICAgICAgICAgICBsb3dlclRleHQsXG4gICAgICAgICAgICBzZXRVcHBlclRleHQsXG4gICAgICAgICAgICBzZXRMb3dlclRleHQsXG4gICAgICAgICAgICBvbkRyb3AsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"react-dropzone\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst Home = () => {\n  const {\n    canvasRef,\n    lowerText,\n    setLowerText,\n    setUpperText,\n    upperText,\n    onDrop,\n    images\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]);\n  const {\n    getRootProps,\n    getInputProps\n  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])({\n    onDrop,\n    accept: ['image/*']\n  });\n  const {\n    0: name\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: 'Meme Generator',\n    description: 'Meme Generator or editing.'\n  });\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Meme Generator\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, name.title), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, name.description), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", _extends({}, getRootProps(), {\n    style: {\n      background: '#666',\n      borderRadius: 10\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Canvas\"], {\n    ref: canvasRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \" \"), __jsx(\"input\", _extends({}, getInputProps(), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }))), __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"DivInput\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n    htmlFor: \"upperText\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    value: upperText,\n    onChange: e => setUpperText(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"DivInput\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n    htmlFor: \"lowerText\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"Description\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    value: lowerText,\n    onChange: e => setLowerText(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsImNhbnZhc1JlZiIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsInNldFVwcGVyVGV4dCIsInVwcGVyVGV4dCIsIm9uRHJvcCIsImltYWdlcyIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInVzZURyb3B6b25lIiwiYWNjZXB0IiwibmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFTQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNO0FBQ0pDLGFBREk7QUFFSkMsYUFGSTtBQUdKQyxnQkFISTtBQUlKQyxnQkFKSTtBQUtKQyxhQUxJO0FBTUpDLFVBTkk7QUFPSkM7QUFQSSxNQVFGQyx3REFBVSxDQUFDQyx3REFBRCxDQVJkO0FBU0EsUUFBTTtBQUFFQyxnQkFBRjtBQUFnQkM7QUFBaEIsTUFBa0NDLGtFQUFXLENBQUM7QUFBRU4sVUFBRjtBQUFVTyxVQUFNLEVBQUUsQ0FBQyxTQUFEO0FBQWxCLEdBQUQsQ0FBbkQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0M7QUFBRCxNQUFTQyxzREFBUSxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsZ0JBRGU7QUFFdEJDLGVBQVcsRUFBRTtBQUZTLEdBQUQsQ0FBdkI7QUFJQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCxJQUFJLENBQUNFLEtBQWIsQ0FMRixFQU1FLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjRixJQUFJLENBQUNHLFdBQW5CLENBTkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMEJBQ01QLFlBQVksRUFEbEI7QUFFRSxTQUFLLEVBQUU7QUFBRVEsZ0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxrQkFBWSxFQUFFO0FBQXBDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlFLE1BQUMseURBQUQ7QUFBUSxPQUFHLEVBQUVsQixTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRixFQUtFLDRCQUFXVSxhQUFhLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixDQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFTixTQURUO0FBRUUsWUFBUSxFQUFHZSxDQUFELElBQU9oQixZQUFZLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRXBCLFNBRFQ7QUFFRSxZQUFRLEVBQUdrQixDQUFELElBQU9qQixZQUFZLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixDQVZGLENBUkYsQ0FERjtBQXVDRCxDQXRERDs7QUF3RGV0QixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgVGl0bGUsXG4gIERlc2NyaXB0aW9uLFxuICBJbnB1dCxcbiAgTGFiZWwsXG4gIERpdklucHV0LFxuICBDYW52YXNcbn0gZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Db250ZXh0J1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGNhbnZhc1JlZixcbiAgICBsb3dlclRleHQsXG4gICAgc2V0TG93ZXJUZXh0LFxuICAgIHNldFVwcGVyVGV4dCxcbiAgICB1cHBlclRleHQsXG4gICAgb25Ecm9wLFxuICAgIGltYWdlc1xuICB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoeyBvbkRyb3AsIGFjY2VwdDogWydpbWFnZS8qJ10gfSlcbiAgY29uc3QgW25hbWVdID0gdXNlU3RhdGUoe1xuICAgIHRpdGxlOiAnTWVtZSBHZW5lcmF0b3InLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVtZSBHZW5lcmF0b3Igb3IgZWRpdGluZy4nXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWVtZSBHZW5lcmF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGl0bGU+e25hbWUudGl0bGV9PC9UaXRsZT5cbiAgICAgIDxEZXNjcmlwdGlvbj57bmFtZS5kZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoKX1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzY2NicsIGJvcmRlclJhZGl1czogMTAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYW52YXMgcmVmPXtjYW52YXNSZWZ9PiA8L0NhbnZhcz5cbiAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZXNbMF19IGFsdD1cIlwiIC8+ICovfVxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8RGl2SW5wdXQ+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInVwcGVyVGV4dFwiPlRpdGxlPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dXBwZXJUZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVwcGVyVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGl2SW5wdXQ+XG4gICAgICAgICAgPERpdklucHV0PlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJsb3dlclRleHRcIj5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2xvd2VyVGV4dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb3dlclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpdklucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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