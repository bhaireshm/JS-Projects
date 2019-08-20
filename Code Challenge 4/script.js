var john = {
    fullName : "John Smith",
    weight : 65, //in kgs
    height : 172, // inches
    calcBmi : function(){
        this.bmi = this.weight / (this.height * this.height);
    }   
}

var mike = {
    fullName : "Mike Collins",
    weight : 85, //in kgs
    height : 182, // inches
    calcBmi : function(){
        this.bmi = this.weight / (this.height * this.height);
    }
}

mike.calcBmi();
john.calcBmi();

if (mike.bmi > john.bmi){
    console.log(mike.fullName+ " has greater BMI "+ mike.bmi);
} else if (john.bmi > mike.bmi){
    console.log(john.fullName+ " has greater BMI "+ john.bmi);
} else {
    console.log(mike.fullName+"("+ mike.bmi+") and "+ john.fullName +"("+john.bmi+") has Same BMI.");
}

