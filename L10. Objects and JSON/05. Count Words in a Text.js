function countWordsInAText(textArray) {
    let result = {};
    for (let line of textArray) {


        let wordsArray = line.split(/\W/g)
            .filter(s => s !== '');


        for (let word of wordsArray) {
            let key = word;
            if (!result.hasOwnProperty(key)) {
                result[key] = 0;
            }

            result[key]++;
        }
    }

    console.log(JSON.stringify(result));
}

// function tests
countWordsInAText(['Far too slow, you\'re far too slow.']);
console.log();
//noinspection SpellCheckingInspection
countWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']);