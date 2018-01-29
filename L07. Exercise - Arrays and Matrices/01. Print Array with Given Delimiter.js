function printArrayWithGivenDelimiter(inputData) {
    let delimiter = inputData.pop();
    console.log(inputData.join(delimiter));
}

// function tests
printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
console.log();
printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
