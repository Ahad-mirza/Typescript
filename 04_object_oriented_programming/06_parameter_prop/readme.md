

# ✨ Parameter prop and consice code

In TypeScript, when you define a class, you often need to create a constructor with parameters to initialize class properties. This pattern can be repetitive, especially when you have many properties. TypeScript offers a cool feature that allows you to define and initialize properties directly in the constructor by using **access modifiers** (`public`, `private`, `readonly`). This makes your code much more concise and easier to maintain.

## 📑 Table of Contents

1. [Overview](#overview)
2. [Using Access Modifiers in Constructor](#using-access-modifiers-in-constructor)
3. [Code Example](#code-example)
4. [Benefits](#benefits)
5. [Conclusion](#conclusion)

## 📌 Overview

When creating classes in TypeScript, you usually write a constructor that accepts parameters, then you manually initialize the class properties with the values passed in. This can result in repetitive and verbose code. Instead, you can simplify this process by using **access modifiers** like `public`, `private`, and `readonly` directly in the constructor’s parameter list.

TypeScript will automatically create and initialize properties based on the constructor parameters, reducing the need to manually declare and assign values to them.

## 🔑 Using Access Modifiers in Constructor

### Problem with Repetition:
In the traditional way, when defining a class, you might write the constructor and manually initialize properties like this:

```typescript
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;              // Initialization
    this.owner = owner;        // Initialization
    this._balance = balance;   // Initialization
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;   // Update balance
  }

  getbalance(): number {
    return this._balance;      // Get balance
  }
}
```

As you can see, the constructor has parameters, and we manually assign each parameter to its corresponding property. This is repetitive.

### Solution with Access Modifiers:
We can use **access modifiers** in the constructor parameters to automatically create and initialize properties. The `public`, `private`, and `readonly` keywords allow you to both declare the property and initialize it in one step.

#### Using `public`, `private`, and `readonly` modifiers:
```typescript
class Account {
  constructor(
    public owner: string,        // Public property created and initialized
    private _balance: number,    // Private property created and initialized
    readonly id: number          // Read-only property created and initialized
  ) {}
  
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;  // Update balance
  }

  getbalance(): number {
    return this._balance;     // Get balance
  }
}

let account = new Account('Ahad', 1000, 123);
account.deposit(2000);
console.log(account.getbalance());  // Outputs: 3000
```

### Explanation:
1. **Public Property (`owner`)**:
   - By declaring the `owner` parameter with the `public` modifier, TypeScript automatically creates a public property called `owner` and initializes it with the value passed to the constructor.
   
2. **Private Property (`_balance`)**:
   - By declaring the `_balance` parameter with the `private` modifier, TypeScript automatically creates a private property `_balance` that can only be accessed within the class.

3. **Readonly Property (`id`)**:
   - By declaring the `id` parameter with the `readonly` modifier, TypeScript automatically creates a read-only property `id` that can only be assigned once during initialization.

### Benefits:
- **Conciseness**: The constructor is much shorter and easier to maintain since we no longer need separate lines to declare and initialize each property.
- **Cleaner Code**: We directly define and initialize the properties in the constructor using access modifiers, making the code easier to read.
- **Automatic Property Creation**: TypeScript automatically generates the properties and assigns the values passed to the constructor, reducing the amount of boilerplate code.

## 🎯 Benefits

- **Reduced Repetition**: You no longer need to manually declare properties and then initialize them in the constructor. TypeScript does that for you.
- **Improved Readability**: The constructor is concise and focused on the core logic.
- **Cleaner and Maintainable Code**: The class becomes cleaner and more maintainable, especially when working with classes that have multiple properties.
- **Automatic Property Initialization**: TypeScript handles property initialization, reducing errors and ensuring the properties are always properly initialized.

## ✅ Conclusion

Using access modifiers (`public`, `private`, `readonly`) in the constructor is a great way to make your TypeScript code more concise and readable. It eliminates repetitive property declarations and initializations, resulting in cleaner, more maintainable code.

This feature is particularly helpful when defining classes with many properties, making your TypeScript code simpler and more efficient.

---
