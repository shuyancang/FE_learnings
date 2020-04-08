// function printLabel(labelObj: { label: string }){
//   console.log(labelObj.label);
// }
function printLable(testObj) {
    console.log(testObj.label);
}
var myObj = {
    label: 'fjewlk',
    name: 'myLabel',
    age: 12
};
printLable(myObj);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result !== -1;
};
mySearch('123', 'fjlew123');
var myArr;
myArr = ['sfjke', 'fje'];
var Clocker = /** @class */ (function () {
    function Clocker(hour, min, sec) {
    }
    Clocker.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clocker;
}());
