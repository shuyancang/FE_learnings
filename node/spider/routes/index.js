var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://www.jikexueyuan.com', function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log(body);
      var $ = cheerio.load(body); // $ 拿到网页信息的前端选择器
      res.json({
        'classnum': $('.lesson-classfiy-nav li').length // 简单获取节点长度
      });
    }
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
