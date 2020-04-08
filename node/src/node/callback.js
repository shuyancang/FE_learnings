const fs = require('fs'); // file stream库, node自带对文件的处理核心
// 阻塞式代码
const serverData = fs.readFileSync('./server.js'); // 阻塞读取文件。=> 等读取文件函数执行完毕后执行后续指令
console.log(serverData); // <Buffer ...> serverData读取到的是十六进制格式
console.log(serverData.toString()); // 文件的正常可读取的格式。

const baseData = fs.readFile('./base.js', (err, data) => { // 文件读取完毕后执行的操作 => 回调函数.
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
}); // 非阻塞模式 => 函数执行后，立刻执行后续代码. 文件读取完成后返回来执行回调函数。

console.log('callback.js is over');
