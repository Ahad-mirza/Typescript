# Type Aliases in TypeScript

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [What is a Type Alias?](#what-is-a-type-alias)
4. [Solution: Using Type Aliases](#solution-using-type-aliases)
5. [Code Breakdown](#code-breakdown)
6. [Code Example](#code-example)
7. [Conclusion](#conclusion)

---

## 🔍 Introduction
This document explains the concept of **Type Aliases** in TypeScript, highlights the issues with repetitive code, and presents a better approach using **Type Aliases** to improve maintainability and reusability. 

---

## 🚨 Problem Statement

1. When creating multiple employee objects, we must **repeat the structure**, leading to **duplicate code**.
2. This violates the **DRY Principle** (*Don't Repeat Yourself*).
3. We need a way to **define properties and methods** once and reuse them across multiple instances.

---

## 🤔 What is a Type Alias?
A **Type Alias** in TypeScript is a way to **name** a specific object structure or type so that it can be reused in multiple places. Instead of writing the same structure repeatedly, we define it once and refer to it using its alias.

For example:
```typescript
type Employee = {
  name: string;
  age: number;
};
```
Now, instead of rewriting `{ name: string; age: number; }` every time, we can simply use `Employee` as the type.

---

## 💡 Solution: Using Type Aliases
To solve this, we use **Type Aliases** to define a reusable structure for an `Employee`. The alias allows us to enforce type safety while avoiding redundant code. 

---

## 📝 Code Breakdown

| **Line** | **Explanation** |
|----------|---------------|
| **1** | Define a `type` alias named `Employee` using Pascal Case. |
| **2** | The `id` property is marked as `readonly` to prevent modification after initialization. |
| **3** | Define `name` as a string and `retire` as a function accepting a `Date` parameter. |
| **4** | Create an `employee` object and specify its type as `Employee`. |
| **5** | Assign values to `id`, `name`, and define the `retire` method. |
| **6** | The `retire` function logs the passed date to the console. |

---

## 🖥️ Code Example
```typescript
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  }
};
```

---

## 🎯 Conclusion
Using **Type Aliases** in TypeScript helps:
- Reduce **duplicate code**
- Follow the **DRY Principle**
- Ensure **type safety**
- Make code **easier to maintain** and **reuse**

By defining a reusable structure, we can create multiple employee instances **efficiently** while enforcing consistent types across the application. 🚀

