
# 📚Literal Types in TypeScript

## Table of Contents
- [🔍 Overview](#overview)
- [💡 What are Literal Types?](#what-are-literal-types)
- [🔢 Limiting Values with Literal Types](#limiting-values-with-literal-types)
- [🛠️ Creating Custom Types with Literal Values](#creating-custom-types-with-literal-values)
- [✅ Conclusion](#conclusion)

---

## 🔍 Overview

In TypeScript, we often want to **limit the possible values** that a variable can hold. This is where **literal types** come into play. Literal types allow you to specify an exact value (like a specific number or string) that a variable can hold, rather than just any number or string.

---

## 💡 What are Literal Types?

Literal types allow us to define **exact values** that a variable can take. Instead of allowing a variable to hold any number or string, we can restrict it to specific values. This ensures that a variable can only hold predefined values, offering more control and type safety.

---

## 🔢 Limiting Values with Literal Types

Let’s say we want to limit the values of a variable called `quantity`. Instead of allowing `quantity` to hold any number, we want it to only be either `50` or `100`. Here’s how we can use literal types to achieve this:

### TypeScript Code:

```typescript
let quantity: 50 | 100;  // The quantity can only be 50 or 100
```

In this code:
- **`50 | 100`** is a **literal type** that restricts `quantity` to be either `50` or `100` and **nothing else**.

Without literal types, if you used a regular `number` type, the variable could hold any valid number in JavaScript. But with literal types, we're limiting it to only two specific values.

---

## 🛠️ Creating Custom Types with Literal Values

To make this even more flexible and reusable, we can create a custom type that holds the literal values `50` and `100`. Instead of hardcoding the values in multiple places, we can define a new type for `quantity`.

### TypeScript Code:

```typescript
type Quantity = 50 | 100;  // Define a custom type `Quantity`
let quantity: Quantity;    // Use the custom type for the variable
```

In this example:
- **`Quantity`** is a custom type that can be either `50` or `100`.
- Now, we can use `Quantity` for any variable that should hold these specific values, ensuring that the variable can only take those two values.

---

## ✅ Conclusion

Literal types in TypeScript allow us to define specific values for variables, making our code more robust and type-safe. By limiting variables to a set of predefined values, we can prevent errors and ensure that only valid data is assigned to variables.

You can use literal types not just for numbers, but for strings as well! For example, you can create a type for units like:

```typescript
type Unit = "centimeter" | "meter";  // Literal types for units
let unit: Unit = "centimeter";       // The unit can only be "centimeter" or "meter"
```

By using literal types and custom types, you can enhance the type safety and maintainability of your TypeScript code.

---
```

### Explanation:
1. **Literal Types**: These allow you to limit a variable's value to a specific set of values, preventing it from holding anything outside the predefined values.
2. **Custom Type**: We can use `type` to create a custom type that can hold specific literal values (like `50` or `100`) for better readability and reusability.
3. **Use in Real-World Applications**: You can define custom literal types for various use cases like units of measurement, statuses, or flags, as shown in the "Unit" example.

