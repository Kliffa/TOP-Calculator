const add = (a, b) =>  a + b;
  
const subtract = (a, b) => a - b;

const multiply = (a,b) => a*b;

const divide = (a,b)=>a/b;

let a="";
let b="";
let operator="";
let result = 0;

function operate(a,b,operation){ // b=0 to ensure if operate is called when only a is something and operate = "" -> run a+0 
    a=Number(a);
    b=Number(b);
    if(b===0 && operation==""){
        return a;
    }else if(b===0 && operation =="/"){
        return "Syntax Error";
    }else if(operation=="+"){
        return add(a,b);
    }else if(operation=="-"){
        return subtract(a,b);
    }else if(operation=="/"){
        return divide(a,b);
    }else if(operation=="x"){
        return multiply(a,b);
    }else{
        return "Error";
    }
}

// Make the calculator work
// user presses any operator -> input first number in a
// and input operator in operator
// and after "=" -> store b and do the operation 


function updateDisplay(displayResult=false){ 
    const display=document.querySelector('.display');
    //after a number is pressed, clear is pressed, or an operator is pressed
    // update display accordingly.
    // after "=" is pressed -> remove the display, and display result of operate
    if(operator==""){
        display.textContent=a;
    }else if(displayResult){
        display.textContent=result;
    }else{
        display.textContent=a + operator + b;
    }
    //currently, it is impossible to add multiple operations simultaneously. this works a bit odd if you try it. 
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click',()=>{
    a="0";
    b="";
    operator ="";
    updateDisplay();
})
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click',()=>{
    result=operate(a,b,operator);
    updateDisplay(true);
        //in order to be able to continue -> make last result 0 and reset other variables.
    a=result;
    result=0;
    b="";
    operator="";
})

const numberButtons =document.querySelectorAll(".num");
numberButtons.forEach((numberButton)=>{
    numberButton.addEventListener('click',()=>{
        (operator=="")? a+=numberButton.textContent : b+= numberButton.textContent;
        updateDisplay();
    })
})
const operatorButtons =document.querySelectorAll(".operation");
operatorButtons.forEach((operatorButton)=>{
    operatorButton.addEventListener('click',()=>{
        operator = operatorButton.textContent;
        //Right now, I can't add multiple operations e.g. 5+5+5, it would become 5+55. simiarly, 5+5-5 would become 5-55
    })
})