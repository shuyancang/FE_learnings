<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <?php
    $a = 12;// 变量的声明！
    echo $a; // 注意php行必须按照;结束=> 无分号报错。
    if (1 > 2) {
      echo "脚本false";
    } else {
      echo "脚本true";
    }
    echo "这是我得第一段php脚本 a.php";
    if (false) {
      $b = 12;
    } else {
      $b = 'fjlweflwek';
    }
    if (isset($b)){ // isset用于查看某个变量是否被申明。
      echo '我是被声明的';
    } else {
      echo '$b未被申明';
    }
    // echo $b;  // 此行报错，因为php变量为块级作用域
    $c = '声明外部变量';
    function test(){
      echo $c; // 此行直接执行无法获取$c变量，函数内部不能直接获取外部变量
    }
    test();
    function testC(){
      global $c; // 通过global关键字，可以获取外部变量。
      echo $c;
    }
    testC();
  ?>
</body>
</html>