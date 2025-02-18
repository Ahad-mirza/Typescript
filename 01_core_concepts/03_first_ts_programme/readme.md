
# Setting Up a TypeScript Project and Understanding Type Annotations 🛠️

## 📜 Table of Contents
- [Creating a TypeScript Project](#creating-a-typescript-project)
- [Using the TypeScript Compiler](#using-the-typescript-compiler)
- [What are Type Annotations?](#what-are-type-annotations)
- [Benefits of Type Annotations](#benefits-of-type-annotations)

---

## 📂 Creating a TypeScript Project
1. Navigate to your desired directory (e.g., Desktop):
   ```bash
   cd Desktop
   ```
2. Create a new folder for your project:
   ```bash
   mkdir hello-world
   cd hello-world
   ```
3. Open the folder in **VS Code**:
   - You can drag and drop the folder into VS Code.
   - Alternatively, use the terminal command:
     ```bash
     code .
     ```

---

## 🔧 Using the TypeScript Compiler
Inside VS Code, you can use the built-in terminal:
1. Open the **terminal**:
   - **Windows/Linux**: `Ctrl + ~`
   - **Mac**: `Cmd + ~`
   - Or go to **View → Terminal**
2. Create a TypeScript file:
   ```bash
   touch index.ts
   ```
3. Compile the TypeScript file:
   ```bash
   tsc index.ts
   ```
   This generates an `index.js` file with the compiled JavaScript.

---

## ✍️ What are Type Annotations?
Type annotations allow us to explicitly define the type of a variable in TypeScript. Example:
```typescript
let age: number = 25;
```
Here, `age` is declared as a **number**, meaning:
- ✅ We can assign numbers: `age = 30;`
- ❌ We **cannot** assign a string: `age = "twenty"; // Error!`

Type annotations **prevent accidental type mismatches**, making our code more predictable.

---

## 🎯 Benefits of Type Annotations
✅ **Early Error Detection** – Catches type-related bugs at compile time instead of runtime.
✅ **Better Code Documentation** – Makes it clear what type a variable should hold.
✅ **Enhanced Code Readability** – Other developers can quickly understand the expected data type.
✅ **Improved Code Completion** – VS Code provides better IntelliSense and auto-suggestions.

---

