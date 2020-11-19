# webpack 5

# 基本操作
* 取消了很多文件额外的模块创建, 压缩体积缩小
* loader取消了很多, 进行了内置
* 文件生成标识(chunk id, chunk name)的可视化优化
* webpack serve 进行开发中热更新;
* experiments: { topLevelAwait: true } 文件开发中可以直接进行await操作, 编译默认将遇到的await文件进行同步编译; await imprt('./data.js')
*
# 
