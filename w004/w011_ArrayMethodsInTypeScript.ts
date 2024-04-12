// **Array Methods in TypeScript**

// Here is a list of common array methods along with their descriptions and examples:

/*
SN  | Method        | Description                                                                                   |
----|---------------|-----------------------------------------------------------------------------------------------|
1.  | concat()      | Joins two arrays and returns the combined result.                                             |
2.  | copyWithin()  | Copies a sequence of elements within the array.                                               |
3.  | every()       | Returns true if every element in the array satisfies the provided testing function.            |
4.  | fill()        | Fills an array with a static value from the specified start to end index.                      |
5.  | indexOf()     | Returns the index of the matching element in the array, otherwise -1.                          |
6.  | includes()    | Checks whether the array contains a certain element or not.                                   |
7.  | join()        | Joins all elements of an array into a string.                                                 |
8.  | lastIndexOf() | Returns the last index of an element in the array.                                             |
9.  | pop()         | Removes the last elements of the array.                                                        |
10. | push()        | Adds new elements to the array.                                                               |
11. | reverse()     | Reverses the order of elements in the array.                                                  |
12. | shift()       | Removes and returns the first element of an array.                                             |
13. | slice()       | Returns a section of an array as a new array.                                                 |
14. | sort()        | Sorts the elements of an array.                                                               |
15. | splice()      | Adds or removes elements from an array.                                                        |
16. | toString()    | Returns the string representation of an array.                                                 |
17. | unshift()     | Adds one or more elements to the beginning of an array.                                        |
*/

// Below are examples demonstrating some of these array methods:

// Example: concat()
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let combinedArray: number[] = arr1.concat(arr2);
console.log("Combined array:", combinedArray); // Output: Combined array: [1, 2, 3, 4, 5, 6]

// Example: every()
let numbers: number[] = [1, 2, 3, 4, 5];
let allEven: boolean = numbers.every(num => num % 2 === 0);
console.log("Are all numbers even?", allEven); // Output: Are all numbers even? false

// Example: push()
let fruits: string[] = ['apple', 'banana'];
fruits.push('orange');
console.log("Fruits array:", fruits); // Output: Fruits array: ['apple', 'banana', 'orange']

// By using these array methods, you can perform various operations on arrays efficiently in TypeScript.
