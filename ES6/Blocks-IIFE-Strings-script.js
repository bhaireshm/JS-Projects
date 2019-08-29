


{
    let a = 3;
    const b = 4;
}
//console.log(a , b); // cannot acces outside the block



let fname = "John";
let lname = "Smith";
const YOB = 1990;

const calcAge = function (year) {
    return 2019 - year;
};

var str = (`My name is ${fname} ${lname} and am ${calcAge(YOB)} years old.`);

console.log(str.startsWith('m')); // false : beause capitalisation
console.log(str.endsWith('.')); // true 
console.log(str.includes('fname')); // false : cannot read the variables

console.log(((str.substr(3,12) + ", ").repeat(5))); // output got as expected









