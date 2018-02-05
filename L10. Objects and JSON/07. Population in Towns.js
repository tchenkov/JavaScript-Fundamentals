function populationInTowns(inputData) {
    let result = new Map();
    for (let line of inputData) {
        let tokens = line.split(' <-> ')
            .filter(s => s !== '');
        let town = tokens[0];
        let population = Number(tokens[1]);

        if (!result.has(town)) {
            result.set(town, 0);
        }
        result.set(town, result.get(town) + population);
    }

    result.forEach((v, k) => console.log(`${k} : ${v}`))
}

// function tests
populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
console.log();
populationInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);