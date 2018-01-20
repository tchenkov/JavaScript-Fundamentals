function multiplyNumbers() {
    let result = 1;
    for (let value of arguments) {
        result *= value;
    }

    return result;
}

// function tests
console.log(multiplyNumbers(3, 2));
console.log(multiplyNumbers(23632.36, -12.3249));