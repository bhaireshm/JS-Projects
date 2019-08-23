
// Function Closures 

function retirement(retirmentAge){
    var str = " years until retirment.";
    return function(YOB){
        var age = 2019 - YOB;
        console.log(retirmentAge - age + str);
    } 
}

var retire = retirement(65);
retire(1997);

console.log(retire.prototype);

retirement(66)(1990); // 



































