function smallestTwoNumbers(inputData) {
    console.log(inputData.sort((e1, e2) => e1 - e2).slice(0, 2).join(' '));
}

// function tests
smallestTwoNumbers([30, 15, 50, 5]);
console.log();
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);