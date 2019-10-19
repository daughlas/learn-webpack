webpackJsonp([5],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// 都引入到 pageA.bundle.js 里面
// import './subPageA';
// import './subPageB';



// 把subPageA 和 subPageB 打包到 pages.bundle.js 里面
// require.ensure(['./subPageA', './subPageB'], function() {
//     var subPageA = require('./subPageA');
//     var subPageB = require('./subPageB');
// },'pages');

// 为了提取公共模块，在父模块中先引入一下子模块需要引用的公共插件，结果就是 moduleA 会和PageA 打包在一起
// require.include('./moduleA');
var page = 'subPageA';




// require.ensure 的方式
// if (page == 'subPageA') {
//     require.ensure(['./subPageA'], function() {
//         var subPageA = require('./subPageA');
//     }, 'subPageA');
// } else if (page === 'subPageB') {
//     require.ensure(['./subPageB'], function() {
//         var subPageA = require('./subPageB');
//     }, 'subPageB');
// }

// 动态 import 的方式
// 如果两个魔法注释是一个名字的话，打包之后，只剩下 subPageA
if (page === 'subPageA') {
    Promise.all/* import() */([__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 1)).then(function(subPageA) {
        console.log(subPageA);
    })
} else if (page === 'subPageB') {
    Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 2)).then(function(subPageB) {
        console.log(subPageB);
    })
}

// 异步加载，而不是 commonJS 的同步加载
// require.ensure(['lodash'], function() {
//     var _ = require('lodash');
//     _.join([1, 2, 3], '3');
// }, 'vendor')
// 下面这样写也行，和上面这段代码的效果是一致的，异步加载模块
// require.ensure([], function() {
//     var _ = require('lodash');
// }, 'vendor')

/* harmony default export */ __webpack_exports__["default"] = ('pageA');

/***/ })

},[3]);