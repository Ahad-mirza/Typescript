# 🏦Access Control Modifiers

This example demonstrates how to use **access control keywords** in TypeScript, specifically focusing on the **`private`** keyword and the common **underscore (`_`)** prefix convention for private properties. These tools help us control access to class properties and methods, making our code more secure and robust.

## 📑 Table of Contents

1. [Overview](#overview)
2. [Access Control Keywords](#access-control-keywords)
   - [`private` Keyword](#private-keyword)
   - [Underscore Convention for Private Properties](#underscore-convention-for-private-properties)
3. [Code Example](#code-example)
4. [Conclusion](#conclusion)

## 📌 Overview

In TypeScript, **access control keywords** (`public`, `private`, and `protected`) are used to manage the visibility of class properties and methods. This ensures that internal details of a class remain protected, and only the necessary methods and properties are exposed for external use. 

We are focusing on:
- The **`private`** keyword to restrict access to properties.
- The convention of using an underscore (`_`) prefix for **private properties**.

## 🔑 Access Control Keywords

### 🔒 `private` Keyword

The **`private`** keyword restricts access to class properties or methods, making them **only accessible within the class itself**. This ensures that internal logic and data are **encapsulated** and cannot be directly modified from outside the class.

#### Example Usage of `private`:

In the `Account` class, we use the `private` keyword for the `_balance` property:

```typescript
private _balance: number;
```

- **Why Use `private`?**  
  - We use `private` to ensure that the balance of an account can only be changed through specific methods (like `deposit`). External code cannot directly modify `_balance`, which helps to maintain the integrity of the data.
  - For example, if you tried to access or modify `account._balance = 5000;` directly, TypeScript would throw an error, ensuring that the balance can only be updated via the `deposit` method.

### 🔄 Underscore Convention for Private Properties

In TypeScript, it’s common to prefix **private properties** with an underscore (`_`) to distinguish them from public properties. This is just a **convention** that makes it clear which properties are meant to be **private** even though TypeScript enforces this with the `private` keyword.

#### Example Usage of `_`:

```typescript
private _balance: number;
```

- **Why Use `_`?**  
  - While the `private` modifier prevents external access, the underscore (`_`) serves as a visual cue to developers that the property is intended to be private.
  - This helps improve code readability and maintainability, especially in large codebases or when interacting with developers who may not be familiar with the codebase. 

In this example, **`_balance`** is a private property, indicating that it should only be accessed within the `Account` class, and developers are encouraged to not modify it directly.

## 💻 Code Example

Here is a simplified version of the `Account` class, highlighting the `private` keyword and the underscore (`_`) convention for the balance property:

```typescript
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;  // private property, only accessible within the class
  nickname?: string;

  constructor(id: number, owner: string, _balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  // Public method to deposit money into the account
  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('Invalid amount');
    this._balance += amount;  // internal modification of _balance
  }

  // Public getter to access the balance
  getbalance(): number {
    return this._balance;
  }
}

let account = new Account(123, 'Ahad', 1000);
account.deposit(2000);
console.log(account.getbalance());  // Outputs the updated balance
```

### Key Points:
- **`private _balance: number;`**  
  - This is a **private property** with an underscore prefix, making it clear that this property should not be accessed directly outside the class. We can only modify it through methods like `deposit()`.
  
- **`deposit(amount: number): void`**  
  - This public method allows controlled updates to the balance, ensuring the integrity of the account’s data.

## ✅ Conclusion

- The **`private`** keyword helps **encapsulate** and **protect** sensitive or internal data, such as the account balance. It ensures that the balance cannot be modified directly from outside the class.
- Using the **underscore (`_`)** convention for private properties is a helpful, widely accepted practice to clearly signal that a property is intended to be private, even though TypeScript enforces the access control with the `private` modifier.
  
By using these access control modifiers, we can write more **robust** and **maintainable** code that prevents unintended modifications and makes the internal logic of a class easier to manage.

---
