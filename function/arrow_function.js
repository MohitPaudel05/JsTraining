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