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
            display.textContent = '';
            resetAll();
    }   
}

let numberInput = [];
let numberInput2 = [];
let num1        = null;
let operator    = '';
let num2        = null;
let isSecondNumber = false
let firstResult = false
let result = null;

const reset = ()=>{
    numberInput = [];
    numberInput2 = [];
}


const resetAll = ()=>{
    numberInput = [];
    numberInput2 = [];
    num1        = null;
    operator    = '';
    num2        = null;
    result = null;
    isSecondNumber = false
    firstResult = false
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
            console.log("result:",num1, operator, num2)
            display.textContent = result = operate(num1, operator, num2)
            let extra = document.createElement("p")
            extra.textContent = e.target.value
            display.appendChild(extra)
            reset()
            num1 = result
            operator = e.target.value
            isSecondNumber = false
            num2 = null
            operator = null
            console.log("Now num1: ", num1, "operator: ", operator, "num2: ",num2)
        }else{
            operator = numberInput.at(-1)
            num1 = Number(numberInput.slice(0, -1).join(''))
            isSecondNumber = true
            console.log("Now num1: ", num1, "operator: ", operator, "num2: ",num2)
        }
    })
})

equal.addEventListener('click', e =>{
    num2 = Number(numberInput2.slice(0, -1).join(''))
    console.log("result:",num1, operator, num2, "=", result)
    display.textContent = result = operate(num1, operator, num2)
    reset()
    num1 = result
    isSecondNumber = false
    num2 = null
    operator = null
    console.log("Now num1: ", num1, "operator: ", operator, "num2: ",num2)

})

clear.addEventListener('click', e =>{
    display.textContent = '';
    resetAll();
})