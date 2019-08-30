
// function SmithPerson(fnmae, YOB, lname, nationality){

//     lname === undefined ? lname = 'Smith' : lname = lname;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;

//     this.fnmae = fnmae;
//     this.YOB = YOB;
//     this.lname = lname;
//     this.nationality = nationality;

// }

// var john = new SmithPerson('John', 1990 );
// var meera = new SmithPerson('Meera', 1997, 'Shampoo', "Indian");


function SmithPerson(fnmae, YOB, lname = 'Smith', nationality = 'AMerican'){
    this.fnmae = fnmae;
    this.YOB = YOB;
    this.lname = lname;
    this.nationality = nationality;

}

var bhairesh = new SmithPerson("Bhairesh", 1997, 'M', 'Indian');













