function diagonalSums(inputData) {
    let sum = (a, b) => a + b;
    let d1Sum = inputData.map((e, i) => e[i]).reduce(sum);
    let d2Sum = inputData.map((e, i) => e[e.length - 1 - i]).reduce(sum);

    console.log(`${d1Sum} ${d2Sum}`);
}

// function tests
diagonalSums([[20, 40], [10, 60]]);
console.log();
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);