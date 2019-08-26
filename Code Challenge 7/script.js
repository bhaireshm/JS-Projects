//  Quiz Game in console

(function () {
    var arrOfQuestns = [];
    var num, answer;

    var q1 = new Question('The trident-shaped symbol of Buddhism does not represent', ['Nirvana', 'Sangha', 'Buddha'], 1);
    var q2 = new Question('Which of the following is a non metal that remains liquid at room temperature?', ['Phosphorous', 'Bromine', 'Helium'], 2);
    var q3 = new Question('The central banking functions in India are performed by the', ['Central Bank of India', 'Reserve Bank of India', 'ICICI'], 2);
    var q4 = new Question('The percentage of irrigated land in India is about', ['35', '65', '45'], 1);
    var q5 = new Question('OS computer abbreviation usually means ?', ['Open Software', 'Operating System', 'Optical Sensor'], 2);


    arrOfQuestns = [q1, q2, q3, q4, q5];

    var scoreReturnFunc = checkScore();

    function nextQuestion() {
        num = randomQuestn(arrOfQuestns);
        questn = arrOfQuestns[num];

        displayQuestn(questn);

        answer = prompt("Enter the Answer : ");
        //arrOfQuestns[num].checkAnswer(answer);

        if (answer !== 'q') {
            checkAnswer(answer, questn, scoreReturnFunc);
            nextQuestion();
        } else {
            console.log("******************>> Aborted <<*******************");
        }
    }

    nextQuestion();

    function Question(questn, ans, crrctAns) {
        this.questn = questn;
        this.ans = ans;
        this.crrctAns = crrctAns;
    }

    function randomQuestn(arr) {
        let len = arr.length;
        let num = Math.floor(Math.random() * len);
        return num; //arr[num];
    }

    function displayQuestn(questnObj) {
        console.log("Q : " + questnObj.questn);
        for (let i = 0; i < questnObj.ans.length; i++) {
            console.log((i + 1) + " : " + questnObj.ans[i]);
        }
    }

    function checkAnswer(ans, questnObj, chkSc) {

        var returnScore;

        if (ans == questnObj.crrctAns) {
            console.log("Correct Answer");
            returnScore = chkSc(true);
        } else {
            console.log("Wrong Answer");
            returnScore = chkSc(false);
        }
        displayScore(returnScore);
    }

    function checkScore() {
        var score = 0;
        return function (crrctAns) {
            if (crrctAns) {
                score++;
            }
            return score;
        };
    }

    function displayScore(score) {
        console.log("Your current score is : " + score);
        console.log("********************************************************");
    }

    function addQuestnToArr(questn, options, crrctAns) {
        var Q = new Question(questn, options, crrctAns);
        arrOfQuestns.push(Q);
    }
})();

// if(answer === 'add'){
//     var q = prompt("Enter the Question : ");
//     var opt = [];
//     for(let i = 0; i < 3; i++){
//         opt[i] = (prompt("Enter the Options : "));
//     }
//     var crAns = prompt("Enter the Correct Answer : ");
//     addQuestnToArr(q, opt, crAns);
// }