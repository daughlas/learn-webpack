## 第二章 webpack 初探
### 2-1 webpack 究竟是什么
#### 回顾 js 放在一个文件夹中如何写代码
#### 回顾早期 oo 的代码
index.html
```html
<body>
  <p>原始方法写 html 的内容</p>
  <div id="root"></div>
  <script src="./header.js"></script>
  <script src="./index.js"></script>
</body>
```

index.js
```js
var dom = document.getElementById('root');
new Header(dom);
```

header.js
```js
function Header(parent) {
  var header = document.createElement('div');
  header.innerText = 'header';
  parent.append(header);
}
```

#### 早期 OO 编写代码的问题
* 多出了几个 HTTP 请求，页面加载速度变慢了
* 要在 index.html 中才能看到各个类对应于那个文件
* 需要根据文件先后，手动处理依赖关系，很难查错
* 解决：只引入 index.js，在 index.js 里边去引入其他文件，如 `import Header from './header.js'`

#### webpack 是什么
* webpack 不是像 babel 一样的 JS 代码翻译器，他只认识 import 这样的语句，ES 6 其他语法它并不认识
* webpack 是一个，module bundler，**模块打包工具**，把模块打包到一起
  * ES Module
  * CommonJS node 常用
  * CMD、AMD
  * webpack 可以识别各种模块规范
* 最早的 webpack 是 JS 的模块打包工具，随着webpack 的发展，现在它可以打包任何形式的模块文件。

#### 拓展知识
* https://webpack.js.org/concepts/modules/
* https://webpack.js.org/api/module-methods/
* https://webpack.js.org/api/module-variables/

### webpack 的正确安装方式
#### 全局安装
`npm install webpack webpack-cli -g`
不推荐，问题，两个项目 webpack 版本号不一致，会导致版本号与全局版本不一致的项目无法运行
####
* `npm install webpack webpack-cli -D`
* `npx webpack -v`
* npx 在当前目录的 node_modules 中寻找 webpack
* `npm info webpack` 查找 webpack 信息
* `npm install webpack@4.16.5` 指定版本号

### webpack 配置文件
* 文件名要叫 `webpack.config.js`
* `npx webpack --config webpackConfig.js` 按照自定义的默认配置文件进行打包
* npm scripts 会先在工程目录下的 node_modules 里边找 webpack
```js
const path = require('path');

module.exports = {
  mode: 'production', // 默认模式
  entry: './src/index.js', // 简写
  entry: { // 复杂写
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // 要跟一个绝对路径，默认是这样的，不写也是这样的
  }
}
```

#### 拓展
* https://webpack.js.org/guides/getting-started/

### 浅析 webpack 打包输出内容
* hash 本次打包hash
* version： 本地打包使用的 webpack 的版本
* time：整体打包耗时
* asset 文件
* size 大小
* chunks id 值
* chunk Names 每一个 JS 文件对应的名字