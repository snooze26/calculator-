//variables
const screenText = document.querySelector("#screen-txt");
const numberBtn = document.querySelectorAll("#num-btn");
const operatorBtn = document.querySelectorAll("#op-btn");
const clearBtn = document.querySelector("#clear-btn");
const equalBtn = document.querySelector("#equal-btn");

let num1 = null;
let num2 = null;
let operator = null;
let currentInput = "";

//functions 
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
    if(a === 0){
        alert("ERROR: Can not use 0 to divide");
        return "ERROR";
    }
    return a / b; 
}
//turn into case format
function operate(a, op, b) {
    num1 = a; 
    num2 = b; 

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

function numberClick(event) {

    const number = event.target.textContent;
    currentInput += number;
    screenText.textContent = currentInput;

} 

function operatorClick(event) {
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

function equalClick(event) {
    if(num1 !== null && operator !== null && currentInput !== ""){
        num2 = parseFloat(currentInput);
        const result = operate(num1, operator, num2);
        screenText.textContent = result;
        num1 = null;
        num2 = null;
        operator = null;
        currentInput = result;

    }
}

function clearClick(event) {
    
    if(num1 !== null || operator !== null || currentInput !== ""){
        num1 = null;
        num2 = null;
        operator = null;
        currentInput = ""; 
        screenText.textContent = 0;

    }
}

console.log("Here is num1 out method ", num1);
console.log("num 2 ", num2);
console.log("Here is input out method ", currentInput);
console.log("Here is num1 out method ", operator);
// event listeners
for(const number of numberBtn) {
    number.addEventListener("click", numberClick);
}

for(const op of operatorBtn) {
    op.addEventListener("click", operatorClick);
}

equalBtn.addEventListener("click", equalClick);
clearBtn.addEventListener("click", clearClick);


//Styling
