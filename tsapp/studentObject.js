var Student = {
    sid: 101,
    sname: "Shiva",
    marks: 80,
    getResult: function () {
        if (this.marks >= 35) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
};
console.log(Student);
console.log(Student.sid);
console.log(Student.sname);
console.log(Student.marks);
console.log(Student.getResult());
