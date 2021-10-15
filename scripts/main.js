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
            operateOutput=trimSolution(operateOutput);
            return operateOutput;

        case "-":
            operateOutput=subtract(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            operateOutput=trimSolution(operateOutput);
            return operateOutput;

        case "*":
            operateOutput=multiply(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            operateOutput=trimSolution(operateOutput);
            return operateOutput;

        case "/":
            operateOutput=divide(num1,num2);
            operateOutput= +operateOutput.toFixed(8);
            operateOutput=trimSolution(operateOutput);
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
            if(firstNumber==""){
                firstNumber="0";
            }
            secondNumber=displayValue;
            if(secondNumber==""){
                secondNumber=0;
            }
            if(secondNumber==="0" && operator=="/") {
                solveDivisionByZero();
            }else{
                firstNumber=parseFloat(firstNumber);
                secondNumber=parseFloat(secondNumber);
                displayValue=operate(firstNumber, operator, secondNumber);
                display.textContent=displayValue;
                firstNumber=displayValue;
                solutionDisplayed=true;
            }

        }else{
            firstNumber=displayValue;

        }
        operator=button.textContent;
        displayValue="";
    });
});

const solution=document.querySelector(".solution");
solution.addEventListener("click",()=>{
    secondNumber=displayValue;

    if(operator=="" || secondNumber==""){

    }
    else if(secondNumber==="0" && operator=="/") {
        solveDivisionByZero();
    }
    else{
        if(firstNumber==""){
            firstNumber="0";
        }
        firstNumber=parseFloat(firstNumber);
        secondNumber=parseFloat(secondNumber);
        displayValue=operate(firstNumber, operator, secondNumber);
        displayValue=trimSolution(displayValue);
        if(displayValue.length>9){
            displayValue="";
            display.textContent="Overflow";
        }else{
            display.textContent=displayValue;
        }
        solutionDisplayed=true;
        operatorCount=0;
        operator="";
    }
});

const clearButton=document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    clearAll();
});

const deleteButton=document.querySelector(".deleteButton");
deleteButton.addEventListener("click",()=>{
    if(solutionDisplayed===true){
        clearAll()
    }else{
        displayValue=displayValue.toString();
        displayValue=displayValue.slice(0, displayValue.length-1);
        display.textContent=displayValue;
    }
});

const decimalPoint=document.querySelector("#decimalPoint");
decimalPoint.addEventListener("click",()=>{
    let id="decimalPoint";
    displayValue=displayValue.toString();
    if(displayValue.includes(".")==false){
        if(solutionDisplayed==true){
            solutionDisplayed=false;
            firstNumber=displayValue;
            operator="";
        }
        if(displayValue==""){
            displayValue=0;
        }
        addCharacter(id);
    }
});

const plusMinus=document.querySelector("#plusMinus");
plusMinus.addEventListener("click",()=>{
    displayValue=displayValue.toString();
    if(displayValue.includes("-")==true){
        displayValue=displayValue.slice(1);
    }else{
        displayValue="-"+displayValue;
    }
    display.textContent=displayValue;
});

function addCharacter(id){
    if(displayValue.length<9){
        let numberValue=document.getElementById(id).textContent;
        displayValue+=numberValue;
        display.textContent=displayValue;
    }
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

function clearAll(){
    firstNumber="";
    secondNumber="";
    operator="";
    solutionDisplayed=false;
    operatorCount=0;
    displayValue="";
    display.textContent=displayValue;
}

function trimSolution(myNumber){
    myNumber=myNumber.toString();
    if(myNumber.length>9){
        while(myNumber.includes(".")==true && myNumber.length>9){
            myNumber=myNumber.slice(0,-1);
        }
    }
    return myNumber;
}