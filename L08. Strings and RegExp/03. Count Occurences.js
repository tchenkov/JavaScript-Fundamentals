function countOccurrences(target, text) {
    let count = 0;

    while (text.indexOf(target) > -1){
        count++;
        text = text.substr(text.indexOf(target) + 1);
    }

    console.log(count);
}

// function tests
countOccurrences('the', 'The quick brown fox jumps over the lay dog.');
console.log();
countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');