// **Concatenation Operator in TypeScript**
// The concatenation operator (+) is used to concatenate strings or combine strings and other values in TypeScript.
// **Example: Concatenating Strings**
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: Full Name: John Doe
// In this example, the concatenation operator (+) combines the strings
// "firstName" and "lastName" with a space in between.
// **Example: Combining Strings and Other Values**
var age = 30;
var message = "My name is " + fullName + " and I am " + age + " years old.";
console.log("Message:", message); // Output: Message: My name is John Doe, and I am 30 years old.
// In this example, the concatenation operator (+) is used to combine strings
// ("My name is ", " and I am ", " years old.") with variables (fullName and age).
// By using the concatenation operator, you can build dynamic strings by combining multiple values in TypeScript.
