
let Questions = new Map();
let ArrOfQuestns = [];

class QuestionClass {
    constructor(questn, ans, crrctAns) {
        this.questn = questn;
        this.ans = ans;
        this.crrctAns = crrctAns;
    }
}

let addQuestn = (questn, ans, crrctAns) => {
    let len = Questions.size;
    // if (len === 0) {
    //     len = -1;
    Questions.set(`Q${len}`, new QuestionClass(questn, ans, crrctAns));
    //ArrOfQuestns.push(q);
};

addQuestn('quesioon 1', [1, 2.3, 5], 5);
addQuestn('quesioon 2', [31, 2.3, 45], 31);

console.log(Questions);














