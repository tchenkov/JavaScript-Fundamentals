function firstAndLastKNumbers(inputData) {
    const K = inputData.shift();

    console.log(inputData.slice(0, K).join(' '));
    console.log(inputData.slice(inputData.length - K).join(' '));
}

// function tests
firstAndLastKNumbers([2, 7, 8, 9]);
console.log();
firstAndLastKNumbers([3, 6, 7, 8, 9]);