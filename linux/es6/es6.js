
// 1. let const;
let letParam = 12;
const constParam = 12;
// let const 块级作用域。常量无法修改(简单类型不能改值, 复杂类型不能改引用).
// 开发优先使用const(可防止重复申明,符合函数式编程);
// 编译器内部let和const处理机制不同。

// 2. 解构赋值.
const eachArr = [1, 2, 4, 5, 6];
const [fir, sec, thr] = eachArr; // fir===1, sec===2, the===4

// 模板字符串``, 字符串新增语法
const weatherInfo = `今天天气啊${[1,2,3,4].join('++++')}`;
weatherInfo.startsWith('今天') // true
weatherInfo.endsWith('fejwl') // false
weatherInfo.includes('天气') // true
function absFunc(strs, ...values){
  // console.log(strs)
  // console.log(values)
}
absFunc `foor ${'jk'} ${'good'} baring`;

// 3. 数组
const newArr = Array.from('abcd'); // ['a', 'b', 'c', 'd'];

// 4. 对象
let innerKey = 'inner';
const newObj = { // key可用value的变量。
  newArr,
  eachArr,
  [innerKey]: '内部key'
} // 一般对象定义后，尽量不建议随意增加属性. 如果需要增加推荐: Object.assign(newObj, {x: 23})

// NaN == NaN // false
// Object.is(NaN, NaN) // true;
const eat = {
  getEat: () => '鸡腿'
}
const drink = {
  getDrink: () => '啤酒'
}
let sunday = Object.create(eat); // eat挂载至新对象的proto
// console.log(Object.getPrototypeOf(sunday)) // 获取sunday的proto
// console.log(sunday.getEat) // func
Object.setPrototypeOf(sunday, drink); // 修改sunday原型链。
// sunday.__proto__ = drink // 原型构造也可以通过super进行获取。

// 5. 函数
const newFun = () => { // 箭头函数.

}
// console.log(newFun.name); // newFun
// 箭头函数this绑定于上下文, 箭头函数的return可以简写。
window.topPa = 30;
window.innerText = 'window文字变量';
window.aa = '最外层';
const objParam = {
  topPa: '内部',
  innerText: '绑定的变量',
  getPa: () => {
    // console.log(this.topPa)
  },
  getText(){
    // console.log(this.innerText);
  },
  getLong(){
    this.aa = '中间层'
    const qq = {
      aa: '最内层',
      test: () => {
        // console.log(this.aa)
      }
    } 
    qq.test();
  }
}
objParam.getPa() // 30, 箭头函数this获取的是上下文环境作用域, 而不受调用者的变化而变化。
objParam.getText() // '绑定的变量', this谁调用，属于谁
objParam.getLong() // '中间层'
function newFunction(a = 1, {option = true}, ...rest){ // 可以设置默认值, 也可以集合函数参数。
  // console.log(a, option)
}

// 6. iterator 遍历器  + generator
let iterFunc = function *(){
  yield 1;
  yield 2;
  return '123456';
}
const generatorFun = iterFunc();
// console.log(generatorFun.next()) // value 1, done false
// console.log(generatorFun.next()) // value 2, done false
// console.log(generatorFun.next()) // value '123456' done true
// console.log(generatorFun.next()) // value undefined done true
for (let v of newArr) { // 遍历数组
  // console.log(v)
}
// for (let v of objParam) {
  // console.log(v)  // error 不可直接调用。使用Object的keys或者values或者entries处理。不推荐使用for in
// } 

// 8. class 
class Person {
  constructor(age){
    this.age = age;
  }
  skill(){
    console.log(`${this.age}岁，爱打游戏`)
  }
}
class Man extends Person {
  constructor(age){
    super(age);
    this.arr = [12, 34, 56];
  }
  static init(){ // 静态方法。
    console.log('static');
  }
  set level(number){
    this.arr.push(number);
  }
  get level(){
    return this.arr;
  }
}

const wang = new Person(30);
const xiaowang = new Man(50);
// console.log(wang.age)
// console.log(wang.skill())
// console.log(xiaowang.age)
// console.log(xiaowang.skill())
// xiaowang.level = 'xxxx';
// console.log(xiaowang.level);
// Man.init();


// 9. Map, Set数据结构 Set无重复数据集 (集合), Map: 键值一一对应的对象(字典)
let setInit = new Set('b'); 
setInit.add('a');
setInit.add('a');
setInit.add('a');
setInit.add('a'); // a, b
setInit.size; // 2
setInit.has('ddd'); // false
setInit.delete('b') // a
setInit.clear(); // 清空set
// Array.from(setInit) 或者 [...setInit] ; 可以使用for of 进行遍历。

let mapInit = new Map();
const mapStr = 'a', mapArr = [1,2,3], mapObj = {a: 'sjsj'}, mapFun = () => {console.log(111)}; // 任何数据结构，都可以作为map的key
mapInit.set(mapStr, '第一个a属性');
mapInit.set(mapArr, '第二个属性');
mapInit.set(mapObj, '第三个属性');
mapInit.set(mapFun, '第四个属性');
mapInit.size; // 字典长度
mapInit.delete(mapFun); // 移除 => 同样clear清空当前map结构.
// console.log(mapInit.get(mapStr)) // '第一个a属性'
// console.log(mapInit.get(mapArr)) // '第二个属性'
// console.log(mapInit.get(mapObj)) // '第三个属性'
// console.log(mapInit.get(mapFun)) // '第四个属性'
// for (let key of mapInit){ // 可以for of直接循环
//   console.log(key)
// }

// 10. module // system.js可做到相似效果。当前module使用虽普及但浏览器直接使用支持性暂不支持。
// import关键字引入, export || export default 输出;


// 11. async与await;
const asyncFunc = async function(){ // async内必须有await; await后接一个promise。
  // const response = await axios.get('....');
  // console.log(response)
}

// 12. 修饰器decorator;
function testable(target){
  target.isTest = true;
}
// @testable
// class MyClass{

// }
// console.log(MyClass.isTest);
//core-decorators 提供常见修饰器： @autobind绑定this; @readonly是的属性或者方法不可写; @override检查子类方法是否正确覆盖父类方法。等其他不常用修饰器。 

// 13. Symbol // symbol生成的唯一。redux的action可用。

// 14. 

