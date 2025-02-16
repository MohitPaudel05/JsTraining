function add(a,b){
    console.log(a+b);

}
function multiply(a,b){
    return a*b;

}
function subtraction(a,b){
    return a-b;

}
function division(a,b){
    return a/b;
}
var userInput = prompt("Please the following operand +,-,*,/:");
let a = parseInt(prompt("Please enter the first number"));
let b = parseInt(prompt("Please enter the second number"));
switch(userInput){
    case '+':
        add(a,b);
        break;
    case '-':
        subtraction(a,b);
        break;
    case '*':
        multiply(a,b);
        break;
    case '/':
        division(a,b);
        break;
    default:
        console.log("invaild choice")
    


        
}
