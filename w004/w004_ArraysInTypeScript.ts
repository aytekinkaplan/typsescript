// **Arrays in TypeScript**

// Arrays are used to store multiple values of the same type in TypeScript.

// **Example 1: Array Declaration and Initialization**
let numbers: number[] = [1, 2, 3, 4, 5];

// Here, an array 'numbers' is declared and initialized with numbers.

// **Example 2: Accessing Array Elements**
console.log("First element:", numbers[0]); // Output: First element: 1
console.log("Second element:", numbers[1]); // Output: Second element: 2

// Array elements are accessed using zero-based indexing.

// **Example 3: Modifying Array Elements**
numbers[0] = 10;
numbers[4] = 50;

console.log("Modified array:", numbers); // Output: Modified array: [10, 2, 3, 4, 50]

// Array elements can be modified by assigning new values to specific indices.

// **Example 4: Array Methods**
// TypeScript provides various array methods to perform common operations.

// - Push: Adds one or more elements to the end of an array.
numbers.push(6);

// - Pop: Removes the last element from an array and returns it.
let lastElement: number = numbers.pop();

// - Length: Returns the number of elements in an array.
let lengtharg: number = numbers.length;

console.log("Array after push and pop:", numbers); // Output: Array after push and pop: [10, 2, 3, 4, 6]
console.log("Last element:", lastElement); // Output: Last element: 50
console.log("Length of array:", lengtharg); // Output: Length of array: 5

// By using arrays in TypeScript, you can store and manipulate collections of values efficiently.
