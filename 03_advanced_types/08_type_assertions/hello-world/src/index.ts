const element = document.getElementById('myInput') as HTMLInputElement;

// Now TypeScript knows the element is an HTMLInputElement, and we can safely access its properties like 'value'.
console.log(element.value);  // TypeScript knows `element` is an HTMLInputElement with the 'value' property
