function isPintInRectangle(inputData) {
    let x = inputData[0];
    let y = inputData[1];
    let xMin = inputData[2];
    let xMax = inputData[3];
    let yMin = inputData[4];
    let yMax = inputData[5];
    let isThePintInRectangle = xMin <= x && x <= xMax && yMin <= y && y <= yMax;

    console.log(isThePintInRectangle ? "inside" : "outside");
}

// function tests
isPintInRectangle([8, -1, 2, 12, -3, 3]);
isPintInRectangle([12.5, -1, 2, 12, -3, 3]);