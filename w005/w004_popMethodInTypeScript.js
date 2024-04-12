// **pop() Method in TypeScript**
// The pop() method in TypeScript is used to remove the last element from an array and returns that element.
// **Example: Using pop() Method**
var fruits = ['apple', 'banana', 'orange'];
var removedElement = fruits.pop();
console.log("Removed element:", removedElement); // Output: Removed element: orange
console.log("Updated array:", fruits); // Output: Updated array: ['apple', 'banana']
// In this example, the pop() method removes the last element ('orange') from the 'fruits' array.
// The removed element is stored in the 'removedElement' variable.
// The 'fruits' array is updated with the removed element removed.
// **Example: Handling Empty Array**
var emptyArray = [];
var removedItem = emptyArray.pop();
console.log("Removed item:", removedItem); // Output: Removed item: undefined
console.log("Updated array:", emptyArray); // Output: Updated array: []
// When pop() is called on an empty array, it returns 'undefined', and the array remains unchanged.
// The pop() method is useful for scenarios where you need to remove elements from the end of an array in TypeScript.
