
# 🔑 Key-Value Pair Class & The Power of Generics 🚀

## 📌 Table of Contents
- [🌟 Introduction](#-introduction)
- [❓ Problem Statement](#-problem-statement)
- [🛠 Initial Implementation](#-initial-implementation)
- [⚠ Challenges](#-challenges)
- [🚧 Limitations of the Current Approach](#-limitations-of-the-current-approach)
- [💡 Need for a Better Solution](#-need-for-a-better-solution)

---

## 🌟 Introduction
When developing software, we often need to store and manage **key-value pairs** efficiently. A common approach is to define a class that represents these pairs, but without a flexible implementation, we may face **major issues**! 😲

## ❓ Problem Statement
We want to create a `KeyValuePair` class that allows us to store a **key-value pair** where:
- 🔑 **Key** should be a **number**.
- 📝 **Value** should be a **string**.

However, this approach becomes **problematic** when we need to work with different data types. 😓

## 🛠 Initial Implementation
We define a `KeyValuePair` class as follows:

```typescript
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

const pair = new KeyValuePair(1, "Half");
console.log(pair);
```
✅ This works fine for `number` keys and `string` values, but what if we need more flexibility? 🤔

## ⚠ Challenges
If we later need to store values of **different types**, such as a `string` for the key or an `object` for the value, this implementation **fails**! ❌

```typescript
const pair2 = new KeyValuePair("username", { firstName: "John", lastName: "Doe" });
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

## 🚧 Limitations of the Current Approach
🔴 **Lack of Flexibility:** Works only with `number` keys and `string` values.
🔴 **No Type Safety:** Using `any` type removes type checking and IntelliSense support.
🔴 **Code Duplication:** We need to create **separate classes** for different data types, leading to **redundant code**. 😩

## 💡 Need for a Better Solution
Instead of creating **multiple versions** of `KeyValuePair`, we need a **reusable and flexible solution**. 

✨ **Generics** allow us to define a class that can work with different data types without losing **type safety**. 

🔜 **In Next Folders:** Let's explore **Generics in TypeScript** and see how they solve this problem effectively! 🚀🔥

