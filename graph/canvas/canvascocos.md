
# canvase cocos

# 1. canvas
* 浏览器画布(腾讯地图就是canvse实现的应用) (http://www.yyyweb.com/350.html)
* 添加canvas元素, canvas对象创建contex对象, 绘制路径及样式 => 绘制;
*********
绘制步骤: 
* 指定html元素canvas添加id指定宽高
* 获取元素上下文: ctx = document.getElementById('canvas').getContext('2d');
* ctx.moveTo(x, y); 移动至某个点
* ctx.lineTo(x, y); 从选中点到指定点绘制直线
* ctx.stroke(); 绘制线段;
* ctx.beginePath(); 开始绘制
* ctx.arc(200, 200, 100, 0*Math.PI, 2, true)绘制基于中心点坐标 半径, 弧度绘制圆弧
* ctx.closePath(); 绘制完成
* ctx.fillStyle = '#000'; 定义绘制的填充颜色
* ctx.fill(); 填充绘制部分;
* lineGra = ctx.createLinearGradient(0, 0, 500, 500); 创建一个从起始点到终止点的线性渐变实例lineGra
* lineGra.addColorStop(0, 'red');lineGra.addColorStop(0.5, 'blue');lineGra.addColorStop(100, 'yellow'); 渐变实例按百分比进行渐变;
* ctx.fillStyle = grd; 将渐变实例赋值给fillStyle, ctx.fillRect(0, 0, 500, 500)绘制一个矩形;
* ctx.font = '30px Arial'; ctx.fillText('yideng', 10, 50); 设置字体并在指定坐标绘制文字(fillText-实心字)/ctx.stokeText('xuetang', 200, 500)(strokeText-绘制空心字);
* <img src='xxx.jpg' />图片引用可以通过ctx.drawImage(imgRef, 10, 10)将某个image图贴到canvas画布中
*********


* 2. cocos2d-js简介
* 利用js知识快速上手一个游戏



















