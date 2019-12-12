# svg 可伸缩矢量图形

# 1. svg简介
* [SVG教程-MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Introduction);
* 使用XML格式定义基于矢量的图形; 在放大或者改变尺寸的情况下图形质量不会有损失; 是万维网联盟的标准;
* .svg文件: html中直接引用引用svg: embed标签src=circle.svg, object标签data=circle.svg, iframe标签src=circle.svg;

*********
  <?xml version="1.0" standalone="no"?>

  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

  <svg width="100%" height="100%" version="1.1"
  xmlns="http://www.w3.org/2000/svg">

  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>

  </svg>
*********

* svg可以成为任何复杂的组合图形, 支持渐变旋转滤镜效果js接口等;
* svg中的元素合属性必须按照标准格式书写, svg属性值必须用引号引起来;
* svg形状: rect, circle, elipse, line, polyline, polygon, path;
* 关于svg的web服务器: 普通svg: Content-Type: image/svg+xml; Vary: Accept-Encoding; gzip压缩的svg需要多设置一条Content-Encoding: gzip


# 2. svg图形
* [基础结构](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes)简介;
* 网格: 左上角0, 0坐标原点，x轴正方向向右, y轴正方向向下;
* rect矩形: x举行左上角的x位置, y举行左上角的y位置, width矩形宽度, height矩形高度, rx圆角的x方位半径, ry圆角的y方位半径;
* circle圆形: cx圆心x位置, cy圆心y位置, r园的半径
* ellipse椭圆: cx椭圆中心的x位置, cy椭圆中心的y位置, rx椭圆的x半径, ry椭圆的y半径
* line线条: x1起点x, y1起点y, x2终点x, y2终点y;
* polyline折线: points:所有位置的点
* polygon多边形: points同polyline但最终会合闭;
* path最复杂最强大的路径属性: 属性d(命令-大写绝对定位/小写相对上一个点定位 + 参数);
*********************
path d直线指令: M x y(移动到的点的x, y); m x y; L x y(上一个点到x, y位置画直线); l x y; H x(上一个点到x位置的水平直线); h x; V y(上一个点位置到y位置的垂直线); v y;
path Z闭合指令: 将path路径最后一个点自动与第一个点进行直线连接
path C贝塞尔曲线: 三次贝塞尔曲线C/c x1 y1, x2 y2, x y(x y为坐标终点, x1 y1 x2 y2分别为起点控制点和终点控制点);
path S贝塞尔曲线的简写命令: S/s x2 y2, x y 一个点某一侧的控制点是它另一侧控制点的对称(保持斜率不变);
path S与C贝塞尔组合: 若S命令跟在一个C或者S后, 则它的第一个控制点会被建设成前一个命令曲线的第二个控制点的中心对称点. 如果S命令单独使用，, 那当前点作为第一个控制点;
path Q二次贝塞尔曲线: Q/q x1 y1, x y(x1 y1为控制点, x y为终点坐标)
path T延长二次贝塞尔曲线: T/t x y(终点); T前必须有一个Q命令或者T命令
path A弧形: A/a rx ry x-axis-rotation large-arc-flag sweep-flag x y; rx为x轴半径 ry为y轴半径,x-axis-rotation弧形旋转(°)情况; large-arc-flag角度大小-0代表小角度弧1代表大角度弧, sweep-flag弧线方向-0代表逆时针画弧1代表顺时针画弧
*********************

