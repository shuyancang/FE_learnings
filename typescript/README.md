# ts
typescript的学习与运用


## 1. ts 概述与环境搭建
* ts是js的超集, 可以载入js运行。更像是传统的面向对象语言
* mac os x环境搭建: 按步骤安装ts(homebrew, npm, npm install -g typescript); 对ts代码进行watcher可以动态进行编译。/ 也可以执行ts代码进行手动编译
* window下搭建环境：安装nodejs, 然后npm 安装ts即可; 可以对.ts文件进行tsc xxx.ts进行编译。基于ts生成编译后的js文件;

## 2. ts的数据类型(Boolean, Number, String, Array, Enum, Any, Void)
* : boolean / number / string 基本类型的申明;
* : Array<number> / number[] 两种方式进行数组的申明
* ：Color 枚举类型 => 获取下标或者取值
* : any 任意数据类型。var param: any / any[]
* : void 对函数function tell(): string{ return '' }; 代表函数的返回值, 函数声明为void代表不需要返回值。

## 3. ts函数
* func(x:number, y:string):string; 
* funcName:(name: string, age: number) => string = function(){}...
* 可选值funcName(a:string, b?:string){}; 声明类型前加入?代表可选。
* 默认值funcName(a:string, b='默认值'){}; 声明中加入默认值自动进行传输。
* 可变参数function(fir: string, ...rest:string[]); ...rest实现可变参数
* lambads和this关键字: 箭头函数.
* 函数的重载

## 4. 类的创建
* 认识, 继承, 访问权限, 封装, 静态属性及进阶技巧;
* class, constructor, extends, 访问修饰符(public默认, private私有), 封装, static(静态直接使用类.静态属性调用);
* 接口interfaces: 可选属性/函数类型/数组类型/class类型/继承接口/混合类型
* typescript 泛型generics, 使用泛型, 泛型类型, 泛型类 <T>;
* ts模块modules => 模块化+可重用; 封装变量和函数; 及运用
* namespace
* 
* 
* 
* 
* 
