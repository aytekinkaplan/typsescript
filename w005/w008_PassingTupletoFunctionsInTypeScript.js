// **Passing Tuple to Functions in TypeScript**
// Tuples in TypeScript can be passed as arguments to functions, allowing you to work with fixed-length arrays within functions.
// **Example: Passing Tuple to a Function**
function displayTupleData(tuple) {
    console.log("First element:", tuple[0]);
    console.log("Second element:", tuple[1]);
    console.log("Third element:", tuple[2]);
}
var data = ['hello', 10, true];
displayTupleData(data);
// In this example, the 'displayTupleData' function takes a tuple parameter 'tuple' with three elements.
// Inside the function, each element of the tuple is accessed and displayed.
// The 'data' tuple is passed as an argument to the function, allowing the function to operate on the tuple's elements.
// By passing tuples to functions, you can encapsulate operations on fixed-length arrays and reuse code more effectively in TypeScript.
