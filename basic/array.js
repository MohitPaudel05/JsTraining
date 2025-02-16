const array_name = []
array_name[0]=21;
array_name[1]="abc";
array_name[2]=true;
console.log(array_name);

// arrya_methods
// pop ,concat, push , slice splce shift unshift 
// pop remove from last/ 
// concat add two array
// push adding new element in array


// 1. pop()
// Removes the last element of an array and returns it.
// Modifies the original array.

 // last = 3

length = array_name.length;
console.log("the length of the array is: ",length);
let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3); // Index 1 to 3 (3 not included)
console.log("slicing the array we get",sliced); // [2, 3]

let arr1=['abc', 2,5]
combine =arr.concat(arr1);
console.log("concating two array we get",combine);
poping = arr.pop()
console.log("poping out the array",poping)
console.log("the new array after poping out :",arr)

// join method
let result= arr1.join("  ")
console.log("after using join", result)

let name1=['ram']
let name2=['sita']
result2= name1.concat(name2).join(" and ")
console.log("concate and join",result2)

