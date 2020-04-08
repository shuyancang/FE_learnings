
//1.  function 的bind
// Function.prototype.bind(thisArg [, arg1 [, arg2, ...]])
// 返回一个新的函数对象, 改函数对象的this绑定到了thisArg参数上, 这允许你在其他对象链中执行一个函数。

function locate(){
  console.log(this.location);
}
function Maru(location){
  this.location = location;
}
var kitty = new Maru('card board box');
// var locateMaru = locate.bind(kitty);
// locate.call(kitty);
// locate.apply(kitty);
// locateMaru();


//2. this 指针  关键： 谁调用, this指向谁
// window.m = 100;
// function test(){
//   console.log(this.m);
// }
// test(); // 相当于window.this(); 100
// this.m = 'window m'
// var obj = {
//   m: 'm this',
//   test: function(){
//     console.log(this.m)
//     return function(){
//       console.log(this.m) // 闭包, 此时this指向外部。
//     }
//   }
// }
// obj.test(); // obj调用,this指向obj => 'm this' 
// (obj.test())(); // 闭包的函数this在外侧。'window m' window[obj.test()]()
// DOM事件的this
// function domClick(){
//   console.log(this.style.color);
// }
// document.getElementById('btn').onclick = domClick; //this指向被点击元素
// this.a = 1000;
// function thisTest(){
//   this.a = 1;
// }
// thisTest.prototype.geta = function(){
//   return this.a;
// }
// var p = new thisTest();
// console.log(p.geta); // a


// 3. 变量作用域, 闭包
// js为函数级作用域: 函数内部的变量只能内部访问, 外部不可访问函数内部变量, 函数内部可访问外部变量。
function scope(){
  if(false){
    var i = 1;
  } else {
    var i = 100;
  }
  // console.log(i);
}
scope();
// console.log(i) // err.
var param = 100;
function scope2(){
  // console.log(param);
  var param;
}
scope2(); // undefined => 函数内声明的param会替换外部。
// 闭包： 返回一个函数，返回的函数使用了执行函数的内部变量。让外部能够访问函数内变量。闭包可能造成内存泄漏。


// 4. 按值传递 + 按引用传递
function trans(num){
  var num = num +1; 
  return num;
}
var num  = 1;
// console.log(trans(num)) // 2 此处在函数执行时为值传递,原num不会变化。
// console.log(num)  // 1; 
function transObj(obj){
  obj.test = '地址'; // obj对内存的地址指向同一个位置。
  return obj;
}
var transParam = {
  name: '张'
}
// console.log(transObj(transParam)); // 此处按引用传递，transParam会被同时修改。
// console.log(transParam)

// object, array按引用传递
// string, number, boolean 按值传递




