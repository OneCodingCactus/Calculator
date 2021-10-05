let firstNumber="";
let secondNumber="";
let operator="";
let solutionDisplayed=false;
let operatorCount=0;


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
        case "+":
            return add(num1,num2);

        case "-":
            return subtract(num1,num2);

        case "*":
            return multiply(num1,num2);

        case "/":
            return divide(num1,num2);
    }
}

const display=document.querySelector("#display");
const numberButtons=document.querySelectorAll(".number");

const IDs=["zero","one","two","three","four","five",
"six","seven","eight","nine"];

let displayValue="";

for(let i=0;i<10;i++){
    let id=IDs[i];
    document.getElementById(id).addEventListener("click", ()=> {
        if(solutionDisplayed==true){
            firstNumber="";
            secondNumber="";
            operator="";
            solutionDisplayed=false;
            displayValue="";
        }
        let numberValue=document.getElementById(id).textContent;
        displayValue+=numberValue;
        display.textContent=displayValue;
    });
}

const operators=document.querySelectorAll(".operator");
operators.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(solutionDisplayed==true){
            solutionDisplayed=false;
        }

        operatorCount++;

        operator=button.textContent;
        firstNumber=displayValue;
        displayValue="";
    })
})

const solution=document.querySelector(".solution");
solution.addEventListener("click",()=>{
    secondNumber=displayValue;
    firstNumber=parseInt(firstNumber);
    secondNumber=parseInt(secondNumber);
    displayValue=operate(firstNumber, operator, secondNumber);
    display.textContent=displayValue;
    solutionDisplayed=true;
    operatorCount=0;
})