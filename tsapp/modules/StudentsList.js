"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var StudentList = /** @class */ (function () {
    function StudentList() {
        this.students = [
            new Student_1.Student(101, "Stu1", 80),
            new Student_1.Student(102, "Stu2", 70),
            new Student_1.Student(103, "Stu3", 90),
            new Student_1.Student(104, "Stu4", 65),
            new Student_1.Student(105, "Stu5", 75)
        ];
    }
    StudentList.prototype.getTopRanker = function () {
        var index;
        var max = 0;
        for (var i in this.students) {
            console.log(i);
            if (this.students[i].marks > max) {
                max = this.students[i].marks;
                index = i;
            }
        }
        return this.students[index];
    };
    return StudentList;
}());
var s = new StudentList();
console.log(s.getTopRanker());
