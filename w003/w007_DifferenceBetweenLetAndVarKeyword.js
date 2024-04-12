// let keyword:
// The let keyword was introduced in ECMAScript 6 (ES6) and is scoped to the nearest enclosing block,
// which could be a function, a loop, or a block of code enclosed in curly braces {}.
// Variables declared with let have block scope, meaning they are only accessible within the block they are declared in.
function exampleLet() {
    // Variables declared with let are block-scoped
    var x = 10;
    if (true) {
        var y = 20;
        // Both x and y are accessible within this if block
        console.log(x); // Accessible
        console.log(y); // Accessible
    }
    // x is accessible within the entire function exampleLet
    console.log(x); // Accessible
    // y is not accessible here, it will result in an error
    // console.log(y); // Error: 'y' is not defined
}
exampleLet();
// var keyword:
// The var keyword has function scope, meaning variables declared with var are accessible throughout the entire function they are declared in.
// However, they are not scoped to the nearest enclosing block.
function exampleVar() {
    // Variables declared with var are function-scoped
    var x = 10;
    if (true) {
        var y = 20;
        // Both x and y are accessible within this if block
        console.log(x); // Accessible
        console.log(y); // Accessible
    }
    // Both x and y are accessible here, even outside the if block
    console.log(x); // Accessible
    console.log(y); // Accessible
}
exampleVar();
// Summary:
// - let variables are block-scoped and have a narrower scope than var variables.
// - var variables are function-scoped and are accessible throughout the entire function they are declared in.
// - It's generally recommended to use let over var due to its more predictable scoping behavior and to avoid unintended side effects.
