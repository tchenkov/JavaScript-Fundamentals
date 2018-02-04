function scoreToHtml(inputJsonString) {
    let input = JSON.parse(inputJsonString);

    let output = '<table>\n';
    output += '  <tr>';
    for (let key of Object.keys(input[0])) {
        output += `<th>${escaping(key)}</th>`
    }
    output += '</tr>\n';


    for (let obj of input) {
        output += '  <tr>';
        for (let key of Object.keys(obj)) {
            output += `<td>${escaping(obj[key].toString())}</td>`;
        }
        // output += '\n';
        output += '</tr>\n';
    }
    output += '</table>';

    console.log(output);

    function escaping(line) {
            return line.replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/'/g, '&#39;');
    }
}

// function tests
//noinspection SpellCheckingInspection
scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
console.log();
//noinspection SpellCheckingInspection
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
console.log();
scoreToHtml(`[{"name":"<div>a && 'b'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]`);