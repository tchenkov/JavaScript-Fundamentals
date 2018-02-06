//noinspection SpellCheckingInspection
function cappyJuice(inputData) {
    const juiceBottleVolume = 1000;
    let juiceQuantity = new Map();
    let juiceBottles = new Map();

    for (let line of inputData) {
        let [juice, quantity] = line.split(' => ').filter(s => s !== '');
        if (!juiceQuantity.has(juice)) {
            juiceQuantity.set(juice, 0);
        }
        let totalJuiceQuantity = juiceQuantity.get(juice) + Number(quantity);
        juiceQuantity.set(juice, totalJuiceQuantity);

        if (juiceQuantity.get(juice) >= juiceBottleVolume) {
            if (!juiceBottles.has(juice)) {
                juiceBottles.set(juice, 0);
            }
            juiceBottles.set(juice, juiceBottles.get(juice) + (totalJuiceQuantity - (totalJuiceQuantity % juiceBottleVolume)) / juiceBottleVolume);
            juiceQuantity.set(juice, juiceQuantity.get(juice) % juiceBottleVolume);
        }
    }

    juiceBottles.forEach((v, k) => console.log(`${k} => ${v}`));
}

// function tests
cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
console.log();
cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);