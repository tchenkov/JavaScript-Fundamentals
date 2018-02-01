function printLetters(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(`str[${i}] -> ${string[i]}`);
    }
}

// function tests
printLetters('Hello, World!');
console.log();
printLetters('SoftUni');