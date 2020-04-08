// 路由文件。

function route(pathname, response){ // 用来处理各种不同的路由，执行不同的代码逻辑。
  console.log('about to route a request for ' + pathname);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  if(pathname === '/') { // 根路径 => 默认逻辑
    response.write('this is index path / ');
  } else if(pathname === '/a/b') { // 各个工作模块 => 继续封装。( 路径与逻辑一一进行映射);
    response.write('aaaaa to bbbbbb')
  } else { // 其他路径返回404
    response.write('404 ');
  }
  response.end();
}

exports.route = route;