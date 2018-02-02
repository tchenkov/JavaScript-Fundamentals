function matchAllWords(text) {
    let delimiter = '|';
    text = text.split(/\W+/).filter(s => s!== '').join(delimiter);
    console.log(text);
}

// function tests
matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
console.log();
matchAllWords('_(Underscores) are also word characters');