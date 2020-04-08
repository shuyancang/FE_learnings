<?php
// 
// 

abstract class Person{ // 含有抽象方法的类 => 抽象类。 abstract

  public abstract needEat();// 抽象类不一定必须有抽象方法。抽象方法必须在子类实现。抽象类中的抽象方法无方法体。
   
  public bornLife(){ // 抽象类也可有普通方法
    echo '繁衍';
  }
}

// $errorPerson = new Person(); // error; 抽象类不能被实例化。必须由一个子类去继承并且把抽象类的抽象方法全部实现。

class Man extends Person{
  public function needEat(){ // 子类必须实现抽象父类的抽象方法，否则会报错。
    echo '需要吃饭。';
  }
}
$littleMan = new Man();
$littleMan -> eat();




// 接口interface
// 1. 接口声明关键字interface
// 2. 接口可以声明常量, 也可以抽象方法
// 3. 接口中的方法，都是抽象方法(不需要用abstract定义) => 必须实现。
// 4. 接口也不能被实例化，需要一个类去实现
// 5. 类不能继承多个类，但可以实现多个接口。
interface Eat{
  const foods = '吃的'; // 不可被修改的常量;
  public function toEat();
  public function getPower();
}

interface Drink{
  const allDrink = '液体';
  public function water();
}

class HappyLife implements Eat,Drink{ // 实现的类，必须将抽象方法完全实现，否则错误。
  const happy = '幸福啊！';
  public toEach(){
    echo '吃吃吃吃吃吃';
  }
  public getPower(){
    echo '获得能量';
  }
  public water(){
    echo '他们都有水';
  }
  public function testConst(){
    echo self::happy; // 调用自己的常量。
  }
  public static function staticFunction(){ // 静态方法。
    echo '这个就是静态方法';
    echo self::happy;
  }
}

$happyWang = new HappyLife;
$happyWang -> toEat();
echo $happyWang::foods; // 调用常量。
echo HappyLife::happy; // 也可以获取到类中定义的的常量








































?>