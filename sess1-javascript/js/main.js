// parseInt(value  radix)

function add(number1 , number2) {
    return number1 + number2;
}

function sub(number1 , number2) {
    return number1 - number2;
}

function calc(number1 , number2 , fn) {
    return fn(number1, number2);
}

alert(calc(5, 5 , add));






