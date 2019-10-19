# post css
PostCss : 打包的时候，利用 js 处理 css，为了实现兼容性

## 安装
postcss
postcss-loader
Autoprefixer: 加上浏览器前缀
postcss-cssnano：帮助优化和压缩 css，css-loader 已经用到它了
postcss-cssnext： 使用未来的 css 语法，CSS Variables，custom selectors， calc()，
命令： `npm install postcss  postcss-loader autoprefixer cssnano postcss-cssnext --save-dev`

应用的位置在 css-loader 和 less / sass 这些预处理语言之前


