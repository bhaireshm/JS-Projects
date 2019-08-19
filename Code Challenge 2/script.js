
var johnMatch1 = 89;
var johnMatch2 = 120;
var johnMatch3 = 103;
var johnMatchAvg = (johnMatch1 + johnMatch2 + johnMatch3) / 3;

var mikeMatch1 = 116;
var mikeMatch2 = 94;
var mikeMatch3 = 123;
var mikeMatchAvg = (mikeMatch1 + mikeMatch2 + mikeMatch3) / 3;

if (mikeMatchAvg > johnMatchAvg){
    console.log("Mike's team won the match. Avg : "+mikeMatchAvg);
} else if(mikeMatchAvg == johnMatchAvg){
    console.log("Match is draw... Avg : "+mikeMatchAvg, johnMatchAvg);
} else {
    console.log("John's team won the match  Avg : "+johnMatchAvg);
}
