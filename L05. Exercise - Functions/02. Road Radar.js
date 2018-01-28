function roadRadar(inputData) {

    let speed = inputData[0];
    let area = inputData[1];

    let speedDiff = speed - getSpeedLimits(area);

    printSpeedingResult(speedDiff);

    function printSpeedingResult(speedDiff) {
        let result;
        if (speedDiff <= 0){
            return;
        } else if (speedDiff <= 20){
            result = 'speeding';
        } else if (speedDiff <= 40){
            result = 'excessive speeding';
        } else {
            result = 'reckless driving';
        }
        console.log(result);
    }

    function getSpeedLimits(area) {
        let speedLimits = {
            motorway: 130,
            interstate: 90,
            city: 50,
            residential: 20
        };

        return speedLimits[area];
    }
}

// function tests
roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);