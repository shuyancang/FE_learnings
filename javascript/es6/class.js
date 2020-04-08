

//  1. class基础
const methodName = 'method';

class Game{
  constructor(initMoney, initPower){ // 默认方法; new命令时自动执行 => 不显示定义时默认添加一个空方法constructor(){}
    this.money = initMoney;
    this.power = initPower;
  } // 方法默认返回实例对象this;

  showMoney(){
    console.log(this.money);
  }

  addMoney(money){
    this.money = this.money + money;
    console.log(this.money);
  }

  showPower(){
    console.log(this.power);
  }

  addPower(newPower){ // 
    this.power = { ...this.power, ...newPower };
    console.log(this.power);
  }

  [methodName](str){
    console.log(`${methodName}----${str}`);
  }
}
// typeof Game: function 实际是 Function-构造函数
const game1 = new Game(1, {a: '技能a'}); // class必须使用new创建实例, 参数传入constructor内初始化。
const game2 = new Game(100, {b: '技能b'});

// game1.showMoney();
// game1.addMoney(10); // 实例方法调用 
// console.log(Game.prototype); // 实例方法的实质是挂在prototype中。即: Game.prototype.constructor === Game
// console.log(Object.keys(Game.prototype)); // []; class的实例方法，不可枚举。
// console.log(Object.getOwnPropertyNames(Game.prototype)); // constructor, showMoney, addMoney .... 
// game1.showPower();
// game1.addPower({ aa: '技能二到手'});
// game1[methodName]('动态方法'); // 可用该方式实现在class外部实现部分动态设定方法名。< = > 方法沟通。

// game2.showMoney();
// game2.addMoney(100);
// game2.showPower();
// game2.addPower({ bb: '技能bb到手'});

// 2. class 的私有方法

const ownFun = Symbol('ownFun');

class Foo {
  constructor(){ // constructor显示指定return后，new的对象原型链不归属于Foo
    return Object.create(Function);
  }
  innerFun(){
    console.log('foo innerfun')
  }
  self(param){
    selfFun.call(this, param); // 实际上将selFun作为一个Foo内部的私有方法，实例无法调用。
  }

  [ownFun](){ // 私有方法实现方式二;
    console.log('利用symbol的唯一性实现私有方法');
  }
}

function selfFun(param){ // 私有方法实现方式一
  return this.param = param;
}

// console.log(new Foo() instanceof Foo); // false: Foo 的constructor返回值已非实例this;
// console.log(Foo.innerFun()) // error 构造函数不可以直接使用方法/调用。

// 3. class继承;

class SubGame extends Game { // es6继承实质先创造父类的实例对象this后, 用子类构造函数修改this;
  constructor(...props){ // 默认效果。
    super(...props); // super(x, y) => 实际上就是调用Game的constructor(x, y)方法以获取父类属性/方法.
    this.myOwn = 199;
  }
  subInfo(){ // 继承的class显示调用constructor时若不写入super不能调用this;
    // super.showPower(); // 作为对象调用的super代表的是父类，可以调用父类实例的所有属性和方法
    // console.log(this);
  }
}
const subGame = new SubGame(22, 33); // 若无constructor; 默认会将将参数带入constructor的super调用。
subGame.subInfo();

// console.log(SubGame.__proto__ == Game) //true 子类__proto__ 指向父类
// console.log(SubGame.prototype.__proto__ == Game.prototype) //true 子类prototype方法继承 指向父类 prototype;
// SubGame.prototype.__proto__ = Game.prototype;

class myClassA{}
myClassA.__proto__ === Function.prototype // true myClassA直接继承自Function
myClassA.prototype.__proto__ === Object.prototype // true 
// console.log(new myClassA()) // {}  A调用后，返回的是一个空对象 故prototype__proto__ 指向Object

class myClassB extends null {}
// console.log(myClassB.__proto__ === Function.prototype) // true myClassB直接继承自Function
// console.log(myClassB.prototype.__proto__ === undefined) // true
// myClassB 调用后返回的对象不继承任何方法, 因此myClassB.prototype.__proto__不存在。
// console.log(new myClassB())

class myClassC extends null { // 与myClassB相同。
  constructor() { return Object.create(null); }
}

class InnerGame extends SubGame{

}
// console.log(myClassC.__proto__ === Function.prototype) // true 
// console.log(myClassC.prototype.__proto__ === undefined) // true
// console.log(Object.getPrototypeOf(SubGame) === Game) // true 用于判断一个类是否直接继承了另一个类。
// console.log(Object.getPrototypeOf(InnerGame) === Game) // false 
// console.log(Object.getPrototypeOf(InnerGame) === SubGame) // true 

// class中的super关键字: 作为函数调用是super(a, b)代表父类的构造函数; 作为对象调用super.method()此时代表的是父类，可调用的是父类的属性/方法

class GenCalss {
  constructor(...arg){
    this.arg = arg;
    // console.log(new.target) // 返回new命令作用域的那个构造函数.若函数非new调用，new.target 返回undefined;
    // new.target在子类继承父类时, new.target返回的是子类。
  }
  staticParam = 'ssssssskkkkkk'; // 不生效的静态属性 => 但在React中支持

  static myFunc(){ // 静态方法, 实例不可调用,直接通过类进行调用。静态方法可以被子类继承。
    return 'hello';
  }

  * [Symbol.iterator](){ // generator函数 => 布置了一个遍历器
    for(let info of this.arg){
      yield info;
    }
  }

  myOuterFunc(){
    // console.log(GenCalss.myFunc()) // 静态方法执行。
  }

  myOwnerValue(){
    // console.log(GenCalss.staticParam) // undefined 不生效
    // console.log(GenCalss.propName) // '123abc'
  }
}
GenCalss.propName = '123abc' // 静态属性。
const generatorInfo = new GenCalss('a', 'b', 12, 'null', null);
for (let x of generatorInfo){
  // console.log(x) 依次默认调用实例的[Symbol.iterator]方法进行遍历。
}
generatorInfo.myOuterFunc(); // hello
// generatorInfo.myFunc(); // throw error
generatorInfo.myOwnerValue(); // 

function Target(name){
  if (new.target === Target){ // new.target 调用方式。
    this.name = name;
  } else {
    throw new Error('请使用new生成实例。');
  }
}










