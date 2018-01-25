function wordsUppercase(text) {
    text = text.toUpperCase();
    let words = text.split(/\W+/).filter(w => w !== '');
    return words.join(", ");
}

// function tests
console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));