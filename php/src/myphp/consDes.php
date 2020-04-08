

<?php
// 构造方法与析构方法
class People {
  public function__constrct($age){ // 构造方法： 类在new的时候自动执行
    this -> age = $age;
  }

  public function data(){
    return $this -> age;
  }

  function__destruct($){ // 析构方法：可以进行资源释放操作 ，数据库关闭，读取文件的关闭等。在对象被销毁的时候执行。 
    echo 'dieing bybybybybybybybby';
  }
}

$ming = new People(21);
echo $ming -> data();
















?>