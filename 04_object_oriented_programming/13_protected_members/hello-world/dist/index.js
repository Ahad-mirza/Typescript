"use strict";
class Person {
    work() {
        console.log('Person is working');
    }
}
class Teacher extends Person {
    teach() {
        this.work();
    }
}
const teacher = new Teacher();
teacher.teach(); // Outputs: Person is working
