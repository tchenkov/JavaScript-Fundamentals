function restaurantBill(inputData) {
    let goods = [];
    let check = 0;
    inputData.forEach((e, i) => i % 2 === 0 ? goods.push(e) : check += Number(e));

    console.log(`You purchased ${goods.join(', ')} for a total sum of ${check}`);
}

// function tests
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
console.log();
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);