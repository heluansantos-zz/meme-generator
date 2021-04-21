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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextProvider\", function() { return ContextProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/context/Context.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nconst ContextProvider = ({\n  children\n}) => {\n  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const {\n    0: upperText,\n    1: setUpperText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: lowerText,\n    1: setLowerText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: images,\n    1: setImages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: color,\n    1: setColor\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('white');\n  const {\n    0: font,\n    1: setFont\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('Impact'); // Roboto, Zen Dots, Karantina\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (images && images.length > 0) {\n      const image = new Image();\n\n      image.onload = () => {\n        const canvas = canvasRef.current;\n        canvas.width = 500;\n        canvas.height = 500;\n        const contexto = canvas.getContext('2d');\n        contexto.drawImage(image, 0, 0, 500, 500);\n        contexto.fillText(upperText, 50, 60);\n        contexto.font = `25pt ${font}`;\n        contexto.fillStyle = `${color}`;\n        contexto.strokeStyle = \"black\";\n        contexto.strokeText(upperText, 50, 60);\n        contexto.fillText(upperText, 50, 60);\n        contexto.strokeText(lowerText, 50, 440);\n        contexto.fillText(lowerText, 50, 440);\n        contexto.lineWidth = 2;\n      };\n\n      image.src = images[0];\n    }\n  }, [images, upperText, lowerText, color, font]);\n\n  const seletcFont = selectedFont => {\n    setFont(selectedFont);\n  };\n\n  const seletcColor = selectedColor => {\n    setColor(selectedColor);\n  };\n\n  const onDrop = selectedFiles => {\n    if (selectedFiles && selectedFiles.length) {\n      selectedFiles.map(file => {\n        const reader = new FileReader();\n\n        reader.onload = e => {\n          const uploadImages = [String(e.target.result), ...images];\n          setImages(uploadImages);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    }\n  };\n\n  return __jsx(Context.Provider, {\n    value: {\n      canvasRef,\n      upperText,\n      lowerText,\n      setUpperText,\n      setLowerText,\n      onDrop,\n      images,\n      seletcFont,\n      seletcColor\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Db250ZXh0LnRzeD8wYmFhIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ1cHBlclRleHQiLCJzZXRVcHBlclRleHQiLCJ1c2VTdGF0ZSIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsImltYWdlcyIsInNldEltYWdlcyIsImNvbG9yIiwic2V0Q29sb3IiLCJmb250Iiwic2V0Rm9udCIsInVzZUVmZmVjdCIsImxlbmd0aCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJjYW52YXMiLCJjdXJyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0byIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJmaWxsVGV4dCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImxpbmVXaWR0aCIsInNyYyIsInNlbGV0Y0ZvbnQiLCJzZWxlY3RlZEZvbnQiLCJzZWxldGNDb2xvciIsInNlbGVjdGVkQ29sb3IiLCJvbkRyb3AiLCJzZWxlY3RlZEZpbGVzIiwibWFwIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJlIiwidXBsb2FkSW1hZ2VzIiwiU3RyaW5nIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUdPLE1BQU1BLE9BQU8sR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXdDO0FBQ25FLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFXLEVBQVgsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLHNEQUFRLENBQUMsT0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDTyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQlIsc0RBQVEsQ0FBQyxRQUFELENBQWhDLENBTm1FLENBT25FOztBQUVBUyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJTixNQUFNLElBQUlBLE1BQU0sQ0FBQ08sTUFBUCxHQUFnQixDQUE5QixFQUFpQztBQUM3QixZQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkOztBQUNBRCxXQUFLLENBQUNFLE1BQU4sR0FBZSxNQUFNO0FBQ2pCLGNBQU1DLE1BQU0sR0FBR2xCLFNBQVMsQ0FBQ21CLE9BQXpCO0FBQ0FELGNBQU0sQ0FBQ0UsS0FBUCxHQUFlLEdBQWY7QUFDQUYsY0FBTSxDQUFDRyxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsY0FBTUMsUUFBUSxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBakI7QUFDQUQsZ0JBQVEsQ0FBQ0UsU0FBVCxDQUFtQlQsS0FBbkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFDQU8sZ0JBQVEsQ0FBQ0csUUFBVCxDQUFrQnZCLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDO0FBQ0FvQixnQkFBUSxDQUFDWCxJQUFULEdBQWlCLFFBQU9BLElBQUssRUFBN0I7QUFDQVcsZ0JBQVEsQ0FBQ0ksU0FBVCxHQUFzQixHQUFFakIsS0FBTSxFQUE5QjtBQUNBYSxnQkFBUSxDQUFDSyxXQUFULEdBQXVCLE9BQXZCO0FBQ0FMLGdCQUFRLENBQUNNLFVBQVQsQ0FBb0IxQixTQUFwQixFQUErQixFQUEvQixFQUFtQyxFQUFuQztBQUNBb0IsZ0JBQVEsQ0FBQ0csUUFBVCxDQUFrQnZCLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDO0FBQ0FvQixnQkFBUSxDQUFDTSxVQUFULENBQW9CdkIsU0FBcEIsRUFBK0IsRUFBL0IsRUFBbUMsR0FBbkM7QUFDQWlCLGdCQUFRLENBQUNHLFFBQVQsQ0FBa0JwQixTQUFsQixFQUE2QixFQUE3QixFQUFpQyxHQUFqQztBQUNBaUIsZ0JBQVEsQ0FBQ08sU0FBVCxHQUFxQixDQUFyQjtBQUNILE9BZkQ7O0FBZ0JBZCxXQUFLLENBQUNlLEdBQU4sR0FBWXZCLE1BQU0sQ0FBQyxDQUFELENBQWxCO0FBQ0g7QUFDSixHQXJCUSxFQXFCTixDQUFDQSxNQUFELEVBQVNMLFNBQVQsRUFBb0JHLFNBQXBCLEVBQStCSSxLQUEvQixFQUFzQ0UsSUFBdEMsQ0FyQk0sQ0FBVDs7QUF1QkEsUUFBTW9CLFVBQVUsR0FBSUMsWUFBRCxJQUEwQjtBQUN6Q3BCLFdBQU8sQ0FBQ29CLFlBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUMsV0FBVyxHQUFJQyxhQUFELElBQTJCO0FBQzNDeEIsWUFBUSxDQUFDd0IsYUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUlDLGFBQUQsSUFBMkI7QUFDdEMsUUFBSUEsYUFBYSxJQUFJQSxhQUFhLENBQUN0QixNQUFuQyxFQUEyQztBQUN2Q3NCLG1CQUFhLENBQUNDLEdBQWQsQ0FBbUJDLElBQUQsSUFBVTtBQUN4QixjQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztBQUNBRCxjQUFNLENBQUN0QixNQUFQLEdBQWlCd0IsQ0FBRCxJQUFPO0FBQ25CLGdCQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsTUFBVixDQUFQLEVBQTBCLEdBQUd0QyxNQUE3QixDQUFyQjtBQUNBQyxtQkFBUyxDQUFDa0MsWUFBRCxDQUFUO0FBQ0gsU0FIRDs7QUFJQUgsY0FBTSxDQUFDTyxhQUFQLENBQXFCUixJQUFyQjtBQUNILE9BUEQ7QUFRSDtBQUNKLEdBWEQ7O0FBYUEsU0FDSSxNQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRTtBQUNyQnRDLGVBRHFCO0FBRXJCRSxlQUZxQjtBQUdyQkcsZUFIcUI7QUFJckJGLGtCQUpxQjtBQUtyQkcsa0JBTHFCO0FBTXJCNkIsWUFOcUI7QUFPckI1QixZQVBxQjtBQVFyQndCLGdCQVJxQjtBQVNyQkU7QUFUcUIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlRbEMsUUFaUixDQURKO0FBaUJILENBdEVNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTU0xfT1BfRE9OVF9JTlNFUlRfRU1QVFlfRlJBR01FTlRTIH0gZnJvbSBcImNvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0RGF0YSwgQ29udGV4dFByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW3VwcGVyVGV4dCwgc2V0VXBwZXJUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb3dlclRleHQsIHNldExvd2VyVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCd3aGl0ZScpO1xuICAgIGNvbnN0IFtmb250LCBzZXRGb250XSA9IHVzZVN0YXRlKCdJbXBhY3QnKVxuICAgIC8vIFJvYm90bywgWmVuIERvdHMsIEthcmFudGluYVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSA1MDA7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0byA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgNTAwLCA1MDApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZpbGxUZXh0KHVwcGVyVGV4dCwgNTAsIDYwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5mb250ID0gYDI1cHQgJHtmb250fWA7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uZmlsbFN0eWxlID0gYCR7Y29sb3J9YDtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5zdHJva2VUZXh0KHVwcGVyVGV4dCwgNTAsIDYwKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0by5maWxsVGV4dCh1cHBlclRleHQsIDUwLCA2MCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8uc3Ryb2tlVGV4dChsb3dlclRleHQsIDUwLCA0NDApO1xuICAgICAgICAgICAgICAgIGNvbnRleHRvLmZpbGxUZXh0KGxvd2VyVGV4dCwgNTAsIDQ0MCk7XG4gICAgICAgICAgICAgICAgY29udGV4dG8ubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlc1swXTtcbiAgICAgICAgfVxuICAgIH0sIFtpbWFnZXMsIHVwcGVyVGV4dCwgbG93ZXJUZXh0LCBjb2xvciwgZm9udF0pXG5cbiAgICBjb25zdCBzZWxldGNGb250ID0gKHNlbGVjdGVkRm9udDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvbnQoc2VsZWN0ZWRGb250KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxldGNDb2xvciA9IChzZWxlY3RlZENvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Q29sb3Ioc2VsZWN0ZWRDb2xvcik7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Ecm9wID0gKHNlbGVjdGVkRmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlcyAmJiBzZWxlY3RlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRJbWFnZXMgPSBbU3RyaW5nKGUudGFyZ2V0LnJlc3VsdCksIC4uLmltYWdlc107XG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyh1cGxvYWRJbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgY2FudmFzUmVmLFxuICAgICAgICAgICAgdXBwZXJUZXh0LFxuICAgICAgICAgICAgbG93ZXJUZXh0LFxuICAgICAgICAgICAgc2V0VXBwZXJUZXh0LFxuICAgICAgICAgICAgc2V0TG93ZXJUZXh0LFxuICAgICAgICAgICAgb25Ecm9wLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICAgICAgc2VsZXRjRm9udCxcbiAgICAgICAgICAgIHNlbGV0Y0NvbG9yLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/Context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\nvar _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_context_Context__WEBPACK_IMPORTED_MODULE_4__[\"ContextProvider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }))), __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUF5QixHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDOUQsU0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxxREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLEVBSUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFELENBVEQ7O0FBV2VGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Db250ZXh0J1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ${props => props.theme.colors.background};\n    color: ${props => props.theme.colors.text};\n    font: 400 16px Zen Dots, sans-serif;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxrSUFBa0I7Ozs7Ozs7O2tCQVFmQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxVQUFXO2FBQzVDSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxJQUFLOzs7Q0FUOUMiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIGZvbnQ6IDQwMCAxNnB4IFplbiBEb3RzLCBzYW5zLXNlcmlmO1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    background: '#333',\n    text: '#e1e1e6',\n    primary: '#8257e6'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFFBQU0sRUFBRTtBQUNOQyxjQUFVLEVBQUUsTUFETjtBQUVOQyxRQUFJLEVBQUUsU0FGQTtBQUdOQyxXQUFPLEVBQUU7QUFISDtBQURJLENBQWQ7QUFRZUosb0VBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJhY2tncm91bmQ6ICcjMzMzJyxcbiAgICB0ZXh0OiAnI2UxZTFlNicsXG4gICAgcHJpbWFyeTogJyM4MjU3ZTYnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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