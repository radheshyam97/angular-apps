import { Student } from "./Student";
class StudentList {

    students: Student[] = [
        new Student(101, "Stu1", 80),
        new Student(102, "Stu2", 70),
        new Student(103, "Stu3", 90),
        new Student(104, "Stu4", 65),
        new Student(105, "Stu5", 75)
    ];

    getTopRanker(): Student {

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
    }
}


var s: StudentList = new StudentList();
console.log(s.getTopRanker())
