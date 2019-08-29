// let obj ={
//     fname:'a',
//     ag:50
// }

// let {fname, age} = obj;

// console.log(fname); // 
// console.log(age) // age will not be printed i.e., undefinined. it differs in var name.

// let {fname:fn, age:ag} = obj;

// console.log(fn); // other name

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

let [age, retire] = calcAgeRetirement(1997);
console.log(age)

