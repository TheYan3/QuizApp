let currentQuestion = 0
let questionRef = questions[currentQuestion]

function init() {
     showQuestionAndAnswers() 
}

function showQuestionAndAnswers() {
    document.getElementById("questionLine").innerHTML = questionRef.question;

    for (let i = 1; i <= 4; i++) {
        document.getElementById("answerLine" + i).innerHTML = questionRef["answer_" + i];
    }
}

