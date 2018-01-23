function gradsToRadians(grads) {
    grads = grads % 400;
    let degrees = grads * 0.9;
    degrees = degrees < 0 ? 360 + degrees : degrees;

    console.log(degrees);
}

// function tests
gradsToRadians(100);
gradsToRadians(400);
gradsToRadians(850);
gradsToRadians(-50);