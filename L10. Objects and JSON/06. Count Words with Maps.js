function countWordsWithMaps(textArray) {
    let result = new Map();
    for (let line of textArray) {
        let wordsArray = line.split(/\W/g)
            .filter(s => s !== '');

        for (let word of wordsArray) {
            let key = word.toLowerCase();
            if (!result.has(key)) {
                result.set(key, 0);
            }

            result.set(key, result.get(key) + 1);
        }
    }
    result = new Map([...result].sort());

    result.forEach((v, k) => console.log(`'${k}' -> ${v} times`))
}

// function tests
countWordsWithMaps(['Far too slow, you\'re far too slow.']);
console.log();
//noinspection SpellCheckingInspection
countWordsWithMaps(['JS devs use Node.js for server-side JS.-- JS for devs']);