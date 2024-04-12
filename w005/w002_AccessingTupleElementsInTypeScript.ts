// **Accessing Tuple Elements in TypeScript**

// Tuple elements in TypeScript are accessed using zero-based indexing, similar to arrays.

// **Example: Accessing Tuple Elements**
let tuple: [string, number, boolean] = ['hello', 10, true];

console.log("First element:", tuple[0]); // Output: First element: hello
console.log("Second element:", tuple[1]); // Output: Second element: 10

// In this example, the first element of the tuple is accessed using index 0, and the second element is accessed using index 1.
// Tuple elements are accessed using square brackets ([]) notation followed by the index.

// **Example: Destructuring Assignment**
let [first, second, third] = tuple;

console.log("First element:", first); // Output: First element: hello
console.log("Second element:", second); // Output: Second element: 10

// Tuple elements can also be accessed using destructuring assignment syntax, where each element is assigned to a separate variable.

// By understanding how to access tuple elements, you can effectively work with tuples in TypeScript.
