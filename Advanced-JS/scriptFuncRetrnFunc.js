
// Function returning functions

function interviewQuesn(job){

    if(job === 'developer'){
        return function(name){
            console.log("In which programming language are good "+ name + " ?");
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log(name + " Which subject you teach");
        }
    } else if(job === 'dancer'){
        return function(name){
            console.log("which form of dance are you good at "+ name + " ?");
        }
    } else {
        return function(name){
            console.log("What do you do "+ name);
        }
    }
}
var b = interviewQuesn("developer");
b("bhairesh");

var john = interviewQuesn("teacher")("john");
console.log(john);

console.log(interviewQuesn("dancer")("meera"));


















