function compoundInterest(inputData) {
    let principalSum = inputData[0];
    let interestRate = inputData[1] / 100;
    let frequency = 12 / inputData[2];
    let time = inputData[3];

    let f = principalSum * Math.pow(1 + ( interestRate / frequency), frequency * time);

    console.log(f.toFixed(2));
}

// function tests
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);