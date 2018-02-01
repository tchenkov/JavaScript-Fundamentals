function concatenateAndReverse(inputData) {
    let result = inputData.join('').split('').reverse().join('');
    console.log(result);
}

// function tests
concatenateAndReverse(['I', 'am', 'student']);
console.log();
concatenateAndReverse(['race', 'car']);