function theHungryProgrammer(servings, commands) {
    let mealsEatenCount = 0;

    loop:
        for (let i = 0; i < commands.length; i++) {
            let command = commands[i].split(' ').filter(s => s !== '');
            switch (command[0]) {
                case "Serve":
                    if (command.length !== 1 || servings.length === 0) {
                        break;
                    }
                    console.log(`${servings.pop()} served!`);
                    break;
                case "Add":
                    if (command.length !== 2) {
                        break;
                    }
                    servings.unshift(command[1]);
                    break;
                case "Shift":
                    if (command.length !== 3 || servings.length === 0) {
                        break;
                    }
                    if (command[1] < 0 || servings.length <= command[2] || command[1] > command[2]) {
                        break;
                    }
                    let shiftStart = command[1];
                    let shiftEnd = command[2];
                    let mem = servings[shiftStart];
                    servings[shiftStart] = servings[shiftEnd];
                    servings[shiftEnd] = mem;
                    break;
                case "Eat":
                    if (command.length !== 1 || servings.length === 0) {
                        break;
                    }
                    let meal = servings.shift();
                    mealsEatenCount++;
                    console.log(`${meal} eaten`);
                    break;
                case "Consume":
                    if (command.length !== 3 || servings.length === 0) {
                        break;
                    }
                    if (command[1] < 0 || servings.length <= command[2] || command[1] > command[2]) {
                        break;
                    }
                    let start = command[1];
                    let end = command[2];
                    let count = end - start + 1;
                    let meals = servings.splice(start, count);
                    mealsEatenCount += meals.length;
                    console.log("Burp!");
                    break;
                case "End":
                    break loop;
            }
        }

    console.log(servings.length > 0 ? `Meals left: ${servings.join(', ')}` : 'The food is gone');
    console.log(`Meals eaten: ${mealsEatenCount}`);
}

// function tests
theHungryProgrammer(['chicken', 'steak', 'eggs'],
    ['Serve', 'Eat', 'End', 'Consume 0 1']);
console.log();
theHungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']);
console.log();
theHungryProgrammer(['carrots', 'apple', 'beet'],
    ['Consume 0 2', 'End',]);
console.log();
theHungryProgrammer(['soup', 'spaghetti', 'eggs'],
    ['Consume 0 2', 'Eat', 'Eat', 'Shift 0 1', 'End', 'Eat)']);
console.log();
theHungryProgrammer([],
    ['Serve', 'Eat', 'Consume 0 0', 'Add chicken', 'Add rice', 'Eat', 'End']);