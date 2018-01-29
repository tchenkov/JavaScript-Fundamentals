function rotateArray(inputData) {
    let rotationsCount = inputData.pop() % inputData.length;

    for (let i = 0; i < rotationsCount; i++) {
        inputData.unshift(inputData.pop());
    }

    console.log(inputData.join(' '));
}

// function tests
rotateArray([1, 2, 3, 4, 2]);
console.log();
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', 15]);