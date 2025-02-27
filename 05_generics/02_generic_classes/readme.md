# 🚀 Introduction to Generic Classes in TypeScript

## 📌 Table of Contents
- [🌟 What are Generics?](#-what-are-generics)
- [❓ Why Use Generics?](#-why-use-generics)
- [🛠 Creating a Generic Class](#-creating-a-generic-class)
- [🔄 Working with Multiple Types](#-working-with-multiple-types)
- [🎯 Default Generic Types](#-default-generic-types)
- [🚀 Benefits of Generics](#-benefits-of-generics)

---

## 🌟 What are Generics?
**Generics** allow us to create reusable and flexible components in TypeScript by defining a placeholder type that can be determined later when the class, function, or interface is used.

## ❓ Why Use Generics?
Without generics, we often rely on `any`, which removes type safety, or create multiple versions of a class to handle different data types. Generics solve this by allowing **one class** to work with **multiple types** while maintaining type safety.

---

## 🛠 Creating a Generic Class
To define a **generic class**, we add **angle brackets (`<>`)** after the class name and define a generic type parameter (commonly named `T`).

```typescript
class DataHolder<T> {
  constructor(public data: T) {}

  getData(): T {
    return this.data;
  }
}

const numberHolder = new DataHolder<number>(42);
console.log(numberHolder.getData()); // Output: 42

const stringHolder = new DataHolder<string>("Hello Generics!");
console.log(stringHolder.getData()); // Output: Hello Generics!
```
✅ The same class works for **both numbers and strings** without losing type safety! 🎉

---

## 🔄 Working with Multiple Types
We can use **multiple generic parameters** for more flexibility.

```typescript
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair1 = new KeyValuePair<number, string>(1, "One");
console.log(pair1.key); // 1
console.log(pair1.value); // "One"

const pair2 = new KeyValuePair<string, boolean>("isValid", true);
console.log(pair2.key); // "isValid"
console.log(pair2.value); // true
```
✨ Now, the `KeyValuePair` class can work with **any combination** of key-value types!

---

## 🎯 Default Generic Types
We can set **default types** for generics if no type is provided.

```typescript
class OptionalType<T = string> {
  constructor(public value: T) {}
}

const defaultString = new OptionalType(); // Defaults to string
console.log(defaultString.value); // string

const numberType = new OptionalType<number>(100);
console.log(numberType.value); // 100
```
🎯 This makes it even easier to use generics **without explicitly specifying types**.

---

## 🚀 Benefits of Generics
✅ **Reusability:** One class for multiple data types.
✅ **Type Safety:** Prevents unexpected errors.
✅ **Better IntelliSense:** Provides autocompletion and error detection.
✅ **Flexibility:** Supports various types dynamically.

