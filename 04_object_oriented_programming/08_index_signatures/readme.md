

# Index Signatures in TypeScript

## Table of Contents
- 🔍 [Introduction](#introduction)
- 🔧 [Why Use Index Signatures](#why-use-index-signatures)
- 🏗️ [Code Explanation](#code-explanation)
- 🛠️ [Example Code](#example-code)
- ⚠️ [Important Notes](#important-notes)

## 🔍 Introduction
In JavaScript, we can create objects and dynamically add properties to them. However, TypeScript enforces stricter rules on the shape of objects, which prevents dynamic property addition unless we use a special feature called **Index Signatures**.

Index signatures allow us to dynamically add properties to objects while maintaining type safety.

## 🔧 Why Use Index Signatures
Consider a scenario where we want to track seating arrangements in a concert. Instead of pre-defining a fixed number of seats, index signatures allow us to create seat properties dynamically, accommodating different venue seat numbering systems (e.g., "A1," "B2," "Seat42").

## 🏗️ Code Explanation
### Step-by-Step Explanation
1. **Creating the Class:**
   - We create a class called `seatAssignment` to manage seating.

2. **Using Index Signatures for Type Safety:**
   - We define an index signature to enforce the type of dynamic properties, ensuring only strings are used for both keys and values.

## 🛠️ Example Code
### ✅ Correct Code with Index Signature
```typescript
class seatAssignment {
  [seatNumber: string]: string;
}

let seats = new seatAssignment();

// Dynamically assigning seat occupants
seats.A1 = 'Ahad';
seats.A2 = 'Ali';

// Accessing seat assignments
console.log(seats.A1); // Output: Ahad
console.log(seats.A2); // Output: Ali

// Type enforcement example
// seats["B2"] = 42; // ❌ Error: Type 'number' is not assignable to type 'string'.
```

### ⚠️ Code Without Type Safety (JavaScript-style behavior)
```typescript
"use strict";
class seatAssignment {
}

let seats = new seatAssignment();
seats.A1 = 'Ahad';
seats.A2 = 'Ali';

// This will not trigger an error at compile time in plain JavaScript-style behavior.
```

## ⚠️ Important Notes
1. **Type Safety:** Index signatures enforce type safety by ensuring only the specified value type can be used.
2. **Dynamic Property Names:** You can use any string as a property name, making it flexible for various scenarios.
3. **Error Prevention:** Assigning a non-string value will result in a TypeScript error, preventing runtime issues.

---
