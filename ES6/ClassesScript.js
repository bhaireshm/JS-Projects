

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


class Hello {
    constructor() {
        console.log("you called constructor...")
    }

    constructor(a) {
        console.log("You called parametrised constructor agr=" + a);
    }
}

new Hello();
new Hello('Hiii');