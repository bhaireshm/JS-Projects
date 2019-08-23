
//  Quiz Game in console

var arrOfQuestns = [];

var q1 = new Question('The trident-shaped symbol of Buddhism does not represent', ['Nirvana', 'Sangha','Buddha'], 'Nirvana');
var q2 = new Question('Which of the following is a non metal that remains liquid at room temperature?', ['Phosphorous', 'Bromine','Helium'], 'Bromine');
var q3 = new Question('The central banking functions in India are performed by the', ['Central Bank of India', 'Reserve Bank of India','ICICI'], 'Reserve Bank of India');
var q4 = new Question('The percentage of irrigated land in India is about', ['35', '65','45'], '35');
var q5 = new Question('OS computer abbreviation usually means ?', ['Open Software', 'Operating System','Optical Sensor'], 'Operating System');


arrOfQuestns = [q1,q2,q3,q4,q5];

var num = Math.floor(Math.random() * arrOfQuestns.length);

arrOfQuestns[num].displayQuestn();

//console.log(q1);//

function Question(questn, ans, crrctAns){
        this.questn = questn;
        this.ans = ans;
        this.crrctAns = crrctAns;
}

function randomQuestn(arr){
    var len = arr.length;
    var num = Math.floor(Math.random() * len);
    return num;//arr[num];
}

Question.prototype.displayQuestn = function() {
    console.log(this.questn);  
}

function addQuestnToArr(obj){
    arrOfQuestns.push(obj.questn); 
}