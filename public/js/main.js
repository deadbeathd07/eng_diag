/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const text = document.querySelector(\".top-lending__popup-text p\");\r\ntext.innerHTML = text.innerText\r\n  .split(\"\")\r\n  .map((letter, i) => {\r\n    if (i == 0 || i == 26) {\r\n      return `<span style=\"transform:rotate(${\r\n        i * 6.9\r\n      }deg\") ><img src=\"../img/popup-text-img.svg\"></span>\r\n              <span style=\"transform:rotate(${i * 6.9}deg\")>${letter}</span>`;\r\n    } else {\r\n      return `<span style=\"transform:rotate(${i * 6.9}deg\")>${letter}</span>`;\r\n    }\r\n  })\r\n  .join(\"\");\r\n\r\nconst slider = new Swiper(\".service__swiper\", {\r\n  slidesPerView: 4,\r\n  spaceBetween: 20,\r\n  centeredSlides: true,\r\n  scrollbar: {\r\n    el: \".swiper-scrollbar\",\r\n    draggable: true\r\n  },\r\n  breakpoints: {\r\n    360: {\r\n      slidesPerView: 1,\r\n    },\r\n    640: {\r\n      spaceBetween: 40,\r\n      slidesPerView: 2,\r\n    },\r\n    1200: {\r\n      spaceBetween: 80,\r\n      slidesPerView: 4,\r\n    },\r\n  },\r\n});\r\n\r\nconst slider_steps = new Swiper(\".steps__slider\", {\r\n  spaceBetween: 30,\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n});\n\n//# sourceURL=webpack://gulp-base-config/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;