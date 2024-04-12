// **Assignment Operators in TypeScript**

// Assignment operators are used to assign values to variables. TypeScript provides various assignment
// operators to perform different types of assignments.

// **1. Simple Assignment (=)**
// - The simple assignment operator (=) assigns the value of its right operand to its left operand.

// Example:
let x: number = 10;
let y: number = 5;

x = y;
console.log("x after simple assignment:", x); // Output: x after simple assignment: 5

// **2. Addition Assignment (+=)**
// - The addition assignment operator (+=) adds the value of its right operand to the value of its left
// operand and assigns the result to its left operand.

// Example:
let a: number = 10;
let b: number = 5;

a += b; // Equivalent to: a = a + b;
console.log("a after addition assignment:", a); // Output: a after addition assignment: 15

// **3. Subtraction Assignment (-=)**
// - The subtraction assignment operator (-=) subtracts the value of its right operand from the value of its
// left operand and assigns the result to its left operand.

// Example:
let c: number = 10;
let d: number = 5;

c -= d; // Equivalent to: c = c - d;
console.log("c after subtraction assignment:", c); // Output: c after subtraction assignment: 5

// **4. Multiplication Assignment (*=)**
// - The multiplication assignment operator (*=) multiplies the value of its left operand by the value of its
// right operand and assigns the result to its left operand.

// Example:
let e: number = 10;
let f: number = 5;

e *= f; // Equivalent to: e = e * f;
console.log("e after multiplication assignment:", e); // Output: e after multiplication assignment: 50

// **5. Division Assignment (/=)**
// - The division assignment operator (/=) divides the value of its left operand by the value of its
// right operand and assigns the result to its left operand.

// Example:
let g: number = 10;
let h: number = 5;

g /= h; // Equivalent to: g = g / h;
console.log("g after division assignment:", g); // Output: g after division assignment: 2

// **6. Modulus Assignment (%=)**
// - The modulus assignment operator (%=) divides the value of its left operand by the value of its right
// operand and assigns the remainder to its left operand.

// Example:
let i: number = 10;
let j: number = 3;

i %= j; // Equivalent to: i = i % j;
console.log("i after modulus assignment:", i); // Output: i after modulus assignment: 1

// By understanding TypeScript assignment operators, you can perform various assignments and manipulate
// values efficiently.
