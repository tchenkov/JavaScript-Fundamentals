function spiralMatrix(m, n) {
    function createMatrix(m, n) {
        let matrix = new Array(m);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(n);
        }

        return matrix;
    }

    let result = createMatrix(m, n);
    let target = m * n;
    let i = 0;
    let j = 0;
    let count = 0;
    m--;

    while (count < target){
        for (let it = 0; it < n; it++, j++) {
            result[i][j] = ++count;
        }
        n--; j--;

        i++;
        for (let it = 0; it < m; it++, i++) {
            result[i][j] = ++count;
        }
        m--; i--;

        j--;
        for (let it = 0; it < n; it++, j--) {
            result[i][j] = ++count;
        }
        n--; j++;

        i--;
        for (let it = 0; it < m; it++, i--) {
            result[i][j] = ++count;
        }
        m--;

        i++; j++;
    }

    result.forEach(e => console.log(e.join(' ')));
}

// function tests
spiralMatrix(5, 5);
console.log();
spiralMatrix(3, 3);