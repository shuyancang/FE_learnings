





function test(a, b){
  var start = 0;
  var end = 0;
  console.log(a - b);
  console.log('这是要测试的函数');
  console.log(end - start);
}

Function.prototype.before = function (fn) {
  var __self = this;
  fn(); // 执行测试回调, 再执行函数本身
  console.log(arguments)
  __self.apply(this, arguments);
}

Function.prototype.after = function(fn) {
  // 先执行本身this, 再执行回调
  var __self = this;
  __self.apply(this, arguments);
  fn();
}

test.before(function(){
  console.log('before');
});

test.before(function(){
  console.log('after');
});

// 以上方式，可以分别在函数执行前和执行后触发。但 test会执行两次 => 将测试函数进行调整 test作为中转, 
// before 和 回调一起送到after
// after 和 回调一起送到before
Function.prototype.before = function (fn) {
  var __self = this;
  return function(){ // 将函数返回出去让after接收
    fn.apply(this, arguments); // 执行测试回调, 再执行函数本身
    return __self.apply(__self, arguments); // 继续传输函数结果.
  }
}

Function.prototype.after = function (fn) {
  var __self = this;
  return function(){ // 将函数返回出去, 可以允许before继续执行。
    var result =  __self.apply(__self, arguments); // 先执行函数本身
    fn.apply(this, arguments); // 再执行测试回调
    return result; // 送出原函数的结果。
  }
}

test.before(function(){
  console.log('this is before');
}).after(function(){
  console.log('now after');
})();











