function letterCount(text, letter) {
    let count = 0;
    let stringType = "string";
    if (typeof text !== stringType || typeof letter !== stringType ||
        text.length === 0 || letter.length !== 1){
        return count;
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter){
            count++;
        }
    }

    return count;
}

console.log(letterCount('hello', 'l'));
console.log(letterCount('panther', 'n'));