let x = parseInt(prompt('plz enter the first number'));
let y = parseInt(prompt('plz enter the second number'));


if (x > y) {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Hello World';
    document.body.appendChild(newDiv);
} else {
    alert(`Goodbye`)
}