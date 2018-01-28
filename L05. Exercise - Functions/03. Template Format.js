function templateFormat(inputData) {
    let output = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < inputData.length; i += 2) {
        let question = inputData[i];
        let answer = inputData[i +1];

        output += '  <question>\n';
        output += `    ${question}\n`;
        output += '  </question>\n';
        output += '  <answer>\n';
        output += `    ${answer}\n`;
        output += '  </answer>\n';
    }

    output += '</quiz>';

    console.log(output);
}

// function tests
templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);