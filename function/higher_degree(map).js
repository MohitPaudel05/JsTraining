
// In JavaScript, a higher-order function is a function that either:

// Takes one or more functions as arguments, or
// Returns a function as its result.
// These functions are often used in functional programming to handle operations like mapping, filtering, or reducing collections of data. 

function greet(new_function) {
    new_function()
}
greet(showBehavior)

function showBehavior() {
    console.log("he is a boy");
}

// .............Map-function....................>
let number = [1, 2, 3, 4, 5]
let doubleNumber = number.map(multiplyByTwo)
console.log(doubleNumber)

function multiplyByTwo(number) {
    return number * 2
}




let x = [1, 2, 4]
let y = x.map(function (num) {
    return num + 1;
})
console.log("the sum after adding1 is: ", y)

// let number_sqr=[4,9,16,25,36]
// let square_root = number_sqr.map(squareRoot(number)) //calling the function
// console.log(square_root)

// function squareRoot(number){
//     return Math.sqrt(number)
// }
let number_sq = [4, 9, 16, 25, 36, 49, 81]
let square_roo = number_sq.map((num) => Math.sqrt(num)
)
console.log(square_roo)

let area = number_sq.map((num) => 3.14 * num * num)

console.log("the area of circle of",area)

let names = ['apple','banana','orange']
let upperCase= names.map((x) => x.toUpperCase())
console.log(upperCase)
