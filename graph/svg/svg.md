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
* 网格: 左上角0, 0坐标原点，x轴正方向向右, y轴正方向向下;
* rect矩形: x举行左上角的x位置, y举行左上角的y位置, width矩形宽度, height矩形高度, rx圆角的x方位半径, ry圆角的y方位半径;
* circle圆形: cx圆心x位置, cy圆心y位置, r园的半径
* ellipse椭圆: cx椭圆中心的x位置, cy椭圆中心的y位置, rx椭圆的x半径, ry椭圆的y半径