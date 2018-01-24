function isPalindrome(text) {
    return text === text.split("").reverse().join("");
}

// function tests
console.log(isPalindrome("abba"));
// noinspection SpellCheckingInspection
console.log(isPalindrome("abbaas"));