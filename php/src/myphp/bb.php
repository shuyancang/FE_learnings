



<?php
header('Content-type: text/html; charset=utf-8');
// $username = $_GET['username']; // 获取到以get方式请求该文件的username参数
// $username = $_POST['username']; // post方式获取
$username = $_REQUEST['username']; // 获取请求参数,不管方式。

// if ($username =='admin') {
  // echo '登录成功';
// } else {
  // echo '登录失败';
// }
// echo $username;
echo json_encode(array('msg' => '登录结果', 'code' => '10000')); // 通过json编码方式返回数据。

?>



