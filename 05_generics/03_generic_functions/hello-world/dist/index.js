"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
const numArray = ArrayUtils.wrapInArray(100);
console.log(numArray);
const strArray = ArrayUtils.wrapInArray("TypeScript");
console.log(strArray);
