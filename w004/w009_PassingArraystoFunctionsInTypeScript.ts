// **Passing Arrays to Functions in TypeScript**

// Arrays can be passed as arguments to functions in TypeScript, allowing you to perform operations on arrays within the function.

// **Example: Passing an Array to a Function**
function sumArray(arr: number[]): number {
    let sum: number = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let total: number = sumArray(numbers);

console.log("Sum of array:", total); // Output: Sum of array: 15

// In this example, the 'sumArray' function takes an array of numbers as a parameter (arr).
// Inside the function, it iterates over each element of the array and calculates the sum.
// The calculated sum is then returned from the function.

// **Example: Modifying an Array within a Function**
function doubleArray(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}

let numbersToDouble: number[] = [1, 2, 3, 4, 5];
doubleArray(numbersToDouble);

console.log("Doubled array:", numbersToDouble); // Output: Doubled array: [2, 4, 6, 8, 10]

// In this example, the 'doubleArray' function takes an array of numbers as a parameter (arr).
// Inside the function, it iterates over each element of the array and doubles its value in-place.

// By passing arrays to functions, you can encapsulate array-related operations and reuse code more effectively in TypeScript.
