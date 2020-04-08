const express = require('express'); // 安装并引用express
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express(); // 启用express实例, app布置很多便捷且重要方法: use, route, listen等

app.use(logErrors); // 较为简单的错误处理思路
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next){ // 将error基础信息进行打印展示
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next){ // 判断error类型
  if(req.xhr){ // 用户xhr请求的错误。
    res.status(500).send({error: 'something blew up'});
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next){ // 最后吐出异常。
  res.status(500);
  res.render('error', {error: err}); // 或者res.end(err);
}

app.use((err, req, res, next) => { // 一般, 最后定义错误处理
  // 中间件返回的响应是随机的, 可以响应html，简单的提示 ，json字符等。
  // 可以将请求和错误信息写入标准错误日志等 => 方便排查。
  res.status(500).send('error 500');
})

app.listen(8080, (req, res) => { // 开启监听8080端口, 启动服务
  console.log('8080端口正在监听中。')
})


