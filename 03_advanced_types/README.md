# 🔥 The `never` Type in TypeScript

## 📚 Table of Contents
- [📌 Introduction](#-introduction)
- [🛠️ Example 1: Function That Never Returns](#️-example-1-function-that-never-returns)
- [🛠️ Example 2: Function That Always Throws an Error](#️-example-2-function-that-always-throws-an-error)
- [⚙️ Configuring `allowUnreachableCode` in tsconfig.json](#-configuring-allowunreachablecode-in-tsconfigjson)
- [💡 Why Use `never`?](#-why-use-never)
- [🚀 Takeaway](#-takeaway)

## 📌 Introduction
The `never` type in TypeScript represents values that **never occur**. It is used for functions that **never return** or always **throw an error**. Although not commonly used, it has important applications in ensuring **type safety** and **unreachable code detection**.

## 🛠️ Example 1: Function That Never Returns
Let's define a function called `processEvents`, which **runs indefinitely** and never returns:

```ts
function processEvents(): never {
    while (true) {
        }
    console.log("Processing event...");
}
```

### 🔍 Explanation:
- The function **never exits** because it runs in an **infinite loop**.
- The return type is `never`, indicating that this function **never returns a value**.
- TypeScript **grays out** any code after calling this function since it is **unreachable**.

## 🛠️ Example 2: Function That Always Throws an Error
Another use case of `never` is when a function **always throws an error**:

```ts
function reject(message: string): never {
    throw new Error(message);
}
```

### 🔍 Explanation:
- This function **never returns** a value because it always **throws an error**.
- TypeScript infers its return type as `never`.
- Any code written after calling this function is **unreachable**.

## ⚙️ Configuring `allowUnreachableCode` in tsconfig.json
TypeScript provides an option in `tsconfig.json` to control whether **unreachable code** is allowed. By default, it may be `true`, but we can **disable it** for better type safety.

### 🔧 Steps to Disable `allowUnreachableCode`:
1. Open your `tsconfig.json` file.
2. Locate the following line:

   ```json
   // "allowUnreachableCode": true,
   ```
3. Uncomment the line (remove `//` at the beginning if it's commented out).
4. Change its value from `true` to `false`:

   ```json
   "allowUnreachableCode": false
   ```
5. Save the file and restart your TypeScript compiler if necessary.

### 📌 Why Disable It?
- Ensures the TypeScript compiler **flags unreachable code**.
- Helps catch **logical errors** before runtime.
- Enforces better **code discipline and readability**.

## 💡 Why Use `never`?
✅ **Helps the Compiler Detect Unreachable Code**: The TypeScript compiler can **reason about sections of code** and detect **dead code**.
✅ **Ensures Functions Behave as Expected**: Functions that should never return are explicitly marked as `never`.
✅ **Improves Code Safety**: TypeScript warns when unreachable code exists, preventing potential logical errors.

## 🚀 Takeaway
- The `never` type is used when a function **never returns** or **always throws an error**.
- It helps **TypeScript detect unreachable code** and ensures proper **code safety**.
- Disable `"allowUnreachableCode"` in `tsconfig.json` to enforce strict type checking.
- In the next section, we will explore **classes and interfaces** to structure our code better.



