const express = require('express'); // 安装并引用express
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express(); // 启用express实例, app布置很多便捷且重要方法: use, route, listen等

// 路由常见控制方式: hostname/controller/action：域名/控制器/行为
// baidu.com/game/xianjian 一个controller(game管理)对应多个action(动作)
// baidu.com/game/jiansan
// baidu.com/game/gujian
// baidu.com/game/zhuxian 
// 路由也可以通过正则表达式进行匹配。
app.all('/route', (req, res, next) => { // all方法, 所有http method均会得到执行的请求中间件。
  console.log('all getted')
  next();
})

app.get('*', (req, res, next)=>{ // * 代表所有get的路径, 所有get都会触发。
  console.log('mast into ');
})

router.use((req, res) => { // router.use所有路由(不论路径，不论方法)都会执行的函数。类似app.get/post/put... *
  console.log('i am here calling');
})
router.get('/routerGet', (req, res) => { // 同app.get使用方法, 匹配路径。
  res.send('routerGet is ok!');
})

// const callback0 = (res, req, next) => {
//   next();
// }
// const callback1 = (res, req, next) => {
//   next();
// }
// const callback2 = (res, req, next) => {
//   next();
// }
// app.get('/course', [callback0, callback1, callback2]); // 数组函数处理路由: 多个中间处理步骤, 可公用代码模块。

app.get('/route', (req, res) => { // 函数处理路由 <=> 数组函数处理路由 =>> 混合式处理路由。
  res.send('hello router'); // 执行到此步, 后续代码将不会再给用户输出
  // next(); node代码可以继续执行, 继续传递到下一个函数或附加处理数据等, 但后续代码不能再给用户输出
})

app.route('/book').get((req,res) => { // route的统一管理路径, 再根据method进行分别处理=> restfull api
  res.send('get book')
}).post((req, res) => {
  res.send('post book')
})

app.listen(8080, (req, res) => { // 开启监听8080端口, 启动服务
  console.log('8080端口正在监听中。')
})


