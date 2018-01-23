function assignProperties(inputData) {
    let obj = {};

    for (let i = 0; i < inputData.length; i += 2) {
        obj[inputData[i]] = inputData[i + 1];
    }

    console.log(obj);
}

// function tests
//noinspection SpellCheckingInspection
assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);