function townsToJson(inputData) {
    let splitPattern = /\s*\|\s*/;
    let keys = inputData.shift().split(splitPattern)
        .filter(s => s !== '');
    let result = [];
    for (let data of inputData) {
        let values = data.split(splitPattern)
            .filter(s => s !== '');
        let dataObj = {};
        for (let i = 0; i < keys.length; i++) {
            dataObj[keys[i]] = isNaN(values[i]) ? values[i] : Number(values[i]);
        }
        result.push(dataObj)
    }

    console.log(JSON.stringify(result));
}

// function tests
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
console.log();
//noinspection SpellCheckingInspection
townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);