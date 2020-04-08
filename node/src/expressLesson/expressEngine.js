const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express();


app.use(express.static('public')); // 静态文件引入
app.set('view engin', 'html');
app.engine('html', swig.renderFile);

app.get('/engine', (req, res) => {
  res.render('engine', {
    title: 'engine env test',
  });
});

app.listen(8080, (req, res) => { // 开启监听8080端口, 启动服务
  console.log('8080端口正在监听中。')
});


