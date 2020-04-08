console.log('hello world!!!');

function Hello(text){ // 模块的主要逻辑
  var name;
  this.setName = function(paramName){
    name = paramName
  }
  this.sayHello = function(){
    console.log('hello --------- ' + name);
  }
}

module.exports = Hello; // 导出模块
