
# 📚Intersection Types in TypeScript

## Table of Contents
- [🔍 Overview](#overview)
- [⚡ Union Types Recap](#union-types-recap)
- [💡 Introduction to Intersection Types](#introduction-to-intersection-types)
- [🛠️ Creating Custom Types](#creating-custom-types)
  - [📝 Defining the Custom Type](#defining-the-custom-type)
- [🔗 Combining Types with Intersection](#combining-types-with-intersection)
- [✅ Conclusion](#conclusion)

---

## 🔍 Overview

In this lesson, we'll explore **intersection types** in TypeScript. Intersection types allow you to combine multiple types into one, ensuring that an object adheres to more than one structure at the same time. Let’s break down the steps.

---

## ⚡ Union Types Recap

Before diving into intersection types, let's review **union types**.

Union types allow a variable to be one of several types, represented using the vertical bar `|`. Here’s an example:

```typescript
let value: number | string;  // `value` can be either a number or a string
```

This means the variable `value` can hold either a `number` or a `string`. 

---

## 💡 Introduction to Intersection Types

Now let’s look at **intersection types**. Unlike union types, intersection types combine multiple types into one, requiring a variable or object to satisfy **all** the types at once.

We use the **ampersand (`&`) symbol** for intersection types:

```typescript
type numberAndString = number & string;  // Impossible: an object cannot be both a number and a string
```

This is just an example to show how intersection works. We can’t really have an object that is both a number and a string, but in real-world applications, intersection types are useful for combining multiple interfaces or types.

---

## 🛠️ Creating Custom Types

Now, let’s create a **custom type** using intersection.

We will define a custom type called `Resizable`. This type represents an object that can be resized and does not take any parameters.

### 📝 Defining the Custom Type

```typescript
type Resizable = {
  resize: () => void;  // The object has a `resize` method that doesn't take any parameters
};
```

Here, `Resizable` is an object type with a `resize` method that returns nothing (`void`) and does not require any parameters.

---

## 🔗 Combining Types with Intersection

Now, let’s combine multiple types using an intersection. Let’s say we have a type called `Draggable` and want to create a new type that combines both `Draggable` and `Resizable`.

### TypeScript Code

```typescript
type Draggable = {
  drag: () => void;  // The object has a `drag` method
};

type DraggableResizable = Draggable & Resizable;  // Combine `Draggable` and `Resizable` types
```

In this case:
- `Draggable` is a type that requires a `drag` method.
- `DraggableResizable` combines both `Draggable` and `Resizable` using an intersection type, meaning it must have both the `drag` and `resize` methods.

---

### Implementing Intersection Type

Now, we can declare a variable of the `DraggableResizable` type. This object must implement all members from both the `Draggable` and `Resizable` types:

```typescript
let draggableResizableObject: DraggableResizable = {
  drag: () => { console.log('Dragging...'); },  // Implementing `drag` method
  resize: () => { console.log('Resizing...'); }  // Implementing `resize` method
};
```

In this example, `draggableResizableObject` implements both `drag` and `resize` methods, adhering to both types.

---

## ✅ Conclusion

Intersection types in TypeScript allow you to combine multiple types into a single one, ensuring that an object satisfies all of the specified types. This is useful when we want to combine features or behaviors from different sources, as we did with the `DraggableResizable` example.

---

### 💻 JavaScript Equivalent

Although intersection types are specific to TypeScript, we can still have a similar approach in JavaScript by combining objects manually:

```javascript
// JavaScript equivalent
let draggableResizableObject = {
  drag: function() { console.log('Dragging...'); },
  resize: function() { console.log('Resizing...'); }
};
```

While JavaScript doesn’t have the type system to enforce intersection types, this object still works as a "combination" of drag and resize functionalities.

---
```
