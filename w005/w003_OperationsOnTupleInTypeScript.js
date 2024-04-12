// **Operations on Tuple in TypeScript**
// Tuples in TypeScript support various operations such as modification, destruction, and use in functions.
// **Example 1: Modifying Tuple Elements**
var tuple = ['hello', 10, true];
tuple[0] = 'world';
tuple[1] = 20;
console.log("Modified tuple:", tuple); // Output: Modified tuple: ['world', 20, true]
// Tuple elements can be modified by assigning new values to specific indices.
// **Example 2: Destructuring Assignment**
var first = tuple[0], second = tuple[1], third = tuple[2];
console.log("First element:", first); // Output: First element: world
console.log("Second element:", second); // Output: Second element: 20
// Tuple elements can be accessed using destructuring assignment syntax, where each element is assigned to a separate variable.
// **Example 3: Using Tuple in Function Return Type**
function getUser() {
    return ['John', 30];
}
var _a = getUser(), username = _a[0], age = _a[1];
console.log("Username:", username); // Output: Username: John
console.log("Age:", age); // Output: Age: 30
// Tuples can be used to define the return type of functions to ensure that the number and types of returned values match the expectations.
// **Example 4: Tuple with Optional Elements**
var optionalTuple = ['hello'];
// Here, the second element of the tuple is optional, allowing the tuple to have either one or two elements.
// By using tuples and various operations on them, you can work with fixed-length arrays containing elements of different types more effectively in TypeScript.
