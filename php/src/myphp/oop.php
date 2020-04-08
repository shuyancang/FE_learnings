<?php

class Person{
  public $age;
  public function say($word){
    echo '说话内容: {$word}';
  }
  public function infoTo(){
    $this->say('hi');
    return $this -> age;
  }
}

$xiaoming = new Person();
$xiaoming -> age = 22;
$outerAge = $xiaoming -> infoTo();

echo $outerAge;


?>