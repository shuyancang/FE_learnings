



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
























