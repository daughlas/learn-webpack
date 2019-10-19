# 代码分割 和 懒加载

## webpack methods
1. require.ensure 接受四个参数
    1. []: dependencies 依赖，加载进来，不会执行
    2. callback 才会执行
    3。 errorCallback 失败的回调
    4. chunkName 公共包名
2. require.include 只有一个参数


## ES 2015 loader spec
ES 2015 定义的 loader 规范
import() -> Promise
import().then

```
import(
    /* webpackChunkName: async-chunk-name */
    /* webpackMode: lazy */
    modulename
)
```

## 代码分割的场景
分离业务代码 和 第三方以来
分离业务代码 和 业务公共代码 和第三方依赖
分离首次加载 和访问后加载的代码

## 单个入口的时候提取公共模块
1. 多文件入口的时候使用的是 CommonsChunkPlugin

## require.ensure 和 动态 import 之间的区别
1. require.ensure 你要是不在函数里面 再require 一下的话，它只是被引入到页面中，并不会被执行。
2. 动态 import 进来的代码会执行我们的代码。

目前代码还运行不起来
