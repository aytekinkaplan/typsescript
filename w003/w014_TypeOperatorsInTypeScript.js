// **Type Operators in TypeScript**
// Type operators are used to check the type of variable or value in TypeScript.
// **1. typeof Operator**
// - The typeof operator returns a string indicating the type of the operand.
// Example:
var x = 10;
console.log("Type of x:", typeof x); // Output: Type of x: number
var y = "Hello";
console.log("Type of y:", typeof y); // Output: Type of y: string
// **2. instanceof Operator**
// - The instanceof operator checks if an object is an instance of a specified class or constructor function.
// Example:
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var obj = new MyClass();
console.log("Is obj an instance of MyClass?", obj instanceof MyClass); // Output: Is obj an instance of MyClass? true
// **3. Type Guards**
// Type guards are TypeScript expressions that perform runtime checks on the type of variable.
// They help TypeScript understand the type of variable within a certain block of code.
// Example:
function procession(value) {
    if (typeof value === "string") {
        // Here, TypeScript knows that 'value' is a string
        console.log(value.toUpperCase());
    }
    else {
        // Here, TypeScript knows that 'value' is a number
        console.log(value.toFixed(2));
    }
}
procession("Hello"); // Output: HELLO
procession(3.14159); // Output: 3.14
// By using type operators and type guards, you can perform runtime type checks and enhance
// type safety in your TypeScript code.
