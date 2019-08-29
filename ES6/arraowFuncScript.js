
let years = ['2010', '1998', '1990', '1985', '1950'];


let ages = years.map(ele => 2019 - ele);
console.log(ages);


ages = years.map((ele, index) => `Index : ${index + 1}, YOB is : ${ele}`);
console.log(ages);


ages = years.map((ele, index) => {
    return `Index : ${index + 1}, YOB is : ${ele}, age is : ${2019 - ele}.`
});
console.log(ages);


var arr2 = arr => {
    return arr + 2;
};
console.log(arr2(3));









