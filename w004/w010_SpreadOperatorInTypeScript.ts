// **Spread Operator in TypeScript**

// The spread operator (...) in TypeScript is used to expand elements of an iterable (like an array) into individual elements.

// **Example 1: Spread Operator with Arrays**
let numbers: number[] = [1, 2, 3];
let moreNumbers: number[] = [4, 5, 6];

let combinedArray: number[] = [...numbers, ...moreNumbers];

console.log("Combined array:", combinedArray); // Output: Combined array: [1, 2, 3, 4, 5, 6]

// In this example, the spread operator (...) is used to merge two arrays ('numbers' and 'moreNumbers') into a single array ('combinedArray').

// **Example 2: Spread Operator with Function Arguments**
function addNumbers(x: number, y: number, z: number): number {
    return x + y + z;
}

let numbersToAdd: number[] = [1, 2, 3];
// @ts-ignore
let sum: number = addNumbers(...numbersToAdd);

console.log("Sum of numbers:", sum); // Output: Sum of numbers: 6

// Here, the spread operator (...) is used to pass individual elements of the 'numbersToAdd' array as arguments to the 'addNumbers' function.

// **Example 3: Spread Operator with Object Literal**
let person1 = { name: "John", age: 30 };
let person2 = { ...person1, city: "New York" };

console.log("Person 2:", person2); // Output: Person 2: { name: 'John', age: 30, city: 'New York' }

// The spread operator (...) can also be used with object literals to create a shallow copy of an object or merge multiple objects.

// By using the spread operator, you can perform operations like array merging, function argument spreading, and object merging more concisely and efficiently in TypeScript.
