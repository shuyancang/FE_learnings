# svg 可伸缩矢量图形

# 1. svg简介
* 使用XML格式定义基于矢量的图形; 在放大或者改变尺寸的情况下图形质量不会有损失; 是万维网联盟的标准;
* .svg文件: html中直接引用引用svg: embed标签src=circle.svg, object标签data=circle.svg, iframe标签src=circle.svg; 
*****
<?xml version="1.0" standalone="no"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>

</svg>
*****
* svg形状: rect, circle, elipse, line, polyline, polygon, path;
