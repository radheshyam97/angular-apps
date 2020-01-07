var CourseName;
(function (CourseName) {
    CourseName[CourseName["Java"] = 0] = "Java";
    CourseName[CourseName["BlockChain"] = 1] = "BlockChain";
    CourseName[CourseName["JavaScript"] = 2] = "JavaScript";
})(CourseName || (CourseName = {}));
;
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
;
var s1 = new Student();
s1.studentName = "SCOTT";
s1.age = 20;
s1.course = CourseName.BlockChain;
console.log(s1.studentName);
console.log(s1.age);
console.log(s1.course);
console.log(CourseName[s1.course]);
