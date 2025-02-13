
# 📚 Fundamentals of TypeScript

Welcome to the **Fundamentals of TypeScript** folder! This repository covers the core concepts of TypeScript, designed to help you build a strong foundation in this powerful language. 🚀

## 📑 Table of Contents
1. 🔡 [Types in TypeScript](#-types-in-typescript)
2. ❓ [Any Type](#-any-type)
3. 📋 [Arrays](#-arrays)
4. 🔗 [Tuple](#-tuple)
5. 🎯 [Enums](#-enums)
6. 🛠️ [Functions](#-functions)

---

### 🔡 Types in TypeScript
TypeScript is a statically typed language, meaning you can define the type of variables at the time of declaration. This helps catch errors during development rather than at runtime. It includes basic types like:
- **String**: for textual data
- **Number**: for numeric values
- **Boolean**: for true/false values
- **Void, Null, Undefined**: for special cases

### ❓ Any Type
The `any` type allows you to store any kind of value without type-checking. While it's flexible, it should be used cautiously as it defeats TypeScript's type safety features.

**Key Points:**
- Bypasses type checking
- Useful when migrating JavaScript code
- Reduces TypeScript's advantages if overused

### 📋 Arrays
Arrays in TypeScript are used to store multiple values of the same type. You can define them using:
- **Type followed by square brackets** (e.g., `number[]`)
- **Generic array type** (e.g., `Array<number>`)

Arrays help manage collections of data efficiently.

### 🔗 Tuple
Tuples are like arrays but with fixed lengths and specific types for each element. They are perfect when you need to group related data of different types.

**Examples of Usage:**
- Representing a pair like coordinates (x, y)
- Storing key-value pairs

### 🎯 Enums
Enums allow you to define a set of named constants. They make code more readable and maintainable, especially when dealing with fixed sets of values like days of the week, directions, etc.

**Types of Enums:**
- Numeric Enums
- String Enums
- Heterogeneous Enums

### 🛠️ Functions
Functions are the building blocks of TypeScript programs. TypeScript allows you to:
- Specify **parameter types** and **return types**
- Use **optional** and **default parameters**
- Create **anonymous functions** and **arrow functions**

Functions improve code reusability and organization.

---

✨ **Happy Learning TypeScript!** ✨

