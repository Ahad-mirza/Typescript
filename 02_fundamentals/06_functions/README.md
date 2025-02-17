
# 📚 TypeScript Functions

Welcome to this guide on **Functions in TypeScript**! 🚀 This README explains how TypeScript helps prevent common issues when working with functions.

---

## 📋 Table of Contents
1. [Introduction to Functions](#1-introduction-to-functions)
2. [Defining Functions](#2-defining-functions)
3. [Return Types](#3-return-types)
4. [Optional and Default Parameters](#4-optional-and-default-parameters)
5. [Conclusion](#5-conclusion)

---

## 1️⃣ Introduction to Functions

Functions in TypeScript allow you to:
- Define parameter types 📝
- Enforce return types ✅
- Avoid common JavaScript pitfalls 🚫

---

## 2️⃣ Defining Functions

### Example:
```typescript
function calculateTax(income: number) {
  return income * 1.2;
}
```

### Explanation:
- **`income: number`** 🔢 ensures the parameter `income` must be a number.
- The function **returns** the tax calculation.

---

## 3️⃣ Return Types

### Example:
```typescript
function calculateTax(income: number): number {
  if (income > 50000) {
    return income * 1.3;
  }
  return income * 1.2;
}
```

### Why It’s Important:
- **Explicit return type `: number`** ensures the function always returns a number.
- **Prevents mistakes** like forgetting a return statement or returning a different type (e.g., a string).

### Best Practices:
- **Always declare return types** for clarity and type safety. ✅
- **Avoid implicit `undefined` returns** by ensuring all code paths return a value.

---

## 4️⃣ Optional and Default Parameters

### Optional Parameters:
```typescript
function calculateTax(income: number, taxYear?: number) {
  if (taxYear && taxYear < 2022) {
    return income * 1.3;
  }
  return income * 1.2;
}
```

- **`taxYear?`** ❓ makes `taxYear` optional.
- You can now call `calculateTax(50000)` without providing `taxYear`.

### Default Parameters:
```typescript
function calculateTax(income: number, taxYear: number = 2022) {
  if (taxYear < 2022) {
    return income * 1.3;
  }
  return income * 1.2;
}
```

- **Default value `= 2022`** 📆 assigns `2022` if `taxYear` isn’t provided.
- This avoids potential `undefined` issues.

### Benefits:
- **Stricter checks** 🛡️ compared to JavaScript.
- **Prevents errors** when missing arguments.
- Improves **readability and maintainability**. 📖

---
### Configuring tsconfig.json for Best Practices ⚙️
To make sure that TypeScript is enforcing the best practices discussed above, you can configure the `tsconfig.json` file. This configuration file allows you to enable stricter checks and ensure your code stays error-free.

Here’s an example `tsconfig.json` with the recommended settings:
```json
{
  "compilerOptions": {
    "target": "es6", 
    "module": "commonjs", 
    "strict": true, 
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```
### Key Options and What They Do 🛠️:
- strict: Enables all strict type-checking options, making the TypeScript compiler more rigorous in catching potential errors early. It includes checks like noImplicitAny, strictNullChecks, and noImplicitReturns.

- noImplicitReturns: Ensures that every function either returns a value on all paths or gives an error, preventing issues where a function might implicitly return undefined.

- noUnusedLocals: Triggers a warning if you declare a local variable that is never used in the code, helping to keep your code clean.

- noUnusedParameters: Issues a warning when a function has parameters that are declared but never used, ensuring meaningful function signatures.

- noImplicitAny: Disallows variables with an implicit any type, forcing you to define types explicitly and avoid issues with dynamic types.

- strictNullChecks: Ensures that null and undefined are treated as distinct types and cannot be assigned to other types (unless explicitly allowed).

---

## 5️⃣ Conclusion 🌟

- **TypeScript functions** help prevent common mistakes in JavaScript.
- **Explicit types** ensure correctness and code quality.
- Use **optional** and **default parameters** to handle flexible function calls.

Happy coding with TypeScript! 💙🚀

---



