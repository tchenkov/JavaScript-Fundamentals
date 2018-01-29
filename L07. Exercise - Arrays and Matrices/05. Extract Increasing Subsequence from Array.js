//noinspection SpellCheckingInspection
function extractIncreasingSubsequenceFromArray(inputData) {
    let max;
    inputData.filter((e, i) => {
        max = i === 0 ? e : Math.max(max, e);
        return i === 0 || e >= max})
        .forEach(e => console.log(e));
}

// function tests
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log();
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
console.log();
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);