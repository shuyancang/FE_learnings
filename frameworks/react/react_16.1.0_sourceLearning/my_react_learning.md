
# react源码分析:

# 1. 简单扫一眼readme; 查看基础的文件结构
* 有how-to-contribute => [Contributing Guide](https://reactjs.org/docs/how-to-contribute.html); [中文翻译](https://react.docschina.org/docs/codebase-overview.html)
* development workflow: yarn lint/linc/test/flow/build
* package.json
* /fixtures - react 测试项目 集合

* /packages - 各引入包源码
  ********
    /events
    /react
    /react-art
    /react-call-return
    /react-cs-renderer
    /react-dom
    /react-native-renderer
    /react-noop-renderer
    /react-reconciler
    /react-rt-renderer
    /react-test-render
    /shared react指定的各种全局变量, 公用类型及方法等;
  ********
* /scripts - 各工具启动脚本(git, jest, bench等)
* __tests__ 测试文件目录
* ——mocks__ 各虚拟数据

# 2. 

