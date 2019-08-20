// Initialising new array

var names = ["John", "Mark", "Jake"];
var years = new Array(1997, 1969, 1948);

console.log(names[2]);
console.log (names.length);

// Mutate array or modifying

names[1] = "Bob";
names[names.length] = "Joyce";

console.log(names);

// diffrent data type

var john = ["John", 'Smith', 1997, 'teacher', false];

john.push('blue'); // adds ele @ end
john.unshift('Mr.'); //adds ele @ begining
console.log(john);

john.pop(); // removes an ele @ end
john.pop();
john.shift(); // removes an ele @ begining
console.log(john);

console.log(john.indexOf(23));

// ternary operator
var isDesigner = john.indexOf("teacher") === -1 ? "JOhn is NOT designer" : "John is designer";
console.log(isDesigner);