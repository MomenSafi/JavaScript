let operation = prompt('plz enter the operation mode');
let num1 = parseFloat(prompt('plz enter the first number'));
let num2 = parseFloat(prompt('plz enter the second number'));

if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid input. Please enter valid numbers.');
} else {
    if (operation == '+') {
        console.log(num1 + num2);
    } else if (operation == '-') {
        console.log(num1 - num2);
    } else if (operation == '*') {
        console.log(num1 * num2);
    } else if (operation == '/') {
        console.log(num1 / num2);
    }
}