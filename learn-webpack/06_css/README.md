# 处理CSS
1. 引入
2. CSS modules
3. 配置 less / sass
4. 提取 CSS 


## 引入
1. style-loader 在页面中创建 style 标签
    1. style-loader/url， 不插 style 标签，而是插入 link 标签，配合 file-loader 使用，特别不常用，不能处理多个样式，一个文件导入多个css的时候，导入几个就生成几个css 文件，并不会将他们打包在一起
    2. style-loader/useable, 控制 css 是不是加载，可以在浏览器的运行环境中调用的
    3. 各种options
        1. insertInto，插入到某一个 dom
        2. insertAt，插入的位置
        3. singleton，是否只使用一个 style 标签
        4. transform， 转化，浏览器环境下，插入页面前
2. css-loader 如何让 js 可以 import 一个 css 模块
    1. alias 解析的别名
    2. importLoader css-loader 之后，是不是还有其他loader， sass 的时候游泳
    3. minimize 是否压缩
    4. modules 启用 css 模块化，名称 localIdentName: '[path][name]_[hash:base64:5]'
3. 直接使用 css loader 和 style loader，打包的结果是，在页面中创建一个style 标签，然后 css 文件的内容变成内联样式

```
// style-loader/url
use: [
    { loader: 'style-loader/url' },
    { loader: 'file-loader' }
]

// style-loader/useable 的用法
use: [
    { loader: 'style-loader/useable' },
    { loader: 'css-loader' }
]
// 引入css 文件的时候
import base from './css/base.css';
import common from './css/common.css';

var flag = false;
setImterval(function() {
    if (flag) {
        base.unuse();
    } else {
        base.use();
    }
    flag = !flag;
})

base.use();
common.unuse();
```

## css 模块化
1. :local，局部样式
2. :global，全局样式
3. compose，继承一段样式
4. compose ... from file，从文件中引入一段样式