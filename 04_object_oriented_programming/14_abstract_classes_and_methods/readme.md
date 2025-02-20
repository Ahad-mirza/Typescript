
# Abstract Classes and Methods in TypeScript

## 📚 Table of Contents
1. [Introduction](#-introduction)
2. [Code Example](#-code-example)
3. [Explanation](#-explanation)
   - [Abstract Class](#1-abstract-class-shape)
   - [Constructor](#2-constructorpublic-color-string)
   - [Abstract Method](#3-abstract-rendervoid)
   - [Extending Shape](#4-class-circle-extends-shape)
   - [Circle Constructor](#5-constructorcolor-string-public-radius-number)
   - [Calling Super](#6-supercolor)
   - [Override Method](#7-override-rendervoid)
   - [Creating an Instance](#8-let-circle--new-circlered-5)
   - [Calling Render](#9-circlerender)
4. [Why Use Abstract Classes?](#-why-use-abstract-classes)
5. [Compilation Errors](#-compilation-errors)
6. [Summary](#-summary)

---

## 📖 Introduction
Abstract classes and methods are essential for creating a flexible and extensible design in TypeScript. They provide a blueprint for other classes without being directly instantiated. Let's explore this concept with an example to better understand how it works.

---

## 🛠 Code Example
```typescript
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  override render(): void {
    console.log(`Drawing a circle of color ${this.color} with radius ${this.radius}`);
  }
}

let circle = new Circle('red', 5);
circle.render();
```

---

## 🔍 Explanation

### 1. `abstract class Shape`
- **Abstract Class**: Declaring `Shape` as an abstract class means you cannot create an instance of it directly.
- Purpose: It serves as a blueprint for other shapes like `Circle`.

### 2. `constructor(public color: string)`
- **Constructor**: This initializes the `color` property of any shape.
- **Public Modifier**: Automatically creates a public property named `color` and assigns it.

### 3. `abstract render(): void;`
- **Abstract Method**: Declares a method `render` without an implementation.
- **Purpose**: Forces any subclass (like `Circle`) to implement the `render` method.
- Abstract methods **can only exist inside abstract classes**.

### 4. `class Circle extends Shape`
- The `Circle` class extends the `Shape` class and inherits its properties and methods.

### 5. `constructor(color: string, public radius: number)`
- The `Circle` constructor takes two parameters:
  - `color`: Passed to the parent `Shape` class.
  - `radius`: Declared as a public property.

### 6. `super(color)`
- **`super` Keyword**: Calls the constructor of the base class (`Shape`) and passes the `color` parameter.

### 7. `override render(): void`
- Implements the abstract `render` method.
- **`override` Keyword**: Ensures that this method properly overrides the parent method.
- Logs a message describing the circle's color and radius.

### 8. `let circle = new Circle('red', 5);`
- Creates an instance of the `Circle` class with the color `'red'` and a radius of `5`.

### 9. `circle.render();`
- Calls the `render` method of the `Circle` instance.
- Output: `Drawing a circle of color red with radius 5`.

---

## 🚫 Why Use Abstract Classes?
- **Prevent Instantiation**: Abstract classes can't be instantiated directly.
- **Enforce Consistency**: Ensures that all subclasses implement required methods.
- **Flexible Design**: Allows different shapes to have different rendering algorithms.

---

## ⚠️ Compilation Errors
1. **Instantiating an Abstract Class**
   - Trying to instantiate `Shape` will result in an error:
     - `Cannot create an instance of an abstract class.`
2. **Abstract Method Without Implementation**
   - If `Circle` doesn't implement `render`, an error occurs:
     - `Non-abstract class 'Circle' does not implement inherited abstract member 'render'.`

---

## ✅ Summary
- Abstract classes act as blueprints and cannot be instantiated.
- Abstract methods enforce method implementation in subclasses.
- TypeScript ensures that all subclasses follow the defined structure.

