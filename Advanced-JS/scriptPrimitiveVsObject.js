
var a = 23;
var b = a;

a = 30;

console.log(a);
console.log(b);


// Objects

var obj1 = {
    age : 20
};

var obj2 = obj1;

obj1.age = 40;

console.log(obj1.age);
console.log(obj2.age);

// Function 

var age = 56;
var obj3 = 
{
    name: "John",
    city: "Rio"
};

function change(a, b){
    a = 30;  // will not change
    b.city = 'Canada'; // will change its value
}

change(age, obj3);

console.log(age);
console.log(obj3.city);




























