// **Characteristics of an Array in TypeScript**

// Arrays in TypeScript have several characteristics that make them versatile for storing and manipulating collections of values.

// **1. Homogeneous Elements:**
// - An array can store elements of the same type.
let numbers: number[] = [1, 2, 3, 4, 5];

// Here, the 'numbers' array stores only numbers of type 'number'.

// **2. Zero-Based Indexing:**
// - Array elements are accessed using zero-based indexing.
console.log("First element:", numbers[0]); // Output: First element: 1
console.log("Second element:", numbers[1]); // Output: Second element: 2

// In this example, the first element of the array has index 0, and the second element has index 1.

// **3. Dynamic Size:**
// - Arrays in TypeScript have a dynamic size, meaning you can add or remove elements dynamically.
numbers.push(6); // Add element to the end of the array
numbers.pop(); // Remove the last element from the array

// Here, the 'push' method adds a new element to the end of the array, and the 'pop' method removes the last element.

// **4. Iteration:**
// - Arrays support iteration using loops or array methods.
for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index", i, ":", numbers[i]);
}

// You can iterate over array elements using a 'for' loop and accessing elements by their index.

// **5. Length Property:**
// - The 'length' property returns the number of elements in the array.
let lengtharg: number = numbers.length;

console.log("Length of array:", lengtharg); // Output: Length of array: 5

// The 'length' property provides the current size of the array.

// By understanding these characteristics, you can effectively work with arrays in TypeScript for various tasks.
