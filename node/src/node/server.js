
const http = require('http'); // 引入nodejs原生的http模块;

http.createServer((req, res) => { // 服务接受request, 服务返回response
  // 定义返回的http头
  res.writeHead(200, {
    'Content-Type': 'text/plan'
  });
  // 发送请求相应的数据
  res.end('hello word!!\n');
}).listen(8000); // 监听8000端口

// 验证服务正常
console.log('server success running');
