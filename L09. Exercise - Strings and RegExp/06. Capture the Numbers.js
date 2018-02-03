function captureTheNumbers(inputData) {
    let pattern = /\d+/g;
    // alt solution start
    // let text = inputData.join(' ');
    // let result = text.match(pattern);
    // alt solution end

    // original solution start
    let result = [];

    for (let line of inputData) {
        let match = pattern.exec(line);

        while (match){
            result.push(match[0]);
            match = pattern.exec(line);
        }

    }
    // original solution end

    console.log(result.join(' '));
}

// function tests
captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
console.log();
captureTheNumbers(['123a456', '789b987', '654c321', '0']);
console.log();
//noinspection SpellCheckingInspection
captureTheNumbers(['Let’s go11!!!11!', 'Okey!1!']);