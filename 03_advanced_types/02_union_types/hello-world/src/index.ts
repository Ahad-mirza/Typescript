function convertWeight(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseFloat(weight) * 2.2;
  }
}

console.log(convertWeight(10)); // Output: 22
console.log(convertWeight("10 kg")); // Output: 22