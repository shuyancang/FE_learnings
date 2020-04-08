

const express = require('express'); // 安装并引用express
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express(); // 启用express实例, app布置很多便捷且重要方法: use, route, listen等
// const router = express.Router(); router中间件, 没有多余api只有路由相关api-使用方式同app

const urlencodeParser = bodyParser.urlencoded({extended: false}) // 创建application/x-www-rulencoded编码解析

const path = '/';
// path = 'index.html'时, 可以做一个伪静态页面
// path 作为正则表达式时, 可以对某一类路径进行统一处理。
app.use(express.static('public')); // use中间件, express.static => 静态引入public文件夹内容
app.use(cookieParser()); // 引用第三方中间件cookieParser 在req上会多出req.cookies方法获取cookie
app.use((err,req, res, next) => { // express常用的错误处理中间件 
  console.log(err.stack);
  res.status(500).send('500!!! no server~something went wrong')
})
app.get(path, (req, res) => { // app设计路由风格: restful
  //回调参数 req: request用户请求, res: response服务响应
  /**
   * req.query: get请求后面的参数键值对;
   * req.params.id 是当path写作'/class/:id'时候,路径对应的id变量值
   * res.send // 响应
   * res.json // json响应
   * res.jsonp // jsonp响应
   * res.redirect // 跳转 
   * res.download // 下载
   * res.render
   * 
   */
  res.send('Hello my path of / with params' + JSON.stringify(req.query));
});

app.get('/index.html', (req, res) => { // 返回指定的静态页面。
  res.sendFile(__dirname + '/views/index.html'); // sendFile路径使用dirname拼接。
})

app.post('/index/redirect', urlencodeParser, (req, res) => { // 处理请求
  console.log(req.body);
  res.redirect('https://www.baidu.com'); // 跳转链接。
})

app.get('/middleware', (req, res, next) => {
  req.data = 'middlewareInsert'; 
  next(); // 中间件处理方法，调用next, 下一个继续函数可以接手
}, (req, res) => {
  // console.log(req.data) // middlewareInsert
  res.end('middlewre info back' + req.data + '---' + JSON.stringify(req.cookies));
})

app.listen(8080, (req, res) => { // 开启监听8080端口, 启动服务
  console.log('8080端口正在监听中。')
})