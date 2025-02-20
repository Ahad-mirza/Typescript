# Interfaces in TypeScript

## 📚 Table of Contents
1. [Introduction](#-introduction)
2. [Code Example](#-code-example)
3. [Explanation](#-explanation)
   - [Defining an Interface](#1-defining-an-interface)
   - [Implementing an Interface](#2-implementing-an-interface)
   - [Using the Interface](#3-using-the-interface)
   - [Code Completion Tip](#4-code-completion-tip)
4. [Extending Interfaces](#-extending-interfaces)
5. [Interfaces vs Abstract Classes](#-interfaces-vs-abstract-classes)
6. [Summary](#-summary)

---

## 📖 Introduction
Interfaces in TypeScript define the shape of an object. They are used to declare properties and methods without specifying their implementation. This allows for a more concise and flexible way to enforce type safety and structure in your code.

---

## 🛠 Code Example
```typescript
interface Calendar {
  name: string;

  addEvent(event: string): void;
  removeEvent(event: string): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(event: string): void {
    console.log(`Adding event: ${event} to ${this.name}`);
  }

  removeEvent(event: string): void {
    console.log(`Removing event: ${event} from ${this.name}`);
  }
}

let calendar = new GoogleCalendar('Google Calendar');
calendar.addEvent('Meeting');
calendar.removeEvent('Meeting');
```

---

## 🔍 Explanation

### 1. Defining an Interface
```typescript
interface Calendar {
  name: string;
  addEvent(event: string): void;
  removeEvent(event: string): void;
}
```
- **Interface Declaration**: The `Calendar` interface defines the shape of a calendar object.
- **Properties and Methods**:
  - `name`: A string property representing the name of the calendar.
  - `addEvent`: A method to add an event.
  - `removeEvent`: A method to remove an event.

### 2. Implementing an Interface
```typescript
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(event: string): void {
    console.log(`Adding event: ${event} to ${this.name}`);
  }

  removeEvent(event: string): void {
    console.log(`Removing event: ${event} from ${this.name}`);
  }
}
```
- **Implements Keyword**: The `GoogleCalendar` class implements the `Calendar` interface.
- **Constructor**: Initializes the `name` property.
- **Methods**: Implements the `addEvent` and `removeEvent` methods as required by the interface.

### 3. Using the Interface
```typescript
let calendar = new GoogleCalendar('Google Calendar');
calendar.addEvent('Meeting');
calendar.removeEvent('Meeting');
```
- Creates an instance of `GoogleCalendar` and calls the methods defined by the interface.

### 4. Code Completion Tip
- In Visual Studio Code, place the cursor over the `implements` keyword and press `Ctrl + .` (Control + Period).
- This will display a code completion option to automatically add missing methods required by the interface.

---

## ➕ Extending Interfaces
Interfaces can be extended to add more properties and methods.

```typescript
interface AdvancedCalendar extends Calendar {
  shareCalendar(email: string): void;
}

class OutlookCalendar implements AdvancedCalendar {
  constructor(public name: string) {}

  addEvent(event: string): void {
    console.log(`Adding event: ${event} to ${this.name}`);
  }

  removeEvent(event: string): void {
    console.log(`Removing event: ${event} from ${this.name}`);
  }

  shareCalendar(email: string): void {
    console.log(`Sharing ${this.name} with ${email}`);
  }
}
```

---

## ⚖️ Interfaces vs Abstract Classes
| Feature                         | Interface                          | Abstract Class                     |
|----------------------------------|------------------------------------|-------------------------------------|
| Instantiation                    | Cannot be instantiated             | Cannot be instantiated              |
| Method Implementation            | No method implementation allowed   | Can have method implementation      |
| Extending/Implementing           | Can be extended by multiple classes| Can be extended by a single class   |
| Use Case                         | Describing shape of objects        | Sharing logic and structure         |

- **When to Use Interfaces**: Use interfaces when you only need to describe the shape of an object.
- **When to Use Abstract Classes**: Use abstract classes when you need to share logic or enforce method implementation.

---

## ✅ Summary
- Interfaces define the shape of an object and enforce type safety.
- They provide flexibility by allowing multiple implementations.
- Interfaces are concise and ideal for scenarios without shared logic.

