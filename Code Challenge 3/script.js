var bills = [124, 48, 268]; 

function tipCalculator(bill){
    if(bill < 50){
        return 0.2 * bill;
    } else if (bill >= 50 && bill <= 200){
        return 0.15 * bill;
    } else{
        return 0.1 * bill;
    }
}

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

var finalAmt = [(tips[0]+bills[0]), 
                (tips[0]+bills[1]), 
                (tips[0]+bills[2]) ];

console.log("Bills: "+ bills);
console.log("Tips: "+ tips);
console.log("Final Amt( tips+bill ): "+ finalAmt);
