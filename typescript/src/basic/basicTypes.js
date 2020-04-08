var isBoon = true;
var myNum = 12;
var myName = '这个是字符串';
var scores = [1, 2, 3, 4]; // 或者使用 number[]也可以
var youCalls = ['fek', 'fejlk', '123jkx', 'fx'];
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
;
var mycolor = Color.Red;
function tellBase() {
    console.log('baseTypes', isBoon, myNum, myName);
}
function tellMore() {
    console.log('array show', scores, youCalls);
    console.log('enum', mycolor);
}
tellBase();
tellMore();
