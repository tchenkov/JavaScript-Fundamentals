function autoEngineeringCompany(inputData) {
    let carBrands = new Map();
    for (let line of inputData) {
        let [brand, model, quantity] = line.split(' | ')
            .filter(s => s !== '');
        if (!carBrands.has(brand)){
            carBrands.set(brand, new Map());
        }
        let manufacturerCatalogue = carBrands.get(brand);
        if (!manufacturerCatalogue.has(model)){
            manufacturerCatalogue.set(model, 0);
        }
        manufacturerCatalogue.set(model, manufacturerCatalogue.get(model) + Number(quantity));
    }

    for (let [brand, catalogue] of carBrands) {
        console.log(brand);
        for (let [model, quantity] of catalogue) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

// function tests
//noinspection SpellCheckingInspection
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);