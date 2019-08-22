
// Function returning functions

function interviewQuesn(job){

    if(job === 'developer'){
        return function(name){
            console.log("In which programming language are good "+ name + " ?");
        }
    }
}
var ab = interviewQuesn("developer");
ab("bhairesh");




















