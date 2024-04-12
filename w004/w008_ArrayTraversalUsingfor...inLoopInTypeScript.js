// **Array Traversal using for...in Loop in TypeScript**
// The for...in loop in TypeScript is used to iterate over the properties of an object, including array indices.
// **Example: Traversing an Array with for...in Loop**
var numbers = [1, 2, 3, 4, 5];
for (var index in numbers) {
    console.log("Element at index", index, ":", numbers[index]);
}
// In this example, the for...in loop iterates over the indices (0, 1, 2, 3, 4) of the 'numbers' array.
// For each index, it retrieves the corresponding element using bracket notation (numbers[index]).
// Output:
// Element at index 0 : 1
// Element at index 1 : 2
// Element at index 2 : 3
// Element at index 3 : 4
// Element at index 4 : 5
// **Note:**
// While the for...in loop can be used to iterate over array indices, it's generally not recommended for arrays:
// - It may iterate over inherited properties, not just array elements.
// - It may not iterate over elements in numeric order.
// - It may not work correctly with arrays containing non-numeric properties or methods.
// Instead, consider using the for...of loop or array methods like forEach() for traversing arrays in TypeScript.
