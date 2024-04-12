// **Ternary/Conditional Operator in TypeScript**

// The ternary or conditional operator (? :) is a concise way to express conditional statements in JavaScript and TypeScript.

// **Syntax:**
// condition ? expr1 : expr2

// If "condition" is true, the operator returns "expr1"; otherwise, it returns "expr2".

// **Example:**
let age: number = 20;
let message: string = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // Output: You are an adult

// In this example:
// - If "age" is greater than or equal to 18, the condition "age >= 18" is true, so the operator returns the value "You are an adult".
// - If "age" is less than 18, the condition "age >= 18" is false, so the operator returns the value "You are a minor".

// **Nested Ternary Operator:**
// Ternary operators can be nested to create more complex conditional expressions.

// **Example:**
let marks: number = 85;
let grade: string =
    marks >= 90
        ? "A"
        : marks >= 80
            ? "B"
            : marks >= 70
                ? "C"
                : marks >= 60
                    ? "D"
                    : "F";

console.log("Grade:", grade); // Output: Grade: B

// In this example:
// - The first ternary operator checks if "marks" is greater than or equal to 90 and returns "A" if true.
// - If the first condition is false, the second ternary operator checks if "marks" is greater than or equal to 80 and returns "B" if true.
// - This pattern continues until the last condition, which returns "F" if all previous conditions are false.

// By using the ternary operator, you can write concise and expressive conditional statements in your TypeScript code.
