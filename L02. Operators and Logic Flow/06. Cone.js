function cone(radius, height) {
    let baseArea = Math.PI * radius * radius;
    let volume = baseArea * height / 3;

    let s = Math.sqrt(radius * radius + height * height);
    let area = baseArea + Math.PI * radius * s;
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

// function tests
cone(3, 5);
cone(3.3, 7.8);