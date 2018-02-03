function secretData(inputData) {
    let censorChar = '|';

    let patterns = {
        namePattern: /\*[A-Z][A-Za-z]*(?=\s|$)/g,
        phonePattern: /\+[\d-]{10}(?=\s|$)/g,
        idPattern: /![A-Za-z0-9]+(?=\s|$)/g,
        secretBasePattern: /_[A-Za-z0-9]+(?=\s|$)/g
    };

    let result = [];
    for (let line of inputData) {
        let newLine = line;
        for (let pattern of Object.values(patterns)) {
            newLine = newLine.replace(pattern, (z) => censorChar.repeat(z.length));
        }
        result.push(newLine);
    }

    return result.join('\n');
}

// function tests
//noinspection SpellCheckingInspection
console.log(secretData([
    'Agent *Ivankov was in the room*Ivankov  when it all happened.*Go',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]));