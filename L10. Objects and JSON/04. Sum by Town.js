function sumByTown(inputData) {
    let result = {};
    for (let i = 0; i < inputData.length; i += 2) {
        let town = inputData[i];
        let income = inputData[i+1];

        if (!result.hasOwnProperty(town)){
            result[town] = 0;
        }

        result[town] += Number(income);
    }

    console.log(JSON.stringify(result));
}

// function tests
//noinspection SpellCheckingInspection
sumByTown(['Sofia', 20, 'Varna', 3, 'Sofia', 5]);