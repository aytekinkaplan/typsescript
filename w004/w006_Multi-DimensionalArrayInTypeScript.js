// **Multi-Dimensional Array in TypeScript**
// A multidimensional array is an array that contains other arrays as elements, forming a matrix or nested structure.
// **Example 1: Two-Dimensional Array**
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Here, 'matrix' is a two-dimensional array with three rows and three columns.
// **Accessing Elements in a Multi-Dimensional Array:**
console.log("Element at (0, 0):", matrix[0][0]); // Output: Element at (0, 0): 1
console.log("Element at (1, 2):", matrix[1][2]); // Output: Element at (1, 2): 6
// Elements in a multi-dimensional array are accessed using multiple indices, corresponding to the dimensions of the array.
// **Example 2: Three-Dimensional Array**
var cube = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
// Here, 'cube' is a three-dimensional array representing a 2x2x2 cube.
// **Accessing Elements in a Three-Dimensional Array:**
console.log("Element at (0, 1, 0):", cube[0][1][0]); // Output: Element at (0, 1, 0): 3
console.log("Element at (1, 0, 1):", cube[1][0][1]); // Output: Element at (1, 0, 1): 6
// Similarly, elements in a three-dimensional array are accessed using three indices.
// **Nested Structures:**
// Multi-dimensional arrays can represent nested structures, such as matrices, cubes, or higher-dimensional structures.
// By using multidimensional arrays, you can store and manipulate complex data structures efficiently in TypeScript.
