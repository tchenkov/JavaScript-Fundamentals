function triangleOfStars(size, level = 1) {
    let symbol = '*';

    console.log(symbol.repeat(level));

    if (size <= 1 || size === level){
        return;
    }

    triangleOfStars(size, level + 1);

    console.log(symbol.repeat(level));
}

// function tests
triangleOfStars(1);
console.log();
triangleOfStars(2);
console.log();
triangleOfStars(3);
console.log();
triangleOfStars(4);