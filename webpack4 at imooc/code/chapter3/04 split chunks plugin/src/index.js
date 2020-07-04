
// 异步引入lodash
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['Dell', 'Lee'], '-')
//     return element
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })

// 同步引入 lodash
import _ from 'lodash'
var element = document.createElement('div')
element.innerHTML = _.join(['Dell', 'Lee'], '-')
document.body.appendChild(element)


// 引入小文件测试
// import test from './test'
// console.log(test.name)