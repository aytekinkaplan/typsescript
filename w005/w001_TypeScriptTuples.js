// **TypeScript Tuples**
// Tuples in TypeScript allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
// **Example 1: Tuple Declaration and Initialization**
var tuple = ['hello', 10, true];
// Here, 'tuple' is declared as a tuple with three elements: a string, a number, and a boolean.
// **Example 2: Accessing Tuple Elements**
console.log("First element:", tuple[0]); // Output: First element: hello
console.log("Second element:", tuple[1]); // Output: Second element: 10
// Tuple elements are accessed using zero-based indexing, similar to arrays.
// **Example 3: Modifying Tuple Elements**
tuple[0] = 'world';
tuple[1] = 20;
console.log("Modified tuple:", tuple); // Output: Modified tuple: ['world', 20, true]
// Tuple elements can be modified by assigning new values to specific indices.
// **Example 4: Tuple as Function Return Type**
function getUser() {
    return ['John', 30];
}
var _a = getUser(), username = _a[0], age = _a[1];
console.log("Username:", username); // Output: Username: John
console.log("Age:", age); // Output: Age: 30
// Tuples can be used to define the return type of functions to ensure that the number and types of returned values match the expectations.
// **Example 5: Tuple with Optional Elements**
var optionalTuple = ['hello'];
// Here, the second element of the tuple is optional, allowing the tuple to have either one or two elements.
// By using tuples in TypeScript, you can represent fixed-length arrays with elements of different types more precisely.
