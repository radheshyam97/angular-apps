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
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.getDetails = function () {
        return this.name + " " + this.age;
    };
    return Person1;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, marks, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.marks = marks;
        return _this;
    }
    return Student;
}(Person1));
;
var s1 = new Student(1001, 80, "Raj", 20);
console.log(s1);
