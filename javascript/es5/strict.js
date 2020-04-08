'use strict';

// param = 123; // 未申明变量 => 报错

// var obj = { // 严格模式下, 该方法会报错, 但现有浏览器不会报错。
//   test: 1,
//   test: 2,
//   test: '3'
// };

// var test = 123; // 不可对表达式调用delete
// function testFunc(){}
// delete test;
// delete testFunc;

// function testFunc2(test, test, test){}  // 函数参数名称重复

// 部分保留关键字不可使用

// 不允许使用八进制数字参数和转义字符

// 当this值为null或者undefined时, 该值不会转换为全局对象

// var eval = 10; // eval不能用作标识符

// 无法在语句或块中声明函数 // 部分浏览器不一定实现。

// 如果在eval内声明变量, 不能在函数外部使用该变量;

// 严格模式下, arguments用法用作标识符(变量, 函数名, 参数名), 也不能更改arguments对象的成员的值。 

// 不可使用with with(Math){ x = 1; y = 2 }




