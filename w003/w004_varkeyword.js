var x = 50;
console.log(x); // Output: 50
function myFunction() {
    var x = 10;
    console.log(x); // Output: 10
}
myFunction(); // Output: 10
console.log(x); // Output: 50
function myMessage() {
    console.log("Hello World");
} // Output: Hello World in console
myMessage();
function myMessage2() {
    var message = "Hello World"; // Output: Hello World in console with var keywords
    console.log(message);
}
myMessage2();
