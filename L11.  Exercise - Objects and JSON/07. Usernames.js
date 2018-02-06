//noinspection SpellCheckingInspection
function usernames(inputData) {
    let userNames = new Set(inputData.sort(sortByLengthAlpha));
    userNames.forEach(e => console.log(e));

    function sortByLengthAlpha(s1, s2) {
        if (s1.length !== s2.length) {
            return s1.length - s2.length;
        }
        return s1.localeCompare(s2);
    }
}

// function tests
//noinspection SpellCheckingInspection
usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
console.log();
//noinspection SpellCheckingInspection
usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);