var Student = /** @class */ (function () {
    function Student(rollNo, studentName, marks) {
        this.marks = marks;
        this.studentName = studentName;
        this.marks = marks;
    }
    Student.prototype.getResult = function () {
        if (this.marks >= 35)
            return "Pass";
        else
            return "Failed";
    };
    return Student;
}());
;
var s1 = new Student(1001, "Raj", 20);
console.log(s1);
console.log(s1.getResult());
