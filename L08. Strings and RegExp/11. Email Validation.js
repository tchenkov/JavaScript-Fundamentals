function emailValidation(email) {
    let pattern = /^[a-z0-9]+@[a-z]+\.[a-z]+$/gi;
    console.log(pattern.test(email) ? 'Valid' : 'Invalid');
}

// function tests
emailValidation('valid@email.bg');
console.log();
emailValidation('invalid@emai1.bg');