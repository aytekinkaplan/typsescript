// **Array Object in TypeScript**

// The Array object in TypeScript provides various methods and properties for working with arrays.

// **Example 1: Array Creation**
let numbers: number[] = [1, 2, 3, 4, 5];

// You can create an array using array literal syntax ([]).

// **Example 2: Length Property**
console.log("Length of array:", numbers.length); // Output: Length of array: 5

// The 'length' property returns the number of elements in the array.

// **Example 3: Push Method**
numbers.push(6);
console.log("Array after push:", numbers); // Output: Array after push: [1, 2, 3, 4, 5, 6]

// The 'push' method adds one or more elements to the end of the array.

// **Example 4: Pop Method**
let lastElement: number = numbers.pop();
console.log("Array after pop:", numbers); // Output: Array after pop: [1, 2, 3, 4, 5]
console.log("Popped element:", lastElement); // Output: Popped element: 6

// The 'pop' method removes the last element from the array and returns it.

// **Example 5: Join Method**
let joinedString: string = numbers.join(", ");
console.log("Joined string:", joinedString); // Output: Joined string: 1, 2, 3, 4, 5

// The 'join' method joins all elements of an array into a string using a specified separator.

// **Example 6: Concat Method**
let moreNumbers: number[] = [6, 7, 8];
let combinedArray: number[] = numbers.concat(moreNumbers);
console.log("Combined array:", combinedArray); // Output: Combined array: [1, 2, 3, 4, 5, 6, 7, 8]

// The 'concat' method merges two or more arrays into a single array.

// **Example 7: forEach Method**
numbers.forEach(function(element) {
    console.log("Element:", element);
});

// The 'forEach' method executes a provided function once for each array element.

// By using Array object methods, you can perform various operations on arrays efficiently in TypeScript.
