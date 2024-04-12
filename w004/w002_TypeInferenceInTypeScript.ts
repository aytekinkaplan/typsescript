// **Type Inference in TypeScript**

// Type inference is TypeScript's ability to automatically deduce the types of variables, parameters, and return
// values based on their usage.

// **Example 1: Variable Initialization**
let myNumber = 10; // Type: number
let myString = "Hello"; // Type: string
let myBoolean = true; // Type: boolean

// In these examples, TypeScript infers the types of variables (myNumber, myString, myBoolean) based on the values
// assigned to them.

// **Example 2: Function Return Type**
function add(x: number, y: number) {
    return x + y; // TypeScript infers the return type as 'number'
}

// Here, TypeScript infers the return type of the function 'add' as 'number' based on the types of parameters (x, y)
// and the operation performed (+).

// **Example 3: Object Initialization**
let person = {
    name: "John", // Type: string
    age: 30 // Type: number
};

// Here, TypeScript infers the types of properties (name, age) within the object 'person' based on their initial values.

// **Example 4: Array Initialization**
let numbers = [1, 2, 3, 4, 5]; // Type: number[]

// Here, TypeScript infers the type of array 'numbers' as 'number[]' based on the values assigned to it.

// **Example 5: Union Types**
let value: number | string = 10; // Type: number
value = "Hello"; // Type: string

// Here, TypeScript infers the type of variable 'value' as 'number' initially, but it changes to 'string'
// when a string value is assigned.

// By leveraging type inference, TypeScript reduces the need for explicit type annotations and improves code
// readability and maintainability.
