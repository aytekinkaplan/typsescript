// **Passing Union Type to Arrays in TypeScript**

// Union types in TypeScript can be used with arrays, allowing arrays to contain elements of different types.

// **Example: Union Type in Array**
let array: (string | number)[] = ['hello', 10, 'world', 20];

console.log("Array:", array); // Output: Array: ['hello', 10, 'world', 20]

// In this example, the 'array' variable is declared as an array with elements of type string | number.
// The array contains elements of both string and number types.

// Union types in arrays provide flexibility in storing values of different types within the same array.

// By using union types with arrays, you can handle scenarios where an array may
// contain elements of multiple types in TypeScript.
