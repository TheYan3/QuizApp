let currentQuestion = 0
let questionRef = questions[currentQuestion]
let timeoutId;

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
        timeoutId = setTimeout(() => nextQuestion(), 2500);
    }else {
         document.getElementById("answerLine" + i).classList.add("bg-danger")

    }

}

function nextQuestion() {

    if (currentQuestion != questions.length - 1) {
        clearTimeout(timeoutId);

        currentQuestion += 1
        questionRef = questions[currentQuestion]
        for (let cl = 1; cl <= 4; cl++) {
            document.getElementById("answerLine" + cl).classList.remove("bg-success", "bg-danger")
        }
        document.getElementById("btnLeft").disabled = false;
        showQuestionAndAnswers()   
    } else {

        document.getElementById("questionLine").innerHTML = "Glückwunsch! Du hast das Quiz beendet!";
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnLeft").disabled = true;
        for (let cl = 1; cl <= 4; cl++) {
            document.getElementById("answerLine" + cl).classList.add("d-none")
        }
        
    }
    
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

// meherer frage bibliootheken hizugügen
