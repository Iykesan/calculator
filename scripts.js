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

let numberInput = [];
let numberInput2 = [];
let num1        = null;
let operator    = '';
let num2        = null;
let isSecondNumber = false
let result = null;

const operate = (x, o, y) => {
   switch(o){
    case "+":
        return add(x, y)
        break;

    case "-":
        return subtract(x, y)
        break;
    
    case "*":
        return multiply(x, y)
        break;
    
    case "/":
        return divide(x, y)
        break;
    default:
        return "try again..."
    }   
}
const buttons       = document.querySelectorAll("#button")
const display       = document.querySelector("#display");
const allButton     = document.querySelectorAll("button");
const clear         = document.querySelector("#clear")
const allOperators  = document.querySelectorAll(".operator")
const allNumbers    = document.querySelectorAll(".numbers")
const equal         = document.querySelector("#equal")

allButton.forEach(button =>{
    button.addEventListener('click', e =>{
        const number = document.createElement("p")
        number.textContent = e.target.value
        display.appendChild(number)
        if(isSecondNumber){
            numberInput2.push(e.target.value)
        }else{
            numberInput.push(e.target.value)
        }
    })
})

allOperators.forEach(button =>{
    button.addEventListener('click', e =>{  
        if(isSecondNumber){
            num2 = Number(numberInput2.slice(0, -1).join(''))
            display.textContent = result = operate(num1, operator, num2)
        }
        operator = numberInput.at(-1)
        num1 = Number(numberInput.slice(0, -1).join(''))
        isSecondNumber = true
    })
})

equal.addEventListener('click', e =>{
    num2 = Number(numberInput2.slice(0, -1).join(''))
    display.textContent = result = operate(num1, operator, num2)
})

clear.addEventListener('click', e =>
    window.location.reload() 
)