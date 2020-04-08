

const Rize = require('rize');
const rize = new Rize();

rize.goto('https://www.baidu.com/')
.type('input.s_ipt', '测试跳转')
.press('enter')
.waitForNavigation()
.assertSee('有没有？？') // 预期能够看到的内容
.end();