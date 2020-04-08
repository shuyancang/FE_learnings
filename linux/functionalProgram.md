# 函数式编程专题

## 1. 函数式编程思维
* 函数式编程 - 范畴论的数学分支, 一门很复杂的数学, 认为世界上所有概念体系都可以抽象出一个个范畴
* 彼此存在某种关系的概念, 事物及对象等都构成范畴, 任何事物只要找出他们的关系, 就能定义
* 箭头表示范畴成员间关系, 态射(morphism); 同一个范畴的所有成员, 就是不同状态的"变形"(transformation); 一个成员可以转化为另一个成员通过态射。
基础理论: 
> 1. λ(lambad x = x * 2)演算, 一套20世纪三十年代引入的用于研究函数定义, 应用及递归的形式系统;
> 2. 函数式编程并不是用函数来编程, 也不是传统的面向过程编程, 主旨在于将复杂函数复合成简单的函数(计算理论, 递归论, λ演算), 运算过程尽量写成系列嵌套的函数调用;
> 3. js是披着C外衣的lisp
> 4. 随着react高阶函数逐步升温
函数思想: 函数是一等公民; 只用表达式, 不用语句; 没有副作用; 不修改状态; 引用透明(函数运行只靠参数);
> 1. 函数是一等公民: 与其他数据类型一样处平等地位, 可赋值给其他变量也可作为参数传入另一函数, 或作为别的函数的返回值;
> 2. 不可改变量, 函数式编程中,我们通常理解的变量也被函数替代, 函数式编程中变量仅代表某个表达式, 变量不能被修改, 所有变量只能被赋一次初值;
> 3. 最常用的函数是编程方法: map, reduce

## 2. 函数式编程常用核心概念
* 专业术语: 相关demo代码参看./functionalProgram/demo1.js
*************
> 1. 纯函数: 相同输入得到相同输出, 没有任何可观察副作用且不依赖外部环境的状态(Array.slice等。);
> 2. 幂等性: 指执行无数次后还具有相同效果,同一的参数运行一次应该与连续运行两次结果一致。幂等性在函数式编程中与纯度相关, 但又不一致;
> 3. 偏应用函数: 传递给函数一部分参数来调用, 让它返回一个函数去处理剩下函数; 偏函数只能处理能与至少一个case语句匹配的输入, 不能处理所有输入; 
> 4. 函数柯里化: 通过偏应用函数实现-传递给函数一部分参数来调用它，返回一个函数去处理剩下的参数;事实上柯里化是一种"预加载"函数方法, 通过传递较少参数得到一个已经记住这些参数的新函数, 某种意义上讲是一种对参数的缓存, 是一种高效编写函数的方法;
> 5. 函数组合: 纯函数, 以及如何把它柯里化写出的洋葱代码h(g(f(x))),为了解决函数嵌套问题, 需要用到函数组合
> 6. point Free - 把一些对象自带的方法转化成纯函数, 不要命名转瞬即逝的中间变量 => 帮助减少不必要命名, 代码保持简洁通用.
> 7. 命令式代码: 一条一条指令执行动作; 声明式: 写表达式来声明我们想干什么；函数式编程一个好处就是: 这种声明式代码对无副作用纯函数, 不用考虑函数内部, 专注编写业务代码.优化代码时, 只需集中在稳定坚固的函数内部即可。不纯的函数: 产生副作用或依赖外部, 使用时需考虑副作用, 复杂系统中是极大的负担。
> 8. 惰性求值, 惰性函数, 惰性链
> 9. 高阶函数: 函数做参数, 把传入的函数做一个封装, 返回这个封装函数达到更高程度的抽象(一等公民, 以函数做参数, 返回一个函数)
> 10. 尾部调用优化PTC: 函数内部最后一个动作是函数调用。该调用的返回值直接返回给函数。
>> * 函数调用自身为递归, 但若尾部调用自身则为尾递归。
>> * 递归容易发生堆栈溢出若使用尾递归优化将递归变为循环就不会出现堆栈溢出;
>> * 尾递归的调用过程是线性的自动进入下一个栈。通过为递归优化,js代码在解析成为机器码时会向while看齐, 即尾递归同时拥有数据表达能力和while效能;
>> * 尾递归的判断标准: 函数运行最后一步是否调用自身, 
>> * 如今浏览器未完全支持尾递归调用优化, 其一引擎层面消除递归是隐式行为, 程序员意识不到, 其二堆栈信息丢失开发者难以调试 => 可以选择把递归写成while
> 11. 范畴与容器
>> * 范畴可以想象成一个容器, 包含value与value的形变关系function; 范畴论使用函数表达范畴之间的关系;
>> * 伴随范畴论发展, 出现一整套函数运算方法, 这套方法最初用于数学计算后来在计算机实现, 变成了今天的函数式编程
>> * 本质上函数式编程只是范畴论的运算方法, 与微积分, 数学逻辑, 行列式是同一类, 但碰巧能用来写程序。
>> * 函数式编程要求函数必须是纯函数： 他是一种数学运算, 原始目的就是求值, 不做其他事情。
>> * 函数不仅可以在同一范畴中进行值的转换, 还能降一个范畴转成另一个范畴, 这就涉及到了函子(Functor)
>> * 函子是函数式编程最重要的数据类型, 也是基本的运算单位和功能单位。它首先是一个容易, 包含值和形变的关系。
>> * 函子形变关系可以依次作用于每一个值, 将当前容器变形成另一个容器
>> * $(...)返回的对象并非原生DOM对象, 而是对原生对象的一种封装, 在某种意义上就是一个"容器"(但并不函数式)
>> * Functor是一个对函数调用的抽象, 我们赋予容器自己调用函数的能力, 将东西装入容器, 只留出一个借口map给容器外的函数, map一个函数时, 让容器自己来运行这个函数, 容器就可以自由选择何时何地如何操作这个函数。故而可拥有惰性求值、错误处理、异步调用等特性；
>> * 任何具有map方法的数据结构都可以当做函子的实现
>> * 函数式编程的一般约定: 函子有一个of方法, 函子的标志是容器具有map方法将容器的每个值映射到另一个容器;
>> * 函子具有对外接口map方法, 各种函数作为运算符, 通过接口进入容器引发容器的值变形, 因此学习函数式编程实际就是学习函子的各种运算, 由于可以将运算方法封装在函子里面, 因此衍生出不同类型的函子, 有多少种运算就有多少种函子, 函数式编程就变成了运用不同函子解决实际问题
> 13. 容器能做的很少, 其中try/catch/throw并不是纯的, 因为它从外部接管了我们的函数, 并在函数错误时抛出了返回值; 而Promise可以调用catch集中处理
> 14. 事实上Either并不只是用来做错误处理的, 它表示了逻辑或(范畴学的coproduc)
> 15. if...else是最常见运算之一, 函数式编程里, 使用Either函子表达。Either函子内部有Right右值(正常情况下)和Left左值(右值不存在时使用的默认值)。
> 16. Left可以让调用链任意环节错误立刻返回到调用链的尾部, 给错误处理带来极大的方便;
> 17. AP因子: 函子包含的值, 可能是函数.
> 18. IO的__value是一个函数,将不纯的操作(IO, 网络请求, DOM)包裹到函数内, 从而延迟这个操作的执行, 可以认为IO是被包裹的操作的返回值。(IO可以算作惰性求值); IO的负责了调用链的不纯的操作;
> 19. Monad是一种设计模式, 表示将一个运算过程通过函数拆解成相互连接的多个步骤, 只要提供下一步运算所需的函数, 整个运算就自动进行; Promise就是一种Monad.
*************

