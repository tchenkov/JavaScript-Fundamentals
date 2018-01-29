function addAndRemoveElements(inputData) {
    let result = [];

    const ADD = 'add';
    const REMOVE = 'remove';
    for (let i = 0, L = inputData.length; i < L; i++) {
        if (inputData[i] === ADD) {
            result.push(i + 1);
        } else {
            if (inputData[i] === REMOVE) {
                result.pop();
            }
        }
    }

    result.length > 0 ? result.forEach(e => console.log(e)) : console.log('Empty');
}

// function tests
addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log();
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log();
addAndRemoveElements(['remove', 'remove', 'remove', 'remove']);