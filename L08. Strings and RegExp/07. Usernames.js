//noinspection SpellCheckingInspection
function usernames(inputData) {

    let result = [];

    for (let email of inputData) {
        let tokens = email.split('@').filter(s => s !== '');
        let username = tokens[0] + '.';
        tokens[1].split('.').filter(s => s !== '')
            .forEach(s => username+= s[0]);
        result.push(username);
    }

    console.log(result.join(', '));
}

// function tests
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
