function lastDayOfLastMonth(dateArr) {
    let day = dateArr[0];
    let month = dateArr[1];
    let year = dateArr[2];
    let resultDate = new Date(year, month - 1, day);
    resultDate.setDate(0);

    console.log(resultDate.getDate());
}

// function tests
lastDayOfLastMonth([17, 3, 2002]);
lastDayOfLastMonth([13, 12, 2004]);