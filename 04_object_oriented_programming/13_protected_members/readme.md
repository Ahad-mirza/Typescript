# 🔒 Understanding Protected Members in TypeScript

In TypeScript, class members can be marked as `public`, `private`, or `protected`. While you may already be familiar with public and private members, **protected members** introduce an additional level of access control that is useful in inheritance scenarios.

---

## 📚 Table of Contents
1. [Recap of Public and Private Members](#recap-of-public-and-private-members)
2. [What are Protected Members?](#what-are-protected-members)
3. [Code Example](#code-example)
4. [Key Differences](#key-differences)
5. [When to Use Protected Members](#when-to-use-protected-members)
6. [Key Takeaways](#key-takeaways)

---

## 📖 Recap of Public and Private Members
- **Public Members:** Can be accessed from anywhere—both inside and outside the class.
- **Private Members:** Can only be accessed within the class where they are declared. Attempting to access them from outside will result in an error.

Example:
```typescript
class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private getAge(): number {
    return this.age;
  }
}

const person = new Person('Alice', 30);
console.log(person.name); // ✅ Accessible
console.log(person.age);  // ❌ Error: Private property
```

---

## 🔒 What are Protected Members?
Protected members are similar to private members in that they are not accessible from outside the class. However, they **can be inherited** and accessed within derived classes.

Example:
```typescript
class Person {
  protected work(): void {
    console.log('Person is working');
  }
}

class Teacher extends Person {
  public teach(): void {
    this.work(); // ✅ Allowed because work() is protected
  }
}

const teacher = new Teacher();
teacher.teach(); // Outputs: Person is working
```

---

## 🔍 Key Differences
- **Private Members:** Accessible only within the class where they are declared.
- **Protected Members:** Accessible within the class and any derived classes (but not from outside the class hierarchy).

### Example of Private vs. Protected:
```typescript
class Person {
  private privateMethod(): void {
    console.log('This is private');
  }

  protected protectedMethod(): void {
    console.log('This is protected');
  }
}

class Employee extends Person {
  public doWork(): void {
    // this.privateMethod(); // ❌ Error: privateMethod is not accessible
    this.protectedMethod(); // ✅ Allowed: protectedMethod is accessible
  }
}
```

---

## 🛠️ When to Use Protected Members
Protected members should be used sparingly and only when:
- You have a clear inheritance hierarchy.
- You need to share functionality across parent and child classes.

⚠️ **Warning:** Overuse of protected members can increase coupling between classes, making code harder to maintain. Prefer public and private members unless you are certain protected is necessary.

---

## 🔑 Key Takeaways
1. **Protected members** are accessible within the declaring class and any derived classes.
2. They offer more flexibility than private members in inheritance scenarios.
3. Be cautious with protected members, as they can lead to tightly coupled code.

