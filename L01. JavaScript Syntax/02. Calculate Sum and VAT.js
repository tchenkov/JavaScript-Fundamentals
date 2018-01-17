function vat(inputArr) {
    let sum = 0;
    for (let value of inputArr) {
        sum += value;
    }

    console.log(`sum = ${sum}`);
    let vat = sum * 0.2;
    console.log(`VAT = ${vat}`);
    let total = sum + vat;
    console.log(`total = ${total}`);
}

vat([1.20, 2.60, 3.50]);
vat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);