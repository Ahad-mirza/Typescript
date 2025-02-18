
# 📚 TypeScript Data Types Explained

Welcome to this guide on **TypeScript Data Types**! 🚀 This README provides a line-by-line explanation of key concepts, making it easy to understand for beginners and developers transitioning from JavaScript.

---

## 📋 Table of Contents
1. [Introduction to Data Types](#1-introduction-to-data-types)
2. [Basic Types](#2-basic-types)
3. [Type Inference](#3-type-inference)
4. [Advanced Types](#4-advanced-types)
5. [Conclusion](#5-conclusion)

---

## 1️⃣ Introduction to Data Types

In **JavaScript**, we have built-in data types like:
- **`number`** 🔢: For numeric values.
- **`string`** ✍️: For text.
- **`boolean`** ✅❌: For true/false values.
- **`undefined`** ❓: When a variable is declared but not assigned a value.
- **`object`** 📦: For key-value pairs.

**TypeScript** expands on this with additional types:
- **`any`** 🎯: Accepts any type (use cautiously).
- **`unknown`** 🤔: Similar to `any`, but safer as you must check the type before usage.
- **`never`** 🚫: Represents values that never occur (like functions that throw errors).
- **`null`** 🌑: Represents the intentional absence of any value.
- **`tuple`** 📏: A fixed-length array with specified types.

---

## 2️⃣ Basic Types

### Example:
```typescript
let sales: number = 123456789;
let course: string = "TypeScript Basics";
let isPublished: boolean = true;
```

### Explanation:
- **`sales: number = 123456789;`** 🔢  
  Defines a variable `sales` of type `number`.
  
- **`course: string = "TypeScript Basics";`** ✍️  
  `course` is a `string` containing text.
  
- **`isPublished: boolean = true;`** ✅  
  `isPublished` is a `boolean` representing a true/false state.

---

## 3️⃣ Type Inference ⚡

In **TypeScript**, you don’t always need to annotate variables. The compiler can **infer** the type based on the value.

### Example:
```typescript
let sales = 123456789; // TypeScript infers this as number
let course = "TypeScript Basics"; // Inferred as string
let isPublished = true; // Inferred as boolean
```

### Key Points:
- No need to write `: number`, `: string`, or `: boolean` explicitly.
- TypeScript is smart enough to detect the type automatically.

---

## 4️⃣ Advanced Types 🚀

- **`any`** 🎯: Accepts any type, disabling type checking.
  ```typescript
  let data: any = 42;
  data = "Hello"; // Valid
  ```


---

## 5️⃣ Conclusion 🌟

- TypeScript enhances JavaScript with **static typing**.
- **Type inference** reduces the need for manual annotations.
- Use advanced types like `unknown` and `never` for **safer, more predictable code**.

Happy coding with TypeScript! 💙🚀

---



