//named function with number as parameters type and return type
function add(a: number, b: number): number {
    return a + b;
}

//anonymous function with number as parameters type and return type
let sum = function (a: number, b: number): number {
    return a + b;
};

//anonymous function with number as parameters type and return type
let sum2 = function (a: number, b: number): number {
    return a + b;
}

console.log(sum(23, 45));

console.log(sum2(34, 57));

console.log(add(350, 340));