interface CalculatorValues {
    value1: number;
    value2: number;
}

function add(values: CalculatorValues) {
    return values.value1 + values.value2;
}

console.log(add({value1: 10, value2: 20}));

function subtract(values: CalculatorValues) {
    return values.value1 - values.value2;
}

console.log(subtract({value1: 10, value2: 20}));

function multiply(values: CalculatorValues) {
    return values.value1 * values.value2;
}

console.log(multiply({value1: 10, value2: 20}));

function divide(values: CalculatorValues) {
    return values.value1 / values.value2;
}

console.log(divide({value1: 10, value2: 20}));