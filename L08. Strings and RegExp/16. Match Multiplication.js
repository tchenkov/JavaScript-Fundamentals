function matchMultiplication(text) {
    let pattern = /((?:-)?\d+)\s*\*\s*((:?-)?\d+(?:\.\d+)?)/g;

    let match = pattern.exec(text);

    while (match){
        text = text.replace(match[0], Number(match[1]) * Number(match[2]));
        match = pattern.exec(text);
    }

    console.log(text);
}

// function tests
//noinspection SpellCheckingInspection
matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');