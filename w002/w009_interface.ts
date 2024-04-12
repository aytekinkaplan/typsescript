interface CalculatorValues {
    value1: number;
    value2: number;
}

function add(values: CalculatorValues) {
    return values.value1 + values.value2;
}

console.log(add({value1: 10, value2: 20}));

