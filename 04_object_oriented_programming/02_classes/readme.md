# Create Classes in TypeScript
## Table of Contents 📜
- [Class Definition](#class-definition)
- [Constructor](#constructor)
- [Methods](#methods)
- [Creating an Object](#creating-an-object)
- [Compiling and Running](#compiling-and-running)
- [Difference Between TypeScript and JavaScript](#difference-between-typescript-and-javascript)

## Class Definition 🏗️
A class is a blueprint for creating objects. It acts like an **object factory**. In this example, we represent an **account** with properties like `id`, `balance`, and `owner`, and a method like `deposit`.

### TypeScript Code Example
```typescript
class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
```

### JavaScript Equivalent Code
```javascript
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
```

## Constructor 🏠
The constructor is a special function inside a class used to initialize an object. If a property is not initialized, **TypeScript** throws an error:

```
Property 'balance' has no initializer and is not definitely assigned in the constructor.
```

To fix this, we define a **constructor** to initialize properties like `id`, `owner`, and `balance`.

## Methods 🛠️
- A **method** is a function inside a class.
- We define a method like `deposit`.
- If `amount` is less than or equal to 0, an error is thrown.

```typescript
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
```

## Creating an Object 🏗️
Once we have a class, we can **create an object** using that class.

```typescript
const myAccount = new Account(1, "John Doe", 1000);
console.log(myAccount);
```

## Compiling and Running 🖥️
- Compile the TypeScript code.
- Run the program and check the output.
- The terminal should show the expected results.

## Difference Between TypeScript and JavaScript ⚡
- **TypeScript** requires defining types (`number`, `string`, etc.), whereas **JavaScript** does not enforce types.
- TypeScript throws compilation errors for undefined properties, while JavaScript allows more flexibility.
- TypeScript supports optional chaining and strong type safety, making code more predictable.
- JavaScript does not support interfaces and type annotations natively, whereas TypeScript enhances code maintainability with these features.
- The TypeScript compiler converts the TypeScript code into JavaScript before execution.

---

