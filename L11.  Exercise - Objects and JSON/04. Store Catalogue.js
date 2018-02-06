function storeCatalogue(inputData) {
    let catalogue = new Map();
    for (let input of inputData) {
        let [product, price] = input.split(' : ')
            .filter(s => s !== '');
        if (!catalogue.has(product[0])){
            catalogue.set(product[0], new Map());
        }
        let paragraph = catalogue.get(product[0]);
        paragraph.set(product, price);
    }

    catalogue = new Map([...catalogue.entries()].sort(caseInsensitiveKeySort));
    for (let [k, v] of catalogue) {
        let sortedParagraph = new Map([...v.entries()].sort(caseInsensitiveKeySort));
        catalogue.set(k, sortedParagraph);
    }

    for (let [key, paragraph] of catalogue) {
        console.log(key);
        for (let [product, price] of paragraph) {
            console.log(`  ${product}: ${price}`);
        }
    }

    function caseInsensitiveKeySort(e1, e2) {
        return e1[0].toLowerCase().localeCompare(e2[0].toLowerCase());
    }
}

// function tests
//noinspection SpellCheckingInspection
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log();
//noinspection SpellCheckingInspection
storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);