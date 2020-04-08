

# 前端与测试工程师

* 测试的核心概念: 单元测试, 性能测试, 安全测试, 功能测试, 部分代码参考./qa/
# 1. karma 使用:
*************
npm init
npm install karma -g => 保证全局能够运行karma
npm install jasmine-core karma karma-coverage karma-jasmine karma-phantomjs-launcher phantom --save-dev
安装以上插件完成后执行karma init 生成karma.conf.js配置文件, 期间询问borwer选择phantomjs
修改karma.conf.js： files指向测试的文件; preprocessors指向要测试的js, reporters添加覆盖率, coveragereporter指定覆盖率报告生成html, singleRun改为true即可。
执行npm 写入的测试指令 npm run unit:"util": "karma start"生成报告即可。
*************
# 2. mocha使用: 
*******************
mocha - 测试接口
npm 安装 npm install koa --save
npm 安装 npm install mocha mochawesome supertest --save-dev
mochaRunner中配置
mochaTest.spec.js写对接口的测试语句
nodeServer创建基础node接口
执行npm 写入的测试指令npm run mochaTest 可以查看doc中生成的报告。
*******************

# 3. e2e
*****************
rize: 安装npm install rize puppeteer --save-dev   安装puppeteer时, 可能无权限, 使用cnpm安装即可
node运行代码./qa/e2e/baidu.spec.js即可。
*****************

# 4. 单元测试: 
******************
1. 目的: 开发者能够让开发者明确知道代码结果
2. 原则: 单一职责, 接口抽象, 层次分离
3. 断言库: 保证最小单元是否正常运行检测方法
4. 测试风格: 测试驱动开发(TDD), 行为驱动开发(BDD)均是敏捷开发方法论。
    TDD关注的是所有功能是否被实现(每一个功能都必须有对应的测试用例)suite配合test利用assert('tobi' == user.name)
    BDD关注整体行为是否符合整体预期, 编写的每一行代码都有目的提供一个全面的测试用例集。
5. 单元测试框架: better-assert(TDD), should.js(BDD), expect.js(BDD), chai(TDD BDD双模), jasmine.js(BDD), nodejs本身集成require()
6. 单元测试运行流程: before => beforeEach => it(测试用例的应用) => after => afterEach
    每个测试用例组通过describe进行设置
    before单个测试用例it开始前; beforeEach每个测试用例开始前; it定义测试用例并利用断言库进行设置
7. 自动化单元测试 karma自动化(
    npm i -g karma;
    npm i karma-cli --save-dev;
    npm i karma-chrome-launcher --save-dev
    npm i karma-phantomjs-launcher --save-dev
    npm i karma-mocha --save-dev
  )runner集成phantomJS无刷新
8. 报告和单测覆盖率检查(npm i karma-coverage --save-dev): coverageReporter: {type: 'html', dir: 'coverage/'}代码覆盖测试率生成结果
******************
# 5. 性能测试
*********************
1. 基准测试:面向切面编程AOP无侵入式统计;
2. Benchmark基准测试方法, 它对测试有着严密的抽样过程, 执行多少次取决于采样到的数据能否完成统计, 根据统计次数计算方差;
3. 压力测试: 吞吐率, 响应时间, 并发数 => 反应服务器的并发处理能力;
4. PV网站当日访问人数, UV独立访问人数; 压力测试换算公式QPS(每秒处理请求数) = PV/t; PV请求, t时间
5. 常见压力测试工具ab, siege, http_load
*********************
# 6. 安全测试: XSS; SQL; CSRF;
# 7. 其他简介知识:
**********
selenium前端的自动化测试
protractor配合selenium-standalone进行angular测试
webdriver.is
冒烟测试-自由测试的一种, 找到一个bug开发修复, 然后专门针对此bug, 节省时间但覆盖率低。
回归测试: 修改一处对整体功能测试, 一般配合自动化测试
jslint与jshint - 规范代码, 检测js代码标准, 保证团队代码规范- 搭配自动化任务管理工具完善自动化测试
***************