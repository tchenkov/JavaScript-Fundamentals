function squareOfStars(size) {
    let symbol = '*';

    for (let i = 1; i <= size; i++) {
        console.log(`${symbol} `.repeat(size).trim())
    }
}

// function tests
squareOfStars(1);
console.log();
squareOfStars(2);
console.log();
squareOfStars(5);