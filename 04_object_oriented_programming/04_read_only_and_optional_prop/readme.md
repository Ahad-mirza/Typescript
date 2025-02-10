
# Readonly and Optional properties(Modifiers)

This project demonstrates how to use TypeScript modifiers to create more robust and predictable systems. It focuses on **`readonly`** and **optional properties** to make properties more controlled and flexible.

## 📑 Table of Contents

1. [Overview](#overview)
2. [Key Concepts](#key-concepts)
   - [`readonly` Properties](#readonly-properties)
   - [Optional Properties](#optional-properties)
3. [Code Example](#code-example)
4. [How It Works](#how-it-works)
5. [Conclusion](#conclusion)
6. [How to Use](#how-to-use)

## 📌 Overview

In TypeScript, we can use **modifiers** to enforce rules about how properties can be accessed or changed in our objects. The two main concepts explored in this project are:

- **`readonly`**: Ensures a property cannot be changed once initialized.
- **Optional Properties (`?`)**: Allows properties to be optionally included in an object.

We apply these to a simple **BankAccount** class to illustrate their use.

## 🔑 Key Concepts

### 🔒 `readonly` Properties

A **`readonly`** property can only be assigned a value **once**, and any attempt to modify it afterward will result in a compile-time error.

#### Explanation of `readonly`:

- **`readonly balance: number;`**  
  - This property represents the account balance and is marked with `readonly`, making it **immutable** after initialization.
  - Once the `balance` is set in the constructor, you can't change it later.
  - Example: If you try to do `account.balance = 1000;` after the account is created, TypeScript will throw an error.

---

### 📝 Optional Properties

An **optional** property can either be included or omitted when creating an object. This is indicated with the `?` modifier.

#### Explanation of Optional Properties:

- **`nickname?: string;`**  
  - The `nickname` property is optional, and it's allowed to be undefined.
  - The `?` after the property name means that this property may or may not exist on the object.
  - If a nickname is provided, it can be set via the `assignNickname` method, but if it's not set, no issue will arise.

## 💻 Code Example

```typescript
class BankAccount {
  // A property that should never change after initialization
  readonly balance: number;

  // An optional property (nickname) that may or may not be present
  nickname?: string;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Method to deposit money into the account
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  // Optional method to assign a nickname to the bank account
  assignNickname(nickname: string): void {
    this.nickname = nickname;
  }
}
```

### Explanation of the Code:

1. **`readonly balance: number;`**  
   - `readonly` ensures that once `balance` is set during initialization, it cannot be changed.
   - The balance is meant to remain constant after the account is created.
   - Any further attempts to modify the balance will result in a **compile-time error**.

2. **`nickname?: string;`**  
   - The `nickname` property is **optional**. It may be provided by the user, but it's not required.
   - This allows flexibility: some bank accounts might have a nickname, while others may not.

3. **`constructor(initialBalance: number)`**  
   - The constructor accepts an initial balance, which is then assigned to the `balance` property. This value is immutable after it's set.

4. **`deposit(amount: number): void`**  
   - This method allows users to deposit money into their account. It ensures that only positive amounts are allowed for deposits.
   - The `balance` is updated only if the deposit is a valid positive amount.

5. **`assignNickname(nickname: string): void`**  
   - This method allows users to set a nickname for their bank account.
   - If no nickname is set, the `nickname` property remains `undefined`.

## ⚙️ How It Works

- **Immutability with `readonly`**:
   - The `balance` property is protected from accidental modification due to the `readonly` modifier. Once it's set, it can't be changed, ensuring the integrity of the account balance.

- **Flexibility with Optional Properties**:
   - The `nickname` property, marked with `?`, can be added when needed. Users can choose whether to give their bank account a nickname or leave it blank.
   - This flexibility ensures that not all accounts require the same structure.

- **Error Handling**:
   - The deposit method ensures that only positive amounts can be deposited into the account, protecting against invalid operations.

## ✅ Conclusion

By using **`readonly`** and **optional properties**, we create more predictable and robust systems:

- **`readonly`** ensures certain properties are unchangeable after initialization, which prevents bugs and unintended changes.
- **Optional properties** allow flexibility in object creation, making it easier to deal with cases where certain information might not always be necessary.

This approach helps in writing more reliable and safer TypeScript code.

