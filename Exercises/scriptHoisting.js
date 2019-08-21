// function declaration

console.log("Accessing function before declaration: "+calcAge(1980));

function calcAge(year){
    return (2019 - year);
}

console.log("Accessing function After declaration: "+calcAge(1997));

// expression declaration

// error occurs here
/*----------------console.log("Accessing function expression before declaration: "+retire(1990));--------------------*/

var retire = function (year){
    return (65 - (2019 - year));
}

console.log("Accessing function expression After declaration: "+retire(1980));

var age = calcAge(1948);

console.log(age);

function foo (){
    var age = calcAge(1956);
    console.log(age);
}

foo();

































