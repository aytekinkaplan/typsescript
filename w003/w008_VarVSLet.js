// **Var vs. Let Keyword**
// In JavaScript, both `var` and `let` are used to declare variables,
// but they differ significantly in how they manage variable scope.
// **1. Var: The Old Way (Function Scope)**
// - Variables declared with `var` are function-scoped, meaning they are
// accessible throughout the entire function in which they are declared.
// - `var` declarations are hoisted to the top of their scope.
// Example: Var with Function Scope
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Accessible within the function
}
exampleVar(); // Output: 10
// **2. Let: The Modern Approach (Block Scope)**
// - Introduced in ES6, `let` provides block-scoping, meaning their accessibility is
// limited to the block where they are declared.
// - Unlike `var`, `let` variables are not hoisted to the top of their scope.
// Example: Let with Block Scope
function exampleLet() {
    if (true) {
        var y = 20;
        console.log(y); // Accessible within the block
    }
    // console.log(y); // ReferenceError: y is not defined (outside the block)
}
exampleLet(); // Output: 20
var _loop_1 = function (i) {
    setTimeout(function () { return console.log(i); }, 1000); // Outputs 0, 1, 2 (due to block scope)
};
// **Key Differences:**
// - `var` variables are function-scoped, while `let` variables are block-scoped.
// - `var` declarations are hoisted, `let` declarations are not.
// - Using `let` generally leads to cleaner and more predictable code, as it limits
// variable scope to the block where it's declared.
// **Additional Examples:**
// 1. Loop Counter with Let
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
// 2. Redeclaration with Var
var x = 10;
var x = 20;
console.log(x); // Output: 20
// 3. Redeclaration with Let
// let y = 30;
// let y = 40; // SyntaxError: Identifier 'y' has already been declared
// By understanding the differences between `var` and `let`, you can write more
// maintainable and bug-free JavaScript code.
