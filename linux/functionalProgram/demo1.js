// 纯函数优缺点

// 纯函数
// import _ from 'lodash';
// var sin = _.memorize(x => Math.sin(x));
// var a = sin(1);
// var b = sin(2);
// 纯函数可以降低系统复杂度, 且有其他额外特性, 如可缓存性等


// var min = 18;
// var checker = age => age > min; // 不纯函数
// var checkerPure = age => age > 18; // 纯函数
// checher不纯函数不仅取决于变量age, 还有外部依赖的变量min
// checkerPure将18硬编码进入函数内部, 拓展性较差, - 柯里化优雅的函数式可以解决。

// 偏应用函数
// const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs); // f执行的函数还需要第二部分的参数
// const addFun = (a, b, c) => a + b + c;
// const fivePlus = partial(addFun, 2, 3)
// fivePlus(4);
// bind也可实现偏应用函数
// const addMore = addFun(null, 2, 3); // (c) => 2 + 3 + c;

// 函数的柯里化
// var checkage = min => (age => age > min ? '12311212': 'jfkelwfjewl');
// checkage(18)(22);
// 柯里化前
// function add(x, y){
//   return x + y
// }
// 柯里化后
// function addX(x){
//   return function(y){
//     return x + y;
//   }
// }

// 函数组合
// const compose = (f, g) => (x => f(g(x)));
// var first = arr => arr[0];
// var reverse = arr => arr.reverse();
// var last = compose(first, reverse);
// last([1,2,3,4,5,6])

// point free
// const f = str => str.toUpperCase().split();
// var toUppserCase = word => word.toUppserCase();
// var split = x => (str => str.split(x));
// var f = compose(split(' '), toUppserCase);
// f('abcd efg');

// 声明式编程与命令式编程
// let ceos = [];
// for (let i = 0; i< companies.length; i ++){
//   ceos.push(companies[i].ceo)
// }
// let ceos = companies.map(e => e.ceo);

// 高阶函数
// var addFun = function(a, b){
//   return a + b;
// }
// function math(func, arr){ // 封装参数func，使其执行参数2的前两项
//   return func(arr[0], arr[1]); 
// }
// math(addFun, [1, 2]);


// 尾调用优化
function factorial(n) { // 普通递归 阶乘
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
function factorialBetter(n, total = 1) { // 尾调用优化
  if (n === 1) return total;
  return factorialBetter(n - 1, total * n);
}
function sum(n, total) { // 尾调用优化求和。
  if (n === 1) {
    return n + total;
  }
  return sum(n - 1, n + total);
}

// 闭包 
function makePowerFn(power){
  function powerFn(base){
    return Math.pow(base, power);
  }
  return powerFn;
}
// 以上尾调用虽然栈上的调用帧被释放，但堆上的作用域未被释放, 估power依然可以被powerFn访问, 这就形成了闭包。

// 容器与函子Functor
// var Container = function(x) {
//   this.__value = x;
// }
// Container.of = x => new Container(x); // 函数式编程一般约定, 具有一个of方法
// Container.prototype.map = function(f){ // 函子的标识: 具有map方法, 将容器的每一个值映射到另一个容器
//   return Container.of(f(this.__value));
// }
// Container.of(3).map(x => x + 1) // Container(4)
//   .map(x => 'result is' + x) // Container('result is 4')

// class Functor{ // es6的函子基础写法
//   constructor(val){
//     this.val = val;
//   }
//   map(f){
//     return new Functor(f(this.val))
//   }
// }

// 防止传入null的函子写法:
// var Maybe = function(x){
//   this.__value = x;
// }
// Maybe.of = function(x){
//   return new Maybe(x);
// }
// Maybe.prototype.map = function(f) {
//   return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
// }
// Maybe.prototype.isNothing = function (){
//   return (this.__value === null || this.__value === undefined);
// }

// class Either extends Functor(){
//   constructor(left, right){
//     this.left = left;
//     this.right = right;
//   }
//   map(f){
//     return this.right ? Either.of(this.left, f(this.left)) : Either.of(f(this.right), this.right);
//   }
// }
// Either.of = function(left, right){
//   return new Either(left, right);
// }

// var Left = function(x){ // left与right的异同。
//   this.__value = x;
// }
// var Right = function(x){
//   this.__value = x;
// }
// Left.of = function (x) {
//   return new Left(x);
// }
// Right.of = function(x){
//   return new Right(x);
// }
// Left.prototype.map = function(f){ return this; } // left时候,map将容器重新抛出
// Right.prototype.map = function(f) { return Right.of(f(this.__value)); }

// var getAge = user => user.age ? Right.of(user.age) : Left.of('Error!');
// getAge({name: 'stark', age: 21}).map(age => 'age is ' + age); // => Right('age is 21)
// getAge({name: 'wang'}).map(age => 'age is ' + age); // => Left('error')


// class Ap extends Functor{ Ap函子
//   ap(F){
//     return Ap.of(this.val(F.val));
//   }
// }
// Ap.of(addTwo).ap(Functor.of(2));

// import _ from 'lodash';
// var compose = _.flowRight;
// var IO = function(f){ // IO操作
//   this.__value = f;
// }
// IO.of = x => new IO(_ => x);
// IO.prototype.map = function(f){
//   return new IO(compose(f, this.__value));
// }
// class IO extends Monad{
//   map(f){
//     return IO.of(compose(f, this.__value));
//   }
// }
// var fs = require('fs');
// var readFile = function(filename){
//   return new IO(function(){
//     return fs.readFileSync(filename, 'utf-8');
//   })
// }