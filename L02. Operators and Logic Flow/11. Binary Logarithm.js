function binaryLogarithm(numbers) {
    for (let number of numbers) {
        console.log(Math.log2(number));
    }
}

// function tests
binaryLogarithm([1,2,3,4]);