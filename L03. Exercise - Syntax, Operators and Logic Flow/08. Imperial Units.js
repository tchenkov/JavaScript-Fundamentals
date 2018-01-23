function inchesToFeet(inches) {
    let feet = Math.floor(inches / 12);
    let remainder = inches % 12;

    console.log(`${feet}'-${remainder}"`)
}

// function tests
inchesToFeet(36);
inchesToFeet(55);
inchesToFeet(11);