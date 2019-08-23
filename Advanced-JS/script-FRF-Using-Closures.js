
// Function returning functions using closures

function interviewQstn(job){
    return function(name){
        if(job === 'developer'){
            console.log("In which programming language are good "+ name + " ?");             
        } else if(job === 'teacher'){
            console.log(name + " Which subject you teach");
        } else if(job === 'dancer'){
            console.log("which form of dance are you good at "+ name + " ?");
        } else{
            console.log("What do you do "+ name);
        }
    }
}

interviewQstn('developer')('john');













