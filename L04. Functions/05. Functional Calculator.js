function functionalCalculator(num1, num2, operator) {
    function add(a, b) {
        return a + b;
    }

    let subtract = (a, b) => a - b;

    let multiply = function (a, b) {
        return a * b;
    };

    function div(a, b) {
        return a / b;
    }

    let calc = function (a, b, op) {
        return op(a, b);
    };

    let result;
    switch (operator) {
        case '+':
            result = calc(num1, num2, add);
            break;
        case '-':
            result = calc(num1, num2, subtract);
            break;
        case '*':
            result = calc(num1, num2, multiply);
            break;
        case '/':
            result = calc(num1, num2, div);
    }

    console.log(result);
}

// function tests
functionalCalculator(15, 5, '+');
functionalCalculator(15, 5, '-');
functionalCalculator(15, 5, '*');
functionalCalculator(15, 5, '/');