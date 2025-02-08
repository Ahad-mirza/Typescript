
# 📚 Working with `null` and `undefined` in TypeScript

## Table of Contents
- [🔍 Overview](#overview)
- [⚠️ TypeScript's Strict Handling of `null` and `undefined`](#typescript-strict-handling-of-null-and-undefined)
- [🛠️ Function Example: Handling `null` and `undefined`](#function-example-handling-null-and-undefined)
- [💡 Using Union Types for Flexibility](#using-union-types-for-flexibility)
- [✅ Conclusion](#conclusion)

---

## 🔍 Overview

In TypeScript, by default, the type system is very strict when it comes to handling `null` and `undefined` values. These values are often sources of bugs and errors in applications, so TypeScript ensures that they are handled properly. However, sometimes you may need to allow `null` or `undefined` values for certain variables or function parameters. In this lesson, we'll explore how TypeScript handles these values and how you can manage them effectively using **union types**.

---

## ⚠️ TypeScript's Strict Handling of `null` and `undefined`

By default, TypeScript has strict settings for handling `null` and `undefined`. This strict mode is part of TypeScript's **strict null checks**, which is enabled by default. This means that `null` and `undefined` are not assignable to other types (like `string` or `number`), which helps prevent potential runtime errors.

For example, if you try to pass `undefined` as a parameter where a `string` is expected, TypeScript will raise an error:

### TypeScript Code:

```typescript
function create(name: string) {
  console.log(name.toUpperCase());
}

create(undefined);  // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
```

This happens because, by default, TypeScript considers `undefined` and `null` as separate types and does not allow them to be used as regular values for other types.

---

## 🛠️ Function Example: Handling `null` and `undefined`

Now, let's say we want to allow the possibility of `null` or `undefined` for the `name` parameter in a function. We can write code to handle these values by printing a default message if the `name` is not provided.

Here’s how we can handle `undefined` values with conditional checks:

### TypeScript Code:

```typescript
function create(name: string | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola");  // Default message when name is undefined or null
  }
}

create(undefined);  // Output: Hola
create("Ahad");   // Output: Ahad
```

### Explanation:
- **Union Type (`string | undefined`)**: The parameter `name` is now of type `string | undefined`, which means it can be either a `string` or `undefined`. This allows you to pass `undefined` as a valid argument.
- **Conditional Check**: We check whether `name` has a value. If it does, we print the uppercase version of the `name`; otherwise, we print a default message (`Hola`).

---

## 💡 Using Union Types for Flexibility

If you want to handle cases where a value might be `null` or `undefined` alongside a regular value, you can use **union types**. This allows TypeScript to accept multiple possible types for a variable, giving you more flexibility in how you handle `null` and `undefined`.

For example, if you want to allow `null` or `undefined` values, you can define a union type as follows:

### TypeScript Code:

```typescript
let name: string | null | undefined;

name = null;      // Valid
name = undefined; // Valid
name = "Ahad";  // Valid
```

### Explanation:
- The variable `name` can now be a `string`, `null`, or `undefined`, thanks to the **union type** `string | null | undefined`.
- This allows you to assign either a valid string, `null`, or `undefined` to `name`, and handle these values accordingly in your code.

---

## ✅ Conclusion

TypeScript's strict handling of `null` and `undefined` helps catch potential bugs early, but sometimes you need more flexibility. You can use **union types** (e.g., `string | undefined`, `string | null | undefined`) to allow variables to accept `null` and `undefined` values alongside other types. By combining type checking and conditional logic, you can ensure your application handles missing or optional values gracefully.

### Quick Tips:
- Use union types when you want to allow `null` or `undefined` values.
- By default, TypeScript's **strict null checks** are enabled, preventing `null` and `undefined` from being used in places where they shouldn't be.
- Always check for `null` or `undefined` values when handling these types in your functions to avoid runtime errors.

---
```

### Explanation of the Key Concepts:
1. **Strict Null Checks**: By default, TypeScript does not allow `null` or `undefined` to be assigned to non-nullable types, preventing possible issues that can occur when working with these values.
2. **Union Types**: A union type, like `string | undefined`, allows a variable to accept multiple types, such as `string` or `undefined`, making it easier to work with optional values.
3. **Conditional Logic**: You can use conditionals (`if` statements) to check for `null` or `undefined` before performing operations on a value.
