class Student {
    rollNo: number;
    studentName: string;
    marks: number;
    constructor(rollNo:number, studentName:string,marks: number) {

        this.marks = marks;
        this.studentName=studentName;
        this.marks=marks;
    }
    getResult() {
        if (this.marks >= 35)
            return "Pass"
        else
            return "Failed"
    }
};



var s1 = new Student(1001,"Raj",20);
console.log(s1);
console.log(s1.getResult());

