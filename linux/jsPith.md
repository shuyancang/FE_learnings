
# js语言精髓

# 1. 基础部分
* 弱类型语言(不用声明前指定类型的语言), 但并非没有类型. string, number, bool, null, undefined, object, + es6 Symbol
* object: Array, RegExp, Date, Math, Function..... 放置于堆内存(只把地址放在栈中) < === > 值类型: 栈内存中。
* 使用typeof判断数据类型, 返回一个字符串, 但并非返回的所有结果都符合预期。
* 声明 var: 函数作用域; let/const: 块作用域; 不声明直接使用: 全局作用域;
* var变量声明提升, 声明提升至当前作用域顶端
* 函数: arguments类数组对象
* 构造函数返回值: 返回值为简单类型或者无返回值=>new得到默认实例化的对象; 当返回值为对象, 构造函数与普通函数表现相同, return的即返回值;
* 每个函数都有prototype, prototype的constructor指向函数本身, 函数的__proto__指向父类的prototype
* this和作用域;
**************
普通函数中, 严格模式下 this 为 undefined; 非严格模式下为全局对象(nodejs => global, 浏览器window)
构造函数: 对象的实例
对象的方法调用: 对象本身
call与apply; fn.call(context, arg1, arg2, ...)与fn.apply(context, args)
bind: 返回一个新函数, 作用域为bind的参数.
箭头函数: 是简写的函数表达式, 拥有词法作用域和this值.
**************
# 2. 继承 
* 继承目标, 子类得到父类的属性, 方法。
* function Son(a, b, c){ Father.call(this, a, b); this.c = c} // 子类通过借用构造函数实现继承属性  
> function inherits(child, parent){ // 借用实现继承父类的方法。组合继承。  
>    var _prototype = Object.create(parent.prototype);  
>    _prototype.constructor = child.prototype.constructor;  
>    child.prototype = _prototype;  
> }
* ES6的继承, class constructor super

# 3. label statement
* loop: for(var i = 0; i < 10; i++){ for(var j = 0; j < 5; j++){ if(j === 1) { break loop; }}}
* 直接执行: { a: 1 } 作为语句块, 实际是a: 1 , a这个label表达1

# 4. 立即执行函数： 
* (function(){}())和 (function(){})() 正常执行, 括号代表内部为表达式, 按照表达式执行;
* function(){}()无括号报错, 无括号时语句优先, 无法识别表达式, 报错。
* 因此第一个能正常执行, 第二个能识别为函数; 
* 中括号包裹function(){}()也能正确执行;
* ~/!/+/-/ function(){}()运算符会自动标记后面为表达式按照表达式规则进行处理。因此能导致函数立刻执行。
* typeof/delete/value function(){}()操作符也会标记后方为表达式，正常执行。
* 1, function(){}(); 1 ^ function(){}(); 1 > function(){}()利用逗号等后接表达式, 同样正确执行。

# 5. 高阶函数: 把函数作为参数或者返回值的函数。
* 闭包: 函数, 环境: 函数创建时作用域内的局部变量 => 滥用闭包影响性能, 会用闭包提升性能。
* 惰性函数: 返回一个可执行函数, 原函数根据实际情况/兼容性每次会判断 => 新函数判断并生成后,后续执行不再每次都判断。
* 柯里化: 一个允许使用部分参数生成函数的方式。=> 反柯里化
* 尾递归: 略。

# 6. 闭包与作用域, 作用域链
* 相关代码可参看./jsPith/codes.js
* 常见的作用域从大到小: 程序级别, 文件级, 函数级, 块级;
* js中的作用域, 全局，函数(js中局部作用域等同于函数作用域)，块级(ES6);
* 函数也是对象, 其中一个内部属性是[[Scope]], 内部属性包含了函数被创建的作用域中对象的集合。这个集合被称为函数的作用域链。它决定了哪些数据可以被访问。

# 7. js的原型及原型链
* 每定义一个对象(函数)时, 对象都会包含一些预定义属性; 函数对象的一个属性就是原型prototype, 普通对象没有prototype但有__proto__属性
* 面向对象开发, 类的继承 - 构造函数。构造函数返回值(没有返回值-正常构造函数, 简单数据类型作为返回值-同前, 复杂类型返回-返回该复杂类型)
* 每个函数都有一个prototype的对象属性; 每个对象都有一个__prototype__属性, 该属性指向其弗雷的prototype对象; 每一个原型对象prototype中都有一个constructor属性, 默认指向函数本身。
* 
* 
* 
* 


