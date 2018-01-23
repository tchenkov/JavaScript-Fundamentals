function biggestNumber(inputData) {
    let max = inputData => console.log(Math.max(inputData[0], inputData[1], inputData[2]));
    max(inputData);
}

// function tests
biggestNumber([5, -2, 7]);
biggestNumber([130, 5, 99]);
biggestNumber([43, 43.2, 43.1]);
biggestNumber([5, 5, 5]);
biggestNumber([-10, -20, -30]);