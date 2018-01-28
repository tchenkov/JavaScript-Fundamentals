function radioCrystals(inputData) {
    let cut = x => x/4;
    let lap = x => x * 0.8;
    let grind = x => x - 20;
    let etch = x => x - 2;
    let xRay = x => ++x;
    let transportAndWash = x => Math.floor(x);

    let targetThickness = inputData.shift();

    function addOperation(operations, operationType) {
        if (operations[operationType] === undefined){
            operations[operationType] = 0;
        }
        operations[operationType]++;
    }

    function refineCrystal(crystal, target) {
        let operations = [];
        let lastOperation;
        while (crystal >= target - 1){
            if (cut(crystal) > target - 1){
                if (lastOperation === undefined){
                    lastOperation = 'cut';
                }
                crystal = cut(crystal);
                addOperation(operations, 'Cut');
            } else if (lap(crystal) > target - 1){
                if (lastOperation === undefined){
                    lastOperation = 'lap';
                }

                if (lastOperation !== 'lap'){
                    lastOperation = 'lap';
                    crystal = transportAndWash(crystal);
                }

                crystal = lap(crystal);
                addOperation(operations, 'Lap');
            } else if (grind(crystal) > target - 1){
                if (lastOperation === undefined){
                    lastOperation = 'grind';
                }

                if (lastOperation !== 'grind'){
                    lastOperation = 'grind';
                    crystal = transportAndWash(crystal);
                }

                crystal = grind(crystal);
                addOperation(operations, 'Grind');
            } else if (etch(crystal) >= target - 1){
                if (lastOperation === undefined){
                    lastOperation = 'etch';
                }

                if (lastOperation !== 'etch'){
                    lastOperation = 'etch';
                    crystal = transportAndWash(crystal);
                }

                crystal = etch(crystal);
                addOperation(operations, 'Etch');
            } else if (crystal === target - 1){
                if (lastOperation === undefined){
                    lastOperation = 'xRay';
                }

                if (lastOperation !== 'xRay'){
                    lastOperation = 'xRay';
                    crystal = transportAndWash(crystal);
                }

                crystal = xRay(crystal);
                addOperation(operations, 'X-ray');
                return operations;
            } else {
                return operations;
            }
        }
    }

    function printProcess(operations, crystal, target) {
        let output = `Processing chunk ${crystal} microns\n`;

        for (let operation in operations) {

            //noinspection JSUnfilteredForInLoop
            output += `${operation} x${operations[operation]}\n`;
            output += operation === 'X-ray' ? '' : 'Transporting and washing\n';
        }

        output += `Finished crystal ${target} microns`;
        console.log(output);
    }

    for (let crystal of inputData) {
        let operations = refineCrystal(crystal, targetThickness);
        printProcess(operations, crystal, targetThickness);
    }
}

// function tests
radioCrystals([1375, 50000]);
console.log();
radioCrystals([1000, 4000, 8100]);