class Person{
    constructor(public firstName: string, public lastName: string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName
    }

    walk()
    {
        console.log(this.fullName + ' is walking');
    }
}

class Student extends Person{
    constructor(firstName: string, lastName: string, public course: string){
        super(firstName, lastName);
    }

    study(){
        console.log(this.fullName + ' is studying ' + this.course);
    }
}

class Teacher extends Person{
    override get fullName(){
        return 'Teacher ' + super.fullName;
    }
}

const student = new Student('John', 'Doe', 'Computer Science');
student.walk();
student.study();
 
 
const teacher = new Teacher('Jane', 'Doe');
console.log(teacher.fullName);

