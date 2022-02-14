



后续要学习的东西:

https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/


1. Proxy, Reflect的ES6
2. 正则匹配的$1 等。match, replace
3. prototype, __proto__, constructor
4. 装饰器@
5. http的流程
6. 浏览器渲染流程
7. 手写Promise, 手写async+await, 手写简单的generator
8. 手写generator
9. 各种继承(链, 构造函数, 组合, 寄生组合)
10. 手写拖拽
11. 手写new, Object.create, bind, call, apply
12. clientLeft/top, offsetLeft/Top, scrollTop,left; pageX, pageY的区别。
13. nodejs的事件循环6阶段, web浏览器的eventloop阶段。
14. 垃圾回收机制。
15. 设计模式原则: 单一职责(S-不要存在多于一个导致类变更的原因), 依赖倒置(D-高层模块不应该依赖低层模块，二者都应该依赖其抽象), 接口隔离(I-一个类对另一个类的依赖应该建立在最小的接口上), 开闭原则(O-对扩展开放，对修改关闭), 里式替换(L-所有引用基类的地方必须能透明地使用其子类的对象), 迪米特法则(L-一个对象应该对其他对象保持最少的了解);

3. webpack插件
4. react原理
5. webworker
6. flutter


面试题记录:

地平线公司:
一面
  说说hooks用法; 
  发布订阅模式和观察者模式; 
  说说高阶组件; 
  说说threejs的物体大小和位置变化操作方式; 
二面
  聊聊高阶组件里的代理高阶和继承高阶, 表现形式, 声明周期的执行, 异同点, 使用场景;
  说说组件里的受控模式和不受控模式, 项目中一般怎么应用
  说说函数式编程(柯里化); 
  打包工程化上的优化;
  对于团队的技术有什么贡献;
  typescript的运用, 各种类型, 运用场景, react组件中的泛型;
三面
  手写算法：三数之和getList(arr:number[], target:number)返回和为target的三个数的组合。
  对于团队整体技术, 是怎么去进行驱动的
  怎么实现技术或者能力上的前瞻的，期间遇到过什么麻烦，如何解决
  怎么看待业务需求和开发技术的，
  平时时间如何分配的：开发时间，带团队的花费时间，自我提升时间。

公司二: 
1. 对http和websocket的了解, websocket在哪一层, 怎么传参
2. react源码里使用了那些数据结构, 大根堆/小根堆, expirationTime是怎么更新的,
3. 介绍react的Fiber和更新的流程
4. 大屏的开发中，遇到了那些问题，怎么处理的

蓝湖一面: 
react: hooks和class相比解决了什么问题; class component中this的指向什么情况下会出现异常; 
js的继承是怎么实现的
完成一道算法题: 
    interface TreeNode {id: string,  children: TreeNode[], obj: {id1, id2, ...}}
    todo : findFarther(idList: Array[string], treeNodes) -> 找到idList最近公共祖先。
你在项目中做了哪些优化, 有没有量化的指标, 是怎么实现的
webpack打包中构建速度优化, 项目体积优化, 
二叉树是什么样子的数据结构, 有那些应用
二分搜索的时间复杂度是多少, 为什么是这个时间复杂度。

蓝湖二面(前端leader): 
1. 写一个扫雷游戏
2. redux做了什么, 为什么要使用, 有什么优化
3. 可视化进行了哪些尝试, 相关的优化路线。

蓝湖三面(技术总监)
1. 最近工作技术上有成就感事儿，分享; 
2. 遇到的挑战, 怎么处理的, 结果如何;
3. 思考这样一个场景: 线上突然爆出问题, 页面使用8小时候, crash, 你会怎么尝试去解决?
4. 你认为的更强的自己
5. 你是怎么发挥自己在团队中的作用


技能清单
后端语言：熟悉 Node.js 及其 Web 框架 Express/Koa，熟练使用 Koa 开发中间件，SSR，以及 React 同构项目。
数据库端：熟悉 MongoDB，SQL Server 数据库。
工程化：熟练使用 Webpack，Gulp，Babel，ESLint，TypeScript，PostCSS 等工具搭建项目脚手架，加快项目开发效率，具备一定的项目架构能力。
测试相关：熟悉 Karma，Mocha，Jest 等测试框架。
持续集成：熟练使用 GitLab，Travis CI 等工具配置自动化测试，自动构建，自动部署，实现项目高度自动化。
项目部署：熟练使用 Docker 打包容器化项目，以及 Kubernetes 对容器进行编排。


1. 采集器: 根据各种协议(报文) -> 1区/2区, 隔离(单向) -> kafka(消息中间件, 唯一源头)产生为一个映射(类似一堆json, 设备 => 测点 => 数据)

2. kafka(json 压缩后的数据-二进制, 编码) -> 清洗计算(最大最小值理论值) -> 1. 原始有效数, 2. 基本业务数据(日发电量); -> 存回kafka

5s数据-> 降采样 -> (平均值, 最小最大值); 多消费(队列, 不同组)

3.1 kafka入库influxdb -> 所有采集的有效数据都进入 -> 网络/IO/磁盘读写 -> 历史数据趋势访问(按时间-> m * n)

3.2 kafka入redis -> 只保留当前时刻的最新数据(监控/实时) -> 一般做缓存使用, 直接访问速度较快。但功能相对简单(不能做复杂的计算操作) 基础信息,配置缓存。

3.3 告警 -> 偏航对风/诊断/低效 (30天数据)

4. 入库influxdb时, 业务数据(任务) -> mysql

5. 接口缓存: redis; 数据量大更新频率低查询频率高(接口缓存)。
























