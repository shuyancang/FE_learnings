

function say(word){ // 定义函数
  console.log(word);
}

function execute(someFun, value){ // 函数作为参数, 执行
  someFun(value);
}

execute(say, 'hello');

function executeAgain(func, value);

executeAgain((text) => { // 直接以匿名函数作为参数
  console.log(text)
}, value);

