function dayOfWeek(text) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.indexOf(text) === -1 ? 'error' : days.indexOf(text) + 1;
}

// function tests
console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
// noinspection SpellCheckingInspection
console.log(dayOfWeek('Frabjoyousday'));