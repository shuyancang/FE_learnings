<?php
$con = mysqli_connect("localhost", "root", "");
if(!$con){
  die("could not connect".mysql_error()); // php的连接字符串。
} else {
  mysqli_select_db($con, "test");
  $result = "INSERT INTO `news`(`id`, `titile`, `img`, `content`, `time`) VALUES ('1', '名字','新闻图片','今天天气好热，有人去路上洗澡','2018-01-11')";
  mysqli_query($con, "set names 'utf8'");
  if (!mysqli_query($con, $result)){
    echo 'query失败了'.mysqli_error($con);
  }else{
    echo '成功了！！！！';
  };
}
mysqli_close($con);
// 在sql内写好，将指令复制进入php再替换为变量即可;
// 同理，可根据文档进行 mysqli_delete; mysqli_update等指令。
?>