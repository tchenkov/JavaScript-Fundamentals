function processOddNumbers(inputData) {
    let result = [];
    inputData.filter((e, i) => i % 2 !== 0)
        .forEach(e => result.unshift(e * 2));
    console.log(result.join(' '));
}

// function tests
processOddNumbers([10, 15, 20, 25]);
console.log();
processOddNumbers([3, 0, 10, 4, 7, 3]);