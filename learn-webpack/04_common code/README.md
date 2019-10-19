# 提取公共代码
1. 减少代码冗余
2. 提高用户加载速度

## 实现方式
1. 插件： CommonsChunkPlugin， webpack.optimize.CommonsChunkPlugin
2. 配置：`{plugins: [ new webpack.optimize.CommonsChunkPlugin(option) ] }`
3. 配置项 option
    1. option.name or options.names
    2. options.filename
    3. options.minChunks, 0, 2, infinity, 函数自定义逻辑
    4. options.chunks 指定了提取的范围
    5. options.children
    6. options.deepChildren
    7.options.async 异步代码块
4. 场景
    1. 单页应用
    2. 单页应用 + 第三方依赖
    3. 多页应用 + 第三方依赖 + webpack生成代码
5. 注意，只有多个 entry ，提取公共代码才会发生作用
    