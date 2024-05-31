/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/ts/degree-program-list-table.ts":
/*!***************************************************!*\
  !*** ./resources/ts/degree-program-list-table.ts ***!
  \***************************************************/
/***/ (function() {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var IS_LOADING_CLASS = 'spinner';
var FILLED_STAR_CLASS = 'dashicons-star-filled';
var EMPTY_STAR_CLASS = 'dashicons-star-empty';
var toggleSticky = function (icon) {
  var isSticky = icon.classList.contains(FILLED_STAR_CLASS);
  if (isSticky) {
    icon.classList.remove(FILLED_STAR_CLASS);
    icon.classList.add(EMPTY_STAR_CLASS);
    return;
  }
  icon.classList.remove(EMPTY_STAR_CLASS);
  icon.classList.add(FILLED_STAR_CLASS);
};
var onStickyCellClick = function (cell) {
  var _a, _b;
  var icon = cell.querySelector('span');
  if (!icon) {
    return false;
  }
  if (icon.classList.contains(IS_LOADING_CLASS)) {
    return false;
  }
  var id = ((_b = (_a = cell.parentElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '').split('-')[1];
  if (!id) {
    return false;
  }
  icon.classList.add(IS_LOADING_CLASS);
  var request = new URLSearchParams(__assign(__assign({}, window.DegreeProgramListTableServerData), {
    id: id
  }));
  fetch(window.ajaxurl, {
    method: 'POST',
    body: request
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (!response.success) {
      alert(response.data.message);
      return;
    }
    toggleSticky(icon);
  }).finally(function () {
    icon.classList.remove(IS_LOADING_CLASS);
  });
  return false;
};
document.querySelectorAll('td.sticky-column').forEach(function (cell) {
  cell.addEventListener('click', function () {
    return onStickyCellClick(cell);
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/ts/degree-program-list-table.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=degree-program-list-table.js.map