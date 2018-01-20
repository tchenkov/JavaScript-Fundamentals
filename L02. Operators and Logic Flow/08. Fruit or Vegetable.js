function fruitOrVegetable(item) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];
    let result = "unknown";

    if (fruits.includes(item)){
        result = "fruit";
    } else if (vegetables.includes(item)){
        result = "vegetable"
    }

    console.log(result);
}

// function tests
fruitOrVegetable("banana");
fruitOrVegetable("cucumber");
fruitOrVegetable("pizza");