const fs = require('fs');

// fs处理文件，有异步与同步方式。

fs.readFile('./http.js', (err, data) => { // 异步读取 => 可能造成回调地狱 => 业务逻辑无穷嵌套。
  if(err){
    return console.error(err);
  }
  console.log('异步读取内容 ；'+ data.toString());
});

const syncData = fs.readFileSync('./server.js'); // 同步读取
console.log(syncData.toString());

// 打开文件 open(path,flags[, mode], callback) => 可打开并进行编辑。
fs.open('./callback.js', 'r+', (err, fd) => {
  if(err){
    return console.error(err);
  }
  console.log('文件打开成功'); // fd读取成功的信息
})

// fs.stat(path, callback) // 获取文件信息
fs.stat('./base.js', (err, stats) => {
  if (err) {
    return console.error('文件信息获取失败');
  }
  console.log(stats);
  // stat类的方法: isFile, isDirectory, isBlockDevice等等用于判断文件信息。
})

// fs.writeFile 写入文件

// fs.close // 关闭文件
