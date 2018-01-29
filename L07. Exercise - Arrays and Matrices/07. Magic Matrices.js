function magicMatrices(inputData) {
    let sum = (a, b) => a + b;
    let target = inputData[0].reduce(sum);
    for (let i = 1; i < inputData.length; i++) {
        if (inputData[i].reduce(sum) !== target) {
            // console.log(false);
            return false;
        }
    }

    for (let i = 0; i < inputData[0].length; i++) {
        let currentSum = 0;
        for (let j = 0; j < inputData.length; j++) {
            currentSum += inputData[j][i];
        }

        if (currentSum !== target){
            // console.log(false);
            return false;
        }
    }

    // console.log(true);
    return true;
}

// function tests
magicMatrices(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
);
console.log();
magicMatrices(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
);
console.log();
magicMatrices(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
);