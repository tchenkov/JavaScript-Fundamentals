function aggregateTable(inputData) {
    let towns = [];
    let totalIncome = 0;

    for (let line of inputData) {
        let tokens = line.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());
        towns.push(tokens[0]);
        totalIncome += Number(tokens[1]);
    }

    console.log(towns.join(', '));
    console.log(totalIncome);
}

// function tests
// noinspection SpellCheckingInspection
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);