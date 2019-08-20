// Objects and properties

var john = {
    fName: "John",
    lName: "Smith",
    dob: 1997,
    family : ['Jane',"Mark","Bob", "Emily"],
    job : 'teacher',
    isMarried : false,
    calcAge: function(){
        this.age = 2019 - this.dob;
    }
};

console.log(john.fName);
console.log(john['lName']);

var yr = "dob";
console.log(john[yr]);

// console.log(john.calcAge(1947));

john.job = 'developer';
john['isMarried'] = true;

console.log(john);

var jane = new Object();
jane.fName = "Jane";
jane.lName = 'Smith';
jane.dob = 1997;
jane['job'] = "painter";

console.log(jane);