function employeeData(inputData) {
    let result = [];
    let pattern = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/;

    for (let line of inputData) {
        let match = pattern.exec(line);
        if (match === null){
            continue;
        }
        result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
    }

    console.log(result.join('\n'));
}

// function tests
//noinspection SpellCheckingInspection
employeeData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']);
console.log();
employeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);