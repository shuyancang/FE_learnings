<?php
  header("Content-Type: text/html;charset=utf-8");
  $dbms = "mysql";
    $host = "localhost";
    $dbName = "news";
    $user = "root";
    $pwd = "";
    $dsn = "$dbms:host=$host;dbname=$dbName";
  try{
    $dbh = new PDO($dsn, $user, $pass);
    echo "链接成功";
    foreach ($dbh->query('SELECT * from `news` WHERE 1') as $row) {
      print_r($row); //你可以用 echo($GLOBAL); 来看到这些值
    }
    // $query = 'INSERT .......';
    // $result = $dbh->exec($query);
    // echo '添加成功'.$result;
    $dbh = null;
  }catch(PDOException $e){
    dir("Error:".$e.getMesage()."</br>");
  }
?>