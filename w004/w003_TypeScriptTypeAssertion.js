// **Type Assertion in TypeScript**
// Type assertion is a way to explicitly specify the type of variable, parameter, or expression in TypeScript.
// It tells the TypeScript compiler to trust the developer's judgment about the type of value.
// **Example 1: Asserting Type for Variables**
var myValue = "Hello, TypeScript!";
// Using angle-bracket syntax:
var strLength1 = myValue.length;
// Using as syntax:
var strLength2 = myValue.length;
// Here, both type assertions assign the type 'string' to the variable 'myValue' and extract its length property.
// **Example 2: Asserting Type for Function Parameters**
function greet(input) {
    var str = input;
    console.log("Hello, " + str.toUpperCase() + "!");
}
// Here, the type assertion (input as string) ensures that the 'input' parameter is treated as a string.
// **Example 3: Asserting Type for Return Values**
function getLength(input) {
    return input.length;
}
// Here, the type assertion (input as string) ensures that the return value is treated as a string before
// accessing its length property.
// **Example 4: Asserting Type for Complex Types**
var myObject = { name: "John", age: 30 };
// Using as syntax for complex types:
var nameLength = myObject.name.length;
// Here, the type assertion (myObject as { name: string }) specifies that 'myObject' should be treated as an object
// with a 'name' property of type 'string'.
// By using type assertions, you can override TypeScript's static type checking when you know more about the
// type of value than TypeScript can infer.
