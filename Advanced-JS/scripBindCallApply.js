
// Binding , Call and Applying functions

    var john = {
        name : "John",
        job : "designer",
        age : 25,
        profession : function(style, timeOfDay){
            if(style === 'formal'){
                console.log("Good "+timeOfDay+" . Hello ladies and gentlemens. Am "+ this.name + " am a "+ this.job + " and am "+ this.age + " years old.");
            } else if(style === 'friendly'){
                console.log("Hey what's up. Am "+ this.name + " am a "+ this.job + " and am "+ this.age + " years old.");                
            }
        }
    } 

    john.profession('friendly', 'morning');

    var meera = {
        name : "Meera",
        job : "dancer",
        age : 23
    }

    john.profession.call(meera, "formal", "afternoon");



// First class funcctions using bind operation

    var years = [1990, 2001, 1937, 2005, 1997];

    function arrayCalc(arr, func){
        var newAr = [];

        for(var i = 0; i< arr.length; i++){
            newAr.push(func(arr[i]));
        }
        return newAr;
    }

    function calcAge(YOB){
        return 2019 - YOB;
    }
    function isFullAge(ele, limit){
        return ele >= limit;
    }

    var ages = arrayCalc(years,calcAge);
    console.log(ages);

    var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
    console.log(fullJapan);









