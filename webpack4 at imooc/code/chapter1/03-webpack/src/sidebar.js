function Sidebar(parent) {
  var sidebar = document.createElement('div');
  sidebar.innerText = 'sidebar';
  parent.append(sidebar);
}

// ES Module
// export default Sidebar;

// CommonJS
module.exports = Sidebar