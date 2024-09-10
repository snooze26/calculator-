
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
function popScreen(event){

    const number = event.target.textContent;
    currentInput += number;
    screenText.textContent = currentInput;

} 
for(const number of numberBtn) {
    const value = number.addEventListener("click", popScreen);
    console.log(number);
}



//let result = operate(num1, "/", num2);
//console.log(result);
