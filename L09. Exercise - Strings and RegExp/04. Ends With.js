function endsWith(text, target) {
    let isTextEndingWithTarget = text.endsWith(target);
    console.log(isTextEndingWithTarget);
}

// function tests
endsWith('This sentence ends with fun?', 'fun?');
console.log();
endsWith('This is Houston, we have…', 'We have…');
console.log();
endsWith('The new iPhone has no headphones jack.', 'o headphones jack.');