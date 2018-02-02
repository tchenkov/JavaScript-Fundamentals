function escaping(inputData) {
    let result = '<ul>\n';
    for (let line of inputData) {
        let escapedLine = line.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');
        result += `  <li>${escapedLine}</li>\n`;
    }
    result += '</ul>';

    return result;
}

// function tests
console.log(escaping(['<b>unescaped text</b>', 'normal text']));
console.log();
console.log(escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));