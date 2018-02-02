function expressionSplit(text) {
    let pattern = /[)(,;.\s]/;
    let result = text.split(pattern)
        .filter(s => s !== '');
    console.log(result.join('\n'));
}

// function tests
expressionSplit('let sum = 4 * 4,b = "wow";');
console.log();
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');