function Header(parent) {
  var header = document.createElement('div');
  header.innerText = 'header';
  parent.append(header);
}

// ES Module
// export default Header;

// CommonJS
module.exports = Header