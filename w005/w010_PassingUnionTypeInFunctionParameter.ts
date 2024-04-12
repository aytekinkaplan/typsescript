// **Passing Union Type in Function Parameter in TypeScript**

// Union types in TypeScript can be passed as parameters to functions, allowing functions to accept values of multiple types.

// **Example: Passing Union Type in Function Parameter**
function displayData(data: string | number): void {
    console.log("Data:", data);
}

displayData('hello'); // Output: Data: hello
displayData(20); // Output: Data: 20

// In this example, the 'displayData' function accepts a parameter 'data' of type string | number, which means it can accept values of either string or number type.

// The function is called twice with different types of values for the 'data' parameter, demonstrating the flexibility of union types in function parameters.

// Union types in function parameters allow functions to handle multiple types of input values more effectively in TypeScript.
