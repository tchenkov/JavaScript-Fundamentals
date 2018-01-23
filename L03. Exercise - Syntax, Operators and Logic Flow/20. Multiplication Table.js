function multiplicationTable(size) {
    let output = '<table border="1">\n';

    output += '  <tr><th>x</th>';
    for (let j = 1; j <= size; j++) {
        output += `<th>${j}</th>`;
    }
    output += "</tr>\n";

    for (let i = 1; i <= size; i++) {
        output += `  <tr><th>${i}</th>`;
        for (let j = 1; j <= size; j++) {
            output += `<td>${i * j}</td>`;
        }

        output += "</tr>\n";
    }

    output += "</table>";

    console.log(output);
}

// function tests
multiplicationTable(5);
multiplicationTable(1);