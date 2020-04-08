const http = require('http');
const url = require('url');

function start(route){
  function onRequest(requst, response){
    const pathname = url.parse(requst.url).pathname; // 获取到请求路径。pathname: /a/g => 一般是/controller/action格式
    console.log('request for ' + pathname + 'received');
    route(pathname, response); // 获取路径后，交至route处理模块。
  }
  http.createServer(onRequest).listen(8888);
  console.log('server started');
}

exports.start = start; // 启动链接的基础代码。
