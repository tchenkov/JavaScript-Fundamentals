function distanceIn3D(inputData) {
    let x1 = inputData[0];
    let y1 = inputData[1];
    let z1 = inputData[2];
    let x2 = inputData[3];
    let y2 = inputData[4];
    let z2 = inputData[5];

    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    let z = Math.abs(z1 - z2);

    let xy = Math.sqrt(x * x + y * y);
    let distance = Math.sqrt(xy * xy + z * z);

    console.log(distance);
}

// function tests
distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);
