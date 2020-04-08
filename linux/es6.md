
# ES6实战

## 1. js的历史
* netscape第一个大规模使用的商用浏览器 => 倒闭后成立mozilla => firefox
* 布兰登·艾克, js创建者
* TC39, 推进js发展的委员会, 实行的是协商一致的原则: 通过一项协议必须得到每一位会员的赞成

## 2. 主要的新特性
* 模块化: AMD(requirejs), CMD(seajs), commonjs(nodejs), UMD(兼容以上模式)
***********
* 模块特色: 静态模块-模块名不能是变量, 声明式语法
* 按需引入(es6) vs 全局引入(amd)
* 多点暴露(es6) vs 全局暴露(amd)
* 现在的浏览器还不直接支持es6模块, 可以使用systemJS/transpiler/webpack进行实现。
***********
* 字符串: 模板字符串。
* 解构赋值: 数组, 对象, 函数参数的解构。
* 对象: 属性可为变量
* 数组: [...arr]
* 函数: 箭头函数, 默认值, 参数rest解构
* Class: new, 公有共享属性/方法, 公有静态属性/方法, 公有特权方法, 公有成员, 私有静态成员/方法, 私有成员/方法
* Promise: pending => resolve/reject

## 3. 编译器
* 各类语言的编译器: masm, gcc, javac, typescript, less/sass
* babel: 将每一个特性-编译小组件, 自由拼装自由组合
* 在线编译器babeljs.io
* 项目构建工具: grunt, gulp, webpack等
* fis-parser-babel(fis.set('project.fileType.text', 'es'))








