'use strict';

// JSON.parse(jsonText, reviver)
// json格式文本 => json对象; 
// reviver参数是带有key, value两个参数的函数 => 过滤和转换值。

var text = '{"a": "11223", "b": "测试"}';
// var result = JSON.parse(text)
var result = JSON.parse(text, function(key, value){
  if(value - 1 > 0) {
    return value / 100;
  } else {
    return value;
  }
})
// console.log(result);

var obj = {mike: 'good', tony: 'perfect'};
// var jsonText = JSON.stringify(obj);
var jsonText = JSON.stringify(obj, function(key, value){ // return undefined时则不会包含在最终的json字符串中.
  if(value === 'good') {
    return 123;
  } else {
    return value;
  }
}, 'fjewl'); 
// 还可以传入第三个参数space返回的结果有可读性帮助,
// (数字)表明做缩进的json字符串或字符串每个水平上的缩进空格，超过10作为10个字符/字符串 常用于nodejs优化展示
// console.log(jsonText);












