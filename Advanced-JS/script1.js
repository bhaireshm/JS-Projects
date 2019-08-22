

// Function Contructors

var john = {
    name:"John Smith",
    YOB: 1990,
    job:"developer"
};

var Person = function (name, YOB, job, profession){

    this.name = name;
    this.YOB = YOB;
    this.job = job,
    // this.calcAge = function(){
    //     this.age = (2019 - this.YOB);
    // }
    this.profession = profession 
}

var Profession = function(company, DOJ){
    this.company = company;
    this.DOJ = DOJ;
    //this.exprnce = exprnce;
}

Person.calcAge = function(){
    this.age = 2019 - this.YOB;
}


Person.prototype.lName = "smith";
var profession = new Profession("aritha",2018);

//console.log(john.profession.company)



var john = new Person("John", 1997, "designer",profession);
john.calcAge();

console.log(john.profession.company)

Profession.prototype.exprnceCalc = function(){
    this.exprnce = 2019 - this.DOJ;
}
// console.log(john);
// console.log(john.name);
// console.log(john.lName);
john.profession.exprnceCalc();
console.log(john.profession.exprnce);

var meera = new Person("Meera", 1999, "Dancer");
meera.calcAge();
// console.log(meera);
// console.log(meera.lName);

// console.log(Person.prototype.lName);




















