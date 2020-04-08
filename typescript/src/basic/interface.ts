


// function printLabel(labelObj: { label: string }){
//   console.log(labelObj.label);
// }

// var myObj = { label: 'houhouhou' };

// printLabel(myObj);

interface labelValue{
  label: string; // 接口的属性
  name: string;
  age?: number; // 可选属性
  key?: string, // 可选属性
}

function printLable(testObj: labelValue){
  console.log(testObj.label)
}
var myObj = { 
  label: 'fjewlk',
  name: 'myLabel',
  age: 12,
};

printLable(myObj);

interface SearchSome{ // 对函数类型进行描述的接口
  (source: string, subString: string): boolean;
}

var mySearch: SearchSome;
mySearch = function(source: string, subString: string){
  var result = source.search(subString);
  return result !== -1;
}
mySearch('123', 'fjlew123');

interface StrArray{ // 对数组进行规范
  [index: number]: string;
}
var myArr: StrArray;
myArr = ['sfjke', 'fje'];

interface ClockInterface{ // 对class的描述
  currentTime: Date;
  setTime(d: Date);
}
class Clocker implements ClockInterface{
  currentTime: Date;
  constructor(hour: number, min: number, sec: number){

  }
  setTime(d: Date){
    this.currentTime = d;
  }
}

interface Shape{
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke{ // 接口的继承, 可以进行多个继承
  side: number;
}

var s = <Square>{};
s.color = 'blue';
s.side = 100;
s.penWidth = 5;

interface Counter{ // 混合类型
  interval:number;
  reset(): void;
  (start: number): string;
}

var c: Counter;
c(10);
c.reset();










