# 🔧 Mastering Generic Functions in TypeScript 🚀

## 📌 Introduction
Generic functions in TypeScript allow us to create **reusable, flexible, and type-safe** functions. Instead of defining functions for specific types, generics provide a way to define **dynamic placeholders** that can work with multiple data types, enhancing **code scalability and maintainability**. 💡

---

## ✨ Why Use Generic Functions?
✅ **Reusability** – One function works with different types. 🔄  
✅ **Type Safety** – Ensures type correctness at compile-time. 🛑  
✅ **Flexibility** – Works seamlessly with various data structures. 🔧  
✅ **Better Code Maintenance** – Avoids redundant function definitions. 📌  

---

## 📂 Understanding Generic Functions 📁

### 📌 Defining a Generic Function
Let's create a function called `wrapInArray`, which takes a value and wraps it inside an array.

#### 🚫 Without Generics:
```typescript
function wrapInArray(value: number): number[] {
  return [value];
}
```
🔹 This function only works with **numbers**. We cannot pass a **string** or any other type.

#### ✅ With Generics:
```typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}
```
🔹 By adding `<T>`, we make the function **generic**, allowing it to accept any type dynamically.

### 📌 Using the Generic Function
```typescript
const numArray = wrapInArray(42);       // number[]
const strArray = wrapInArray("Hello"); // string[]
```
✅ The function correctly infers the type based on the provided value.

---

## 📌 Generic Methods Inside Classes
We can also use generics inside **class methods**:
```typescript
class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

const boolArray = ArrayUtils.wrapInArray(true); // boolean[]
```
🔹 This makes the utility method **reusable** without type restrictions.

---

## 🚀 Key Takeaways
🔹 Generic functions make code **reusable** and **type-safe**.  
🔹 `<T>` is a placeholder that adapts to different types.  
🔹 Generics can be used in **functions, methods, and classes**.  

