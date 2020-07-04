
// 异步引入lodash
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['Dell', 'Lee'], '-')
//     return element
//   })
// }

// ES7
async function getComponent() {
  const {default: _} = await import (/* webpackChunkName:"lodash" */ 'lodash')
  var element = document.createElement('div')
  element.innerHTML = _.join(['Dell', 'Lee'], '-')
  return element
}


document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})



// 同步引入 lodash
// import _ from 'lodash'
// var element = document.createElement('div')
// element.innerHTML = _.join(['Dell', 'Lee'], '-')
// document.body.appendChild(element) 