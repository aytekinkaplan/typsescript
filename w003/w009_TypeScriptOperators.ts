// **TypeScript Operators**

// Operators in TypeScript are similar to those in JavaScript, but TypeScript provides additional type safety and features.

// **1. Arithmetic Operators**
// - Arithmetic operators perform mathematical operations on numbers.

// Example:
let num1: number = 10;
let num2: number = 5;

let sum: number = num1 + num2;
console.log("Sum:", sum); // Output: Sum: 15

let difference: number = num1 - num2;
console.log("Difference:", difference); // Output: Difference: 5

let product: number = num1 * num2;
console.log("Product:", product); // Output: Product: 50

let quotient: number = num1 / num2;
console.log("Quotient:", quotient); // Output: Quotient: 2

let remainder: number = num1 % num2;
console.log("Remainder:", remainder); // Output: Remainder: 0

// **2. Comparison Operators**
// - Comparison operators compare two values and return a Boolean value indicating whether the comparison is true.

// Example:
let a: number = 10;
let b: number = 5;

console.log("Is a equal to b?", a === b); // Output: Is a equal to b? false
console.log("Is a not equal to b?", a !== b); // Output: Is a not equal to b? true
console.log("Is a greater than b?", a > b); // Output: Is a greater than b? true
console.log("Is a less than b?", a < b); // Output: Is a less than b? false
console.log("Is a greater than or equal to b?", a >= b); // Output: Is a greater than or equal to b? true
console.log("Is a less than or equal to b?", a <= b); // Output: Is a less than or equal to b? false

// **3. Logical Operators**
// - Logical operators perform logical operations and return a Boolean value.

// Example:
let x: boolean = true;
let y: boolean = false;

console.log("x AND y:", x && y); // Output: x AND y: false
console.log("x OR y:", x || y); // Output: x OR y: true
console.log("NOT x:", !x); // Output: NOT x: false

// **4. Assignment Operators**
// - Assignment operators assign values to variables.

// Example:
let c: number = 10;
c += 5; // Equivalent to: c = c + 5
console.log("c:", c); // Output: c: 15

let d: number = 20;
d -= 5; // Equivalent to: d = d - 5
console.log("d:", d); // Output: d: 15

// **5. Type Operators**
// - Type operators are used to check the type of variable.

// Example:
let str: any = "Hello";
console.log("Is str a string?", typeof str === "string"); // Output: Is str a string? true
console.log("Is str a number?", typeof str === "number"); // Output: Is str a number? false

// By understanding TypeScript operators, you can perform various operations and enhance your code's functionality.
