只要是 import 异步加载的文件，webpack 都会将它自动 **分割打包** 成一个文件

## 魔法注释
```
import(/* webpackChunkName:"lodash" */)
```

安装依赖
```
npm install @babel/plugin-syntax-dynamic-import
```

## 配置 split chunks plugin
默认配置

```
splitChunks: {
  chunks: 'async',
  minSize: 30000,
  maxSize: 0,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  automaticNameDelimiter: '~',
  automaticNameMaxLength: 30,
  name: true,
  cacheGroups: {
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true
    }
  }
}
```

`chunks: 'async'`表示代码分割的时候只对异步代码生效，改成 all 配合 cacheGroups 使用，可以打包同步的代码，initial 只对同步代码进行分割
同步引入
```
import _ from 'lodash'
var element = document.createElement('div')
element.innerHTML = _.join(['Dell', 'Lee'], '-')
document.body.appendChild(element)
```

异步引入
```js
function getComponent() {
  return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell', 'Lee'], '-')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})
```


minSize 引入的包，大于 minSize 才进行打包，一般 30000， 30kb

maxSize 50000 50kb，表示把过大的文件尝试分割成一堆小于 50 kb 的小文件

minChunks 写 1， 当一个模块被用了至少 1 次的时候彩进行代码分割，打包同步的时候才有用好像

maxAsyncRequests 写 5，在打包前 5 个库的时候会打包生成 5 个 JS 文件，超过 5 个就再做代码分割

maxInitialRequests: 3 入口文件，最多打包成三个文件

automaticNameDelimiter: '~'  默认文件名中间的连接符

name: true cacheGroups 中的命名规则生效

cacheGroups 如果文件满足其他条件，就可以做代码分割了，分割之后的文件打包到哪里去，看这个对象里边的规则

### cacheGroups 配置

cacheGroups 里边的 default 是默认放置的分组，防止前边的分组的test 条件都不被满足，webpack 不知道把文件放在哪儿

cacheGroups 里边是一个个的组，要打包的文件符合其中一个对象的 test 条件的时候，就打包到这个组中

所有模块都符合default 的要求

priority 优先级，当一个模块满足多个组的条件的时候，打包进 priority 优先级高的组里边

reuseExistingChunk：true 之前引入过，打包过的代码不会被重新打包进当前组

