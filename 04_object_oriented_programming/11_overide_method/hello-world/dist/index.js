"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log(this.fullName + ' is walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }
    study() {
        console.log(this.fullName + ' is studying ' + this.course);
    }
}
class Teacher extends Person {
}
const student = new Student('John', 'Doe', 'Computer Science');
student.walk();
student.study();
const teacher = new Teacher('Jane', 'Doe');
console.log(teacher.fullName);
