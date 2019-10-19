import base from './css/base.less';
import common from './css/common.less';

var flag = false;
// setInterval(function() {
//     if (flag) {
//         base.unuse();
//     } else {
//         base.use();
//     }
//     flag = !flag;
// },1000)

var app = document.getElementById('app');
app.innerHTML = '<div class="'+base.box+'"></div>'