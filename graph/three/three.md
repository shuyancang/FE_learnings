



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
* 绘图gl.drawArrays(gl.POINTS, 0, 1); // 1 count绘制几个点
*************

# 3. webgl入门, 使用attribute, uniform变量
* 使用attribute变量绘制一个点(传输的是与顶点相关的数据)
* 关键函数 在定点着色器中生命attribute变量=>getAttributeLocation(program, 'a_pos'); 将attribute变量赋值给js变量并向attribute变量传输数据vertexAttribute4f(location, v1, v2, v3, v4);
* uniform改变点的颜色: uniform传输的是对于所有点都相同的数据;
* uniform操作: 在片元着色器中声明uniform变量, 获取uniform变量存储位置赋值给js变量，向uniform变量传输数据
* getUniformLocation(program, 'u_color'); uniform4f(location, v1, v2, v3, v4);
* 片元着色器中precision lowp float;用于指定精度(低精度)


# 4. webgl 缓冲区对象
* webgl提供机制, 可以一次性像着色器传入多个顶点数据, 叫做缓冲区对象
* 准备步骤: 设置点的坐标信息-关键函数new Float32Array([]);
* 缓冲区对象是webgl的一块存储区, 创建后才能像其中写入顶点数据
********************
创建缓冲区对象createBuffer()
绑定缓冲区对象bindBuffer()
将数据写入缓冲区bufferData()
给缓冲区分配一个attribute变量 vertexAttributePointer()
开启attribute变量enableVertexAttribuArray()
********************


# 5. webgl 图形绘制
* 绘制点
* 绘制线段(两个顶点)，线段带(多段折线)，回路(封闭线段)
* 绘制三角形(三个顶点)
* 利用三角带(新点会自动捕捉上两个点形成三角形)绘制平行四边形
* 利用三角扇(新点自动与第一个点及上一个点形成三角形)绘制六边形
* gl.drawArrays(mode, first, count); mode取值 POINTS点, LINES线段, LINE_STRIP线段带, LINE_LOOP回路, TRIANGLES三角形, TRIANGLE_STRIP三角带, TRIANGLE_FAN三角扇


# 6. webgl 平移 / 旋转 / 缩放
* 平移: 对顶点的每个分量加上对应轴的平移距离; 
* var u_change = gl.getUniformLocation(program, 'u_change') // 得到变量
* gl.uniform4f(u_change, 0.0, 0.1, 0.0, 0.0); // 设置平移量；
* 将相关的平移功能封装入一个函数，并对操作进行监听。
* 旋转: 旋转轴，旋转方向，旋转角度; (三角函数的cos, sin变换)
* 缩放: 对顶点的每个分项倍数放大或者缩小; vec4(x, y, z, w) w在1.0时候是不缩放, 改变w即可进行缩放;




