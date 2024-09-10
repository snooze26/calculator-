let num1 = 15;
let num2 = 0;
let operator = "+";


let a = 0;
let b = 0; 

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
    }
    return a / b; 
}

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


//let result = operate(num1, "/", num2);
//console.log(result);
