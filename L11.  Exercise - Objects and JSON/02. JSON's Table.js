function jsonTable(inputData) {
    let output = '<table>\n';
    for (let line of inputData) {
        output += '	<tr>\n';
        
        let obj = JSON.parse(line);
        for (let key of Object.keys(obj)) {
            output += `		<td>${obj[key]}</td>\n`;
        }

        output += '	<tr>\n';
    }
    output += '</table>';

    // for test purposes only
    // console.log(output);
    return output;
}

// function tests
//noinspection SpellCheckingInspection
jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);