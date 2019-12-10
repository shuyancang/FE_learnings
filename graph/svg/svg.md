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