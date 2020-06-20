
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

## 2.3 语法