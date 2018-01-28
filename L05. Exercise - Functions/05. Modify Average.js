function modifyAverage(number) {
    let digits = ('' + number).split("").map(Number);
    let sum = (a, b) => a + b;

    let average = (digits) => digits.reduce(sum) / digits.length;
    while (average(digits) <= 5) {
        digits.push(9);
    }

    console.log(digits.join(""));
}

// function tests
modifyAverage(101);
modifyAverage(5835);