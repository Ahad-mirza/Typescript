

# 📚 Fallback Values in TypeScript

## Table of Contents
- [🔍 Overview](#overview)
- [🛠️ Using Nullish Coalescing Operator (`??`)](#using-nullish-coalescing-operator-)
- [⚠️ Potential Pitfall with Falsy Values](#potential-pitfall-with-falsy-values)
- [✅ Conclusion](#conclusion)

---

## 🔍 Overview

When working with values that could potentially be `null` or `undefined` (such as user inputs or optional properties), we often need to provide a fallback or default value. For example, if we receive a `null` or `undefined` value for a variable, we might want to use a default value instead of proceeding with the missing or invalid data.

### Problem:
If a user enters a value like `0`, it is a valid input, but using simple checks for `null` or `undefined` would ignore it because `0` is considered a "falsy" value in JavaScript.

---

## 🛠️ Using Nullish Coalescing Operator (`??`)

The **nullish coalescing operator (`??`)** helps us assign a default value only when the left-hand side value is `null` or `undefined`. This operator is especially useful when we want to treat `0`, `false`, and empty strings as valid inputs.

### Example Code:

```typescript
let speed: number | null | undefined = null; // User input could be null or undefined

// Using nullish coalescing to provide a fallback value
let validSpeed = speed ?? 30; // If speed is null or undefined, use 30 as the default value

console.log(validSpeed);  // Output: 30
```

### Explanation:
- **`speed ?? 30`**: This means "use the value of `speed` unless it is `null` or `undefined`, in which case, fall back to `30`."
- If `speed` is `null` or `undefined`, the `??` operator assigns the default value `30`. If `speed` is any other value, even a falsy one like `0`, it will be used as is.

---

## ⚠️ Potential Pitfall with Falsy Values

A common mistake is to confuse the nullish coalescing operator (`??`) with the logical OR (`||`) operator. The `||` operator returns the right-hand side value if the left-hand side is any falsy value (e.g., `0`, `false`, `""`, `null`, `undefined`). This is different from `??`, which only considers `null` or `undefined` as fallback conditions.

### Example of the Difference:

```typescript
let speed: number | null | undefined = 0;

let validSpeed1 = speed || 30; // Using logical OR (||)
let validSpeed2 = speed ?? 30; // Using nullish coalescing (??)

console.log(validSpeed1); // Output: 30 (because 0 is falsy, it falls back to 30)
console.log(validSpeed2); // Output: 0 (0 is a valid number, so no fallback)
```

### Explanation:
- **`speed || 30`**: This will fall back to `30` even if `speed` is `0`, because `0` is a falsy value.
- **`speed ?? 30`**: This will keep `0` as the value because `0` is a valid number, not `null` or `undefined`.

---

## ✅ Conclusion

The **nullish coalescing operator (`??`)** is a powerful tool in TypeScript for handling `null` and `undefined` values with fallback logic. It ensures that only `null` or `undefined` trigger the fallback value, while other falsy values (like `0`, `false`, or `""`) are treated as valid inputs.

### Quick Tips:
- Use `??` when you want to check for `null` or `undefined` and provide a fallback value.
- Avoid using `||` if you want to allow valid falsy values like `0` or `false`.
- The nullish coalescing operator is especially useful when dealing with user inputs or optional values.

---
