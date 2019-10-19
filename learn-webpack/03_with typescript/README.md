# 安装
```
npm i typescript ts-loader --save-dev
npm i typescript awesome-typescript-loader --save-dev
```

# 配置
1. 文件 tsconfig.json
2. webpack.config.js

# 推荐配置
官网/docs/handbook/compiler-options.html

# 常用选项
1. compilerOptions
2. include
3. exclude

# 类型生命文件

npm install @types/lodash 安装声明文件，编译的时候传入参数类型错误，会得到具体详细的错误。
npm install typings -g 之后 typings install lodash
使用的时候，在 ts config 的 compilerOptions 中添加一个属性 typeRoots