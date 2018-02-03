function splitAStringWithADelimiter(text, delimiter) {
    let result = text.split(delimiter);
    console.log(result.join('\n'));
}

// function tests
splitAStringWithADelimiter('One-Two-Three-Four-Five', '-');
console.log();
splitAStringWithADelimiter('http://platform.softuni.bg', '.');