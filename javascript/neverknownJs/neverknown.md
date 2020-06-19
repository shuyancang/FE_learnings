
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
* JSON.stringify也进行了类型转化(虽然非严格意义), 处理安全的JSON值(undefined, function, symbol和包含循环引用不能处理, 自动忽略, 必须返回时返回null: JSON.stringify([1, undefined, function(){}, 4]) => "[1, null, null, 4]")
* 
* 

## 2.3 语法