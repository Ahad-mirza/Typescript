"use strict";
let speed = 0;
let validSpeed1 = speed || 30; // Using logical OR (||)
let validSpeed2 = speed !== null && speed !== void 0 ? speed : 30; // Using nullish coalescing (??)
console.log(validSpeed1); // Output: 30 (because 0 is falsy, it falls back to 30)
console.log(validSpeed2); // Output: 0 (0 is a valid number, so no fallback)
