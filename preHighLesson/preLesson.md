
# 你不知道的HTML

1. 前端跨域有几种方案 -> 同源(域名, 协议, 端口相同)策略;
* 浏览器不同的域名不能访问对应的cookie, 但内部的form表单提交不受同源策略的影响;
* storage读取同步, 性能较好, 但容量较小, 多了易出现性能问题; indexedDB与webSQL为异步读取, 可存储内容较多, 但相对性能稍差;
* 同源策略限制的对象: cookie/storage/indexDB无法获取; dom无法获取; ajax不可发送;
* 浏览器可以设置document.domain共享cookie在两个一级域名相同但二级域名不同的网页中; => 该方法只适用于cookie与iframe窗口; localstorage和indexdb无法通过这种方法规避同源策略; 只能通过postmessage APi进行规避
* img-src, iframe-src, script(jsonp原理)-src, link, css-background(可能导致css攻击漏洞)均不受同源策略限制, 可以引用任意域名资源;
* ajax规避同源策略的方案: jsonp, websocket, cors;
* 

2. 语义化html
* 使用div进行布局, 不要用div进行无意义的包裹
* 

















