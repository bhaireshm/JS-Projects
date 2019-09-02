

class Person {
    constructor(fname, YOB, job) {
        this.fname = fname;
        this.YOB = YOB;
        this.job = job;
    }
    calcAge() {
        return (this.age = new Date().getFullYear() - this.YOB);
    };
}

// var john = new Person('John', 1990, 'teacher');
// console.log(john);
// console.log(john.calcAge());


// class Person2 {
//     constructor(fname, YOB, job) {
//         this.fname = fname;
//         this.YOB = YOB;
//         this.job = job;
//         this.age = calcAge();
//         {
//             return this.age = new Date().getFullYear - this.YOB;
//         }
//     }
// }


// class Hello {
//     constructor() {
//         console.log("you called constructor...")
//     }

//     // constructor(a) {
//     //     console.log("You called parametrised constructor agr=" + a);
//     // }
// }

// new Hello();
// new Hello('Hiii');

// Subclasses Inheriting Super Class

// var athlete = function (fname, YOB, job, olympicGames, medals) {

//     Person.call(this, fname, YOB, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;

// }

// // inheriting in ES5

// athlete.prototype = Object.create(Person.prototype);//

// athlete.prototype.wonMedal = function(){
//     this.medals++ ;
//     console.log(this.medals);
// }

// athlete.wonMedal();

class Athlete extends Person{ 
    constructor(fname, YOB, job, olympicGames, medals){
        super(fname, YOB, job); // calling super class and assigning values to it
        this.olympicGames = olympicGames;
        this.medals = medals;

    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

var john = new Athlete('John',1990, "swimmer", 5, 10);

// console.log(john);
// john.wonMedal();
 john.calcAge();
// console.log(john);














