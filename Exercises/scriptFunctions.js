function calculateYear(birthYear){
    return 2019 - birthYear;
}

var ageJohn = calculateYear(1997);
var ageMike = calculateYear(1948);
var ageJake = calculateYear(1969);
console.log(ageJohn, ageJake, ageMike);

function yearUntilRetirement(birthYear, fName){
    var age = calculateYear(birthYear);
    var retire = 65 - age;
    if(retire > 0 ){
        console.log(fName+" retires in "+ retire +" years");
    } else{
        console.log(fName + " is already retired.");
    }
    
}

yearUntilRetirement(1997, "John");
yearUntilRetirement(1948, "Mike");
yearUntilRetirement(1969, "Jake");

console.log("--------------------------------------------------------------");
//Function stmts and exprs

var whatDoYouDO = function(job, fName){
    switch(job){
        case "Teacher" :
            return fName + " teaches very good";
        case "Driver" :
            return fName + " drives cab in lisbon";
        case "Developer" :
            return fName + " designs beatiful/creates apps";
        default : 
          return fName + " does something";
    }
}

console.log(whatDoYouDO("Developer", "john"));
console.log(whatDoYouDO("Teacher", "jake"));
console.log(whatDoYouDO("Driver", "mike"));