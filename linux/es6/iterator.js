
// iterator遍历器 => 本质上是一个指针对象。
// iterator为所有数据结构提供一种统一访问机制即 for...of循环。 for...of会自动寻找iterator接口。也可以使用while循环遍历(while(!it.done){...})。
// 数组, 类数组对象, Set, Map原生具备iterator接口。

const arr = [1, 2, 'a', 'b'];
const makeIterator = (arr) => { // 最基础的iterator模拟
  let nextIndex = 0;
  return {
    next: () => {
      return arr[nextIndex++];
    }
  }
}
const points = makeIterator(arr);

points.next(); // 1
points.next(); // 2
points.next(); // 'a'
points.next(); // 'b'
points.next(); // undefined
points.next(); // undefined
points.next(); // undefined

// 默认的Iterator接口部署在数据结构的Symbol.iterator属性。
const itFunc = arr[Symbol.iterator]();
itFunc.next() // {value: 1, done: false}
itFunc.next() // {value: 2, done: false}
itFunc.next() // {value: 'a', done: false}
itFunc.next() // {value: 'b', done: false}
itFunc.next() // {value: undefined, done: true}
itFunc.next() // {value: undefined, done: true}
itFunc.next() // {value: undefined, done: true}

// 对象添加Iterator
const obj = {
  data: ['a', 'b', 'c'],
  [Symbol.interator](){
    const self = this;
    let index = 0;
    return {
      next(){
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done:false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}


// 类数组添加
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

const likeArrayList = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
}

for (let x of likeArrayList) {
  // console.log(x) // 'a'   'b'     'c'
}


// 普通对象直接部署[Symbol.iterator] = Arr.prototype[Symbol.iterator]无效。


// ..., 解构赋值, yield *后跟的可遍历结构( yield * [1,2,3,4,])均会自动调用遍历器接口
let generator = function * () {
  yield 1;
  yield * [2, 3, 4];
  yield 222222
}
const itGene = generator();
itGene.next(); // {value: 1, done: false}
itGene.next(); // {value: 2, done: false}
itGene.next(); // {value: 3, done: false}
itGene.next(); // {value: 4, done: false}
itGene.next(); // {value: 222222, done: false}
itGene.next(); // {value: undefined, done: true}

// 字符串也是类数组对象，具有iterator接口。
let str = 'afjlskjflkwejf';
const strIterator = str[Symbol.iterator]();
strIterator.next() // 'a'
strIterator.next() // 'f'
strIterator.next() // 'j'
strIterator.next() // 'l'
strIterator.next() // 's' ......

// 使用Generator可以最简单的实现iterator
const myEasyIterator = {};
myEasyIterator[Symbol.iterator] = function *(){
  yield 1;
  yield 2;
  yield 3;
}
for(let x of myEasyIterator){
  x; // 1, 2, 3
}

// 遍历器对象的return(); throw();
// for of 提前退出，调用return; return 必须返回一个对象。

let testArr = [1, 2, 3];
let testSet = new Set(['a', 'b', 'c']);
let testMap = new Map();
testMap.set('aa', 123);
testMap.set('bb', 222);
testMap.set(undefined, 333);

for (let x of testArr){
  // console.log(x); // 1, 2, 3
}
for (let x of testSet){
  // console.log(x); // 'a', 'b', 'c'
}
for (let x of testMap){
  // console.log(x); // ['aa', 123], ['bb', 222], [undefined, 333]
}
