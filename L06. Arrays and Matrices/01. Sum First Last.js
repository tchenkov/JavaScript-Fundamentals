function sumFirstLast(inputData) {
    return Number(inputData[0]) + Number(inputData[inputData.length - 1]);
}

// function tests
sumFirstLast(['20', '30', '40']);
console.log();
sumFirstLast(['5', '10']);
console.log();
sumFirstLast(['5']);