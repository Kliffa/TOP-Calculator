const add = (a, b) =>  a + b;
  
const subtract = (a, b) => a - b;

const multiply = (a,b) => a*b;

const divide = (a,b)=>a/b;

let a=0;
let b=0;
let operator="";

function operate(a,b=0,operation=""){ // b=0 to ensure if operate is called when only a is something and operate = "" -> run a+0 
    if(b===0 && operation==""){
        return a;
    }else if(b===0 && operation =="/"){
        return "Syntax Error";
    } 
    
}