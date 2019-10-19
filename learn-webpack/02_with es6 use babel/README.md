# 标准版
```
npm install babel-loader babel-core  --save-dev
npm install babel-preset-env --save-dev
```

# 最新版
```
npm install babel-loader@8.0.0-beta.0 @babel/core --save-dev
npm install @babel/preset-env --save-dev
```

# 两个插件
1. Babel Polyfill, 为开发应用准备的， `npm install babel-polyfill --save`, `import 'babel-polyfill'`
2. Babel Runtime Transform，局部垫片，为开发框架准备的，不会污染全局， 使用的时候`npm install @babel/plugin-transform-runtime --save-dev 或者 npm install babel-plugin-transform-runtime --save-dev`，然后`npm install babel/runtime --save 或者 npm install @babel-runtime --save`，在项目根目录下，新建一个 .babelrc文件进行配置。
3. preset 针对的是语法，var 和 let、const 这些，方法和函数需要用到这两个插件，例如 Generator, Set, Map, Array.from, Array.prototype.includes