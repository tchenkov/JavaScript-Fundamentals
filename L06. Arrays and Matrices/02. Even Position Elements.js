function evenPositionElements(inputData) {
    return inputData.filter((e, i) => i % 2 === 0).join(' ');
}

// function tests
evenPositionElements(['20', '30', '40']);
console.log();
evenPositionElements(['5', '10']);