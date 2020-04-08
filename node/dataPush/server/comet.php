<?php

header('Content-type:application/json;charset=utf-8');
header('Cache-Control:max-age:0');
$i = 0;
while($i < 9){ // while true
  $i++;
  sleep(1);
  $res = array('success' => 'ok', 'text' => 'i am comet');
  $randomNumber = rand(1, 999);
  echo $randomNumber;
  echo '<br/>';
  ob_flush(); // 释放
  flush(); // 获取释放的资源并吐出。
}







?>