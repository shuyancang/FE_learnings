const koa = require('koa');
const convert = require('koa-convert'); // koa转换器
const router = require('koa-simple-router');
const serve = require('koa-static');
const render = require('koa-swig');
const co = require('co');
const path = require('path')
const app = new koa();

app.context.render = co.wrap(render({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cach: 'memory',
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}))

app.use(ctx => {
  ctx.body = 'hello koa 2';
});

console.log(app)
app.use(router(_ => {
  _.get('/', (ctx, next) => {
    ctx.body = 'hello / path';
  })
  _.get('/index', async (ctx, next) => {
    ctx.body = await ctx.render('index.html', {
      title: '学习koa2',
      // userinfo: ct
    })
  })
  _.get('/packplayer', async(ctx, next) => {

  })
  _.get('/images', (ctx, next) => {
    ctx.body = 'images';
  })
}))

app.use(convert(path.join(__dirname, './public')));

app.listen(3000, () => {
  console.log('server started');
});