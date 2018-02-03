function wordOccurrences(text, target) {
    let pattern = new RegExp(`\\b${target}\\b`, 'gi');
    let match = text.match(pattern);
    console.log(match === null ? 0 : match.length);
}

// function tests
//noinspection SpellCheckingInspection
wordOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
console.log();
wordOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');
console.log();
//noinspection SpellCheckingInspection
wordOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');