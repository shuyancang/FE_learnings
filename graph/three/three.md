



# three.js 


# 1. base.html
* const gl = canvas.getContext('webgl'); 创建webgl上下文环境
* gl.clearColor(0.0, 1.0, 1.0, 0.5); 
* gl.clear(gl.COLOR_BUFFER_BIT); // 启用清屏;

# 2. 着色器 color.html
* 顶点着色器 - 顶点，片源着色器 - 光源; webgl的着色器, x横轴(-1到1), y纵轴(-1到1), z深度
* 绘制点: 
*************
* 获取canvas元素后, 获取webgl上下文
* drawArrays();
* 定义顶点着色器(描述定点特性 - 硬编码): void main 字符串函数, gl_Position顶点着色位置, gl_PointSize顶点大小; 
* 定义片源着色器(进行逐片源处理过程 - 硬编码): void main 字符串函数, gl_FragColor片源颜色; 
* 初始化顶点着色器gl.createShader(gl.VERTEX_SHADER);初始化片源着色器gl.createShader(gl.FRAGMENT_SHADER);
* gl.shaderSource(初始化, 常量) 运用着色器;
* 编译着色器gl.compileShader(初始化);
* gl.createProgram();创建对象; gl.attachShader(program, 常量); gl.linkProgram(program)链接对象; gl.useProgram(program)使用对象;
* 设置背景色gl.clearColor(0.0, 0.0, 0.0, 1.0);
* 清除gl.clear(gl.COLOR_BUFFER_BIT);
* 绘图gl.drawArrays(gl.POINTS, 0, 1); 
*************

# 3. webjs入门, 使用attribute, uniform变量
* 使用attribute变量绘制一个点(传输的是与顶点相关的数据)
* 关键函数 在定点着色器中生命attribute变量=>getAttributeLocation(program, 'a_pos'); 将attribute变量赋值给js变量并向attribute变量传输数据vertexAttribute4f(location, v1, v2, v3, v4);
* uniform改变点的颜色: uniform传输的是对于所有点都相同的数据;
* uniform操作: 在片元着色器中声明uniform变量, 获取uniform变量存储位置赋值给js变量，向uniform变量传输数据
* getUniformLocation(program, 'u_color'); uniform4f(location, v1, v2, v3, v4);
* 片元着色器中precision lowp float;用于指定精度(低精度)








