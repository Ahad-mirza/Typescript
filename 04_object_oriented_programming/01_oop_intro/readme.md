# Object-Oriented Programming (OOP) 

## 📖 Table of Contents
1. Introduction to Programming Paradigms
2. What is Object-Oriented Programming?
3. Properties and Methods in OOP
4. Real-World Examples of OOP
5. OOP vs Functional Programming 

---

## 1️⃣ Introduction to Programming Paradigms
Programming paradigms are different styles or ways of writing code. They are not programming languages but rather different approaches to structuring and organizing code. Some common paradigms include:

- **Procedural Programming** 📝
- **Functional Programming** ⚡
- **Object-Oriented Programming (OOP)** 🏗️
- **Aspect-Oriented Programming** 🛠️

Different programming languages support different paradigms. Some languages allow multiple paradigms.

---

## 2️⃣ What is Object-Oriented Programming? 🏗️
OOP is a programming paradigm that allows us to organize code using objects. An object is a structure that contains **data (properties)** and **behavior (methods/functions)**.

For example, consider a **Person** object:

- **Properties** (Data): Name, Email, etc.
- **Methods** (Behavior): Talk, Walk, etc.

In OOP, a function inside an object is called a **method**.

---

## 3️⃣ Properties and Methods in OOP 🏷️
- **Properties** 🔹 represent data inside an object. Example: A `Person` object can have `name` and `email`.
- **Methods** 🔹 represent behavior inside an object. Example: A `Person` object can have `talk()` and `walk()` methods.

Example in TypeScript:
```typescript
class Person {
  name: string;
  email: string;
  
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  
  talk() {
    console.log(`${this.name} is talking`);
  }
}
```

---

## 4️⃣ Real-World Examples of OOP 🌍
OOP is commonly used to model real-world entities in applications. Some examples include:
- **User Authentication System** 🔑 (Login, Logout, Reset Password)
- **E-Commerce Application** 🛒 (Products, Orders, Customers)
- **Contact Management System** 📞 (Add, Delete, Update Contacts)

Each of these can be represented using objects with relevant properties and methods.

---

## 5️⃣ OOP vs Functional Programming ⚡
- **OOP** focuses on objects that store both **data** and **behavior**.
- **Functional Programming** focuses on **pure functions** as the building blocks.
- Some developers prefer only **functional programming**, but it’s important to understand both paradigms and use them where appropriate.

---



