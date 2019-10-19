function Content(parent) {
  var content = document.createElement('div');
  content.innerText = 'content';
  parent.append(content);
}

// ES Module
// export default Content;

// CommonJS
module.exports = Content