"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies/[movieId]";
exports.ids = ["pages/api/movies/[movieId]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies%2F%5BmovieId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cmovies%5C%5BmovieId%5D.ts&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies%2F%5BmovieId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cmovies%5C%5BmovieId%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_movies_movieId_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\movies\\[movieId].ts */ \"(api)/./pages/api/movies/[movieId].ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_movies_movieId_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_movies_movieId_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/movies/[movieId]\",\n        pathname: \"/api/movies/[movieId]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_movies_movieId_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRm1vdmllcyUyRiU1Qm1vdmllSWQlNUQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q21vdmllcyU1QyU1Qm1vdmllSWQlNUQudHMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDK0Q7QUFDL0Q7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHlEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx5REFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8/ZDMxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXG1vdmllc1xcXFxbbW92aWVJZF0udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tb3ZpZXMvW21vdmllSWRdXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbW92aWVzL1ttb3ZpZUlkXVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies%2F%5BmovieId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cmovies%5C%5BmovieId%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prismadb = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxTQUFTQyxPQUFPQyxRQUFRLElBQUksSUFBSUgsd0RBQVlBO0FBQ2xELElBQUlJLElBQXlCLEVBQWNGLE9BQU9DLFFBQVEsR0FBR0Y7QUFFN0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtbW9uZ29kYi8uL2xpYnMvcHJpc21hZGIudHM/N2Q5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLnByaXNtYWRiIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudFxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcmlzbWFkYiIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./libs/serverAuth.ts":
/*!****************************!*\
  !*** ./libs/serverAuth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n\n\n\nconst serverAuth = async (req, res)=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7QUFFTjtBQUNzQjtBQUU3RCxNQUFNRyxhQUFhLE9BQU9DLEtBQXFCQztJQUM3QyxNQUFNQyxVQUFVLE1BQU1OLDJEQUFnQkEsQ0FBQ0ksS0FBS0MsS0FBS0gsa0VBQVdBO0lBRTVELElBQUksQ0FBQ0ksU0FBU0MsTUFBTUMsT0FBTztRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxNQUFNQyxjQUFjLE1BQU1ULDJEQUFhLENBQUNVLFVBQVUsQ0FBQztRQUNqREMsT0FBTztZQUNMSixPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7UUFDM0I7SUFDRjtJQUVBLElBQUksQ0FBQ0UsYUFBYTtRQUNoQixNQUFNLElBQUlELE1BQU07SUFDbEI7SUFFQSxPQUFPO1FBQUVDO0lBQVk7QUFDdkI7QUFFQSxpRUFBZVAsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1tb25nb2RiLy4vbGlicy9zZXJ2ZXJBdXRoLnRzPzg1OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWJzL3ByaXNtYWRiJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5jb25zdCBzZXJ2ZXJBdXRoID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XG5cbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IHNpZ25lZCBpbicpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XG4gIH1cblxuICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXJBdXRoO1xuIl0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJwcmlzbWFkYiIsImF1dGhPcHRpb25zIiwic2VydmVyQXV0aCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJFcnJvciIsImN1cnJlbnRVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"passord\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"Email does not exist\");\n                }\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNNO0FBQ0E7QUFDRTtBQUNBO0FBQ3pCO0FBQ007QUFFaEMsTUFBTU8sY0FBMkI7SUFDdENDLFdBQVc7UUFDVFAsaUVBQWNBLENBQUM7WUFDYlEsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLElBQUk7WUFDbkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYSxJQUFJO1FBQzdDO1FBQ0FaLGlFQUFjQSxDQUFDO1lBQ2JPLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksZ0JBQWdCLElBQUk7WUFDMUNGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CLElBQUk7UUFDcEQ7UUFDQWIsc0VBQVdBLENBQUM7WUFDVmMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFVBQVU7b0JBQ1JGLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLDJEQUFhLENBQUNxQixVQUFVLENBQUM7b0JBQUVDLE9BQU87d0JBQ25EUixPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtnQkFBQztnQkFFRCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0EsS0FBS0csY0FBYyxFQUFFO29CQUNqQyxNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1LLG9CQUFvQixNQUFNekIsK0NBQU9BLENBQUNjLFlBQVlJLFFBQVEsRUFBRUcsS0FBS0csY0FBYztnQkFFakYsSUFBSSxDQUFDQyxtQkFBbUI7b0JBQ3RCLE1BQU0sSUFBSUwsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFDREssT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBT3ZCLGtCQUF5QjtJQUNoQ3dCLFNBQVM5Qix3RUFBYUEsQ0FBQ0Usc0RBQVFBO0lBQy9CNkIsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLEtBQUs7UUFDSEMsUUFBUTVCLFFBQVFDLEdBQUcsQ0FBQzRCLG1CQUFtQjtJQUN6QztJQUNBRCxRQUFRNUIsUUFBUUMsR0FBRyxDQUFDNkIsZUFBZTtBQUNyQyxFQUFFO0FBRUYsaUVBQWV4QyxnREFBUUEsQ0FBQ08sWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1tb25nb2RiLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgfHwgJycsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQgfHwgJycsXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgfHwgJycsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8ICcnLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgICAgIHR5cGU6ICdwYXNzb3JkJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGFuZCBwYXNzd29yZCByZXF1aXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgIH19KTtcblxuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaGFzaGVkUGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIuaGFzaGVkUGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBwYXNzd29yZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aCdcbiAgfSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYWRiKSxcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogJ2p3dCcgfSxcbiAgand0OiB7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9KV1RfU0VDUkVULFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHMiLCJQcmlzbWFBZGFwdGVyIiwiY29tcGFyZSIsInByaXNtYWRiIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsInBhZ2VzIiwic2lnbkluIiwiZGVidWciLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwiand0Iiwic2VjcmV0IiwiTkVYVEFVVEhfSldUX1NFQ1JFVCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./pages/api/movies/[movieId].ts":
/*!***************************************!*\
  !*** ./pages/api/movies/[movieId].ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    try {\n        if (req.method !== \"GET\") {\n            return res.status(405).end();\n        }\n        await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        const { movieId } = req.query;\n        if (typeof movieId !== \"string\") {\n            throw new Error(\"Invalid Id\");\n        }\n        if (!movieId) {\n            throw new Error(\"Missing Id\");\n        }\n        const movies = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findUnique({\n            where: {\n                id: movieId\n            }\n        });\n        return res.status(200).json(movies);\n    } catch (error) {\n        console.log(error);\n        return res.status(500).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL1ttb3ZpZUlkXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDdUM7QUFDSTtBQUU1QixlQUFlRSxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQjtJQUM3RSxJQUFJO1FBQ0YsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87WUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7UUFDNUI7UUFFQSxNQUFNTiw0REFBVUEsQ0FBQ0UsS0FBS0M7UUFFdEIsTUFBTSxFQUFFSSxPQUFPLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztRQUU3QixJQUFJLE9BQU9ELFlBQVksVUFBVTtZQUMvQixNQUFNLElBQUlFLE1BQU07UUFDbEI7UUFFQSxJQUFJLENBQUNGLFNBQVM7WUFDWixNQUFNLElBQUlFLE1BQU07UUFDbEI7UUFFQSxNQUFNQyxTQUFTLE1BQU1YLDREQUFjLENBQUNhLFVBQVUsQ0FBQztZQUM3Q0MsT0FBTztnQkFDTEMsSUFBSVA7WUFDTjtRQUNGO1FBRUEsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtVLElBQUksQ0FBQ0w7SUFDOUIsRUFBRSxPQUFPTSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPYixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLW1vbmdvZGIvLi9wYWdlcy9hcGkvbW92aWVzL1ttb3ZpZUlkXS50cz9lYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWJzL3NlcnZlckF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICB0cnkge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG5cbiAgICBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSwgcmVzKTtcblxuICAgIGNvbnN0IHsgbW92aWVJZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgaWYgKHR5cGVvZiBtb3ZpZUlkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIElkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFtb3ZpZUlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBwcmlzbWFkYi5tb3ZpZS5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBtb3ZpZUlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24obW92aWVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYWRiIiwic2VydmVyQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJtb3ZpZUlkIiwicXVlcnkiLCJFcnJvciIsIm1vdmllcyIsIm1vdmllIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/[movieId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies%2F%5BmovieId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cmovies%5C%5BmovieId%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();