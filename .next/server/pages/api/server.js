"use strict";
(() => {
var exports = {};
exports.id = "pages/api/server";
exports.ids = ["pages/api/server"];
exports.modules = {

/***/ "./pages/api/server.js":
/*!*****************************!*\
  !*** ./pages/api/server.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mcstatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mcstatus */ "mcstatus");
/* harmony import */ var mcstatus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mcstatus__WEBPACK_IMPORTED_MODULE_0__);


function main(request, response) {
  ajax({
    type: 'GET',
    url: 'https://mcstatus.snowdev.com.br/api/query/v3/mc.hypixel.net'
  }).done(function (response) {
    response.json({
      ip: "mc.hypixel.net",
      players: response.online
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "mcstatus":
/*!***************************!*\
  !*** external "mcstatus" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mcstatus");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/server.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3NlcnZlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQztBQUU3QkMsRUFBQUEsSUFBSSxDQUFDO0FBQ0RDLElBQUFBLElBQUksRUFBRSxLQURMO0FBRURDLElBQUFBLEdBQUcsRUFBRTtBQUZKLEdBQUQsQ0FBSixDQUdHQyxJQUhILENBR1EsVUFBU0osUUFBVCxFQUFrQjtBQUN0QkEsSUFBQUEsUUFBUSxDQUFDSyxJQUFULENBQWM7QUFDVkMsTUFBQUEsRUFBRSxFQUFFLGdCQURNO0FBRVZDLE1BQUFBLE9BQU8sRUFBRVAsUUFBUSxDQUFDUTtBQUZSLEtBQWQ7QUFJSCxHQVJEO0FBU0g7O0FBRUQsaUVBQWVWLElBQWY7Ozs7Ozs7Ozs7QUNmQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FQSS8uL3BhZ2VzL2FwaS9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vQVBJL2V4dGVybmFsIFwibWNzdGF0dXNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBNY1N0YXR1cyBmcm9tICdtY3N0YXR1cydcclxuXHJcbmZ1bmN0aW9uIG1haW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuXHJcbiAgICBhamF4KHtcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL21jc3RhdHVzLnNub3dkZXYuY29tLmJyL2FwaS9xdWVyeS92My9tYy5oeXBpeGVsLm5ldCcsXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICByZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgaXA6IFwibWMuaHlwaXhlbC5uZXRcIixcclxuICAgICAgICAgICAgcGxheWVyczogcmVzcG9uc2Uub25saW5lXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1jc3RhdHVzXCIpOyJdLCJuYW1lcyI6WyJNY1N0YXR1cyIsIm1haW4iLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJhamF4IiwidHlwZSIsInVybCIsImRvbmUiLCJqc29uIiwiaXAiLCJwbGF5ZXJzIiwib25saW5lIl0sInNvdXJjZVJvb3QiOiIifQ==