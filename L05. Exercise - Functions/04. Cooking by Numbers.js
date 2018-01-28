function cookingByNumbers(inputData = []) {
    function doOperation(initialState, operation) {
        switch (operation) {
            case 'chop':
                return initialState / 2;
            case 'dice':
                return Math.sqrt(initialState);
            case 'spice':
                return ++initialState;
            case 'bake':
                return initialState * 3;
            case 'fillet':
                return initialState * 80 / 100;
        }
    }

    let initialState = inputData.shift();

    for (let operation of inputData) {
        initialState = doOperation(initialState, operation);
        console.log(initialState);
    }
}

// function tests
cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);