function distanceBetweenPoints(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);

    //noinspection UnnecessaryLocalVariableJS
    let distance = Math.sqrt((width * width) + (height * height));
    return distance;
}

console.log(distanceBetweenPoints(2, 4, 5, 0));
console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));