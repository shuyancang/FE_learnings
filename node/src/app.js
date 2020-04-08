



const server = require('./node/http'); // http创建
const router = require('./node/router'); // 路由管理

server.start(router.route);