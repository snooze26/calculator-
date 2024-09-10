let a = 30;
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
    if(a == 0 || b == 0){
        alert("ERROR: Can not use 0 to divide");
    }
    return a / b; 
}

test = divide(a, b);
console.log(test);



