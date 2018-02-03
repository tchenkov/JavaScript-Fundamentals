function startsWith(text, target) {
    let isTextStartingWithTarget = text.startsWith(target);
    console.log(isTextStartingWithTarget);
}

// function tests
startsWith('How have you been?', 'how');
console.log();
startsWith('The quick brown fox…', 'The quick brown fox…');
console.log();
startsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');