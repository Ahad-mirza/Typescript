# Union Types in TypeScript

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [What is a Union Type?](#what-is-a-union-type)
3. [Using Union Types in a Function](#using-union-types-in-a-function)
4. [Type Narrowing](#type-narrowing)
5. [Code Example](#code-example)
6. [Conclusion](#conclusion)

---

## 🔍 Introduction
This document explains the concept of **Union Types** in TypeScript, how they allow variables or parameters to have multiple types, and how to handle them effectively using **Type Narrowing**.

---

## 🤔 What is a Union Type?
A **Union Type** in TypeScript allows a variable or function parameter to accept **multiple types**. This is done using the `|` (pipe) symbol.

For example:
```typescript
let value: string | number;
```
Here, `value` can be either a `string` or a `number`.

---

## 💡 Using Union Types in a Function
Consider a function that converts weight from **kg to pounds**. The function should accept the weight as either a `number` or a `string`:
```typescript
function convertWeight(weight: number | string) {
  console.log(weight);
}
```
Now, we can call this function in two ways:
```typescript
convertWeight(10); // Passing a number
convertWeight("10 kg"); // Passing a string
```

---

## 🔍 Type Narrowing
Since `weight` can be **either** a `number` or a `string`, we must determine its actual type before performing operations. This is called **Type Narrowing**.

We use `typeof` to check the type at runtime:
```typescript
function convertWeight(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2; // Conversion for numbers
  } else {
    return parseFloat(weight) * 2.2; // Conversion for strings
  }
}
```
Now, the function correctly handles both `number` and `string` inputs.

---

## 🖥️ Code Example
```typescript
function convertWeight(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseFloat(weight) * 2.2;
  }
}

console.log(convertWeight(10)); // Output: 22
console.log(convertWeight("10 kg")); // Output: 22
```

---

## 🎯 Conclusion
Using **Union Types** in TypeScript helps:
- Allow variables to store **multiple types**.
- Improve **flexibility** while maintaining **type safety**.
- Use **Type Narrowing** to apply type-specific logic.

By narrowing the type, we can perform **valid** operations based on whether the value is a `number` or `string`. 🚀

