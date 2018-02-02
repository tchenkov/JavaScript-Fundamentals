function matchTheDates(inputData) {
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result;

    for (let text of inputData) {
        while (result = pattern.exec(text)){
            console.log(`${result[0]} (Day: ${result[1]}, Month: ${result[2]}, Year: ${result[3]})`);
        }
    }
}

// function tests
matchTheDates(['I am born on 30-Dec-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jul-1955.']);
console.log();
matchTheDates(['1-Jan-1999 is a valid date.\n' +
    'So is 01-July-2000.\n' +
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);