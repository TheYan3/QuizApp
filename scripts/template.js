function quizEndTemplate() {
    return `Glückwunsch! Du hast das Quiz beendet!<br>Dein Score: ${score} von ${questions.length}
    <br><button class="btn btn-primary mt-3" onclick="restartQuiz()">Nochmal spielen</button>`;
    
}