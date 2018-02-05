function cityMarkets(inputData) {
    let result = new Map();
    for (let line of inputData) {
        let [town, product, sales] = line.split(' -> ')
            .filter(s => s !== '');
        let [amountOfSales, priceForOneUnit] = sales.split(' : ')
            .filter(s => s !== '')
            .map(n => Number(n));

        if (!result.has(town)){
            result.set(town, new Map());
        }

        let currentTown = result.get(town);
        if (!currentTown.has(product)){
            currentTown.set(product, 0);
        }
        let productTotalIncome = amountOfSales * priceForOneUnit;
        currentTown.set(product, currentTown.get(product) + productTotalIncome);
    }

    for (let town of result.keys()) {
        console.log(`Town - ${town}`);
        for (let product of result.get(town).keys()) {
            console.log(`$$$${product} : ${result.get(town).get(product)}`);
        }
    }
}

// function tests
//noinspection SpellCheckingInspection
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);