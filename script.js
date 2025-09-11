let currentQuestion = 0
let questionRef = questions[currentQuestion]
let timeoutId;
let score = 0;

function init() {
     showQuestionAndAnswers() 
     btndisable()
}

function showQuestionAndAnswers() {
    if (currentQuestion >= 10) {
        document.getElementById("tabs").classList.remove("leftLine")
        document.getElementById("tabs2").classList.add("leftLine")
    }
    document.getElementById("questionLine").innerHTML = questionRef.question;
    document.getElementById("btnRight").disabled = true;

    for (let i = 1; i <= 4; i++) {
        document.getElementById("answerLine" + i).innerHTML = questionRef["answer_" + i];
    }
}

function answer(i) {
    if (i == questionRef.right_answer){
        score++;
        document.getElementById("answerLine" + i).classList.add("bg-success") 
        document.getElementById("btnRight").disabled = false;
        timeoutId = setTimeout(() => nextQuestion(), 2500);
    }else {
         document.getElementById("answerLine" + i).classList.add("bg-danger")
         score--;

    }
}

function nextQuestion() {

    if (currentQuestion != questions.length - 1) {
        clearTimeout(timeoutId);
        updateProgressbar();
        currentQuestion ++
        questionRef = questions[currentQuestion]
        for (let cl = 1; cl <= 4; cl++) {
            document.getElementById("answerLine" + cl).classList.remove("bg-success", "bg-danger")
        }
        document.getElementById("btnLeft").disabled = false;
        showQuestionAndAnswers()   
    } else {
        quizEnd()
    }  
}

function updateProgressbar() {
    const progressBar = document.getElementById("progressBar");
    let percentage = ((currentQuestion + 1) / questions.length) * 100;	
    progressBar.style.width = percentage + "%";
}

function quizEnd() {
    document.getElementById("progressBar").style.width = "100%";
    document.getElementById("questionLine").innerHTML = quizEndTemplate();
    document.getElementById("answerContainer").classList.add("d-none");
    document.getElementById("btnRight").disabled = true;
    document.getElementById("btnLeft").disabled = true;
    for (let cl = 1; cl <= 4; cl++) {
        document.getElementById("answerLine" + cl).classList.add("d-none")
    }
}

function lastQuestion() {
    if (currentQuestion >= 0) {
         currentQuestion -= 1;
         questionRef = questions[currentQuestion];

         showQuestionAndAnswers();
    }
}

function btndisable() {
    document.getElementById("btnLeft").disabled = true;
}

function restartQuiz() {
    location.reload();
}