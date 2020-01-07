class Person1 {

    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {

        return this.name + " " + this.age;
    }

};
class Student extends Person1 {
    studentId: number;
    marks: number;

    constructor(studentId: number, marks: number, name: string, age: number) {
        super(name, age);
        this.studentId = studentId;
        this.marks = marks;
    }
};


var s1 = new Student(1001, 80, "Raj", 20);

console.log(s1);