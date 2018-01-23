function distanceOverTime(inputData) {
    function traveledDistanceInMeters(velocityKPH, travelTimeInHours) {
        return velocityKPH * travelTimeInHours * 1000;
    }

    let velocity1 = inputData[0];
    let velocity2 = inputData[1];
    let time = inputData[2] / 3600;

    let distance1 = traveledDistanceInMeters(velocity1, time);
    let distance2 = traveledDistanceInMeters(velocity2, time);
    let diff = Math.abs(distance1 - distance2);

    console.log(diff);
}

// function tests
distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);