

<?php
  class Person {

    public $name = 'huihongdaqi wang'; // 共有 可以访问
    private $age = 29;// 私有 封装后的成员在对象外部不能直接访问，只能在对象内部使用$this
    protected $money = 1000000000000; // 受保护的
    private $cardNum = 6111161626127118;
    private $outer = 'kill';

    private function getAge(){ // 私有成员方法,不能在类外部访问
      return $this -> age;
    }
    protected function getMoney(){ // 受保护成员方法, 不能在类外部被直接访问。 
      return $this -> money;
    }

    public function showCard(){ // 共有方法, 可类外使用
      echo $this -> name.'，他'.$this -> getAge().'岁有'.$this -> getMoney();
    }

    public function __set($key, $value){ // 魔术方法的__set只针对protected和private变量, 对public使用无效。
      // => 设置了__set方法，则可在类外，可以使用该方式修改protected和private
      if ($key == 'money' && $value == 1000000000000) {
        $this -> money = '小王';
      }
    }

    public function __get($key){ // 同__set, 可在类外访问protected和private。
      if ($key === 'age') {
        return 120;
      }
    }

    public function __isset($key){
      if ($key == 'cardNum') {
        return '银行卡账号是私有变量哦！';
      }
    }

    public function __unset($key){
      if ($key == 'outer') {
        return 'wao outer要被干掉了';
      }
    }
  }

  $xiao = new Person();
  echo $xiao -> money; // 无权限 getMoney同 => set方法后，可以获取
  echo $xiao -> age; // 无权限 getAge同 => get方法后，可以获取。
  echo $xiao -> name; // 'huihongdaqi wang'
  // $xiao -> name = 'honghonghonghong ya';

  var_dump(isset($xiao -> cardNum)); // 查看变量是否被保护

  unset($xiao -> outer); // 干掉内部某属性。























?>