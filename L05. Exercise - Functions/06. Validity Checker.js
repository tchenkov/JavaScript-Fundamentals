function validityChecker(inputData) {
    function isDistanceValid(point1, point2) {
        let x = Math.abs(point1.x - point2.x);
        let y = Math.abs(point1.y - point2.y);
        let distance = Math.sqrt(x * x + y * y);
        let result = `{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is `;
        return parseInt(distance) === distance ? result + "valid" : result + "invalid";
    }

    let point0 = {x: 0, y:0};
    let point1 = {x: inputData[0], y: inputData[1]};
    let point2 = {x: inputData[2], y: inputData[3]};

    console.log(isDistanceValid(point1, point0));
    console.log(isDistanceValid(point2, point0));
    console.log(isDistanceValid(point1, point2));
}

// function tests
validityChecker([3, 0, 0, 4]);
console.log();
validityChecker([2, 1, 1, 1]);