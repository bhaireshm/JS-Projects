// Immediately Invoking Function Expression
// IIFE


function game(){
    var score = (Math.random() * 10);
    return console.log(score >= 5);
}

game(); // calling function

(function(){
    var score = (Math.random() * 10);
    return console.log(score >= 5);
})();


// console.log(score);  // cannot access score outside the function

(function(goodLuck){
    var score = (Math.random() * 10);
    return console.log(score <= 5 - goodLuck);
})(5);



























