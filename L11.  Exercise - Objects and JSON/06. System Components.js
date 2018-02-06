function systemComponents(inputData) {
    let systems = new Map();
    // input
    for (let line of inputData) {
        let [systemName, componentName, subComponentName] = line.split(' | ')
            .filter(s => s !== '');
        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        let currentSystem = systems.get(systemName);
        if (!currentSystem.has(componentName)) {
            currentSystem.set(componentName, []);
        }
        currentSystem.get(componentName).push(subComponentName);
    }
    // sorting
    systems = new Map(
        [...systems.entries()].sort(caseInsensitiveKeySort)
            .sort(sortBySizeDescending)
    );
    for (let [systemName, currentSystem] of systems) {
        let sortedSystem = new Map([...currentSystem.entries()].sort(sortByArraySizeDescending));
        systems.set(systemName, sortedSystem);
    }

    // output
    for (let [systemName, currentSystem] of systems) {
        console.log(systemName);
        for (let [componentName, subComponents] of currentSystem) {
            console.log(`|||${componentName}`);
            subComponents.forEach(e => console.log(`||||||${e}`));
        }
    }

    // sorting functions
    function sortBySizeDescending(s1, s2) {
        return s2[1].size - s1[1].size;
    }

    function sortByArraySizeDescending(s1, s2) {
        return s2[1].length - s1[1].length;
    }

    function caseInsensitiveKeySort(e1, e2) {
        return e1[0].toLowerCase().localeCompare(e2[0].toLowerCase());
    }
}

// function tests
//noinspection SpellCheckingInspection
systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);