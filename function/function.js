// types of function 
// 1. normal function without parameter
//  2. arrow function
// 3. parameter function






function odd_even(num){
    if (num%2===0){
        console.log(`the ${num} is even`)
    }
    else{
        console.log(`the ${num} is odd`)
    }
}
function greet(){
    console.log("hello welcome to my world")
}

function add_num(num1,num2){
console.log("the sum of two number is : ",num1+num2)}

odd_even(5)
odd_even(6)
// console.log(greet())
greet()
add_num(2,4)
function greeting(name1,name2){
    console.log("hello, "+ name1+" " + name2 +" "+ "welcome to my arena") 
    
}
greeting("ram", "hari")

function add_two_number(num1,num2){
    return num1 + num2
}
let result = add_two_number(1,2)
console.log(result)
function multiply(result){
    return 5*result
}
let final_result = multiply(result)
console.log(final_result)

function even_odd(num){
    if(num%2===0){
        console.log(`the ${num} is even`);
    }
    else{
        console.log(`the ${num} is odd`);
    }
}
even_odd(5)
even_odd(8)

console.log("********************it is starting of the arrow function********")
// arrow_function
const ven_odd = (num) => {
    if(num%2===0){
        console.log(`the ${num} is even`);
    }
    else{
        console.log(`the ${num} is odd`);
    }
}
ven_odd(55)
ven_odd(84)
const adds = (a,b)=> a + b;
console.log("the sum is: ", adds(1,2));

const area_circle = (radius) => 3.14*radius*radius;
console.log("the area of cirlce using arrow function is :",area_circle(1))

console.log("********************it is ending of the arrow function********\n")

// higher order function in javascript

function greet_n(new_function){
    new_function()



}
greet_n(showname)

function showname(){
    console.log("hello")

}
function multiply(a,b){
    return a*b
}
console.log(multiply(2,5))

function area_of_circle(radius){
    console.log("the area of circle is: ",  3.14*radius*radius)
}

area_of_circle(1)

function volume_cuboid(l,b,h){
    result = l*b*h;
    console.log("the volume of cuboid is: ",result)
}
volume_cuboid(1,2,3)

function volume_of_cuboid(length,breadth,height){
    console.log("hello world")
    return length*breadth*height;
}
console.log("the volume is",volume_of_cuboid(1,2,1))

