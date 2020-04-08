const events = require('events'); // 引入nodejs的events模块并创建eventsEmitter对象
const eventEmitter = new events.EventEmitter();

// 绑定事件处理函数。
const connectHandler = function connected(){
  console.log('connected is calling');
}

eventEmitter.on('connection', connectHandler) // on方法两个参数(事件处理名称, 句柄函数);即可完成事件绑定

eventEmitter.emit('connection');// 触发connection事件

console.log('事件触发程序执行完毕');


