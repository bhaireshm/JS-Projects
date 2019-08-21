var john = {
    name: "John",
    YOB: 1990,
    calcAge: function(){
        console.log(this); // this displays the current object's details i.e., john object.
        console.log(2019 - this.YOB);
    
        function innnerFunc(){
            console.log(this);
        };
    }
}

console.log(john.calcAge());

var mike = {
    name:'Mike',
    YOB:1949
}

mike.calcAge = john.calcAge;
console.log(mike.calcAge());