# 3. fill stroke
* [描边与填充文档链接](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes)
* fill设置对象内部颜色, stroke设置绘制对象的线条颜色(可用颜色名red, rgb, #fff, rgba等); fill-opacity填充色不透明度; stroke-opacity描边不透明度;
* 描边绘制方式: stroke-linecap: butt默认直边结束线段,线段边界90°垂直于描边方向贯穿终点, square稍微超出实际路径(stroke-width宽度), round边框终点是圆角(圆角半径为stroke-width);
* 两条描边线段之间以什么方式连接stroke-linejoin: miter默认尖角度, round圆角, bevel斜接
* stroke-dasharray: 将虚线类型应用描边上. 数值必须用逗号分隔,第一个代表填色区域长度, 第二个表示非填色区域长度... 依此重复循环, 可写任意长度;
* css部分也可用于svg中, 需要把background-color变为fill, border变为stroke, 而width/height不能用css设置; 可以写:hover进行样式调节等;

# 4. 渐变(线性渐变 + 径向渐变)
* [渐变参考文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients)
* defs元素 linearGradient线性渐变: 节点； 线性渐变内部有几个stop节点; 节点通过offset与stop-color来说明渐变特定位置上是什么颜色(可以直接指定, 也可以通过css样式进行指定); 也可以通过stop-opacity来设置某个未知的半透明度; 
* linearGradient线性渐变: 需要在对象属性的fill或者stroke中引用它(fill="url(#Gradient2)"); 在linearGradient中x1 y1 x2 y2指定了渐变的大小和出现的范围
* radialGradient径向渐变可设置属性: cx cy r定义径向渐变范围和大小; fx fy焦点位置, 描述了渐变的中心; spreadMethod控制渐变到达终点的行为-pad默认渐变到达终点后最终渐变色填充剩余空间,reflect会将渐变一直持续下去(变回0%颜色在渐变到100%),repeat同样会让渐变继续(跳回最初的颜色后继续渐变); gradientUnits渐变单元-描述渐变的大小和方向-默认为objectBoundingBox定义对象的渐变大小范围(0-1) + userSpaceOnuse绝对单元(知道对象位置并将渐变放在同样的位置); gradientTransform可以给渐变添加额外的变化-配合transforms进行使用;

# 5. 图案patterns
* [渐变参考文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Patterns)
* pattern内部可以包含任何之前包含过的其他基本形状, 在pattern上可以定义width和height来描述重复下一个图案之前应该跨多远, 也可以使用x和y描述绘制时的开始点
* pattern有属性patternUnits用于描述我们使用的属性单元-值为1时被缩放到被应用pattern对象的宽高值;
* pattern有属性patternContentUnits 用于描述pattern元素基于基本形状使用的单元系统(默认为userSpaceOnUse-) fill缩放及适应相关。

# 6. 文案text
* [svg中的text介绍](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts)
* text中 x y属性决定了文本在视口中显示的位置; fill设置文本填充色, stroke文本描边, 可以设置font相关属性-font-family/font-weight/font-style/font-variant/font-stretch/font-size/font-size-adjust/kerning/letter-spacing/word-spacing/text-decoration等(可设置为css申明)
* tspan标记大块文本子部分-必须是一个text或tspan的子元素; 自定义属性 x为容器设置一个新x坐标(需为逗号分隔的数列,将一个个的运用到元素内每一个字符上) y同理, dx从当前位置用一个水平偏移开始绘制文本(可为数字代表文本便宜,同样也可写为数列,用于每个元素), dy同理,
* tspan rotate将所有字符旋转一个角度(若是数列则分别旋转对应的值); textLength给出字符串的计算长度调整字符位置;
* tref元素: 引用已经定义的文本,将其复制到当前位置(<tref xlink:href="#example"> =经测似乎不可用~)
* textPath元素: 利用其xlink:href获得一个path路径, 将text的字符沿着path路径进行排布。

# 7. 基本变形
* g元素: 组合并将属性付给整个元素集合; 
* transform属性: 平移transform="translate(30,40)" 分别为x与y的偏移; 旋转transform="rotate(45, 200, 150)"分别为偏移角度+(可选)偏移中心x坐标 y坐标; 斜切transform="skewX(20) skewY(18)"x轴歪斜角度 y轴歪斜角度;缩放transform=scale(2, 2)分别为x与y的缩放比例;
* transform可以通过matrix设置矩阵复杂变形; matrix(a, b, c, d, e, f)设置; 可以参考[css的矩阵简介](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)进行使用;

# 8. 剪切与遮罩 及 光栅
* [剪切与遮罩说明](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking);
* Clipping-用来移除别处定义的元素的部分内容; clipPath元素引用一个图形, 将图形内部范围的内容进行渲染
* Masking使用透明度和灰度值遮罩计算软边缘; masK元素引用一个图形, 该图形提供遮罩效果(常用来展示渐变);
* 可以直接使用opacity设置某个元素的渐变值; 需要注意的是, 若在一个元素设置了描边透明度且设置了填充, 则描边的一般使用填充色进行半透明, 另一半应用背景色进行半透明;
* svg提供了一个image元素, 可以嵌入光栅图像, 将嵌入的图像变为一个普通的svg元素, 进而可以在其内容上进行svg工具的其他操作(它的规格要求应用至少支持PNG、JPG和SVG格式文件); 若未设置x, y则自动被设置为0; 若未设置height或width同样被设置为默认0; 若width与height为0图像将不会展示;
* 可以通过foreignObject元素在svg中嵌入xhtml引用到它的内容;
* svg可以通过滤镜添加模糊效果 => 高精尖的svg最高端效果。[滤镜应用参考](https://segmentfault.com/a/1190000018713698)
* 字体: 利用font元素定义一个svg字体, 再通过@font-face引用, 利用font-family进行制定, 定义font元素时 = font-face(字体基本属性); font-face-src可以用于指向外部引用; font-face-name/font-face-uri字体把字体声明指向外源, missing-glyph定义字体找不到且没有回调机制时如何创建字形(可以在内部创建任何svg元素); glyph定义真正的字形利用unicode代表字形的unicode代码点; vkern/hkern分别有u1(字符1可多个) u2(字符2可多个)及k属性(距离减少值)用于将制定字符间间距进行调整;

# svg绘制
* URL: www.google.com/google-d-s/drawings/; 从Google Docs绘制，可以被输出为SVG。
* http://jsxgraph.uni-bayreuth.de/wp/。为了在web上呈现图像， JSXGraph支持VML、SVG和canvas，基于浏览器的功能，自动决定使用哪种技术。
