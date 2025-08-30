let currentQuestion = 0
let questionRef = questions[currentQuestion]

function init() {
     showQuestionAndAnswers() 
     btndisable()
}

function showQuestionAndAnswers() {
    document.getElementById("questionLine").innerHTML = questionRef.question;
    document.getElementById("btnRight").disabled = true;

    for (let i = 1; i <= 4; i++) {
        document.getElementById("answerLine" + i).innerHTML = questionRef["answer_" + i];
    }
}

function answer(i) {
    if (i == questionRef.right_answer){
        document.getElementById("answerLine" + i).classList.add("bg-success")
        document.getElementById("btnRight").disabled = false;
        setTimeout(() => nextQuestion(i), 2500);
    }else {
         document.getElementById("answerLine" + i).classList.add("bg-danger")
    }

}

function nextQuestion(i) {
    currentQuestion += 1
    questionRef = questions[currentQuestion]
    document.getElementById("answerLine" + i).classList.remove("bg-success")
    document.getElementById("btnLeft").disabled = false;
    showQuestionAndAnswers()
    
}

function lastQuestion() {

    if (currentQuestion >= 0) {
         currentQuestion -= 1
         questionRef = questions[currentQuestion]

         showQuestionAndAnswers()
    }
 
}

function btndisable() {
    document.getElementById("btnLeft").disabled = true;
    
}