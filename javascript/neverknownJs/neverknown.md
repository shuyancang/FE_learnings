
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

