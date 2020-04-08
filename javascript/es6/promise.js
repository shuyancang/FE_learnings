// promise 专题。

// 1. Promise
// pending => resolved(完成) / rejected(失败) 只有异步操作的结果才可以决定当前是哪一种状态,任何其他操作都无法改变。
// promise缺点: 无法取消; pengding状态无法获取进展 < = > 反复重复的事件, 使用stream模式比promise更好

const query = (time) => {
  return new Promise((res, rej) => {
    $.ajax({
      url: `http://localhost/myphp/test.php?time=${time}`,
      type: "get",
      success: (params) => {
        res(params);
      },
      error: (error) => {
        rej(error);
      }
    })
  })
}

// query(1200).then(res=>{
//   console.log(res);
// }).catch(err => console.log(err))

// 利用promise 对ajax嵌套的最初始封装:  
const fetch = ({ url, type = 'get', ...rest }) => {
  return new Promise((res, rej) => {
    $.ajax({
      url,
      type,
      ...rest,
      success: (params) => {
        res(params);
      },
      error: (error) => { // 对error进行进一步封装。
        rej(error);
      }
    })
  });
}

fetch({
  url: `http://localhost/myphp/test.php?time=${11223344}`,
}).then((data) => {
  // console.log(data);
}).catch(error => {
  // console.log(error);
})

// promise的then方法返回的是一个新Promise实例, 因此可以采用链式写法, fetch().then((data) => fetch(....)).then()

// promise的catch方法捕获的是promise中的rejected; 不建议在then内对第二个参数进行捕获处理，同意在then()后的catch()进行处理。

// const p1 = new Promise((res, rej) => { /**.......... */  })
// const p2 = new Promise((res, rej) => { /**.......... */  })
// const p3 = new Promise((res, rej) => { /**.......... */  })
// const proAll = Promise.all([p1, p2, p3]);

Promise.all([1,2,3,4,5,6].map(id => fetch({url: `http://localhost/myphp/test.php?id=${id}`}))).then(data => {
  // console.log(data)
  // data: [result1, result2, result3, result4, result5, result6]
}).catch(error => {
  // console.log(error)
})

// Promise.all 全resolved时then内执行，返回值为所有promise实例执行结果的集合
// Promise.all 只要有一个rejected, 就会被catch捕获。


Promise.race([1,2,3,4,5,6].map(id => fetch({url: `http://localhost/myphp/test.php?id=${id}`}))).then(data => {
  // console.log(data)
  // data: firstResult
}).catch(error => {
  console.log(error)
})
// promise.race返回多个promise实例执行中第一个resolved的结果。可以利用该方法对调用超时进行比较。
// var p = Promise.race([
//   fetch('/resource-that-may-take-a-while'),
//   new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('request timeout')), 5000)
//   })
// ])
// p.then(response => console.log(response))
// p.catch(error => console.log(error))


// Promise.resolve(/** params*/)
// Promise.reject(/** params*/)
// resolve和reject方法, 可将现有对象转为Promise对象;
// 1. 若参数时promise实例，则执行后原封不动返回实例
// 2. 若参数是一个含有then方法的对象, 则将该对象转为Promise对象, 然后立刻执行对象中的then方法。
// 3. 参数不具有then方法，或不是对象。则直接返回一个状态为resolved/rejected的Promise对象
// 4. 无参数时，这直接返回一个Resolevd的Promise对象。==> 在本轮事件循环结束时立即resolve。(timeout是下轮事件开始前立即)
// setTimeout(function () { // 下轮事件开始执行
//   console.log('three');
// }, 0);
// Promise.resolve().then(function () { // 本轮事件结束执行
//   console.log('two');
// });
// console.log('one'); // 立即执行。
// 'one', 'two', 'three'

// promise().then().done() => done可以像then一样使用 可以捕捉任何可能出现的错误
// promise().then().finally(callback) => 最后状态出现时，必然执行的函数callback
function promise(url, method){
  return new Promise((res, rej) => {
    resolve('foo');
  })
}

// const genFun = () => {
//   yield promises();
// }

// function runSage(generators){
//   const steps = generators();
//   if (steps.done) {
//     return;
//   }
//   steps.value.then(vlaue => {
//     //. .....do something
//   })
// }
// saga 最最最最基础代码。
// runSage(genFun)

/**
 * 
 * 
 * function getFoo () { 流程管理。
      return new Promise(function (resolve, reject){
        resolve('foo');
      });
    }
    var g = function* () {
      try {
        var foo = yield getFoo();
        console.log(foo);
      } catch (e) {
        console.log(e);
      }
    };
    function run (generator) {
      var it = generator();
      function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
          return go(it.next(value));
        }, function (error) {
          return go(it.throw(error));
        });
      }

      go(it.next());
    }
    run(g);
 * 
 *  */











