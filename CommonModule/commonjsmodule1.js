

const sum =(a,b) =>{
    return a+b;
};
const mul =(a,b) =>{
    return a*b;
}
const div =(a,b) =>{
    return a/b;
}
const result =sum(1,2);
console.log(result);
console.log(mul(1,2));





module.exports={ //exporting modules 
    sum,
    mul,
    div,

};