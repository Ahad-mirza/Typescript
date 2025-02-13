# Static Properties in TypeScript

## Table of Contents
- 🔍 [Introduction](#introduction)
- 🔧 [Why Use Static Properties](#why-use-static-properties)
- 🛠️ [Example Code](#example-code)
- 🏗️ [Code Explanation](#code-explanation)
- ⚠️ [Important Notes](#important-notes)

## 🔍 Introduction
When building applications, we often need to maintain shared information across all instances of a class. For example, in a ride-sharing application, you may want to keep track of the number of active rides. This is where static properties in TypeScript come into play.

Static properties belong to the class itself, not any specific instance. This means they have a single shared value across all instances.

## 🔧 Why Use Static Properties
Imagine a ride-sharing application where each user can request a ride. To keep track of active rides, using static properties allows all instances to update and access the same shared property.

## 🛠️ Example Code
```typescript
class Ride{
    private static _activeRides: number = 0;

    start() { Ride._activeRides++ }
    stop() { Ride._activeRides-- }

    static get activeRides() { return Ride._activeRides }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides); // 2
```

## 🏗️ Code Explanation
### Step-by-Step Explanation
1. **Private Static Property:**
   - `private static _activeRides: number = 0;` declares a private static property to keep track of the number of active rides.

2. **Starting a Ride:**
   - The `start` method increments the `_activeRides` static property when called.

3. **Stopping a Ride:**
   - The `stop` method decrements the `_activeRides` static property.

4. **Accessing Static Property with Getter:**
   - The `activeRides` getter returns the value of the `_activeRides` property.

5. **Creating and Managing Instances:**
   - Two instances of `Ride` are created, and both rides are started, incrementing the active rides count.

6. **Accessing Static Property:**
   - `console.log(Ride.activeRides);` outputs the number of active rides by accessing the static property using the class name.

## ⚠️ Important Notes
1. **Single Shared Instance:** Static properties are shared across all instances of the class.
2. **Encapsulation:** Using private static properties with getters provides better control over how the value is accessed and modified.
3. **Access via Class Name:** Static properties are accessed using the class name (`Ride.activeRides`), not through instances.

---
