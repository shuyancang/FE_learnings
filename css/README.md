

# CSS深度学习



## less/scss 预编译
1. less预处理器: www.bootscss.com; 可以提前给css赋予动态语言特性(变量, 继承, 函数) => 需进行编译。
2. 前处理器 - 后处理器: 前处理预先处理相关的语法less/scss等进行编译， 后处理可以动态将css自动添加相关的后缀等
3. less的安装: 快速入门文档npm install -g less然后执行lessc styles.less进行编译； 或者到官网将less.js引入本地的script(不建议-前端编译性能较差)
4. less的应用: 变量声明@, 类混合(){}, 判断when(){}, 样式嵌套 , 运算(颜色宽度等 + - * /); 监视模式-改变样式时候自动刷新； 也可以在node中引入后进行应用。

5. sass介绍: 大文件编译sass稍有优点(sass基于ruby); sass样式表更专业，扩展功能较为丰富，less更为精简;
6. sass的安装: sass基于ruby需先下载ruby; 在ruby安装后执行gem install sass;
7. sass的应用: 与less语法很多相似性. @import './path'导入; @mixin函数; @extend继承; 颜色处理函数darken;compass可以结合sass运用丰富的样式框架函数可以直接使用。
## OO CSS - CSS的延伸
* OO CSS: 面向对象的CSS; OOCSS将可以重用元素抽象成类，用class进行描述。
* OO CSS：加强代码复用便于维护, 减小css体积, 提升渲染效率, 组件库思想
* OO CSS注意事项: 不要直接定义子节点, 而应该共性定义;结构与皮肤分离;容器与内容分离；抽象出可重用元素创建组件库；往想拓展的对象本身添加class而不是其父节点；对象应保持独立性；避免使用id选择器(权重太高无法重用)；避免位置相关的样式；保证选择器相同的权重；类名要简短清晰语义化。
* oocss.org- download; 常用模式的布局。
* css开发常用库: reset css(全部回归重置原始样式) -> normailize.css(相对较少的重置-并统一不同浏览器的部分效果) -> neat.css(结合reset,normalize处理基础样式,考虑响应式和移动设备);

## CSS 后处理器 - 清洗css添加前缀
* 插件autoprefixer在ide内部自动开发中处理; 或者gulp利用autoprefixer进行线上代码的编译输出
* gulp.task('default', function(){ 操作如...pipe().pipe(postcss(...)).pipe(gulp.dest('./dest')}));

## CSS绘制特殊图形
* 等腰三角形-border四边等同且三边透明, 直角三角形两相邻边0px宽度剩余一个保持颜色一个透明, 梯形在等腰三角形的基础上添加盒子本身的一定宽度即可，圆形border-radius 50%; 椭圆border-top-left-radius与border-bottom-left-radius等组合运用。

## 


## 


## 