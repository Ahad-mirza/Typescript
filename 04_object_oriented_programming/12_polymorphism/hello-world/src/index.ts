class Person {
  constructor(public firstName: string,public lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person {
    override get fullName() {
        return `Teacher ${super.fullName}`;
    }
}

class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}

function printNames(people: Person[]) {
  for (let person of people) 
    console.log(person.fullName);
}


printNames([
new Person('John', 'Doe'), 
new Teacher('Jane', 'Doe'),
new Principal('John', 'Smith')
]);

