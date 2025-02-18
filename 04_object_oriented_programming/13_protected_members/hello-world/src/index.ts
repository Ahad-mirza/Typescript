class Person {
  protected work(): void {
    console.log('Person is working');
  }
}

class Teacher extends Person {
  public teach(): void {
    this.work(); 
  }
}

const teacher = new Teacher();
teacher.teach(); // Outputs: Person is working