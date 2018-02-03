function findVariableNamesInSentences(text) {
    let pattern = /\b_[A-Za-z0-9]+\b/g;
    let result = text.match(pattern).map(s => s.substr(1));
    console.log(result.join(','));

}

// function tests
findVariableNamesInSentences('The _id and _age variables are both integers.');
console.log();
findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.');
console.log();
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');