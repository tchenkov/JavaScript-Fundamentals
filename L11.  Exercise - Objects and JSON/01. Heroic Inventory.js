function heroicInventory(inputData) {
    let heroesArray = [];
    for (let line of inputData) {
        let [name, level, items] = line.split(' / ').filter(s => s !== '');
        let hero = {};
        hero['name'] = name;
        hero['level'] = Number(level);
        hero['items'] = items !== undefined ? items.split(', ')
            .filter(s => s !== '') : [];
        heroesArray.push(hero);
    }

    console.log(JSON.stringify(heroesArray));
}

// function tests
//noinspection SpellCheckingInspection
heroicInventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log();
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);