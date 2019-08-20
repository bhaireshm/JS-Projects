
var johnBillValues = {
    bills : [124, 48, 268, 180, 42],
    tip: new Array(),
    finalAmt: new Array(),
    calcTip: function () {
      
        for(var i=0; i < this.bills.length; i++){
            if(this.bills[i] < 50 )
            {
                this.tip[i] =  this.bills[i] * 0.2;
                
            } 
            else if(this.bills[i] >= 50 && this.bills[i] < 200)
            {
                this.tip[i] =  this.bills[i] * 0.15;
               
            } 
            else
            {
                this.tip[i] =  this.bills[i] * 0.1;
               
            } // end of if
            this.finalAmt[i] = this.bills[i] + this.tip[i];
        }// end of for
    },// end of calcTip
};


// Marks's family---------------------------------
var markBillValues = {
    bills : [77, 375, 110, 45],
    tip: [],
    finalAmt: [],
    calcTip: function () {
      
        for(var i=0; i < this.bills.length; i++){
            if(this.bills[i] < 100 )
            {
                this.tip[i] =  this.bills[i] * 0.2;
            } 
            else if(this.bills[i] >= 100 && this.bills[i] < 300)
            {
                this.tip[i] =  this.bills[i] * 0.1;
            } 
            else
            {
                this.tip[i] =  this.bills[i] * 0.25;
            } // end of if
            this.finalAmt[i] = this.bills[i] + this.tip[i];
            var sum =0;
            sum = this.tip[i] + sum;
            var avg = sum / this.bills.length;
        }// end of for
     } // end of finalAmtCalc
};

johnBillValues.calcTip();

markBillValues.calcTip();

function average (tip){
    let sum = 0;
    for (let i = 0; i < tip.length; i++) {
        sum = tip[i] + sum;
    }
    let avg = sum / tip.length;
    return avg;
};


for (let i = 0,j=1; i < johnBillValues.bills.length; i++, j++) {
    console.log("Restuarant ["+j+"] Bill : "+johnBillValues.bills[i]);
    console.log("Bill ["+j+"]'s "+ "tip value: "+johnBillValues.tip[i]);
    console.log("Bill + Tip : "+johnBillValues.finalAmt[i]);
    console.log("------------------------------------------------------------------------------");
}


for (let i = 0,j=1; i < markBillValues.bills.length; i++, j++) {
    console.log("Restuarant ["+j+"] Bill : "+markBillValues.bills[i]);
    console.log("Bill ["+j+"]'s "+ "tip value: "+markBillValues.tip[i]);
    console.log("Bill + Tip : "+markBillValues.finalAmt[i]);
    console.log("------------------------------------------------------------------------------");
}

console.log("Checking which family's avg tip is high....................");
if(average(markBillValues.tip) > average(johnBillValues.tip)){
    console.log("Mark's family's avg tip : "+ average(markBillValues.tip));
} else if(average(johnBillValues.tip) > average(markBillValues.tip)){
    console.log("John family's avg tip : "+ average(johnBillValues.tip));
} else{
    console.log("Both family's avg tip is same");
}
