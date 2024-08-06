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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-graphql");

/***/ }),

/***/ "@graphql-tools/mock":
/*!**************************************!*\
  !*** external "@graphql-tools/mock" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@graphql-tools/mock");;

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@graphql-tools/schema");;

/***/ }),

/***/ "(api)/./pages/api/graphql/index.js":
/*!************************************!*\
  !*** ./pages/api/graphql/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\n/* harmony import */ var _graphql_tools_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql-tools/mock */ \"@graphql-tools/mock\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__, _graphql_tools_mock__WEBPACK_IMPORTED_MODULE_2__]);\n([_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__, _graphql_tools_mock__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n//The schema for the GraphQL server is written under a variable typeDefs\nconst typeDefs = /* GrapdQL */ `\n    type Product {\n        id: Int!\n        title: String!\n        thumbnail: String!\n        price: Float\n        category: Category\n    }\n    type Category {\n        id: Int!\n        title: String!\n    }\n    type Query {\n        product: Product\n        products(limit: Int): [Product]\n        categories: [Category]\n    }\n`;\n//Initiate the GraphQL server using the graphqlHTTP instance and pass the schema to it.\n// Configure the server to create mocks for all the values in our schema.\n// At the bottom of this file, we return the handler that isused by Next.js to make the GraphQL server available at the route\n// http://localhost:3000/api/graphql:\nconst mocks = {\n    Int: ()=>Math.floor(Math.random() * 99) + 1\n    ,\n    Float: ()=>(Math.random() * 99.0 + 1.0).toFixed(2)\n    ,\n    Product: ()=>({\n            thumbnail: ()=>\"https://picsum.photos/400/400\"\n        })\n};\nconst executableSchema = (0,_graphql_tools_mock__WEBPACK_IMPORTED_MODULE_2__.addMocksToSchema)({\n    schema: (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__.makeExecutableSchema)({\n        typeDefs\n    }),\n    mocks\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return resolve(result);\n            }\n        });\n    });\n}\nasync function handler(req, res) {\n    const result = await runMiddleware(req, res, (0,express_graphql__WEBPACK_IMPORTED_MODULE_0__.graphqlHTTP)({\n        schema: executableSchema,\n        graphiql: true\n    }));\n    res.json(result);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JhcGhxbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNlO0FBQ047QUFFdkQsd0VBQXdFO0FBQ3hFLE1BQU1HLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmhDLENBQUM7QUFFRCx1RkFBdUY7QUFDdkYseUVBQXlFO0FBQ3pFLDZIQUE2SDtBQUM3SCxxQ0FBcUM7QUFFckMsTUFBTUMsS0FBSyxHQUFHO0lBQ1ZDLEdBQUcsRUFBRSxJQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUUsR0FBRyxDQUFDO0lBQUE7SUFDOUNDLEtBQUssRUFBRSxJQUFNLENBQUNILElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFDcERDLE9BQU8sRUFBRSxJQUFNLENBQUM7WUFDWkMsU0FBUyxFQUFFLElBQU0sK0JBQStCO1NBQ25ELENBQUM7Q0FDTDtBQUVELE1BQU1DLGdCQUFnQixHQUFHWCxxRUFBZ0IsQ0FBRTtJQUN2Q1ksTUFBTSxFQUFFYiwyRUFBb0IsQ0FBQztRQUFFRSxRQUFRO0tBQUksQ0FBQztJQUM1Q0MsS0FBSztDQUNSLENBQUM7QUFFRixTQUFTVyxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDakMsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDcENILEVBQUUsQ0FBQ0YsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQ0ssTUFBTSxHQUFLO1lBQ3JCLElBQUlBLE1BQU0sWUFBWUMsS0FBSyxFQUFFO2dCQUN6QixPQUFPSCxPQUFPLENBQUNFLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ047QUFFRCxlQUFlRSxPQUFPLENBQUVSLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlCLE1BQU1LLE1BQU0sR0FBRyxNQUFNUCxhQUFhLENBQzlCQyxHQUFHLEVBQ0hDLEdBQUcsRUFDSGpCLDREQUFXLENBQUM7UUFDUmMsTUFBTSxFQUFFRCxnQkFBZ0I7UUFDeEJZLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FDTDtJQUNEUixHQUFHLENBQUNTLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUM7Q0FDcEI7QUFDRCxpRUFBZUUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhcHRlci03LWluaXRpYWwvLi9wYWdlcy9hcGkvZ3JhcGhxbC9pbmRleC5qcz8yMWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWxIVFRQIH0gZnJvbSAnZXhwcmVzcy1ncmFwaHFsJztcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnQGdyYXBocWwtdG9vbHMvc2NoZW1hJztcbmltcG9ydCB7IGFkZE1vY2tzVG9TY2hlbWEgfSBmcm9tICdAZ3JhcGhxbC10b29scy9tb2NrJztcblxuLy9UaGUgc2NoZW1hIGZvciB0aGUgR3JhcGhRTCBzZXJ2ZXIgaXMgd3JpdHRlbiB1bmRlciBhIHZhcmlhYmxlIHR5cGVEZWZzXG5jb25zdCB0eXBlRGVmcyA9IC8qIEdyYXBkUUwgKi8gYFxuICAgIHR5cGUgUHJvZHVjdCB7XG4gICAgICAgIGlkOiBJbnQhXG4gICAgICAgIHRpdGxlOiBTdHJpbmchXG4gICAgICAgIHRodW1ibmFpbDogU3RyaW5nIVxuICAgICAgICBwcmljZTogRmxvYXRcbiAgICAgICAgY2F0ZWdvcnk6IENhdGVnb3J5XG4gICAgfVxuICAgIHR5cGUgQ2F0ZWdvcnkge1xuICAgICAgICBpZDogSW50IVxuICAgICAgICB0aXRsZTogU3RyaW5nIVxuICAgIH1cbiAgICB0eXBlIFF1ZXJ5IHtcbiAgICAgICAgcHJvZHVjdDogUHJvZHVjdFxuICAgICAgICBwcm9kdWN0cyhsaW1pdDogSW50KTogW1Byb2R1Y3RdXG4gICAgICAgIGNhdGVnb3JpZXM6IFtDYXRlZ29yeV1cbiAgICB9XG5gO1xuXG4vL0luaXRpYXRlIHRoZSBHcmFwaFFMIHNlcnZlciB1c2luZyB0aGUgZ3JhcGhxbEhUVFAgaW5zdGFuY2UgYW5kIHBhc3MgdGhlIHNjaGVtYSB0byBpdC5cbi8vIENvbmZpZ3VyZSB0aGUgc2VydmVyIHRvIGNyZWF0ZSBtb2NrcyBmb3IgYWxsIHRoZSB2YWx1ZXMgaW4gb3VyIHNjaGVtYS5cbi8vIEF0IHRoZSBib3R0b20gb2YgdGhpcyBmaWxlLCB3ZSByZXR1cm4gdGhlIGhhbmRsZXIgdGhhdCBpc3VzZWQgYnkgTmV4dC5qcyB0byBtYWtlIHRoZSBHcmFwaFFMIHNlcnZlciBhdmFpbGFibGUgYXQgdGhlIHJvdXRlXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWw6XG5cbmNvbnN0IG1vY2tzID0ge1xuICAgIEludDogKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkgKSArIDEsXG4gICAgRmxvYXQ6ICgpID0+IChNYXRoLnJhbmRvbSgpICogOTkuMCArIDEuMCkudG9GaXhlZCgyKSxcbiAgICBQcm9kdWN0OiAoKSA9PiAoe1xuICAgICAgICB0aHVtYm5haWw6ICgpID0+ICdodHRwczovL3BpY3N1bS5waG90b3MvNDAwLzQwMCdcbiAgICB9KSxcbn07XG5cbmNvbnN0IGV4ZWN1dGFibGVTY2hlbWEgPSBhZGRNb2Nrc1RvU2NoZW1hICh7IFxuICAgIHNjaGVtYTogbWFrZUV4ZWN1dGFibGVTY2hlbWEoeyB0eXBlRGVmcywgIH0pLFxuICAgIG1vY2tzLFxufSk7XG5cbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bk1pZGRsZXdhcmUoXG4gICAgICAgIHJlcSxcbiAgICAgICAgcmVzLFxuICAgICAgICBncmFwaHFsSFRUUCh7XG4gICAgICAgICAgICBzY2hlbWE6IGV4ZWN1dGFibGVTY2hlbWEsXG4gICAgICAgICAgICBncmFwaGlxbDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgKTtcbiAgICByZXMuanNvbihyZXN1bHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiZ3JhcGhxbEhUVFAiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsImFkZE1vY2tzVG9TY2hlbWEiLCJ0eXBlRGVmcyIsIm1vY2tzIiwiSW50IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRmxvYXQiLCJ0b0ZpeGVkIiwiUHJvZHVjdCIsInRodW1ibmFpbCIsImV4ZWN1dGFibGVTY2hlbWEiLCJzY2hlbWEiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiaGFuZGxlciIsImdyYXBoaXFsIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/graphql/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/graphql/index.js"));
module.exports = __webpack_exports__;

})();