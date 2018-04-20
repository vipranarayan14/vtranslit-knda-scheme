window["vTranslitKndaScheme"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitKndaScheme = exports.vTranslitKndaScheme = {
  'about': {
    'schemeCode': 'Knda',
    'schemeName': 'Kannada',
    'type': 'brahmic'
  },
  'data': {
    'ayogavaha': ['\u0C82', '\u0C83'],
    'consonants': ['\u0C95', '\u0C96', '\u0C97', '\u0C98', '\u0C99', '\u0C9A', '\u0C9B', '\u0C9C', '\u0C9D', '\u0C9E', '\u0C9F', '\u0CA0', '\u0CA1', '\u0CA2', '\u0CA3', '\u0CA4', '\u0CA5', '\u0CA6', '\u0CA7', '\u0CA8', '', '\u0CAA', '\u0CAB', '\u0CAC', '\u0CAD', '\u0CAE', '\u0CAF', '\u0CB0', '\u0CB1', '\u0CB2', '\u0CB3', '', '\u0CB5', '\u0CB6', '\u0CB7', '\u0CB8', '\u0CB9'],
    'deadConsonants': ['\u0C95\u0CCD', '\u0C96\u0CCD', '\u0C97\u0CCD', '\u0C98\u0CCD', '\u0C99\u0CCD', '\u0C9A\u0CCD', '\u0C9B\u0CCD', '\u0C9C\u0CCD', '\u0C9D\u0CCD', '\u0C9E\u0CCD', '\u0C9F\u0CCD', '\u0CA0\u0CCD', '\u0CA1\u0CCD', '\u0CA2\u0CCD', '\u0CA3\u0CCD', '\u0CA4\u0CCD', '\u0CA5\u0CCD', '\u0CA6\u0CCD', '\u0CA7\u0CCD', '\u0CA8\u0CCD', '', '\u0CAA\u0CCD', '\u0CAB\u0CCD', '\u0CAC\u0CCD', '\u0CAD\u0CCD', '\u0CAE\u0CCD', '\u0CAF\u0CCD', '\u0CB0\u0CCD', '\u0CB1\u0CCD', '\u0CB2\u0CCD', '\u0CB3\u0CCD', '', '\u0CB5\u0CCD', '\u0CB6\u0CCD', '\u0CB7\u0CCD', '\u0CB8\u0CCD', '\u0CB9\u0CCD'],
    'symbols': ['\u0CE6', '\u0CE7', '\u0CE8', '\u0CE9', '\u0CEA', '\u0CEB', '\u0CEC', '\u0CED', '\u0CEE', '\u0CEF', '\u0964', '\u0965', '', '\u0CBD', '\u0C81'],
    'vowelMarks': ['', '\u0CBE', '\u0CBF', '\u0CC0', '\u0CC1', '\u0CC2', '\u0CC3', '\u0CC4', '', '', '\u0CC6', '\u0CC7', '\u0CC8', '\u0CCA', '\u0CCB', '\u0CCC'],
    'vowels': ['\u0C85', '\u0C86', '\u0C87', '\u0C88', '\u0C89', '\u0C8A', '\u0C8B', '', '\u0C8C', '', '\u0C8E', '\u0C8F', '\u0C90', '\u0C92', '\u0C93', '\u0C94']
  }
};

/***/ })
/******/ ])["vTranslitKndaScheme"];