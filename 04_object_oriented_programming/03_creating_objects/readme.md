# Understanding Objects in TypeScript

## Table of Contents 📜
- [Creating an Object](#creating-an-object)
- [Using Methods](#using-methods)
- [Instanceof Operator](#instanceof-operator)
- [Example Output](#example-output)

## Creating an Object 🏗️
Once we have a class, we can create an **object** using that class. In TypeScript, we use the `new` keyword to instantiate an object from a class.

```typescript
class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
```

```typescript
let account = new Account(123, 'Ahad', 1000);
console.log(account);
```

- We declare a variable `account`.
- We use `new Account(...)` to create an instance of the `Account` class.
- This object now has all properties (`id`, `owner`, `balance`) and methods (`deposit`).

## Using Methods 🛠️
We can call methods on the object just like we do with functions.

```typescript
account.deposit(2000);
console.log(account.balance);
```

- The `deposit` method adds `2000` to the balance.
- We log `account.balance` to check the updated balance.
- If we try to deposit a negative amount, it will throw an error due to the condition inside `deposit`.

## Instanceof Operator 🔍
In JavaScript and TypeScript, the `instanceof` operator is used to check if an object is an instance of a specific class.

```typescript
console.log(account instanceof Account); // true
```

- The `instanceof` operator returns `true` if `account` was created from the `Account` class.
- This is useful for **type checking** in TypeScript.

## Example Output 🖥️
When running the above code, the expected output would be:

```
Account { id: 123, owner: 'Ahad', balance: 1000 }
3000
true
```

- The first line logs the newly created `account` object.
- The second line logs the updated balance after depositing `2000`.
- The third line logs `true`, confirming that `account` is an instance of `Account`.

---
This guide explains how to create an object from a class, use its methods, and check its instance type using `instanceof` in TypeScript. 🚀

