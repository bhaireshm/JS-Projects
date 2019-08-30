

function addAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addAges(12, 23, 34, 45);
console.log(sum1);


var ages = [12, 23, 34, 45];


const sum2 = addAges.apply(null, ages);
console.log(sum2);



const sum3 = addAges(...ages);
console.log(sum3);



var family1 = ['JOhn', 'Miller', 'Jane'];
var family2 = ['Bob', 'Marry', 'George'];

const bigFamily = [...family1, 'Philip', ...family2];
console.log(bigFamily);


var h = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');
var all = [h, ...boxes];


all.forEach(cur => { 
  cur.textContent = 'text Changed';
  cur.style.backgroundColor = 'purple';
 })




















