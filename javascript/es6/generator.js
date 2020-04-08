// generator专题

function *myFirstGenerator(){
  yield 1;
  yield 2;
  yield 3;
  const whatsThis = 123 + (yield 1234);
  // console.log(whatsThis) // NaN;
  return 'generator return'; // done 时候才返回 若无return，这done时候的value是undefined。
  yield 999; // 同普通函数，return后面的是不会执行的。
}
const generatorFirstResult = myFirstGenerator(); // 调用后，函数并不执行; 返回的是内部指针对象。

// console.log(generatorFirstResult.next()) // {value: 1, done: false}
// console.log(generatorFirstResult.next()) // {value: 2, done: false}
// console.log(generatorFirstResult.next()) // {value: 3, done: false}
// console.log(generatorFirstResult.next()) // {value: 'generator return', done: true}

for (let x of myFirstGenerator()){ // generator执行后可直接遍历。
  // console.log(x); // 1, 2, 3  => return的结果，不属于遍历结果。
}

// generator函数next运行逻辑： 执行到yield则暂停并将yield语句的值返回对象的value, 继续调用则继续去捕捉下一个yield

// generator函数可以不用yield; 但普通函数不可以使用yield
function* noYield(){
  // console.log('我执行了');
}
const yieldNoFunc = noYield();
setTimeout(()=>yieldNoFunc.next(), 2000); // 可以利用该方式实现部分插件中的delay效果。


function *foo (x){
  const y = 2 * (yield (x + 1));
  const z = yield ( y / 3);
  return (x + y + z);
}
const fooGen = foo(12);
// for (let i of fooGen){ // yield 默认返回值为undefined;
//   // console.log(i); // 13, NaN
// }
fooGen.next(10); // 12 + 1 => 13
fooGen.next(20); // 2 * 20(上一个yield(x + 1)指定的返回值) / 3 => 13.333333
fooGen.next(100); // 12 + 40 + 100 => 152
// 若需要指定返回值，调用fooGen.next(setYield); 通过setYeild变量可以设置上一个yield的返回值。=> 用于在运行不同阶段注入不同值调整函数行为。


