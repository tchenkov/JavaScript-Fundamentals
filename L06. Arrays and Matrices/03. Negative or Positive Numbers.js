function negativeOrPositiveNumbers(inputData) {
    let result = [];
    inputData.forEach(e => e < 0 ? result.unshift(e) : result.push(e));
    result.forEach(e => console.log(e));
}

// function tests
negativeOrPositiveNumbers([7, -2, 8, 9]);
console.log();
negativeOrPositiveNumbers([3, -2, 0, -1]);