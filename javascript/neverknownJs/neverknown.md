
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