## 3. 当下函数式编程最热的库
* 流行的函数式编程库: RxJS, cycleJS, lodashJS, lazy, underscoreJS, ramdajs;
* Rxjs所有的外部输入都被视作一种事件流; 响应式编程是继承自函数式编程, rxjs中把副作用问题推给了订阅者来解决。
* cycle.js是一个基于rxjs的框架, 是一个彻彻底底的FRP理念的框架, 与react一样支持virtual DOM和jsx语法, 但还未看到大型的应用经验。
* underscore.js是一个js工具库, 提供了一整套函数式编程的实用功能但没有扩展任何的js内置对象.
* lodash.js是一个具有一致接口, 模块化, 高性能等特性的js工具库, 是underscore的fork。 采用延迟计算, 可以进行优化而提升其执行性能。
*  Ramdajs: 优秀的js工具库, 更加函数式。ramda提供的函数全是curry则没有默认参数可选参数; 推崇pointfree使用简单函数组合实现复杂功能; 有个参数占位符R._减轻函数在pointfree中参数位置问题, 相比underscore和lodash更加干净。

## 4. 函数式编程的实际应用场景
* 易调试: 函数式编程每个符号都是const, 没有函数有副作用, 决定函数执行结果的唯一因素就是参数;
* 函数式编程不考虑死锁(deadlock), 不存在锁线程的问题, 可以放心把工作分摊到多个线程部署"并发编程";
* 函数式编程中所有状态就是传给函数的参数, 参数存储在栈上, 使得软件热部署十分简单, 只要比较一下正在运行的代码获取diff, 以diff更新现有代码即可完成热部署;
* 单元测试: 严格函数式编程, 对被测试程序的每个函数都只需在意参数而不必考虑函数调用顺序。是单元测试的wet dream;

## 5. 总结与补充
* 函数式编程不是灵丹妙药, 是现有工具箱的自然补充-带来了更高的可组合性, 灵活性及容错性;
* redux核心理念也是状态机和函数式编程
* 函数式编程与OOP也只是编程范式的一种, 函数式编程是通过纯函数及组合降低系统复杂度;OOP是靠良好的封装, 继承多态和接口定义。
