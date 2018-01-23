function rectangleAreaAndPerimeter(sideA, sideB) {
    let area = sideA * sideB;
    let perimeter = (sideA + sideB) * 2;

    console.log(area);
    console.log(perimeter);
}

// function tests
rectangleAreaAndPerimeter(2, 2);
rectangleAreaAndPerimeter(1, 3);
rectangleAreaAndPerimeter(2.5, 3.14);