const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b 
}

const divide = (a, b) => {
    return a / b
}

const num1     = null;
const operator = null;
const num2     = null;

const operate = (x, o, y) => {
    o(x, y)
}

const buttons = document.querySelectorAll("#button")
const display = document.quesrySelector("#display")

buttons.addEventListener('click', (event) =>{
    const numbers = document.createElement("p")
    numbers.textContent = event.value
    display.appendChild(numbers)
})