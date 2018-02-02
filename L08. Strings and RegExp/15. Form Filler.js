function formFiller(name, email, phoneNumber, form) {
    let patternName = /<![A-Za-z]*!>/g;
    let patternEmail = /<@[A-Za-z]*@>/g;
    let patternPhone = /<\+[A-Za-z]*\+>/g;

    for (let line of form) {
        console.log(line.replace(patternName, name).replace(patternEmail, email).replace(patternPhone, phoneNumber));
    }

}

// function tests
//noinspection SpellCheckingInspection
formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);