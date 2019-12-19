

function initShader(gl, vertext, fragtext){

  const ver = gl.createShader(gl.VERTEX_SHADER); // 创建顶点着色器
  const frag = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器

  gl.shaderSource(ver, vertext); // 指定顶点着色器对象
  gl.shaderSource(frag, fragtext); // 指定片元着色器对象

  gl.compileShader(ver); // 编译顶点着色器
  gl.compileShader(frag); // 编译片元着色器

  const program = gl.createProgram(); // 创建程序对象
  gl.attachShader(program, ver); // 为程序对象分配顶点着色器
  gl.attachShader(program, frag); // 为程序对象分配片元着色器

  gl.linkProgram(program); // 连接程序对象
  gl.useProgram(program); // 告知webgl系统所用的程序对象;

  return program;
}


function bufferInit(gl, dataVers, attr, program){ // buffer函数复用封装;
  const buffer = gl.createBuffer(); 
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, dataVers, gl.STATIC_DRAW);
  const a_pos = gl.getAttribLocation(program, attr);
  gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_pos);
}