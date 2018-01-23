function figureOf4Squares(size) {
    function stringRepeat(string, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
            result += string;
        }

        return result;
    }

    let n = size % 2 === 0 ? size - 1 : size;
    let fillSize = (n - 3) /2;

    let dashes = stringRepeat("-", size - 2);
    let lid = `+${dashes}+${dashes}+`;
    let spaces = stringRepeat(" ", size - 2);
    let fill = `|${spaces}|${spaces}|`;

    console.log(lid);
    if (size === 2){
        return;
    }
    for (let i = 0; i < fillSize; i++) {
        console.log(fill);
    }
    console.log(lid);
    for (let i = 0; i < fillSize; i++) {
        console.log(fill);
    }
    console.log(lid);
}

// function tests
figureOf4Squares(2);
figureOf4Squares(3);
figureOf4Squares(4);
figureOf4Squares(5);
figureOf4Squares(6);
figureOf4Squares(7);