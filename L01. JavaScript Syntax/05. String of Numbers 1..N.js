function stringOfNumbers(endNum) {
    let result = "";
    endNum = Number(endNum);
    for (let i = 1; i <= endNum; i++) {
        result += i;
    }

    return result;
}

console.log(stringOfNumbers("11"));