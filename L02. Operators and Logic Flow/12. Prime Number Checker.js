function isPrime(number) {
    if (number < 2){
        return false;
    }

    let prime = true;

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0){
            prime = false;
            break;
        }
    }

    return prime;
}

// function tests
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(81));