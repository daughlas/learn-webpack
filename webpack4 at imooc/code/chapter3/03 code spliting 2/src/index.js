// tree-shaking 只支持 ES module（静态），不支持 CommonJS（动态）

// import _ from 'lodash'

//  console.log(_.join(['a', 'b', 'c'], '***'))


function getComponent() {
  return import('lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell', 'Lee'], '-')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
}) 