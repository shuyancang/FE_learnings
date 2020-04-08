
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
})

app.on('error', (err, ctx) => { // 自定义error时间监听器进行错误处理。
  log.error('server error', err, ctx)
})

app.use(async ctx => {
  // console.log(ctx.request) // node的request对象
  // console.log(ctx.response) // node的response对象
  // console.log(ctx.query) // 等价于request.query - 常用的
  ctx.body = { // 类似于express的res.json()
    name: 'zhangsan',
    age: 12
  }; // ctx.body也可直接返回字符串'hello world', koa会自动识别并返回content-type
});

app.listen(3000);