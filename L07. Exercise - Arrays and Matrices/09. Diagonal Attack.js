function diagonalAttack(inputData) {
    let matrix = [];

    for (let i = 0; i < inputData.length; i++) {
        matrix[i] = inputData[i].split(' ').map(e => Number(e));
    }

    let sum = (a, b) => a + b;
    let d1Sum = matrix.map((e, i) => e[i]).reduce(sum);
    let d2Sum = matrix.map((e, i) => e[e.length - 1 - i]).reduce(sum);

    if (d1Sum === d2Sum){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i === j || matrix[i].length - 1 - j === i){
                    continue;
                }
                matrix[i][j] = d1Sum;
            }
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

// function tests
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
console.log();
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);