
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<body>
  <?php
    require('a.php'); // php引入外部php页面，可以使用其他页面的变量;
    $GLOBALS['globalParam'] = 'global 变量'; // $GLOBALS内包含的变量, 可以在引用的所有页面内使用。
    echo $a; // 获取的是a.php页面的变量
    echo $globalParam;

    require_once('aa.php'); // 引入aa.php, aa.php不存在即报错
    // include_once('aaa.php'); // 引入aaa.php，如果aaa.php不存在，报错，但同时代码继续窒执行;
    function bTest(){
      global $aa;
      echo $aa;
    }
    bTest();
    echo $aa;


    // 数组
    $arr = array('0' => "苹果", 1 => '橘子');
    echo json_encode($arr);
    echo $arr[0];
    echo $arr[1];

    // session 会话机制
    session_start();
    $_SESSION['views'] = 1; // 访问会话时，可以注册一个session变量view,

    // 在其他页面调用 session_start()后，可以直接通过$_SESSION['views']拿到。

    




  ?>
  <!-- 以get方式发送信息至bb.php, 同样, 可以引入ajax在此处发起请求 -->
  <form action='bb.php' method='get'>
    <input type='text' name='username' id='username'></input>
    <p>
      <label>密码</label>
      <input type='text' name='password' id='pwd'></input>
    </p>
    <button type='submit'>提交</button>
  </form>
  <button id='submitButton'>ajax提交</button>
  
  <script>
    $('#submitButton').click((e) => {
      e.preventDefault();
      $.ajax({
        url: 'bb.php',
        type: 'get',
        data: {
          username: $('#username').val(),
          pwd: $('#pwd').val()
        },
        dataType: 'json',
        success: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  </script>
</body>
</html>
