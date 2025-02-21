//1. Basic Array
const name =['Ram','Shyam','Hari'];
console.log(name);
const name2 =['sita','gita']

// merging array using spread operator(...)
mergeArray = [...name2,...name]
console.log(mergeArray)

//merging array using concat() method
concatMerge= name.concat(name2);
console.log(concatMerge)


// 2. Array with Mixed Data Type
let mixedArray =[1,2,3,"ram","shyam",true,false,null,{name:'mohit'},[9,11]];
console.log(mixedArray)

// 3. Multidimensional Array
MultiArray =[[1,3,5],[2,4,8],[2,3,5]];
console.log(MultiArray);

//merging multidimensional array
x=[...MultiArray];
console.log(x)