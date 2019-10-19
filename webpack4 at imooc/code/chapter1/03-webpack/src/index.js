
//  ES Module
// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'

// CommonJS
const Header = require('./header.js')
const Sidebar = require('./sidebar.js')
const Content = require('./content.js')

var dom = document.getElementById('root');

new Header(dom);
new Sidebar(dom);
new Content(dom);
