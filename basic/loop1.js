function add_sum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;

    }
    return sum;
}

console.log(`the sum of the first 10 natural number= ${add_sum()}`);
function get_fact(){
    let product=1;
    for (let i = 1;i<=10;i++){
        product*=i;
    }
    return product;
}
console.log("the product is: "+get_fact());