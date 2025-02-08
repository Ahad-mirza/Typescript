
### Optional Chaining in TypeScript

```markdown
# 📚 README: Optional Chaining and Handling `null` & `undefined` in TypeScript

## Table of Contents
- [🔍 Overview](#overview)
- [🛠️ Optional Property Access Operator](#optional-property-access-operator)
- [🔢 Optional Element Access Operator](#optional-element-access-operator)
- [💻 Optional Call Operator](#optional-call-operator)
- [✅ Conclusion](#conclusion)

---

## 🔍 Overview

When working with objects in TypeScript, there are scenarios where certain properties or methods might not exist. In these cases, accessing them could lead to errors if we don't properly check for `null` or `undefined`. TypeScript provides a set of operators that allow us to access properties safely, even if the object or its property is `null` or `undefined`.

The key operators we're going to cover are:
1. **Optional Property Access Operator (`?.`)**.
2. **Optional Element Access Operator (`?.[]`)**.
3. **Optional Call Operator (`?.()`)**.

---

## 🛠️ Optional Property Access Operator

This operator allows us to safely access properties of an object that might be `null` or `undefined`. If the object or property is `null` or `undefined`, it will return `undefined` instead of throwing an error.

### Example Code:

```typescript
type Customer = {
  name: string;
  birthDate?: Date; // birthDate is optional
};

function getCustomer(id: number): Customer | undefined {
  // Simulate getting customer from database
  if (id === 1) {
    return { name: "John Doe", birthDate: new Date() };
  }
  return undefined; // Simulating no customer found
}

let customer = getCustomer(1);
console.log(customer?.birthDate); // Will log the birthDate or undefined if no customer
```

### Explanation:
- **`customer?.birthDate`**: The optional chaining operator (`?.`) checks if `customer` is `null` or `undefined` before accessing the `birthDate` property. If `customer` is `null` or `undefined`, it will return `undefined` instead of throwing an error.

---

## 🔢 Optional Element Access Operator

When working with arrays, you may want to access an element that may not exist (e.g., accessing an out-of-bounds index). The optional element access operator (`?.[]`) can be used to safely access elements in an array.

### Example Code:

```typescript
let customers: Customer[] = [];
console.log(customers?.[0]?.name); // Will log undefined if the first element is not found
```

### Explanation:
- **`customers?.[0]?.name`**: This expression will check if `customers` is `null` or `undefined` and if the first element exists. If any of these conditions fail, it returns `undefined` without throwing an error.

---

## 💻 Optional Call Operator

The optional call operator (`?.()`) is used when you have a function or method that might not exist. If the function doesn't exist (i.e., it’s `null` or `undefined`), it will return `undefined` instead of attempting to call it and causing an error.

### Example Code:

```typescript
let log: ((message: string) => void) | undefined = undefined;
log?.("This will not run if log is undefined");  // Safely does nothing
```

### Explanation:
- **`log?.("message")`**: This will check if `log` is a valid function before trying to call it. If `log` is `undefined`, it will safely do nothing.

---

## ✅ Conclusion

TypeScript provides powerful tools for safely working with potentially `null` or `undefined` values in your objects, arrays, and function calls. The **optional chaining** operators (`?.`, `?.[]`, `?.()`) make your code more robust by preventing errors caused by trying to access or invoke properties/methods that don't exist.

- **Optional Property Access (`?.`)**: Safely access properties in objects.
- **Optional Element Access (`?.[]`)**: Safely access array elements.
- **Optional Call Operator (`?.()`)**: Safely invoke functions or methods.

These operators significantly reduce the need for verbose `if` statements to check for `null` or `undefined`, making your code cleaner and easier to maintain.

---
```

### Explanation of Key Concepts:
1. **Optional Property Access Operator (`?.`)**: Safely access object properties, preventing errors if the object is `null` or `undefined`.
2. **Optional Element Access Operator (`?.[]`)**: Safely access array elements without the risk of accessing an out-of-bounds index or a `null`/`undefined` array.
3. **Optional Call Operator (`?.()`)**: Safely call functions or methods that may not exist, preventing runtime errors.
