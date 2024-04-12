// **Spread Operator in TypeScript**
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// The spread operator (...) in TypeScript is used to expand elements of an iterable (like an array) into individual elements.
// **Example 1: Spread Operator with Arrays**
var numbers = [1, 2, 3];
var moreNumbers = [4, 5, 6];
var combinedArray = __spreadArray(__spreadArray([], numbers, true), moreNumbers, true);
console.log("Combined array:", combinedArray); // Output: Combined array: [1, 2, 3, 4, 5, 6]
// In this example, the spread operator (...) is used to merge two arrays ('numbers' and 'moreNumbers') into a single array ('combinedArray').
// **Example 2: Spread Operator with Function Arguments**
function addNumbers(x, y, z) {
    return x + y + z;
}
var numbersToAdd = [1, 2, 3];
// @ts-ignore
var sum = addNumbers.apply(void 0, numbersToAdd);
console.log("Sum of numbers:", sum); // Output: Sum of numbers: 6
// Here, the spread operator (...) is used to pass individual elements of the 'numbersToAdd' array as arguments to the 'addNumbers' function.
// **Example 3: Spread Operator with Object Literal**
var person1 = { name: "John", age: 30 };
var person2 = __assign(__assign({}, person1), { city: "New York" });
console.log("Person 2:", person2); // Output: Person 2: { name: 'John', age: 30, city: 'New York' }
// The spread operator (...) can also be used with object literals to create a shallow copy of an object or merge multiple objects.
// By using the spread operator, you can perform operations like array merging, function argument spreading, and object merging more concisely and efficiently in TypeScript.
