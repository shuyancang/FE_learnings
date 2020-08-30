
# 1. 上


# 2. 中

## 2.1 类型和语法
* Number.toExponential(dem: 有效位数0 - 100) 指数格式; Number.toPrecision(number: 0 - 100) 指定有效位数的显示位数
* 0xf3 十六进制; 0o31 八进制(Es6以前031也为八进制); 0b11 二进制
* Number.EPSILON - 低精度下的误差浮动; Number.MAX_SAFE_INTEGER(2^53 - 1), Number.MIN_SAFE_INTEGER(2^53 - 1)
* Number.isInteger - 是否整数; Number.isSafeInteger - 是否安全整数
* 位运算 | & ^ >> << 只进行到Math.pow(2, 31)位有符号整数, 不会进行更大的比较
* 可以有 undefined = 2一类的赋值骚操作····但, 绝对不要乱搞·
* void ___ 表达式: 返回一个undefined;
* 使用Number.isNaN() 判断NaN => window.isNaN('foo')为true为一直存在的bug, 
* Infinity为无穷数, js中, 无穷数一旦产生将不可能回归有穷, Infinity / Infinity => NaN; Infinity * 0 => NaN
* Object.is()判断两个参数是否绝对相等, 可以用于区分0, -0(Object.is(-0, 0);保持向量信息); 但尽量使用==, ===(效率更高);
* 值与引用: 简单值赋值传递, 复杂值引用传递, 一个引用不能修改另外一个引用的指向 => 函数的参数传入的困惑(函数体内function foo(arr){ arr.push(4)// 可以作用于参数修改影响外界传入参数, 及直接arr = [3]不会影响外界传入参数})
* 基本类性值不可更改: string ,number, bool均不可更改！function foo(x){x = x + 1} var b = new Number(2); foo(b); b 依然为2实质是b = 2不会被修改

## 2.2 原生函数(String, Number, Boolean, Array, Object, Function, RegExp, Date, Error, Symbol)
* 所有typeof返回值为"object"的对象, 都包含一个内部属性[[class]]

* [[call]]内部属性, Object.prototype.toString.call([1, 2, 3])=>"[object Array]";Object.prototype.toString.call({}) => "[object Object]"; Object.prototype.toString.call(function foo(){}) => "[object Function]";Object.prototype.toString.call(1) => "[object Number]"; Object.prototype.toString.call('2') => "[object String]"; Object.prototype.toString.call(true) => "[object Boolean]"; Object.prototype.toString.call(undefined) => "[object Undefined]"; Object.prototype.toString.call(null)=> "[object Null]"; Object.prototype.toString.call(Symbol(123)) => "[object Symbol]"; Object.prototype.toString.call(/12/) => "[object RegExp]"
* 比较推荐的直接创建稳定长度数组的方法: Array.applay(null, {length: 3}) 或 Array.from({length: 3}) 或 Array(3).fill(0)
* Symbol 不能带new关键字;
* String.prototype: indexOf, charAt, substr, substring, toUpperCase, toLowerCase, slice, trim;
* Function.prototype: function; Function.__proto__ === Function.prototype
* RegExp.prototype.toString => /(?:)/ 空正则
* Array.prototype: 是一个数组

## 2.2 强制类型转换
* toString基本转化规则null => 'null'; undefined => 'undefined'; true=> 'true' 数字直接转换(若数值极大/极小, 转为指数形式);普通对象返回"[object, Object]";
* 数组的toString方法经过了重定义, 将所有单元字符串化后再用','连接所得。
* JSON.stringify也进行了类型转化(虽然非严格意义), 处理安全的JSON值(undefined, function, symbol和包含循环引用不能处理, 自动忽略, 必须返回时返回null: JSON.stringify([1, undefined, function(){}, 4]) => "[1, null, null, 4]"; JSON.stringify({a: 1, b: function(){}}) => "{"a": 1}"); 当函数定义了toJSON方法时候, JSON.stringify会直接调用toJSON方法进行返回一个默认安全的json结构然后再对其进行默认字符串化, 无toJSON则直接仅仅调用默认转化;
* JSON.stringify(target, replacer, space)第二个可选参数replacer字符串数组/函数参数, 传入后代表对target的哪些属性进行字符串化; 第三个参数space为指定的缩进格式
* toNumber: 基本转化规则: null => 0; undefined => NaN; true => 1/false => 0; "" => 0(parseInt('') => NaN); 对象会首先被转化为相应的基础类型(ToPrimitive, 检查是否有valueOf方法, 有就用该值进行转换, 无就使用toString的返回值, 若valueOf和toString均无返回则产生typeError错误); Object.create(null)生成的对象即无法进行转换报错。
* toBoolean: undefined/null/0/+0/-0/NaN/""等假值转为false, 其余true; 对假值装箱后的对象, 也是true
* 假值对象: document.all-浏览器再特定情况下, 常规js上创建的一些外来值;
* 显示强制类型转换: String(xx), Number(xx); toString(xx), +xx; + new Date() 可以得到一个时间戳;
* 位运算符: 0 | -0 => 0; 0 | NaN => 0; 0 | Infinity => 0; 0 | -Infinity => 0; 先将值强制转换为32位数字再进行位操作; ~x大致等于-(x + 1), 则当x为-1时候得到0, 可以结合indexOf进行使用(str.indexOf() === -1或str.indexOf() >= 0 暴露底层实现, 为抽象渗漏, 应该屏蔽, 使用~str.indexOf()进行判定)
* ~~可以用来截取数值的小数部分, 但只适用于32位数字, 且对负数的处理与Math.floor不同(~~-49.6 = -49); 同样可以使用x | 0的位操作符达到相同给的效果, 但~~操作符优先级高于 (x | 0), 故更推荐使用.
* parseInt()针对字符串, 传入其他类型会被先隐式转为字符串, 然后进行处理输出; parseInt(0.0000008) => "8e-7"输出结果为8; parseInt(false, 16) => "fa lse"的fa为250; parseInt(parseInt, 16) => "function "的f为15; parseInt("0x10") => 16; parseInt("103", 2)=> '10'为2
* 隐式强制类型转换:(string => number, bool => number, ...)若某操作数是字符串或能通过后续操作转为字符串, +号进行拼接工作: 若一个操作项是对象, 对其调用toPrimitive抽象操作, 该抽象操作再调用[[DefaultValue]]; - 0, * 1, / 1可以强制将操作数转为数字;
* Symbol可以显示的转为字符串(String(Symbol('abc'))); 但 Symbol('abc') + ''或 Symbol('abc') - 1隐式转为字符串或数字均报错, 然而!!Symbol('abc')可正常转为bool(true);
* == 允许在相等比较中进行强制类型转换, ===不允许; 他们都会检查操作数的类型; NaN !== NaN, +0 === -0;
******
x == y 的比较规则:
1. x, y一个数字一个字符串时, 字符串变为数字后, 进行数字比较;
2. x, y中有一个是bool类型时, bool将变为数字(0, 1)再与另外一个值比较;
3. null == undefined; 除此以外, 任意值都不与null ,undefined相等
4. 对象与非对象的比较: 将ToPrimitive(对象) 与 非对象进行比较; > 那些诡异的坑: [] == ![]; "" == 0; "" == [null]; "" == [undefined]; 0 == "\n";
5. 根据规范 a <= b 实际上被处理为 !(b < a)即 a 不大于 b; 若要避免a < b发生隐式强制类型转换, 只能确保a, b为统一类型，别无他法；
*******

## 2.3 语法
* 运算优先级: 
******************
1. 都好链接语句时,逗号优先级最低;
2. 短路运算时需特别注意: && 优先级高于 ||; true || false && false时先执行右边;
3. &&, || 优先级高于三元运算符?:;
4. && || 是左关联, ?:是右关联(true?false:true?true:true), =也是右关联(a = b = c = 42);
******************
* try...finally...; try内执行的结果会暂时保留, finally会继续执行; 当try位于函数中且设置了返回值, 会继续执行finally-finally若无返回值或throw, 使用try的返回值, 否则try内返回值无效; 

## 2.4 混合环境 
* 由于浏览器历史遗留问题, 创建带有id属性的DOM元素时, 也会创建同名的全局变量~

## 2.5 异步和性能
* console.log的实现是基于宿主环境, 在有些情况下, console.log一个对象不一定准确(也可能控制台展示和展开不同); 断点可保证正确, 其次使用stringify后console也可;
* Promise.all([]).then(data => {...}); 全部res方才进入then的response, 任意一个rej均直接中断进入then的reject;传入空数组立刻决议;
* Promise.race([]).then(data => {...}); 竞态: 率先res的进入then, 抛弃其他; 任意一个rej则直接中断, 进入then; 传入空数组永远不会决议(pending....);
* new Promise(...).catch: Promise执行链中的错误收集 => 也返回一个promise
* new Promise(...).finally: 决议/拒绝后最终的回调 => 但实际上他依然是返回了一个promise;
* Promise局限性: 错误很容易被忽略; 返回值单一(多值返回需要必须额外进行封装处理); 单决议(事件/数据流无法支持); 无法取消(~网上有不少实现~);
* function () { return new Promise((res, rej) => { ...someCode }) }; 常见的promise
* Promise的可信任性: Promise.resolve()参数中若为一个真正的Pomise(pro01); 则Promise.resolve(pro01) === pro01;可依此来安全的进行第三方工具的.then使用;
* function delay(timer){ return new Promise(res => setTimeout(res, timer))}
* 未定义then中的rej, 若出现错误, 默认throw => 有利于错误的定位与处理; 未定义then中的res(null), 会有默认res => res进行替代继续往后传输;

## 2.6 生成器
* function *foo(x){ return x * (yield 20); }  ====> var it = foo(10); it.next(); it.next(10); it.next(); next输入参数可以作为foo内的yield返回值; yield与next调用有一个不匹配: 第一个next只是进行启动, 传入的参数无任何作用会默认抛弃;
* 迭代器是一个定义良好的接口, 用与从一个生产者一步步得到一系列值;Symbol.iterator
* function *foo(){ while(true){ ... } } ===> var it = foo()可以无限按步骤生成, 也可以通过it.return(20)手动指定停止生成;
* 生成器 + Promise => async + await语法糖;
* 生成器委托yield * 实质就是委托自动迭代
* 生成器的并发, 异步, 递归;
* 另一种: 形实转换程序(thunk)
* 生成器的es5手工转换;


## 2.7 性能
宏观性能部分
* Web Worker(浏览器的h5功能 - 并非js); webworker需要在服务中使用; postMessage, new Worker, onmessage; 
* web worker中, 可以使用importScripts同步引入某些js工具插件; 使用Transferable对象降低传输的性能损耗;
* worker.port.start()初始化Worker的port对象用于通信, 区分worker共享到过个程序实例时的来源; 需要处理connect事件来处理连接;
* SIMD单指令多数据 => 数据并行
* asm.js 特别激进的底层优化; => 数学运算，图形大数据集时候, 可能会考虑的一种写法;
微观性能部分
* new Date().getTime()的局限性: 偶然性, 最优/最差时间难以获取, 精度难以保证;
* Benchmark.js: 功能测试, 性能测试; 每秒运算数, 出错边界, 样本方差;
* 对于微小运算, 在非大量循环的前提下, 进行性能优化, 实际并无实际意义; 对一些微小性能优化(++i/i++; len = arr.length等)引擎可能做了优化有可能做了预料意外的自动优化, 过于纠结于此的取舍同样无任何意义;
* jsPerf.com: 多环境下汇集测试结果, 测试结果可以生成url并分享;
* 需要注意的优化点: 不要从一个函数到另一个函数传递arguments; 尽量将try/catch分离(浏览器对任何有trycatch的函数实现优化都有一些困难);
* 尾调用优化(ES6涉及函数调用的特定性能优化-函数结尾处的函数调用)
* 

# 3. 下

# 3.1 
* 正则的变动: unicode(/u), 虚拟锚点(/y), 影响相关test, match, exec等使用的结果; 
* 获取正则的标识: reg.flags => 'gi'
* 新的各进制字面量: 0o52(八进制-或0O52，也可用052但不推荐~); 0x2a(十六进制-或0X2a), 0b1010(二进制-或0B1010); 通过Number('0O52')可以实现各进制向10进制的转换; ----补充, 可以使用(42).toString(8)实现对各进制的转换
* Unicode字符: 0X000 => 0xFFFF包含标准打印字符, 但此外还有很多拓展字符范围直到0x10FFFF, es6以前只能通过两个特别计算的unicode字符才能使用, 现在可以通过'/u{1D11E}'携带{}进行码点转义;
* unicode规范化: str.normalize();
* charCodeAt在需要支持unicode时使用codePointAt, fromCharCode在需要支持unicode时使用fromCodePoint; 
* Symbol.for + Symbol.keyFor: 全局符号 + 提取符号描述文本;
* Symbol作为键值将不会出现在一般枚举属性(可近似作为私有隐藏键) => getOwnPropertySymbols()
* 内置符号Symbol.iterator可以在可迭代对象内进行默认获取arr[Symbol.iterator];
* 部署自定义的[Symbol.iterator]接口自定义next指定return { value: any, done: bool }
* Class与Function区别: Class不存在提升; Class声明不会创建一个同名全局对象属性(window.SomeClass不存在, window.SomeFunc会创建);
* Super 在构造器中指向父构造器, 在方法中指向父对象;
* 元属性: new target; 在所有函数中可用的魔法值, 一般函数中为undefined;在构造器中指向new实际上直接调用的构造器
* 对象的Symbol.species: 指向当前对象的构造函数, 创建实例时会默认调用这个方法, 使用这个属性返回的函数当作构造函数来创建新的实例对象;
 
# 3.2 typedarray
* buffer: new ArrayBuffer(32); buffer.byteLength;
* bufferView: new Uint16Array(buffer); bufferView.length(视图-类数组)
* new DataView(buffer, byteOffset, byteLength): 视图是一个可以从 二进制ArrayBuffer 对象中读写多种数值类型的底层接口(.setInt16)
* new Int16Array(buffer)
* Int8Array, Unit8Array(也有对应的16位, 32位)
* Float32Array, Float64Array; 可以把他们当做普通数组使用无需转换, 但不能用不合理的方法如修改自身(typedArray元素限制在声明的位数大小中)
* Unit16Array.from() ( TypedArray.from 可以解决位数不够的问题, 转移到更大的数组中); typedarray也有sort方法, 但使用的是默认数字排序方法;

# 3.3 Map & Set
* Map: size, get, set, delete, clear, has, values, entries, keys; new Map(iterator)快捷创建; 
* WeakMap: 对值弱持有, 键销毁对应值销毁;
* Set: add, size, has, delete, clear, values, entries, keys
* WeakSet: 基本同WeakMap, 不保持引用时, 值销毁;

# 3.4 Array新增api
* Array.of: 传入的参数为值, 长度自动生成, 类似于字面量定义数组; 静态方法!
* Array.from: 类数组 转为数组 - 不会有空槽位数组(Array(4), Array.from({length: 4})), 第二个参数是一个映射回调(.map类似)
* copyWithin: 数组中复制一部分到另一部分位置: copyWithin(target,start, end-可选), 任何一个参数为负数都被当做是结束的相对值;
* fill(val, ?start, ?end); find(func, ?customThis); findeIndex(func, ?customthis); keys; entries; values;

# 3.5 Object新增api
* Object.is; 可用于判定NaN, -0等
* Object.getOwnPropertySymbols(): 对象上的符号属性;
* Object.setPrototypeOf(); 行为委托;
* Object.assign(); 属性分配; 不可枚举及非自有属性均不参与赋值;

# 3.6 Math新增api
* 三角函数cosh; acosh; sinh; asinh; tanh; atanh; hypot(平方和的平方根-勾股定理); cbrt; clz32;expm1; log2; log10; log1p; imul; sign(数值符号); trunc(数值的整数部分); fround

# 3.7 Number新增api
* Number.EPSILON 任意两个值的最小差; 浮点精度误差;
* Number.MAX_SAFE_INTEGER 安全最大整数;
* Number.MIN_SAFE_INTEGER 安全最小整数;
* Number.isNaN; Number.isFinite; -与原 全局isFinite函数略有区别-不自动进行类型转换;
* Number.isInteger; 是否整型数
* Number.isSafeInteger: 是否安全整型数

# 3.8 String
* Unicode函数: fromCodePoint; codePointAt; normalize; 
* String.raw: 内置标签函数
* repeat: 字符串复制重复
* startsWith, endsWidth, includes

# 3.9 元编程(操作目标是程序本身的行为特性的编程 - 代码查看/修改自身或修改默认语言特性以此影响其他代码)
* isPrototypeOf; for ... in; function的name; 
* ES6对函数/类的name有一套固定的规则; 默认情况下name不可写但可配置;
* 元属性: new.target指向调用new目标的目标构造器; => 如class内的constructor使用new.target来判断是类本身使用还是其子类型使用
* 公开符号: Symbol.iterator(定义对象的迭代行为); Symbol.toStringTag(字符串化时的标识); Symbol.hasInstance(实例对象值返回一个bool来指定instanceof的结果); Symbol.species(生成新实例时类的内置方法使用哪个构造器); Symbol.toPrimitive(定制toPrimitive强制转换-'default'/'number'/'string'); 正则表达式符号Symbol.match、Symbol.replace、Symbol.search、Symbol.split; Symbol.isConcatSpreadable是否展开传给数组的concat; Symbol.unscopables那些属性在with语句不可暴露为词法变量
* 代理Proxy
**************
* 封装一个普通对象, 在其上注册特殊的处理函数; target-代理对象, key-处理属性, context-上下文对象
* (get, set, deleteProperty, apply, constructor, getOwnpropertyDescriptor, defineProperty; getPrototypeOf; setPrototypeOf; preventExtensions; isExtensible; ownKeys; enumerate; has);
* 部分操作无法拦截(局限性): 部分操作String(obj), 字面量声明, ==操作, typeof输出;
* Proxy.revocable可创建-代理/取消代理操作;
* 两种常见模式-代理在前/后;
* 可利用该特性模拟环形Prototype, 模拟多Prototype继承;
**************     
* Reflect - 持有对于各种可控元编程任务的静态函数;
*************
* Reflect.getOwnPropertyDescriptor; Reflect.defindeProperty; Reflect.getPrototypeOf; Reflect.setPrototypeOf; Reflect.prevenExtensions; Reflect.isExtensible;
* Reflect.ownKeys-目标键的列表; Reflect.enumerate-可枚举键集合的迭代器; Reflect.has-属性是否在对象上; Reflect.apply-调整this调用; Reflect.construct等同于new; Reflect.get提取属性; Reflect.set设置属性; Reflect.deleteProperty删除属性;
* 属性排序, es6中按照[[OwnprpertyKeys]]进行定义; 一般对象键值列出顺序并无保障;
*************

# 3.10
* 特性测试与分批发布
* 尾递归调用
 
 
 
 


