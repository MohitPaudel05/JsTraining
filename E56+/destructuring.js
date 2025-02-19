let person  ={name : 'John', age : 30, city : 'New York',
    address:{street : '123 Main St', zip : '10001'}
};
let person2  ={name : 'Johkkkn', age : 300, city : 'New York',
    address:{street : '123 Main St', zip : '100'}
};
let {name, age, city,address:{street,zip}} = person;
let {name:nm, age:ag, city:ct,address:{street:st,zip:zp}} = person2;
console.log(name); 
console.log(nm)
console.log(zp)