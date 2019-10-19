function counter() {
  var div = document.createElement('div')
  div.setAttribute('id', 'counter')
  div.innerHTML = 1
  div.onclick = function() {
    this.innerHTML = parseInt(this.innerHTML, 10) + 1
  }
  document.body.appendChild(div)
}

export default counter