function aggregateElements(inputData) {

    function sum(a, b) {
        return a + b;
    }

    // always reduce with initial value of 0 (zero)
    let sumInverted = (a,b) => a + 1/b;

    let concat = (a, b) => '' + a + b;

    console.log(inputData.reduce(sum));
    console.log(inputData.reduce(sumInverted, 0));
    console.log(inputData.reduce(concat));
}

// function tests
aggregateElements([1, 2, 3]);
console.log();
aggregateElements([2, 4, 8, 16]);