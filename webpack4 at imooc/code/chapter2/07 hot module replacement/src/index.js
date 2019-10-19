import './style.css'
import './counter'
import counter from './counter'
import number from './number'

var root = document.getElementById('root')

var btn = document.createElement('button')
btn.innerHTML = '新增'
btn.onclick = function() {
  var dom = document.createElement('div')
  dom.textContent = 'hello world!, changed time 1!'
  dom.classList.add('item')
  root.appendChild(dom)
}
root.appendChild(btn)
counter()
number()

if (module.hot) {
  module.hot.accept('./number', () => {
    var child = document.getElementById('number')
    document.body.removeChild(child)
    number()
  })
}