function orbit(inputData) {
    let m = inputData[0];
    let n = inputData[1];
    let x = inputData[2];
    let y = inputData[3];

    function createMatrix(m, n) {
        let matrix = new Array(m);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(n);
        }

        return matrix;
    }

    let matrix = createMatrix(m, n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

// function tests
orbit([4, 4, 0, 0]);
console.log();
orbit([5, 5, 2, 2]);
console.log();
orbit([3, 3, 2, 2]);