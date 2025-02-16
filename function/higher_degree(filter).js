// The filter() method in JavaScript is used to create a new array that contains all elements of an existing array that pass a specific test (provided by a callback function). It does not modify the original array.

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

let number_sq = [4, 9, 16, 25, 36, 49, 81]
let even_number = number_sq.filter((num) => num%2===0
)
// let even_number = number_sq.map((num) => num%2===0
// )
console.log(even_number)