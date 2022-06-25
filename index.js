let num1 = +prompt('Enter first number:');
let operator = prompt('Enter the operator (type +, -, / or *):');
let num2 = +prompt ('Enter second number:');

let result;

// if (isNaN(num1) || isNaN(num2)) {
//     alert('Error! Please refresh the page and input numbers in the required boxes.');
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '/') {
    result = num1 / num2;
} else if (operator === '*') {
    result = num1 * num2;
} else {
    alert('Error! Please check the operator used.')
}

let message = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;

alert(message);