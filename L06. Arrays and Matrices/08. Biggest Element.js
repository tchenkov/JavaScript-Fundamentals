function biggestElement(inputData) {
    let max = (a, b) => Math.max(a, b);
    console.log(inputData.map(e => e.reduce(max)).reduce(max));
}

// function tests
biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log();
biggestElement([[3, 5, 7, 12], [-1, 33, 2], [8, 3, 0, 4]]);
