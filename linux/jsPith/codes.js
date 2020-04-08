
if ('userName' in window) {
  var userName = 'sdfewe';
}
console.log(userName);

/** -------- */
var obj = {
  user: 'fwel',
  getName: function(){
    return this.user;
  }
}
var getNameFun = obj.getName;
console.log(getNameFun());
console.log(obj.getName());

var globalA = 1; 
function doSth(){
  var innner  = 2;
  glbal = 3;
}
console.log(globalA);
console.log(innner);
console.log(glbal);


var test= 'aaa';
function doingSome(){
  alert(test);
  var test = 'bbb';
  alert(test);
}
doingSome();
alert(test);



function make(num){
  return function(){
    return num;
  }
}
var arr = [make(0), make(1), make(2)];
arr[0]();
arr[1]();
arr[2]();


var name = 'global';
function A(name){
  alert(name);
  this.name = name;
  var name = '1';
}
A.prototype.name = '2';
var a = new A('3');
alert(a.name);
delete a.name;
alert(a.name);




