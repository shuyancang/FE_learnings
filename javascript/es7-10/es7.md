
# es相关体验 
* stage 0 => stage 4; 提交, 提案/api实例, 草案
* es7: include, Math.pow
* es8 异步操作, Object, String 增强
* es9 异步，异步归一操作, 对象拷贝, 筛选功能, 正则处理能力
* es10 JSON问题修复, 数组，字符串进一步增强; BigInt数据类型

# ES7
* include => bool
* 2 ** 3计算, 不再依赖Math.pow(2, 3)进行指数计算

# ES8
* 异步操作增强 async/await; next返回一个Promise对象; await后跟一个Promise完成res后的返回值; await只能在async函数内使用; 错误处理, 当await的后续出现错误时, 默默吞掉错误~因此一般需要使用try-catch包裹await及其后的操作;
* await somePromiseFunc().catch(err => console.log(err))用这种方式捕获错误, await后的代码会继续执行;
* 多个await异步命令可以通过await Promise.all()全部执行;
* Object.values, Object.keys, Object.entries 对对象自身属性的数组集合; 非对象进行以上调用, 会强制转化为对象, 然后进行调用;
* 优雅的遍历对象的键值: for(let [key, value] of Object.entries){ console.log(key, value) }
* String Padding: String.prototype.padStart, String.prototype.padEnd对字符串的头尾进行添加操作;




