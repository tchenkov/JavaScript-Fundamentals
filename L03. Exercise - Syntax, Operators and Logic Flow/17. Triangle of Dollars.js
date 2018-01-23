function triangleOfDollars(size) {
    function stringRepeat(symbol, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
            result += symbol;
        }

        return result;
    }

    let symbol = "$";

    for (let i = 1; i <= size; i++) {
        console.log(stringRepeat(symbol, i));
    }
}

// function tests
triangleOfDollars(3);
triangleOfDollars(2);
triangleOfDollars(4);