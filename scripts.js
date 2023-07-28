const add = (a, b) =>  a + b;
  
const subtract = (a, b) => a - b;

const multiply = (a,b) => a*b;

const divide = (a,b)=>a/b;

let a="0";
let b="0";
let operator="";

function operate(a,b=0,operation=""){ // b=0 to ensure if operate is called when only a is something and operate = "" -> run a+0 
    a=Number(a); //casting
    b=Number(b);
    if(b===0 && operation==""){
        return a;
    }else if(b===0 && operation =="/"){
        return "Syntax Error";
    }else if(operation="+"){
        return add(a,b);
    }else if(operation="-"){
        return subtract(a,b);
    }else if(operation="/"){
        return divide(a,b);
    }else if(operation="x"){
        return multiply(a,b);
    }else{
        return "Error";
    }
}

// Make the calculator work
// user presses any operator -> input first number in a
// and input operator in operator
// and after "=" -> store b and do the operation 

function updateDisplay(){
    //after a number is pressed, clear is pressed, or an operator is pressed
    // update display accordingly.
    // after "=" is pressed -> remove the display, and display result of operate
}