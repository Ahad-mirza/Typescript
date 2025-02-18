# ✨ Properties and Getters/Setters in TypeScript

In TypeScript, we can simplify property initialization using **parameter properties** and ensure robust data handling with **getters** and **setters**. This allows for more concise and maintainable code, while also enforcing validation when necessary.

## 📑 Table of Contents

1. [Overview](#overview)
2. [Problem with Direct Property Assignment](#problem-with-direct-property-assignment)
3. [Using Parameter Properties](#using-parameter-properties)
4. [Solution with Getters and Setters](#solution-with-getters-and-setters)
5. [Code Example](#code-example)
6. [Conclusion](#conclusion)

## 📌 Overview

In TypeScript, we can use **parameter properties** to initialize class properties directly in the constructor. Additionally, using **getters** and **setters** for properties allows us to validate data before modifying the property, ensuring better control and preventing invalid data from being assigned.

## 🔑 Problem with Direct Property Assignment

Without validation, allowing direct modification of properties could lead to inconsistent data. For example, in the `Account` class, the `balance` property could be set to an invalid value, such as a negative number, unless we validate it beforehand.

Here’s an example of what could go wrong:

### Problematic Code:

```typescript
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // Direct setter for balance
  set balance(value: number) {
    this._balance = value;
  }

  // Getter for balance
  get balance(): number {
    return this._balance;
  }
}
```

The direct setter for `balance` allows anyone to set a negative balance, which is undesirable in a financial system.

## 💡 Solution with Getters and Setters

To avoid issues like setting an invalid balance, we can use a **getter** to access the balance and a **setter** with validation to ensure the balance is updated only with valid data.

### Key Changes:
1. **Getter**: Retrieves the current balance.
2. **Setter**: Validates the new value before updating the balance.
3. **Validation**: Throws an error if an invalid balance (such as a negative value) is set.

### Code with Parameter Properties, Getters, and Setters:

```typescript
class Account {
  constructor(
    public readonly id: number,        // Public readonly property for id
    public owner: string,               // Public property for owner
    private _balance: number            // Private property for balance
  ) {}

  // Deposit method to add money to the balance
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }

  // Getter for balance
  get balance(): number {
    return this._balance;
  }

  // Setter for balance with validation
  set balance(value: number) {
    if (value < 0) throw new Error('Invalid value');
    this._balance = value;
  }
}

let account = new Account(123, 'Ahad', 1000);

// Depositing money and accessing balance through getter
account.deposit(2000);
console.log(account.balance); // Outputs: 3000

// Trying to set an invalid balance directly
try {
  account.balance = -500;  // Throws error
} catch (error) {
  console.error(error.message);  // Outputs: Invalid value
}
```

### Key Features:
- **Parameter Properties**: In the constructor, we use the `public readonly` and `private` access modifiers to automatically create and initialize class properties. This reduces boilerplate code.
- **Getter and Setter**: The balance is accessed via a getter, and any assignment to the balance property goes through a setter that validates the new value.

## ✅ Conclusion

Using **parameter properties** in TypeScript allows for a more concise and readable class constructor. By combining getters and setters, we can ensure that properties are accessed and modified safely. The setter allows us to validate data before updating the property, preventing invalid or inconsistent data from being introduced.

This approach makes the code more maintainable and robust, ensuring that business rules are enforced consistently throughout the application.

---
