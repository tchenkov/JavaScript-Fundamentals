function filterByAge(minAge, person1Name, person1Age, person2Name, person2Age) {
    function extracted(minAge, personAge, personName) {
        if (minAge <= personAge) {
            let person = {name: personName, age: personAge};
            console.log(person);
        }
    }

    extracted(minAge, person1Age, person1Name);
    extracted(minAge, person2Age, person2Name);
}

//noinspection SpellCheckingInspection
filterByAge(12, 'Ivan', 15, 'Asen', 9);