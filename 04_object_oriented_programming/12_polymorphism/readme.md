# 📘 Polymorphism in Object-Oriented Programming (OOP)

Polymorphism is a fundamental concept in Object-Oriented Programming (OOP). It enables objects to take different forms and behave differently based on their types. This behavior makes programs more flexible and extendable.

---

## 📚 Table of Contents
1. [What is Polymorphism?](#what-is-polymorphism)
2. [Polymorphism in Action](#polymorphism-in-action)
3. [Code Example](#code-example)
4. [Explanation](#explanation)
5. [Open/Closed Principle](#openclosed-principle)
6. [Key Takeaways](#key-takeaways)

---

## 🧑‍🏫 What is Polymorphism?
Polymorphism allows a single function to behave differently depending on the type of object it operates on. In our example, different classes (`Teacher` and `Principal`) inherit from a base `Person` class, and each class overrides the behavior of a shared method.

---

## 🛠️ Polymorphism in Action
Imagine a function that prints the full names of different people (e.g., students, teachers, and principals). Each type of person has its unique title that should be displayed before their name. The function should determine the correct format based on the object type, without needing to change its code for each new type.

---

## 📦 Code Example
```typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}

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
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Person('John', 'Doe'), 
  new Teacher('Jane', 'Doe'),
  new Principal('John', 'Smith')
]);
```

---

## 📖 Explanation

1. **Base Class (`Person`):**
   - The `Person` class has a `fullName` getter that combines the `firstName` and `lastName`.
2. **Derived Class (`Teacher`):**
   - The `Teacher` class overrides the `fullName` method to add the prefix "Teacher" before the name.
3. **Derived Class (`Principal`):**
   - The `Principal` class also overrides `fullName` to add the prefix "Principal."
4. **Polymorphism in `printNames`:**
   - The `printNames` function takes an array of `Person` objects.
   - It prints the correct name format based on the actual type of each object in the array.

### 🖥️ Output
```plaintext
John Doe
Teacher Jane Doe
Principal John Smith
```

---

## 🚀 Open/Closed Principle

This example demonstrates the **Open/Closed Principle**:
- **Open for extension:** We can add new types (e.g., `Principal`) without modifying the `printNames` function.
- **Closed for modification:** The `printNames` function doesn’t need to change when new classes are added.

This principle is essential for creating scalable and maintainable applications.

---

## 🔑 Key Takeaways
1. **Polymorphism Simplifies Code:** A single function can handle multiple types with minimal changes.
2. **Extensibility:** Adding new types is easy—just create a new class and override methods as needed.
3. **Base Class Methods:** Shared behavior is defined in the base class, and derived classes can enhance or change it.

Polymorphism is a powerful OOP concept that helps in writing flexible and reusable code. With it, you can easily extend functionality and reduce redundancy.

---

