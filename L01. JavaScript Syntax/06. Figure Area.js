function area(w1, h1, w2, h2) {
    let rectangle1Area = w1 * h1;
    let rectangle2Area = w2 * h2;
    let crossSectionArea = Math.min(w1, w2)  * Math.min(h1, h2);

    return rectangle1Area + rectangle2Area - crossSectionArea;
}

console.log(area(2, 4, 5, 3));
console.log(area(13, 2, 5, 8));