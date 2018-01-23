function rounding(inputData) {
    let number = inputData[0];
    let precision = Math.pow(10 , inputData[1]);


    let output = Math.round(number * precision) / precision;
    console.log(output);
}

// function tests
rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);