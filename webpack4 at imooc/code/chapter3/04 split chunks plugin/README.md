# 不 codespliting
* 打包文件会很大，加载时间会很长
* 业务代码变，依赖库实际不太变，没必要每次打包

这个例子通过 手动加一个 lodash 文件的方式演示 手动 code spliting