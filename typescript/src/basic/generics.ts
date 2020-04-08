




function Hello(num: number): number{ // 指定数字输入，指定数字输出
  return num * num;
}

// <T>

function Hi<T>(arg: T): T{ // Hi输入为泛型《 返回为泛型： 函数可接受的参数类型不刻意进行指定
  return arg;
}

var output = Hi<string>('huohuohuo'); // 指定string输入。在使用时进行类型检查。


function Gulu<T>(num: T): T{
  // console.log(num.length); 报错, 单纯的泛型没有length属性
  return num;
}

function Gala<T>(str: T[]):T[]{
  console.log(str.length); // 不报错, 泛型的数组具有length属性。
  return str;
}

var list:Array<string> = Gala<string>(['1', '3', '2']);
for (var i = 0; i < list.length; i++){
  console.log(list[i]);
}


function hauly<T>(arg: T): T{
  return arg;
}

var myHau: <K>(arg: K) => K = hauly; // 指定myHau为一个方法。


var myTestFun:(a: number) => string = function(a: number): string{
  return 'hlljlfwejlfw';
}; // 一个接收number作为参数的, 返回值为string的函数。


var myGala: { <T>(arg: T): T } = myHau; // 也可以指定为一个方法。


interface Hooo{ // 接口包含一个泛型函数
  <T>(arg: T): T;
}

interface Mooor<T>{
  (arg: T): T;
}

function myHooo<T>(arg: T):T{
  return arg;
}
var messageHo: Hooo = myHooo;
console.log(messageHo<string>('fjl, mes, ke'));

var mh: Mooor<number> = myHooo;
mh(100);



class Gululu<T>{ // 指定泛型类
  zero: T;
  add: (x: T, y: T) => T;
}

var myGululu = new Gululu<number>();
myGululu.zero = 0;
myGululu.add = function(x, y){
  return x * y;
}





module Timer{
  export class Test{
    elemment: HTMLElement;
    span: HTMLElement;
    timer: number;
    constructor(e: HTMLElement) {
      this.elemment = e;
      this.elemment.innerHTML = 'fjlekwjflew: 2018-04-01 12:11:01';
      this.span = document.createElement('span');
      this.elemment.appendChild(this.span);
      this.span.innerHTML = new Date().toTimeString();
    }
    start (){
      this.timer = setInterval(()=> this.span.innerHTML = new Date().toTimeString(), 500);
    }

    stop(){
      clearInterval(this.timer);
    }
  }



}










