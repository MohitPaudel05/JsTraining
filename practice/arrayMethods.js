//1. Map()
console.log("useful when  same operation is done on every element ");
let x=[1,2,4,5,6];
y=x.map(num=>num*2)
console.log(y);

//2.Filter
console.log("return a new array that satisfy the condtion");
 z= x.filter(num=>num%2===0)
 console.log(z)


 //3. sort 
 let numbers = [4, 2, 3, 1];
numbers.sort((a, b) => a - b); 
console.log(numbers);  


// 4.concat
let arr1 = [1, 2];
let arr2 = [4, 4];
let combined = arr1.concat(arr2);
console.log(combined); 