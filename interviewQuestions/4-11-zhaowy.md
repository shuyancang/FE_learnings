
# 1. webpack做了什么

**********
1.1 webpack本质上只是一个js引用程序的静态打包器, 他能够基于文件的依赖，递归的构建一个文件依赖关系图, 最终将文件打包成为一个或者多个bundle;
1.2 webpack基于entry识别那个/哪些模块是构建打包的入口;
1.3 webpack基于output, 将构建打包的文件输出到指定的目录;
1.4 从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
1.5 经过 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表
**********


# 2. webpack构建时有无做一些自定义操作
**********************
有: 
2.1 alias: 指定别名, 能在一定程度上降低开发对文件路径的输入难度, 缓存路径能些微提升打包速度;
2.2 module对loader处理添加fallback, 能在loader处理中, 依次进行指定的预处理或后处理, 自定义loader组件也可以在此进行特殊替换;
2.3 optimization - splitChunks - cacheGroups 自定义打包中的性能优化部分, 对共用模块的拆分, 识别以及提取后的指定工作;
2.4 自定义的plugins配置: CopyWebpackPlugin对静态文件的拷贝, ProgressBarPlugin打包进度的监控, HappyPack多线程打包等等;
2.5 stats调整打包过程中控制台的输出, 详细到每个文件的大小, 耗时及打包状态(warning)等各种显示优化;
2.6 devServer - before: 添加打包前的优化, 可以实现较为简洁的mock数据
**********************






