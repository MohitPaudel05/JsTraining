const greet =()=>{
    console.log("welcome to the arrow function practice");
}
greet();
//with multiple parameter
const sum =(a,b)=>{
    return a+b;
}
console.log("the sum is :",sum(2,3));

// with single parameter
const square =(num)=>{
    return num*num;

}
let num=4;
console.log(`the square  of ${num} is :`, square(num));
//areaOfCircle
const areaOfCircle = radius=>{
    console.log("the area of circle is ",3.14*radius*radius,"sqr meter");
}
areaOfCircle(7)


//even or odd
const evenOdd = (num)=>{
    if(num %2 ===0){
        console.log(`the given number '${num}' is even`);
    }
    else{
        console.log(`the given number '${num}' is odd`);
    }
}
evenOdd(5);
evenOdd(6);

