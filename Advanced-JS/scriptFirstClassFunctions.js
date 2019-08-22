
// Passing functions as arguments

var years = [1990, 2001, 1937, 2005, 1997];

function calcArray(arr, fn){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push( fn( arr[i] ) );       
    }
    return newArr;
}

function calcAge(ele){
    return 2019 - ele;
}

var ar = calcArray(years, calcAge);

console.log(ar);

function isFullAge(ele){
    return ele >= 18;
}

var fullAge = calcArray(ar, isFullAge);

console.log(fullAge);


function maxHeartRate(ele){
    if(ele >= 18 && ele <= 81){
        return Math.round(206.9 - (0.67 * ele));
    } else {
        return -1;
    }
}

var heartRate = calcArray(ar, maxHeartRate);
console.log(heartRate);


/*  // Call back function---
function a(arg){
    alert("Running in a() : "+arg);
}

function b(arg, func){
    func(arg);
}

b("b's arg",a);
*/