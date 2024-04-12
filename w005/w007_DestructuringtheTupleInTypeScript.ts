// **Destructuring the Tuple in TypeScript**

// Tuple elements in TypeScript can be accessed and assigned to individual variables using destructuring assignment syntax.

// **Example: Destructuring the Tuple Elements**
let tuple: [string, number, boolean] = ['hello', 10, true];

let [first, second, third] = tuple;

console.log("First element:", first); // Output: First element: hello
console.log("Second element:", second); // Output: Second element: 10
console.log("Third element:", third); // Output: Third element: true

// In this example, the elements of the 'tuple' are destructured and assigned to individual variables 'first', 'second', and 'third'.
// Each variable represents a corresponding element of the tuple.

// Destructuring assignment syntax provides a concise way to work with tuple elements in TypeScript.
