// **TypeScript Union Types**
// Union types in TypeScript allow a variable to have multiple types. This means that a variable can store values of different types during its lifetime.
// **Example 1: Union Type Declaration**
var variable;
variable = 'hello'; // Assigning a string value
console.log("Value of variable:", variable); // Output: Value of variable: hello
variable = 10; // Assigning a number value
console.log("Value of variable:", variable); // Output: Value of variable: 10
// In this example, the 'variable' can store values of type string or number.
// **Example 2: Union Type in Function Parameters**
function displayData(data) {
    console.log("Data:", data);
}
displayData('hello'); // Output: Data: hello
displayData(20); // Output: Data: 20
// Union types can be used in function parameters to allow the function to accept parameters of multiple types.
// **Example 3: Using Union Types with Arrays**
var array = ['hello', 10, 'world', 20];
// Union types can also be used with arrays to allow the array to contain elements of different types.
// Union types are useful in scenarios where a variable or parameter may accept values of multiple types in TypeScript.
