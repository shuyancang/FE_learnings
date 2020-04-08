
// 引入模块;
const Hello = require('./base'); // 相对路径。
const hello = new Hello(); // 模块的调用。
hello.setName('xiaowang');
hello.sayHello();