function lastKNumbersSequence(sequenceLength, k) {
    let sum = (a, b) => a + b;
    let result = [1];

    for (let i = 1; i < sequenceLength; i++) {
        let startIndex = (result.length - k) < 0 ? 0 : result.length - k;
        let element = result.slice(startIndex).reduce(sum);
        result.push(element);
    }

    console.log(result.join(' '));
}

// function tests
lastKNumbersSequence(6, 3);
console.log();
lastKNumbersSequence(8, 2);