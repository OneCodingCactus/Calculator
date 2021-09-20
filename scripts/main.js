let firstNumber;
let secondNumber;

function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(num1, operator, num2){
    switch(operator){
        case "add":
            return add(num1,num2);

        case "subtract":
            return subtract(num1,num2);

        case "multiply":
            return multiply(num1,num2);

        case "divide":
            return divide(num1,num2);
    }
}

const numberButtons=document.querySelectorAll(".number");
numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=> {
        console.log("hello");
    });
});