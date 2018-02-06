function uniqueSequences(inputData) {
    inputData = inputData.map(e => JSON.parse(e));
    inputData = inputData.sort((arr1, arr2) => arr1.length - arr2.length);
    // for (let i = 0; i < inputData.length; i++) {
    //     inputData[i] = inputData[i].sort((a, b) => b - a);
    // }
    for (let arr of inputData) {
        arr = arr.sort((a, b) => b - a);
    }

    let change = true;
    while (change) {
        for (let i = 0; i < inputData.length - 1; i++) {
            for (let j = i + 1; j < inputData.length; j++) {
                let arr1 = inputData[i];
                let arr2 = inputData[j];
                if (arr1.length !== arr2.length) {
                    continue;
                }
                let isArr1EqualToArr2 = true;
                for (let k = 0; k < inputData[i].length; k++) {
                    if (arr1[k] !== arr2[k]){
                        isArr1EqualToArr2 = false;
                        break;
                    }
                }

                if (isArr1EqualToArr2){
                    change = true;
                    inputData.splice(j, 1);
                    i--;
                    break;
                } else {
                    change = false;
                }
            }
        }
        change = false;
    }

    inputData.forEach(e => console.log(`[${e.join(', ')}]`));
}

// function tests
uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[10, 1, -17, 0, 2, 13]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);
console.log();
uniqueSequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);