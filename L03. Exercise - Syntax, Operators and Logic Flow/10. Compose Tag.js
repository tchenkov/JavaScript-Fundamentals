function composeTag(inputData) {
    let fileLocation = inputData[0];
    let alternateText = inputData[1];
    let result = `<img src="${fileLocation}" alt="${alternateText}">`;

    console.log(result);
}

// function tests
composeTag(['smiley.gif', 'Smiley Face']);