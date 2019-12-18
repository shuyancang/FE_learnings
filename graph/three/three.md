



# three.js 


# 1. 
* const gl = canvas.getContext('webgl'); 创建webgl上下文环境
* gl.clearColor(0.0, 1.0, 1.0, 0.5); 
* gl.clear(gl.COLOR_BUFFER_BIT); // 启用清屏;

# 2. 着色器
* 顶点着色器 - 顶点，片源着色器 - 光源; webgl的着色器, x横轴(-1到1), y纵轴(-1到1), z深度
* 绘制点: 
*************
* 获取canvas元素后, 获取webgl上下文
* 初始化着色器
* 设置背景色
* 清除canvas
* 绘图
*************






