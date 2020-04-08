const app = require('./nodeServer.js');
const superagent = require('supertest');

function request(){
  return superagent(app.listen());
}

describe('node服务 mocha自动测试', function(){
  it('首页获取', function(done) {
    request()
      .get('/')
      .set('Accept', 'appliction/json')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res){
        if(err){
          done(err);
        }
        if(res.body.data === '首页测试112233'){
          done();
        } else {
          done(new Error('接口数据格式错误'));
        }
      })
  });
});
