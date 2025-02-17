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
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
    }
    study() {
        console.log(this.fullName + ' is studying ' + this.course);
    }
}
const student = new Student('John', 'Doe', 'Computer Science');
student.walk();
student.study();
