

var johnMatchAvg = (89 + 120 + 103  +24) / 3;

var mikeMatchAvg = (116 + 94 + 123  +3) / 3;

var maryMatchAvg = (97 + 134 + 105) / 3;

console.log("Mike: "+mikeMatchAvg+", John: "+johnMatchAvg+ ", Mary: "+maryMatchAvg);

if (mikeMatchAvg > johnMatchAvg && mikeMatchAvg > maryMatchAvg)
{
    console.log("Mike's team won the match. Avg points: "+mikeMatchAvg);
} 
else if(johnMatchAvg > mikeMatchAvg &&  johnMatchAvg > maryMatchAvg)
{
    console.log("John's team won the match  Avg points: "+johnMatchAvg);
} 
else if (maryMatchAvg > mikeMatchAvg && maryMatchAvg > johnMatchAvg)
{
    console.log("Mary's team won the match  Avg points: "+maryMatchAvg);
}
else {
    console.log("Match is draw...");
}
