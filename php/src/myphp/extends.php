<?php
// 继承与多态
class Person{ // 父类
  public $name;
  private $age;
  protected $money;
  function__construct($name, $age, $money){
    $this -> name = $name;
    $this -> age = $age;
    $this -> money => $money;
  }
  public function cardInfo(){
    echo $this -> name.'--------'.$this -> age.'-----------'.$this.money;
  }
} 

class Man extends Person{ // 继承自父类的子类
  function__construct($name, $age, $money){ // 会覆盖掉父类的同名方法。
    parent::__construct($name, $age, $money); // 将数据赋值只父类中进行注入。
  }
  public function cardInfo($pp){ // php实现重载, 子类中
    parent::cardInfo(); // 执行父类的cardInfo方法。
    echo $pp;
  }

  public function seeMoney(){
    echo $this -> age; // 私有的，不能通过继承获取。
    echo $this -> money; //被保护的，可以获取父类继承的属性
  }
}
$wang = new Man('xiaowang', 22, 101010);
$wang -> cardInfo(1123); // => 会只执行子类中的cardInfo, 父类方法被覆盖。 
$wang -> name; // xiaowang, 共有,被继承获取到
$wang -> age; // 无 私有的不能被继承和访问
$wang -> money; // 无 被保护的，可以被继承，但不能再外部访问




































?>