// **Type Annotation in TypeScript**
// Type annotation is a way to explicitly specify the type of a variable, parameter, or return value in TypeScript.
// **Example: Variable Declaration with Type Annotation**
var myNumber = 10;
var myString = "Hello";
var myBoolean = true;
// In this example, type annotations (number, string, boolean) are used to specify the types of the variables
// (myNumber, myString, myBoolean).
// **Example: Function Parameter with Type Annotation**
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Here, the parameter 'name' is annotated with type 'string' to specify that it should be a string.
// **Example: Function Return Type Annotation**
function add(x, y) {
    return x + y;
}
// Here, the return type of the function 'add' is annotated with type 'number' to specify that it should
// return a number.
// **Example: Object with Type Annotation**
var person = {
    name: "John",
    age: 30
};
// Here, an object 'person' is annotated with type '{ name: string, age: number }' to specify its structure.
// **Example: Array with Type Annotation**
var numbers = [1, 2, 3, 4, 5];
// Here, an array 'numbers' is annotated with type 'number[]' to specify that it should contain numbers.
// By using type annotations, you can enhance the type safety of your TypeScript code and catch potential
// errors at compile-time.
