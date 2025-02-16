
let person = {
    name: "john",
    age: 30,
    isStudent: true,
    greet: function () {
        console.log("hello");
    }
    ,
    greet1: function () {
        return "hello";
    }
}

console.log(person.greet1());

let car = {
    brand: "bmw",
    model: "4090",
    yourCar: function () {
        return `your car is ${this.brand} ${this.model}`
    }
}
car.brand = 'toyota'
car.model = '111'
console.log(car.yourCar())
console.log(car)


let student ={
    name : 'ram',
    faculty: "IT",
    marks: {
        math: 9,
        science: 10,
        english: 11,
    }
}
console.log("the marks in english of "+student.name ,student.marks.english)



const bus={
    brand: "nwe",
    model: "1010",
    year: "2020",

}
console.log(bus.brand);
bus.model = 'sidd'
console.log(bus.model);
bus.color='red'
console.log(bus.color);
console.log(bus);
delete bus.year;
console.log(bus);

// Destructing Object
const{ brand, model,year}=car
console.log(brand)
    

