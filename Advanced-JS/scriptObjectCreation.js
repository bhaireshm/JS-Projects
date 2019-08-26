

var personProto = {
    calcAge : function(){
        console.log(2019 - this.YOB);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.YOB = 1990;
john.job = "designer";

var jane = Object.create(personProto,
    {
        name : { value : "Jane"},
        YOB : { value : 1998 },
        job : { value : "Dancer"}
    }
    );

    var naanu = Object.create(
        {
            name : { value : "Naanu"},
            YOB : { value : 1980}
        }
    );




console.log(naanu);
console.log(jane);
console.log(john);