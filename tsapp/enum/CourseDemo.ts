enum CourseName {
    Java, BlockChain, JavaScript
};

class Student {
    studentName: string;
    age: number;
    course: CourseName;

};


var s1=new Student();
s1.studentName="SCOTT"
s1.age=20
s1.course=CourseName.BlockChain

console.log(s1.studentName)
console.log(s1.age)
console.log(s1.course)
console.log(CourseName[s1.course])
