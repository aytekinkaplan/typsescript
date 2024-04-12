// **Concatenation Operator in TypeScript**

// The concatenation operator (+) is used to concatenate strings or combine strings and other values in TypeScript.

// **Example: Concatenating Strings**
let firstName: string = "John";
let lastName: string = "Doe";

let fullName: string = firstName + " " + lastName;

console.log("Full Name:", fullName); // Output: Full Name: John Doe

// In this example, the concatenation operator (+) combines the strings
// "firstName" and "lastName" with a space in between.

// **Example: Combining Strings and Other Values**
let age: number = 30;

let message: string = "My name is " + fullName + " and I am " + age + " years old.";

console.log("Message:", message); // Output: Message: My name is John Doe, and I am 30 years old.

// In this example, the concatenation operator (+) is used to combine strings
// ("My name is ", " and I am ", " years old.") with variables (fullName and age).

// By using the concatenation operator, you can build dynamic strings by combining multiple values in TypeScript.
