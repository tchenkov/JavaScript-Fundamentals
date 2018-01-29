function printEveryNthElementFromAArray(inputData) {
    let n = Number(inputData.pop());

    for (let i = 0, L = inputData.length; i < L; i += n) {
        console.log(inputData[i]);
    }
}

// function tests
printEveryNthElementFromAArray([5, 20, 31, 4, 20, 2]);
console.log();
printEveryNthElementFromAArray(['dsa', 'asd', 'test', 'tset', 2]);
console.log();
printEveryNthElementFromAArray([1, 2, 3, 4, 5, 6]);