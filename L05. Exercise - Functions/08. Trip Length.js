function tripLength(inputData) {
    function distanceBetweenPoints(p1, p2) {
        let width = Math.abs(p1.x - p2.x);
        let height = Math.abs(p1.y - p2.y);
        //noinspection UnnecessaryLocalVariableJS
        let distance = Math.sqrt((width * width) + (height * height));
        return distance;
    }
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    let index = 0;
    let p1 = new Point(inputData[index++], inputData[index++]);
    let p2 = new Point(inputData[index++], inputData[index++]);
    //noinspection JSUnusedAssignment
    let p3 = new Point(inputData[index++], inputData[index++]);

    let distanceP1ToP2 = distanceBetweenPoints(p1, p2);
    let distanceP1ToP3 = distanceBetweenPoints(p1, p3);
    let distanceP2ToP3 = distanceBetweenPoints(p2, p3);

    let distanceP1P2P3 = distanceP1ToP2 + distanceP2ToP3;
    let distanceP2P1P3 = distanceP1ToP2 + distanceP1ToP3;
    let distanceP1P3P2 = distanceP1ToP3 + distanceP2ToP3;

    let minDistance = Math.min(distanceP1P2P3, distanceP2P1P3, distanceP1P3P2);

    switch (minDistance){
        case distanceP1P2P3:
            return `1->2->3: ${distanceP1P2P3}`;
        case distanceP1P3P2:
            return `1->3->2: ${distanceP1P3P2}`;
        case distanceP2P1P3:
            return `2->1->3: ${distanceP2P1P3}`;
    }
}

// function tests
console.log(tripLength([0, 0, 2, 0, 4, 0]));
console.log();
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log();
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));
