 for(var i=1; i<=5; i++){
     console.log(i);
 }   
 console.log("--------------------------------------");

 var john = ["John",'Smith',1997,'Job','Designer'];

 for (var i=0; i< john.length; i++){
     console.log(john[i]);
 }

 console.log("--------------------------------------");

// while loop
 var i=0;
 while(i < john.length){
     console.log(john[i]);
     i++;
 }
console.log("--------------------------------------");

// continue

var john = ["John",'Smith',1997,'Job','Designer'];

for (var i=0; i< john.length; i++){
     // it only displays the string type of values
     if(typeof john[i] !== 'string') continue;
     console.log(john[i]);
}
console.log("--------------------------------------");

// break
 for (var i=0; i< john.length; i++){
     // it only displays the string type of values
     if(typeof john[i] !== 'string') break;
     console.log(john[i]);
}
console.log("--------------------------------------");

// backward
for (var i = john.length - 1; i >= 0; i-- ){
    console.log(john[i]);
}






