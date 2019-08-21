

var a = 'hello';
console.log(a);

first();

function first(){
    var b = "hii";
    second();

    function second(){ // lexiacal method
        var c = 'hey';
        third();
    }
}

function third(){
    var d = "john";
    console.log(c);
}