function capitalizeTheWords(text) {
    text = text.split(' ').filter(s => s !== '')
        .map(s => s.substr(0,1).toUpperCase() + s.substr(1).toLowerCase())
        .join(' ');
    console.log(text);
}

// function tests
capitalizeTheWords('Capitalize these words');
console.log();
capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');