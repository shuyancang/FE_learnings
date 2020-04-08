var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(school) {
        var _this = _super.call(this, '小王', 200) || this;
        _this.school = school;
        return _this;
    }
    Students.prototype.tell = function () {
        console.log(this.name + this.age + this.school);
    };
    return Students;
}(Person));
var wang = new Students('哈哈高中');
wang.tell();
wang.print();
var Flower = /** @class */ (function () {
    function Flower() {
    }
    Flower.prototype.print = function () {
        console.log('一朵小发发' + this.name + this.age);
    };
    return Flower;
}());
var Mudan = /** @class */ (function (_super) {
    __extends(Mudan, _super);
    function Mudan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mudan.prototype.print = function () {
        console.log(this.mean + this.name + this.age);
    };
    return Mudan;
}(Flower));
var mumumu = new Flower();
mumumu.print();
