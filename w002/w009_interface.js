function add(values) {
    return values.value1 + values.value2;
}
console.log(add({ value1: 10, value2: 20 }));
function subtract(values) {
    return values.value1 - values.value2;
}
console.log(subtract({ value1: 10, value2: 20 }));
function multiply(values) {
    return values.value1 * values.value2;
}
console.log(multiply({ value1: 10, value2: 20 }));
function divide(values) {
    return values.value1 / values.value2;
}
console.log(divide({ value1: 10, value2: 20 }));
