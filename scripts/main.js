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

    let operateOutput;
    switch(operator){
        case "+":
            operateOutput=add(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            return operateOutput;

        case "-":
            operateOutput=subtract(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            return operateOutput;

        case "*":
            operateOutput=multiply(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            return operateOutput;

        case "/":
            operateOutput=divide(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            return operateOutput;
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
            if(operatorCount<2){
                firstNumber="";
                operator="";
            }
            secondNumber="";
            solutionDisplayed=false;
            displayValue="";
        }
        addCharacter(id);
    });
}

const operators=document.querySelectorAll(".operator");
operators.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(solutionDisplayed==true){
            solutionDisplayed=false;
        }

        operatorCount++;

        if(operatorCount>1){
            secondNumber=displayValue;
            if(secondNumber==="0" && operator=="/") {
                solveDivisionByZero();
            }else{
                firstNumber=parseInt(firstNumber);
                secondNumber=parseInt(secondNumber);
                displayValue=operate(firstNumber, operator, secondNumber);
                display.textContent=displayValue;
                firstNumber=displayValue;
                solutionDisplayed=true;
            }

        }else{
            firstNumber=displayValue;
            if(firstNumber==""){
                firstNumber="0";
            }
        }
        operator=button.textContent;
        displayValue="";
    })
});

const solution=document.querySelector(".solution");
solution.addEventListener("click",()=>{
    secondNumber=displayValue;

    if(operator=="" || secondNumber==""){
        console.log("bin ich etwa auch hier?");
    }
    else if(secondNumber==="0" && operator=="/") {
        solveDivisionByZero();
    }
    else{
        firstNumber=parseFloat(firstNumber);
        secondNumber=parseFloat(secondNumber);
        displayValue=operate(firstNumber, operator, secondNumber);
        display.textContent=displayValue;
        solutionDisplayed=true;
        operatorCount=0;
        console.log("Solution displayed sollte jetzt stimmen");
    }
});

const clearButton=document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    firstNumber="";
    secondNumber="";
    operator="";
    solutionDisplayed=false;
    operatorCount=0;
    displayValue="";
    display.textContent=displayValue;
});

const deleteButton=document.querySelector(".deleteButton");
deleteButton.addEventListener("click",()=>{
    displayValue=displayValue.toString();
    displayValue=displayValue.slice(0, displayValue.length-1);
    display.textContent=displayValue;
});

const decimalPoint=document.querySelector("#decimalPoint");
decimalPoint.addEventListener("click",()=>{
    let id="decimalPoint";
    displayValue=displayValue.toString();
    if(displayValue.includes(".")==false){
        console.log("hello");
        if(solutionDisplayed==true){
            console.log("what happens here?");
            solutionDisplayed=false;
            firstNumber=displayValue;
            operator="";
        }
        if(displayValue==""){
            displayValue=0;
            console.log("where am I?");
        }
        addCharacter(id);
    }
});

function addCharacter(id){
    let numberValue=document.getElementById(id).textContent;
    displayValue+=numberValue;
    display.textContent=displayValue;
}

function solveDivisionByZero(){
    displayValue="Divided by 0";
    display.textContent=displayValue;
    firstNumber="";
    secondNumber="";
    operator="";
    solutionDisplayed=false;
    operatorCount=0;
    displayValue="";
}