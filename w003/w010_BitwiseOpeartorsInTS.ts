// **Bitwise Operators in TypeScript**

// Bitwise operators perform operations on individual bits of binary representations of numbers.

// **1. Bitwise AND (&)**
// - The bitwise AND operator (&) sets each bit to 1 if both corresponding bits are 1; otherwise, it sets the bit to 0.

// Example:
let a: number = 5; // binary: 101
let b: number = 3; // binary: 011

let resultAND: number = a & b; // binary: 001 (1 & 1 = 1; 0 & 1 = 0; 1 & 1 = 1)
console.log("Bitwise AND:", resultAND); // Output: Bitwise AND: 1

// **2. Bitwise OR (|)**
// - The bitwise OR operator (|) sets each bit to 1 if one or both corresponding bits are 1.

// Example:
let resultOR: number = a | b; // binary: 111 (1 | 1 = 1; 0 | 1 = 1; 1 | 1 = 1)
console.log("Bitwise OR:", resultOR); // Output: Bitwise OR: 7

// **3. Bitwise XOR (^)**
// - The bitwise XOR operator (^) sets each bit to 1 if only one of the corresponding bits is 1.

// Example:
let resultXOR: number = a ^ b; // binary: 110 (1 ^ 1 = 0; 0 ^ 1 = 1; 1 ^ 1 = 0)
console.log("Bitwise XOR:", resultXOR); // Output: Bitwise XOR: 6

// **4. Bitwise NOT (~)**
// - The bitwise NOT operator (~) inverts the bits of its operand.

// Example:
let c: number = 5; // binary: 101
let resultNOT: number = ~c; // binary: 010 (inverted bits)
console.log("Bitwise NOT:", resultNOT); // Output: Bitwise NOT: -6

// **5. Bitwise Left Shift (<<)**
// - The bitwise left shift operator (<<) shifts the bits of its first operand to the left
// by the number of positions specified by the second operand.

// Example:
let num: number = 5; // binary: 101
let resultLeftShift: number = num << 2; // binary: 10100 (shifted left by 2 positions)
console.log("Bitwise Left Shift:", resultLeftShift); // Output: Bitwise Left Shift: 20

// **6. Bitwise Right Shift (>>)**
// - The bitwise right shift operator (>>) shifts the bits of its first operand to the right by
// the number of positions specified by the second operand.

// Example:
let resultRightShift: number = num >> 1; // binary: 10 (shifted right by 1 position)
console.log("Bitwise Right Shift:", resultRightShift); // Output: Bitwise Right Shift: 2

// **7. Bitwise Zero-Fill Right Shift (>>>)**
// - The bitwise zero-fill right shift operator (>>>) shifts the bits of its first operand to the right by the
// number of positions specified by the second operand. It fills the shifted positions with zeros.

// Example:
let resultZeroFillRightShift: number = num >>> 1; // binary: 10 (shifted right by 1 position, filled with zeros)
console.log("Bitwise Zero-Fill Right Shift:", resultZeroFillRightShift); // Output: Bitwise Zero-Fill Right Shift: 2

// By understanding TypeScript bitwise operators, you can manipulate binary representations of numbers
// to perform low-level operations.
