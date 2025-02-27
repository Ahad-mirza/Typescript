"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair1 = new KeyValuePair(1, "One");
console.log(pair1.key);
console.log(pair1.value);
const pair2 = new KeyValuePair("isValid", true);
console.log(pair2.key);
console.log(pair2.value);
