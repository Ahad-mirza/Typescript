# 📄 `unknown` vs `any` in TypeScript

## 📚 Table of Contents
- [📌 Introduction](#-introduction)
- [🛠️ Code Example](#️-code-example)
- [🧐 Explanation](#-explanation)
- [💡 Why Prefer `unknown`?](#-why-prefer-unknown)
- [🚀 Takeaway](#-takeaway)

## 📌 Introduction
In TypeScript, the `any` type represents **any kind of value**, but we should avoid using it as much as possible. Instead, we use the `unknown` type, which is a safer alternative.

## 🛠️ Code Example
```ts
function render(document: unknown) {
    // ❌ Compilation Error: Object is of type 'unknown'
    document.print();
}
```

## 🧐 Explanation
- The TypeScript compiler **throws an error**: `Object is of type 'unknown'`.
- Since `document` is of type `unknown`, the compiler **doesn't allow calling `print()` directly**.
- The compiler **forces us to perform type checking** before calling any method on `document`.

## 💡 Why Prefer `unknown`?
✅ **Type Safety**: Unlike `any`, `unknown` requires explicit type checking, reducing runtime errors.
✅ **Encourages Better Code**: It forces developers to handle different types properly.
✅ **Avoids Unexpected Behavior**: Prevents unintended method calls on variables with unknown types.

## 🚀 Takeaway
- Using `unknown` is preferred over `any` because it enforces **type checking** before performing operations.
- In the next section, we will learn about **type narrowing** to handle `unknown` values effectively.

