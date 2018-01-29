function sortArray(inputData) {
    inputData.sort().sort((e1, e2) => e1.length - e2.length).forEach(e => console.log(e));
}

// function tests
sortArray(['alpha', 'beta', 'gamma']);
console.log();
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log();
sortArray(['test', 'Deny', 'omen', 'Default']);