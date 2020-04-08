

// js的class实现。

function Car (color) { // new执行时, 函数体的基础表达式可理解为自动出现construct
  this.color = color; // => php中放在construct中。js中自动执行。
}

Car.prototype.speedUp = function(){
  // console.log(this.color + '车加速起来了！！！')
}

var s = new Car('black'); // new + Function => 实例
// console.log(s.color); // black;
// console.log(s.speedUp());

var Mini = function(miniColor){
  Car.call(this, miniColor); // php中类似使用了parent::;
}

var _protoType = Object.create(Car.prototype); // 创建一个父类原型链的副本，作为子类继承后的私有原型链。
_protoType.constructor = Mini; // 修正继承的原型链constructor指向父类的错误。
Mini.prototype = _protoType;
Mini.prototype.gogogo = function(){ // 自己创建的方法。
  // console.log(11111);
}
var miniCar = new Mini('green');

