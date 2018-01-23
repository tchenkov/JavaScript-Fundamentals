function moviePrices(inputData) {
    let movie = inputData[0].toLowerCase();
    let dayOfTheWeek = inputData[1].toLowerCase();

    let output = "error";

    if (movie === "the godfather") {
        switch (dayOfTheWeek) {
            case "monday":
                output = 12;
                break;
            case "tuesday":
                output = 10;
                break;
            case "wednesday":
            case "friday":
                output = 15;
                break;
            case "thursday":
                output = (12.50).toFixed(2);
                break;
            case "saturday":
                output = 25;
                break;
            case "sunday":
                output = 30;
                break;
        }
    } else if (movie === "schindler's list"){
        switch (dayOfTheWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                output = (8.50).toFixed(2);
                break;
            case "saturday":
            case "sunday":
                output = 15;
                break;
        }
    } else if (movie === "casablanca"){
        switch (dayOfTheWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                output = 8;
                break;
            case "saturday":
            case "sunday":
                output = 10;
                break;
        }
    } else if (movie === "the wizard of oz"){
        switch (dayOfTheWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                output = 10;
                break;
            case "saturday":
            case "sunday":
                output = 15;
                break;
        }
    }

    console.log(output);
}

// function tests
moviePrices(["The Godfather", "Friday"]);
moviePrices(["casablanca", "sunday"]);
moviePrices(["Schindler's LIST", "monday"]);
//noinspection SpellCheckingInspection
moviePrices(["SoftUni", "Nineday"]);