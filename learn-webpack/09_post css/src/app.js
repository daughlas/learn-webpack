import base from './css/base.less';
import common from './css/common.less';

import(/* webpackChunkName: 'a'*/'./components/a').then(function(a) {
    console.log(a);
})

var app = document.getElementById('app');
app.innerHTML = '<div class="'+base.box+'"></div>'