function triangleArea(sideA, sideB, sideC) {
    let halfPerimeter = (sideA + sideB + sideC) / 2;
    let result = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    console.log(result);
}

// function tests
triangleArea(2, 3.5, 4);