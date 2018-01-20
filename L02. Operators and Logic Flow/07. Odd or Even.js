function oddOrEven(number) {
    let result = "invalid";
    if (number % 2 === 0){
        result = "even";
    } else if (Math.abs(number) % 2 === 1){
        result = "odd";
    }

    console.log(result);
}

// function tests
oddOrEven(5);
oddOrEven(8);
oddOrEven(1.5);