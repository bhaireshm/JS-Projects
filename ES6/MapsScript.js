
let question = new Map();


question.set('Question', 'What is the latest version of JavaScript?');
question.set(1,'ECMAScript 2017 (ES2017)');
question.set(2,'ECMAScript 2018 (ES2018)');
question.set(3,'ECMAScript 2019 (ES2019)');
question.set(4,'ECMAScript 2016 (ES2016)');
question.set('correct', 3);
question.set(true, "Correct Answer.")
question.set(false, 'Wrong. Please try again!');

console.log(question.get('Question'));
//console.log(question.get(3));

//console.log(question.size);

if(question.has(4)){
    //question.delete(4);
}

//question.clear();

// question.forEach((cur, index) => {
//     console.log(`${index } : ${cur}`);
// });

// var question2 = [1,2,3,5,6,4,7,9];

// for(let key of question){
//     console.log(key);
// }


// for(const key of question){
//     let [k, value] = key;                      /// Destructuring..
//     console.log(k + " <==> " + value);
// }

// for(let [key, value] of question.entries()){
// //    let [k, value] = key;
//     console.log(key + " <=*|*=> " + value);  /// Destructuring..
// }

for(const [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Option ${key} : ${value}`)
    }
}

var ans = parseInt(prompt("Enter the option num as answer.."));

// if(ans === question.get('correct')){
//     console.log(question.get(true));
// } else {
//     console.log(question.get(false));
// }

console.log(question.get(ans === question.get('correct')));