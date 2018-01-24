function aggregateElements(inputData) {

    function sum(a, b) {
        return a + b;
    }

    let sumInverted = function (arr) {
        let result = 0;
        for (let value of arr) {
            result += 1 / value;
        }

        return result;
    };

    let concat = (a, b) => '' + a + b;

    console.log(inputData.reduce(sum));
    console.log(sumInverted(inputData));
    console.log(inputData.reduce(concat));
}

// function tests
aggregateElements([1, 2, 3]);
console.log();
aggregateElements([2, 4, 8, 16]);