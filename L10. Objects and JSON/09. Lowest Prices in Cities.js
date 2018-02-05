function lowestPricesInCities(inputData) {
    let productsByTown = new Map();
    for (let line of inputData) {
        let [town, product, price] = line.split(' | ')
            .filter(s => s !== '');
        price = Number(price);

        if (!productsByTown.has(town)) {
            productsByTown.set(town, new Map());
        }
        let productsInCurrentTown = productsByTown.get(town);
        if (!productsInCurrentTown.has(product)) {
            productsInCurrentTown.set(product, price);
            continue;
        }
        productsInCurrentTown.set(product, price);
    }

    let cheapestProducts = new Map();
    for (let town of productsByTown.keys()) {
        let currentTown = productsByTown.get(town);
        for (let product of currentTown.keys()) {
            let price = currentTown.get(product);
            if (!cheapestProducts.has(product)) {
                cheapestProducts.set(product, {price: price, town: town});
            }
            if (cheapestProducts.get(product).price > price) {
                cheapestProducts.set(product, {price: price, town: town});
            }
        }
    }

    for (let product of cheapestProducts.keys()) {
        console.log(`${product} -> ${cheapestProducts.get(product).price} (${cheapestProducts.get(product).town})`);
    }
}

// function tests
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
console.log();
lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);