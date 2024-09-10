
const screenText = document.querySelector("#screen");
const numberBtn = document.querySelectorAll("#num-btn");
const operatorBtn = document.querySelectorAll("#op-btn");
const clearBtn = document.querySelector("#clear-btn");
const equalBtn = document.querySelector("#equal-btn");

let num1 = null;
let num2 = null;
let operator = null;
let currentInput = "";


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b; 
}

function times(a, b) {
    return a * b; 
} 

function divide(a, b) {
    if(a === 0 || b === 0){
        alert("ERROR: Can not use 0 to divide");
        return "ERROR";
    }
    return a / b; 
}
//turn into case format
function operate(a, op, b) {
    num1 = a; 
    num2 = b; 
    sum = "";

    if(op === "+") {
        return add(num1, num2);
    }else if(op === "-") {
        return sub(num1, num2);
    }else if (op === "*"){
        return times(num1, num2);
    }else if (op === "/"){
        return divide(num1, num2);
    }
}

//capturing value to populate screen text
function numberClick(event){

    const number = event.target.textContent;
    currentInput += number;
    screenText.textContent = currentInput;

} 

function operatorClick(event){
    if(currentInput === "") return; 

    if(num1 === null){
        num1 = parseFloat(currentInput);
        operator = event.target.textContent;
        currentInput = "";
        screenText.textContent = operator;
    }else if(num2 === null && currentInput !== ""){
        num2 = parseFloat(currentInput);
        const result = operate(num1, operator, num2);
        screenText.textContent = result;
        num1 = result;
        num2 = null;
        operator = event.target.textContent;
        currentInput = "";

    }
}

function equalClick(){
    
}

// event listeners
for(const number of numberBtn) {
    const value = number.addEventListener("click", numberInput);
    console.log(number);
}

for(const op of operatorBtn) {
    const value = op.addEventListener("click", operatorInput);
    console.log(value);
}



//let result = operate(num1, "/", num2);
//console.log(result);
