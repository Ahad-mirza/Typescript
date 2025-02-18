"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Teacher extends Person {
    get fullName() {
        return `Teacher ${super.fullName}`;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Person('John', 'Doe'),
    new Teacher('Jane', 'Doe'),
    new Principal('John', 'Smith')
]);
