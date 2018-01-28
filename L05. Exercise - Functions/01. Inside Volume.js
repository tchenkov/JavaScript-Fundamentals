function insideVolume(inputData) {
    const [x1, x2, y1, y2, z1, z2] = [10, 50, 20, 80, 15, 50];
    let isInside = (x, y, z) =>
    x1 <= x && x <= x2 &&
    y1 <= y && y <= y2 &&
    z1 <= z && z <= z2;

    for (let i = 0; i < inputData.length; i+= 3) {
        let isPointInside = isInside(inputData[i], inputData[i +1], inputData[i+2]);
        console.log(isPointInside ? 'inside' : 'outside');
    }
}

// function tests
insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);